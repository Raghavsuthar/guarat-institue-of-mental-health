import { createHash, timingSafeEqual } from 'node:crypto';

export type ApiRequestLike = {
  method?: string;
  body?: unknown;
  headers?: Record<string, string | string[] | undefined>;
  ip?: string;
  socket?: { remoteAddress?: string };
};

export type ApiResponseLike = {
  status(code: number): ApiResponseLike;
  json(body: unknown): void;
  setHeader(name: string, value: string): void;
  end?(): void;
};

export class ApiError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
  }
}

export type NormalizedAnalyticsPayload = {
  lang: 'en' | 'hi' | 'gu';
  path: string;
  referrerDomain: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  eventType:
    | 'page_view'
    | 'screener_completed'
    | 'myth_card_shared'
    | 'card_shared'
    | 'qr_landed'
    | 'pwa_installed'
    | 'read_aloud';
};

const LANGUAGES = ['en', 'hi', 'gu'] as const;
const DEVICES = ['mobile', 'desktop', 'tablet'] as const;
const EVENTS = [
  'page_view',
  'screener_completed',
  'myth_card_shared',
  'card_shared',
  'qr_landed',
  'pwa_installed',
  'read_aloud',
] as const;

export { isCrisisQuery } from '../../src/utils/crisisDetection';
export function normalizePingPayload(input: unknown): NormalizedAnalyticsPayload | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const payload = input as Record<string, unknown>;

  const lang = payload.lang === undefined ? 'en' : payload.lang;
  const deviceType = payload.deviceType === undefined ? 'mobile' : payload.deviceType;
  const eventType = payload.eventType === undefined ? 'page_view' : payload.eventType;

  if (!LANGUAGES.includes(lang as (typeof LANGUAGES)[number])) return null;
  if (!DEVICES.includes(deviceType as (typeof DEVICES)[number])) return null;
  if (!EVENTS.includes(eventType as (typeof EVENTS)[number])) return null;

  if (payload.path !== undefined && typeof payload.path !== 'string') return null;
  if (payload.referrerDomain !== undefined && typeof payload.referrerDomain !== 'string') return null;

  const rawPath = typeof payload.path === 'string' ? payload.path : 'home';
  const cleanedPath = rawPath
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .split(/[?#]/, 1)[0]
    .replace(/^\/+|\/+$/g, '');
  if (cleanedPath.length > 200) return null;

  const rawReferrer = typeof payload.referrerDomain === 'string' ? payload.referrerDomain : 'Direct / QR Poster';
  const containsControlChars = /[\u0000-\u001f\u007f]/.test(rawReferrer);
  const cleanedReferrer = rawReferrer.replace(/[\u0000-\u001f\u007f]/g, '').trim();
  let referrerDomain = 'Other';
  if (!containsControlChars && ['Direct / QR Poster', 'QR Poster Scan', 'Internal Navigation', 'Other'].includes(cleanedReferrer)) {
    referrerDomain = cleanedReferrer;
  } else if (!containsControlChars) {
    const hostname = cleanedReferrer.toLowerCase().replace(/^www\./, '');
    referrerDomain = /^[a-z0-9.-]{1,100}$/.test(hostname) && hostname.includes('.') && !hostname.startsWith('.') && !hostname.endsWith('.')
      ? hostname
      : 'Other';
  }

  return {
    lang: lang as NormalizedAnalyticsPayload['lang'],
    path: cleanedPath || 'home',
    referrerDomain,
    deviceType: deviceType as NormalizedAnalyticsPayload['deviceType'],
    eventType: eventType as NormalizedAnalyticsPayload['eventType'],
  };
}

function redisConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/+$/, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    throw new ApiError(503, 'Analytics service is not configured. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN on the server.');
  }
  return { url, token };
}

async function redisPipeline(commands: string[][]): Promise<Array<{ result?: unknown; error?: string }>> {
  const { url, token } = redisConfig();
  let response: Response;
  try {
    response = await fetch(`${url}/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commands),
    });
  } catch {
    throw new ApiError(503, 'Analytics storage is temporarily unavailable.');
  }

  if (!response.ok) throw new ApiError(503, 'Analytics storage is temporarily unavailable.');
  const payload = await response.json() as Array<{ result?: unknown; error?: string }>;
  if (!Array.isArray(payload) || payload.some((entry) => entry?.error)) {
    throw new ApiError(503, 'Analytics storage is temporarily unavailable.');
  }
  return payload;
}

function numberValue(value: unknown): number {
  const number = Number(value ?? 0);
  return Number.isFinite(number) ? number : 0;
}

function hashToRecord(value: unknown): Record<string, number> {
  const result: Record<string, number> = {};
  if (Array.isArray(value)) {
    for (let index = 0; index + 1 < value.length; index += 2) {
      result[String(value[index])] = numberValue(value[index + 1]);
    }
  } else if (value && typeof value === 'object') {
    for (const [key, count] of Object.entries(value)) result[key] = numberValue(count);
  }
  return result;
}

export async function recordAnalyticsPing(input: unknown): Promise<void> {
  const payload = normalizePingPayload(input);
  if (!payload) throw new ApiError(400, 'Invalid analytics payload.');

  const today = new Date().toISOString().slice(0, 10);
  const dailyKey = `mindcare:analytics:day:${today}`;
  const now = new Date().toISOString();
  const commands: string[][] = [];

  if (payload.eventType === 'page_view') {
    commands.push(
      ['INCR', 'mindcare:analytics:totalViews'],
      ['HINCRBY', 'mindcare:analytics:byLang', payload.lang, '1'],
      ['HINCRBY', 'mindcare:analytics:byPath', payload.path, '1'],
      ['HINCRBY', 'mindcare:analytics:referrers', payload.referrerDomain, '1'],
      ['HINCRBY', 'mindcare:analytics:devices', payload.deviceType, '1'],
      ['HINCRBY', dailyKey, 'views', '1'],
    );
  } else {
    const eventKey = {
      screener_completed: 'screenerCompleted',
      myth_card_shared: 'mythCardShared',
      card_shared: 'cardShared',
      qr_landed: 'qrLanded',
      pwa_installed: 'pwaInstalled',
      read_aloud: 'readAloud',
    }[payload.eventType];
    commands.push(
      ['HINCRBY', 'mindcare:analytics:events', eventKey, '1'],
      ['HINCRBY', dailyKey, 'events', '1'],
    );
  }

  commands.push(
    ['EXPIRE', dailyKey, '7776000'],
    ['SET', 'mindcare:analytics:lastUpdated', now],
  );
  await redisPipeline(commands);
}

export async function getAnalyticsSummary() {
  const dates = Array.from({ length: 90 }, (_, index) => {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - (89 - index));
    return date.toISOString().slice(0, 10);
  });

  const commands = [
    ['GET', 'mindcare:analytics:totalViews'],
    ['HGETALL', 'mindcare:analytics:byLang'],
    ['HGETALL', 'mindcare:analytics:byPath'],
    ['HGETALL', 'mindcare:analytics:referrers'],
    ['HGETALL', 'mindcare:analytics:devices'],
    ['HGETALL', 'mindcare:analytics:events'],
    ['GET', 'mindcare:analytics:lastUpdated'],
    ...dates.map((date) => ['HGETALL', `mindcare:analytics:day:${date}`]),
  ];
  const results = await redisPipeline(commands);
  const byLangCounts = hashToRecord(results[1]?.result);
  const byPathCounts = hashToRecord(results[2]?.result);
  const referrerCounts = hashToRecord(results[3]?.result);
  const deviceCounts = hashToRecord(results[4]?.result);
  const eventCounts = hashToRecord(results[5]?.result);

  const allDailyTrend = dates.map((date, index) => {
    const values = hashToRecord(results[index + 7]?.result);
    return { date, views: values.views || 0, events: values.events || 0 };
  });
  const topPages = Object.entries(byPathCounts)
    .map(([path, count]) => ({ path, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  const topReferrers = Object.entries(referrerCounts)
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    totalViews: numberValue(results[0]?.result),
    byLang: {
      en: byLangCounts.en || 0,
      hi: byLangCounts.hi || 0,
      gu: byLangCounts.gu || 0,
    },
    topPages,
    topReferrers,
    deviceBreakdown: {
      mobile: deviceCounts.mobile || 0,
      desktop: deviceCounts.desktop || 0,
      tablet: deviceCounts.tablet || 0,
    },
    events: {
      screenerCompleted: eventCounts.screenerCompleted || 0,
      mythCardShared: eventCounts.mythCardShared || 0,
      cardShared: eventCounts.cardShared || 0,
      qrLanded: eventCounts.qrLanded || 0,
      pwaInstalled: eventCounts.pwaInstalled || 0,
      readAloud: eventCounts.readAloud || 0,
    },
    dailyTrend: allDailyTrend.slice(-30),
    allDailyTrend,
    lastUpdated: typeof results[6]?.result === 'string' ? results[6].result : '',
  };
}

export async function enforceRateLimit(
  req: ApiRequestLike,
  prefix: string,
  limit: number,
  windowSeconds: number,
  clientAddress?: string,
): Promise<boolean> {
  const forwarded = req.headers?.['x-forwarded-for'];
  const forwardedValue = Array.isArray(forwarded) ? forwarded[0] : forwarded;
  const address = clientAddress || String(forwardedValue || req.headers?.['x-real-ip'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();
  const salt = process.env.RATE_LIMIT_SALT || process.env.ADMIN_PASSWORD || process.env.UPSTASH_REDIS_REST_TOKEN || 'mindcare';
  const digest = createHash('sha256').update(`${salt}:${address}`).digest('hex');
  const key = `mindcare:rate:${prefix}:${digest}`;
  const results = await redisPipeline([
    ['INCR', key],
    ['EXPIRE', key, String(windowSeconds)],
  ]);
  return numberValue(results[0]?.result) <= limit;
}

export function hasValidAdminToken(req: ApiRequestLike, expected = process.env.ADMIN_PASSWORD): boolean {
  if (!expected || expected.length < 32) return false;
  const authHeader = req.headers?.authorization;
  const header = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  if (!header || !/^Bearer\s+\S+$/i.test(header)) return false;
  const supplied = header.replace(/^Bearer\s+/i, '');
  const suppliedBuffer = Buffer.from(supplied, 'utf8');
  const expectedBuffer = Buffer.from(expected, 'utf8');
  return suppliedBuffer.length === expectedBuffer.length && timingSafeEqual(suppliedBuffer, expectedBuffer);
}

export function apiErrorStatus(error: unknown): number {
  return error instanceof ApiError ? error.statusCode : 500;
}

export function apiErrorMessage(error: unknown): string {
  if (error instanceof ApiError) return error.message;
  return 'Request could not be completed.';
}
