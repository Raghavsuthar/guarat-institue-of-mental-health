# Security Audit Workflow

This is a risk-based repository review, not a full penetration test. Do not expose secrets or reproduce sensitive values in reports.

1. Inventory public/admin routes, API handlers, authentication, authorization, environment variables, storage, analytics, and third-party services.
2. Verify privileged endpoints enforce server-side authorization; hiding an admin UI is not access control.
3. Inspect credentials: no defaults, committed secrets, client-exposed admin credentials, query-string tokens, or unsafe logs.
4. Review validation, output encoding, CORS, CSRF where applicable, SSRF, path traversal, injection, abuse/rate limits, and oversized requests.
5. Check errors do not disclose internals and API routes return suitable JSON/status codes.
6. Inspect dependency and CI security checks where configured; do not claim scans ran if they did not.
7. Check privacy: no real patient data in fixtures, telemetry, prompts, or logs; analytics should be aggregate and minimal.
8. Prioritize findings Critical / High / Medium / Low / Informational with evidence and remediation.
9. Validate fixes with tests or reproducible checks; avoid destructive production testing.
10. Deliver scope, findings, residual risks, and limitations. Do not publish vulnerabilities publicly without authorization.
