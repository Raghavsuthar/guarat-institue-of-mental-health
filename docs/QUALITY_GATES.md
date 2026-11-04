# Quality gates and browser evidence

## Automated checks

The repository's standard CI uses locked `npm ci`, validates trilingual content, type-checks TypeScript, runs Node-based API/core tests, and builds both the Vite frontend and the Express production entry point. It then starts the built Express server, builds the Docker image, and starts the container to verify the health endpoint and SPA deep-route fallback. The separate Browser and Accessibility Smoke Tests workflow builds the frontend, serves it with Vite Preview, and runs Chromium against that built output.

Browser coverage currently includes (7 passing tests in the 2026-11-04 PR run):
- English, Hindi, and Gujarati privacy routes and visible localized headings.
- Terms route, internal legal-page links, and the explicit draft notice.
- Common viewport widths (360, 390, 768, 1280, and 1536 px) for horizontal overflow on the privacy page.
- axe-core WCAG 2.0/2.1 A/AA scanning of the English privacy route; serious and critical violations fail the job.
- A regression check that selecting GAD-7 opens the matching screener rather than the default tool.

Artifacts include the Playwright HTML report, traces/screenshots on failure, and test results where generated. Browser tests use the local production build, not the Vercel deployment.

## Important boundaries

- Passing a local-preview browser test does not prove that Vercel deployed the same commit or that production API endpoints/storage are working.
- This initial axe gate is intentionally narrow and is not a claim of WCAG 2.2 AA conformance or an accessibility score.
- Serious axe findings remain follow-up work and should be triaged rather than ignored.
- Offline service-worker behavior, screen-reader testing, full keyboard flows, light/dark system modes, all route families, and Lighthouse/Core Web Vitals are not yet covered by this workflow.
- The workflow installs Playwright and axe as temporary CI dependencies so the application's dependency manifest and lockfile are not changed by this test-only addition. Pin and add these tools to the project lockfile if the team adopts them as permanent development dependencies.


## Production server checks

- `npm run build` creates `dist/server.cjs` after validation, sitemap generation, and the Vite build.
- `npm run test:server` starts that artifact with `NODE_ENV=production` and verifies JSON at `/api/health` plus the SPA shell at `/en/privacy`.
- CI builds the Docker image and starts the container, then repeats the health and SPA-route checks against the production image.
- These checks validate the self-hosted Express/Docker path only. They do not prove Vercel Functions, production secrets, Redis connectivity, or a live deployment are configured correctly.
