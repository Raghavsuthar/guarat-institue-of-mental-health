# Production Server Build Reliability

## Intent
The repository documents and configures a self-hosted production server and Docker image that start with `node dist/server.cjs`. The current npm build script only runs Vite, so it does not produce that entry point. Make the documented production runtime reproducible and verify it in CI.

## Goals
- Generate `dist/server.cjs` from the existing `server.ts` using the already-installed esbuild dependency.
- Keep Express and other npm packages external in the bundle so the production install can supply them.
- Make `npm run build` perform the repository's documented validation, sitemap generation, frontend build, and server bundle steps.
- Add a dependency-free smoke check that starts the production server and verifies JSON health plus the SPA fallback.
- Make CI use the lockfile strictly, build the Docker image, and run the container for a production-route smoke check.

## Non-goals
- No changes to Vercel Functions or their deployment behavior.
- No new dependencies, clinical content changes, analytics redesign, or UI redesign.
- No production deployment or merge to `main` in this phase.

## Approaches
1. **Bundle Express with existing esbuild (chosen):** add one esbuild command to the existing build pipeline. This matches `server.ts`, `start`, and Docker's current contract with the smallest change.
2. Replace the Express production server with `vite preview`: rejected because it would not provide the existing Express API routes.
3. Rewrite the Docker runtime around another server: rejected because it adds complexity without addressing the repository's existing start contract.

## Constraints and acceptance
- Preserve Node.js 22 and npm lockfile reproducibility.
- Keep `server.cjs` in CommonJS format and externalize npm packages.
- A smoke test must start the built server, assert `GET /api/health` returns JSON with `status: ok`, and assert a language-prefixed route returns the SPA HTML.
- CI must run validation, type-checking, unit tests, production build, server smoke test, Docker build, and Docker-container health/SPA checks.
- The smoke test must clean up its child process on success and failure.
