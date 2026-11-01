# Bug-Fix Workflow

1. Capture observed and expected behavior, environment, route, and reproduction steps.
2. Reproduce the issue or clearly label reproduction as unavailable.
3. Inspect relevant code, tests, logs, and recent changes; do not guess from symptoms alone.
4. Add a regression test that fails before the fix when practical.
5. Fix the root cause with the smallest safe change.
6. Check adjacent behavior, errors, empty/loading states, mobile layout, and localized routes as relevant.
7. Run the regression test and applicable validation/type-check/build commands.
8. Review the diff for accidental changes and new security/privacy risks.
9. Report cause, fix, evidence, and what was not verified.

Do not claim a bug is fixed solely because code was edited.
