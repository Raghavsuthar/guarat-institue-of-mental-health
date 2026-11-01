# ECC-Inspired AI Development Workflows for Mindcare

This folder adapts selected engineering practices common in agentic coding workflows to ChatGPT and other repository-aware coding assistants. It is documentation, not a runtime installer: it does not install Claude Code, configure ChatGPT account settings, create integrations, or run hooks by itself.

## Start here
1. Copy `CHATGPT_PROJECT_INSTRUCTIONS.md` into the instructions field of a ChatGPT Project dedicated to Mindcare.
2. Keep the workflow Markdown files as project reference material.
3. For each task, ask the assistant to inspect the current repository and name the workflow it will follow.
4. Prefer a small feature branch and pull request. Do not commit directly to `main`.
5. Require actual command output or CI evidence before treating validation as passed.

## Workflows
- `workflows/feature-development.md` — feature planning and implementation
- `workflows/bug-fix.md` — reproduce, isolate, fix, and regressions
- `workflows/code-review.md` — correctness and maintainability review
- `workflows/security-audit.md` — security and privacy risks
- `workflows/frontend-ui.md` — accessible, responsive UI improvements
- `workflows/release-deployment.md` — release readiness and deployment verification
- `workflows/session-handoff.md` — durable handoff notes between sessions
- `ECC_COMPONENT_MAPPING.md` — what transfers to ChatGPT and what needs external tooling

## Mindcare guardrails
- Mindcare is a public mental-health education resource in English, Hindi, and Gujarati; it is not a diagnostic service or replacement for individualized care.
- Do not invent clinical claims, statistics, citations, DOI/PMID identifiers, hotline details, or licensing permissions. Verify sources and mark unresolved claims `[UNVERIFIED]`.
- Preserve locale-prefixed routes (`/en`, `/hi`, `/gu`), deep links, crisis-access pathways, screening disclaimers, and PWA/offline behavior.
- Treat user-facing clinical content as requiring qualified human review, especially crisis, medication, child/adolescent, pregnancy, and substance-use content.
- Never use real patient-identifiable information in prompts, tests, logs, fixtures, or analytics.
- Keep secrets server-side; never place API keys or admin credentials in client bundles or committed files.
- Do not claim tests, builds, accessibility checks, security scans, deployment, or preview URLs succeeded unless actually observed.
- Do not force-push, merge a PR, or deploy production without explicit authorization.

## Reusable task prompt
> Use the Mindcare workflow docs in `docs/ai-workflows/`. Inspect the current branch, repository instructions, and relevant code before changing anything. State the goal, risks, and a small plan. Make changes on a dedicated branch, run relevant validation, review the diff, and report exact results plus remaining risks. Do not commit directly to `main`, merge, or deploy production without explicit permission.
