# Feature Development Workflow

1. Read `AGENTS.md`, relevant source, types, tests, and established UI/API patterns.
2. Define the user problem, expected behavior, acceptance criteria, and non-goals.
3. Identify privacy, clinical-safety, accessibility, localization, PWA, and API risks.
4. Locate existing utilities before adding dependencies or parallel implementations.
5. Add/update focused tests first when practical.
6. Implement the smallest coherent change on a dedicated branch.
7. Run relevant content validation, tests, TypeScript check, and production build using repository scripts.
8. Inspect the full diff; remove debug code, unrelated edits, secrets, and unsupported claims.
9. Prepare a PR summary with behavior, tests, risks, and required clinical review.
10. Report commands actually run and results. Do not merge or deploy production without explicit authorization.

**Done means:** acceptance criteria are met, relevant checks have evidence, and remaining risks/reviews are disclosed.
