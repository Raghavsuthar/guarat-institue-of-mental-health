# Security Policy

## Supported deployment

The default branch is the supported development line. Deployments may differ depending on hosting configuration and server-side environment variables; a passing build does not by itself establish that production APIs or storage are secure.

## Reporting a vulnerability

Please do **not** disclose suspected vulnerabilities in a public issue, discussion, or social post.

- If GitHub private vulnerability reporting / Security Advisories is enabled for this repository, use that private reporting channel.
- Otherwise, contact the repository owner through the contact method on their GitHub profile and ask for a private security-reporting route. Do not include patient details, passwords, API keys, tokens, or other sensitive data in the first message.
- Include the affected URL/file, impact, minimal reproduction steps, and any safe proof of concept. Redact personal data and credentials.

There is no published response-time or remediation-time SLA at this time. Please allow the maintainer time to acknowledge, investigate, and coordinate disclosure.

## Scope and handling

Report issues involving authentication/authorization, secret exposure, unsafe API behavior, injection, cross-site scripting, privacy/data leakage, service-worker caching of sensitive data, or dependency vulnerabilities.

Do not test against real users or submit real mental-health disclosures. Do not attempt destructive actions, denial-of-service testing, or access to other people's data. Use a local environment or an authorized preview and stop once the issue is demonstrated.

## Deployment-owner checklist

- Keep `GEMINI_API_KEY`, `ADMIN_PASSWORD`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, and `RATE_LIMIT_SALT` server-side; never expose them through `VITE_*` variables or commit them.
- Use unique secrets and rotate any credential that may have appeared in source control, logs, screenshots, or a public report.
- Verify the admin endpoint rejects unauthenticated requests and confirm rate limiting works across serverless instances.
- Verify production API responses, durable storage writes/reads, logging behavior, and the configured AI provider before claiming deployment acceptance.
- Review dependency advisories and update the lockfile through a tested pull request.
- Avoid entering identifiable or sensitive health information into the educational Q&A assistant.

Security findings and verification status are tracked in `docs/AUDIT.md` and `docs/DECISIONS.md`.
