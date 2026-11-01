# Frontend UI and Accessibility Workflow

1. Inspect design tokens, shared components, route layout, responsive breakpoints, and current page.
2. Define the target user/task and UI problem. Prefer clarity, navigation, readability, and trust over decoration.
3. Reuse current dependencies and shared components unless a new dependency has a justified benefit.
4. Design for small Android screens first, then tablet and desktop. Avoid horizontal overflow and layout shifts.
5. Preserve English/Hindi/Gujarati content, locale-prefixed routes, deep links, crisis access, and PWA/offline behavior.
6. Use semantic HTML, visible focus, keyboard operation, accessible names, suitable contrast, and reduced-motion support.
7. Do not rely on color alone; provide labels, errors, and clear empty/loading states.
8. Use licensed assets; do not imply endorsement. Optimize images and avoid heavy animation.
9. Test long Hindi/Gujarati strings, narrow viewports, keyboard flow, and screen-reader semantics where possible.
10. Report the routes/viewports checked, screenshots if actually captured, and untested cases.
