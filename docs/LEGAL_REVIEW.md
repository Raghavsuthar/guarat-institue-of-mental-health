# Legal and privacy review checklist

This checklist records owner decisions required before the public privacy and terms pages can be treated as final policies. The current pages are intentionally marked as drafts and must not be represented as legal approval.

## Owner verification required

- [ ] Publish a contact channel for privacy requests and security reports.
- [ ] Confirm the production deployment(s), API routes, and server-side environment variables.
- [ ] Confirm whether analytics are enabled; document the event fields, data controller, storage region, access controls, and retention period.
- [ ] Confirm the Upstash database region, retention/expiry settings, billing, and access policy.
- [ ] Confirm whether Q&A text is sent to Google Gemini or another configured model provider, and review the provider's current data-processing and retention terms.
- [ ] Confirm application/server logs, hosting logs, error monitoring, and backup retention; avoid claiming that no data is logged until verified.
- [ ] Decide whether analytics should require consent in relevant jurisdictions and implement the chosen behavior.
- [ ] Confirm applicable privacy law, legal entity/controller details, jurisdiction, complaint process, and effective date with a qualified adviser.
- [ ] Confirm code, authored-content, image, video, and questionnaire licences; update `docs/LICENSE_DECISION.md`.
- [ ] Arrange fluent clinical-language review of the Hindi and Gujarati privacy/terms translations.
- [ ] Confirm the displayed helplines and crisis wording before production sign-off.

## Current implementation notes

- The app stores a language preference and local analytics mirror in browser local storage.
- Analytics client code respects `navigator.doNotTrack === '1'` and can send aggregate event payloads to `/api/analytics/ping`.
- The educational Q&A sends the user's message to `/api/qa`; depending on server configuration, it may be forwarded to a configured AI provider.
- Production API/Redis behavior and actual logging/retention have not been fully verified. The notice intentionally avoids a blanket confidentiality or zero-collection guarantee.
- The pages are a transparent draft and are not a substitute for a legal review.
