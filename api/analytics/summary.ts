import {
  apiErrorMessage,
  apiErrorStatus,
  enforceRateLimit,
  getAnalyticsSummary,
  hasValidAdminToken,
  type ApiRequestLike,
  type ApiResponseLike,
} from '../../server/shared/analytics';

export default async function handler(req: ApiRequestLike, res: ApiResponseLike) {
  res.setHeader('Cache-Control', 'no-store, private');
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  const secret = process.env.ADMIN_PASSWORD;
  if (!secret || secret.length < 32) {
    res.status(503).json({ error: 'Admin analytics is not configured. Set a unique server-side ADMIN_PASSWORD of at least 32 characters.' });
    return;
  }

  try {
    if (!(await enforceRateLimit(req, 'admin-summary', 10, 900))) {
      res.setHeader('Retry-After', '900');
      res.status(429).json({ error: 'Too many admin attempts. Try again later.' });
      return;
    }
    if (!hasValidAdminToken(req, secret)) {
      res.status(401).json({ error: 'Unauthorized.' });
      return;
    }
    const summary = await getAnalyticsSummary();
    res.status(200).json(summary);
  } catch (error) {
    const status = apiErrorStatus(error);
    res.status(status >= 500 ? 503 : status).json({ error: apiErrorMessage(error) });
  }
}
