import type { ApiRequestLike, ApiResponseLike } from '../server/shared/analytics';

export default function handler(req: ApiRequestLike, res: ApiResponseLike) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method && req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }
  res.status(200).json({
    status: 'ok',
    service: 'Mindcare public psychiatry education portal',
    runtime: 'vercel-function',
    timestamp: new Date().toISOString(),
  });
}
