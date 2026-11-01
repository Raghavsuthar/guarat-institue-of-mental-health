# Code Review Workflow

Review the proposed diff, not just its summary. Prioritize findings by severity and cite file/line locations where possible.

1. **Correctness:** logic, edge cases, race conditions, error handling, backward compatibility.
2. **Security/privacy:** authn/authz, input validation, secret exposure, unsafe rendering, rate limits, logs and personal data.
3. **Clinical content:** unsupported claims, fabricated sources, misleading diagnostic/treatment language, crisis-pathway regressions.
4. **Localization/accessibility:** locale routes, keyboard use, accessible labels, contrast, reduced motion, long Hindi/Gujarati text.
5. **Reliability:** cache/PWA behavior, API status and JSON contracts, links, metadata, sitemap, build/test impact.
6. **Maintainability:** duplication, types, abstractions, dependencies, unnecessary complexity.

## Output
- Findings first, highest severity first.
- For each finding: severity, file/line, impact, and concrete remedy.
- State what was checked and what could not be checked.
- No findings identified is not proof that defects are absent.
