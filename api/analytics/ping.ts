import {
  ApiError,
  apiErrorMessage,
  apiErrorStatus,
  enforceRateLimit,
  normalizePingPayload,
  recordAnalyticsPing,
  type ApiRequestLike,
  type ApiResponseLike,
} from '../../server/shared/analytics';

export default async function handler(req: ApiRequestLike, res: ApiResponseLike) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const payload = normalizePingPayload(req.body);
  if (!payload) {
    res.status(400).json({ error: 'Invalid analytics payload.' });
    return;
  }

  try {
    if (!(await enforceRateLimit(req, 'analytics-ping', 60, 60))) {
      res.setHeader('Retry-After', '60');
      res.status(429).json({ error: 'Too many requests. Please try again later.' });
      return;
    }
    await recordAnalyticsPing(payload);
    res.status(202).json({ ok: true });
  } catch (error) {
    const status = apiErrorStatus(error);
    if (status >= 500 && !(error instanceof ApiError)) {
      res.status(503).json({ error: 'Analytics service is temporarily unavailable.' });
      return;
    }
    res.status(status).json({ error: apiErrorMessage(error) });
  }
}
