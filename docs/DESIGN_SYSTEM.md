# Calm Aurora UI tokens

## Intent
Use a calm, modern visual language for a public mental-health education site: cool neutral surfaces, teal for orientation and action, indigo/lilac for depth, and coral reserved for supportive emphasis. Avoid overusing gradients, glass effects, or motion.

## Tokens
- Canvas: `--aurora-canvas`
- Surface: `--aurora-surface`
- Primary text: `--aurora-ink`
- Secondary text: `--aurora-muted`
- Primary accent: `--aurora-teal`
- Deep accent: `--aurora-teal-deep`
- Secondary accent: `--aurora-indigo`
- Soft secondary accent: `--aurora-lilac`
- Supportive accent: `--aurora-coral`
- Borders: `--aurora-line`
- Elevation: `--aurora-shadow`
- Card radius: `--aurora-radius-card`

## Accessibility and performance
- Preserve visible keyboard focus rings and minimum tap targets.
- Respect `prefers-reduced-motion`; no new animation loops were introduced.
- Keep backgrounds CSS-only and avoid external font/image requests in this phase.
- Crisis communication remains high-contrast and visually distinct from decorative accents.
- Hindi and Gujarati text continue to use the existing system/fallback font stack.

## Scope and verification
This phase adds shared visual tokens, a subtle page background, consistent sticky-header/surface treatments, and a home-hero identity class. It also replaces an unsupported credential string in the home-page author badge with the role “Psychiatry resident · Public education.” No new clinical claims or references were added.

CI must validate content, TypeScript, tests, and production build. Browser screenshots, axe, and Lighthouse still require an accessible preview/browser runner and are not claimed from source review alone.
