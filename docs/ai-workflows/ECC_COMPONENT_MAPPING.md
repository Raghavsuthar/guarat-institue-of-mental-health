# ECC-to-ChatGPT Capability Mapping

This maps common agentic coding practices to the Mindcare/ChatGPT workflow. It is not an official integration or a complete copy of any upstream project.

| Practice | ChatGPT-compatible adaptation | Limitation |
|---|---|---|
| Project rules | `CHATGPT_PROJECT_INSTRUCTIONS.md` and repository `AGENTS.md` | Add the project instructions to ChatGPT settings manually |
| Skills | Focused Markdown workflow guides | Must be referenced; not automatically executed |
| Subagents | Separate security, clinical-content, UI/accessibility, and testing review passes | Parallel independent agents are not guaranteed |
| Slash commands | Named workflow files and reusable prompts | No native command registration is created |
| Hooks | CI workflows, pre-commit tooling, test scripts | Requires external runtime/configuration |
| MCP/integrations | Supported apps explicitly connected by the user | Permissions and connections are configured separately |
| Memory/session continuity | `session-handoff.md` and a saved handoff note | Does not create persistent model memory automatically |
| Security scanners | Dependency audit, secret scanning, static analysis in CI | Must be configured and actually run |
| Tests/evaluations | Existing tests, content validation, type-check and build | Never infer a pass without execution evidence |
| Runtime installer/dashboard | No direct equivalent in this documentation pack | Requires a compatible external environment |

## Principles retained
- Inspect before editing; prefer small, reversible changes.
- Test and review before delivery.
- Minimize permissions and avoid secret exposure.
- Separate evidence from assumptions.
- Keep durable handoffs and reproducible validation.

## Upstream reference
Everything Claude Code (ECC): https://github.com/affaan-m/ECC. This is an independently written workflow adaptation, not a claim that ECC has been installed into ChatGPT.
