# Release and Deployment Readiness Workflow

1. Confirm target branch, scope, intended environment, and deployment owner.
2. Review all commits and the final diff against the target branch.
3. Confirm CI status and run applicable content validation, tests, TypeScript check, and production build.
4. Review dependency changes, environment-variable needs, migrations, cache/service-worker impact, and rollback strategy.
5. Check clinical review, locale parity, crisis links, accessibility, and privacy/security findings.
6. Verify deployment configuration without printing secret values.
7. Prefer a preview deployment and smoke tests before production.
8. Use a preview URL only when it is returned by actual tool output.
9. Do not merge or deploy production without explicit authorization.
10. If deployment is authorized, verify deployment status and key routes when possible; distinguish platform status from browser smoke testing.
11. Record release notes, known issues, rollback steps, and follow-up work.
