# Quality gates and browser evidence

## Automated checks

The repository's standard CI validates content, type-checks TypeScript, runs Node-based API/core tests, and builds the production application. The separate Browser and Accessibility Smoke Tests workflow builds the production output, serves it with Vite Preview, and runs Chromium against that built output.

Browser coverage currently includes:
- English, Hindi, and Gujarati privacy routes and visible localized headings.
- Terms route, internal legal-page links, and the explicit draft notice.
- Common viewport widths (360, 390, 768, 1280, and 1536 px) for horizontal overflow on the privacy page.
- axe-core WCAG 2.0/2.1 A/AA scanning of the English privacy route; serious and critical violations fail the job.

Artifacts include the Playwright HTML report, traces/screenshots on failure, and test results where generated. Browser tests use the local production build, not the Vercel deployment.

## Important boundaries

- Passing a local-preview browser test does not prove that Vercel deployed the same commit or that production API endpoints/storage are working.
- This initial axe gate is intentionally narrow and is not a claim of WCAG 2.2 AA conformance or an accessibility score.
- Serious axe findings remain follow-up work and should be triaged rather than ignored.
- Offline service-worker behavior, screen-reader testing, full keyboard flows, light/dark system modes, all route families, and Lighthouse/Core Web Vitals are not yet covered by this workflow.
- The workflow installs Playwright and axe as temporary CI dependencies so the application's dependency manifest and lockfile are not changed by this test-only addition. Pin and add these tools to the project lockfile if the team adopts them as permanent development dependencies.
