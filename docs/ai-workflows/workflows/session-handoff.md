# Session Handoff Workflow

At the end of a long or interrupted task, record:

- **Goal:** requested outcome and acceptance criteria.
- **Repository state:** branch, base branch, relevant commit SHA, and PR URL if one exists.
- **Inspected files:** paths reviewed and important findings.
- **Changes:** files changed and behavior implemented; separate completed work from planned work.
- **Validation:** exact commands run, results, and checks not run.
- **Decisions:** rationale and constraints.
- **Risks:** security/privacy issues, clinical review needs, unverified content, and regressions to watch.
- **Next steps:** ordered, concrete actions.
- **User decisions needed:** genuine blockers only.

Never include secrets, tokens, patient-identifiable data, or unsupported claims. Do not state changes were committed, pushed, merged, or deployed unless verified.
