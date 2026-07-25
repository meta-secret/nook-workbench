---
title: "Phase gate: Evaluate the Playwright MCP annotation pilot before expanding scope"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-13T03:15:19Z
updated_at: 2026-07-21T04:43:05Z
source_issues: ["https://github.com/meta-secret/nook/issues/336"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-debug-workflow"]
legacy_state_reason: "COMPLETED"
---

# Phase gate: Evaluate the Playwright MCP annotation pilot before expanding scope

## Imported context

This record was imported from [Nook GitHub issue #336](https://github.com/meta-secret/nook/issues/336)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #334. This issue is the mandatory gate after the Playwright MCP annotation pilot.

## Problem

We should not build a custom debug overlay or agent bridge merely because it is technically possible. First determine whether Playwright MCP annotation mode meaningfully improves real Nook debugging and identify the single largest remaining source of friction.

## Scope

- Review the completed pilot evidence from representative debugging sessions.
- Assess annotation clarity, source identification, log correlation, setup burden, browser compatibility, privacy exposure, and remaining developer explanation.
- Record a clear **go**, **adjust and retry**, or **stop** decision.
- If the result is **go**, create exactly one focused next-step sub-issue addressing the largest evidenced gap.
- If the result is **adjust and retry**, update the pilot workflow and repeat the necessary scenarios before proposing Nook-native functionality.
- If the result is **stop**, document why the existing screenshot/prompt or browser-agent workflow is preferable.

## Explicitly Out of Scope

- Implementing an in-app overlay, agent bridge, replay recorder, or other later functionality.
- Creating a full speculative backlog of later phases.
- Changing production logging, authentication, vault storage, or security behavior.

## Acceptance Criteria

- Evidence from at least three representative pilot sessions is summarized.
- The evaluation states whether manual screenshot creation and pasting were eliminated.
- It records how often the annotation identified the correct target and source path without additional clarification.
- It records whether existing app logs were sufficient and which diagnostic gaps, if any, remained.
- Security and privacy exposure are reviewed, especially browser storage, authenticated state, vault UI, and native passkey boundaries.
- A go/adjust/stop decision and rationale are posted on the parent issue.
- No more than one next implementation issue is created, and only after a positive go decision.

## Decision Template

### Result

- [ ] Go
- [ ] Adjust and retry
- [ ] Stop

### Evidence

- Sessions evaluated:
- Screenshot/paste step eliminated:
- Target/source identification:
- Log correlation:
- Remaining friction:
- Security/privacy observations:

### Next Step

Link one focused issue only if the result is **go**.

## References

- Parent: #334
- Required pilot: #335


## Historical comments

### cypherkitty — 2026-07-21T04:40:22Z

## Phase gate decision

### Result

- [x] Go
- [ ] Adjust and retry
- [ ] Stop

### Evidence

- Sessions evaluated: 3 live pilot sessions on #335 (visual/layout, application error, unlock/passkey-adjacent) plus the post-isolation smoke test; follow-up product fixes in #341 and #351; pilot defects closed in #559.
- Screenshot/paste step eliminated: **yes** in every successful annotation session. Playwright returned the annotated screenshot, annotation metadata, and ARIA snapshot directly.
- Target/source identification: **reliable when the active origin/worktree is correct**. One early session mapped to the wrong worktree on port 5173; `WEB_DEV_PORT` / 5175 fallback and origin checks address that. Correct-origin sessions identified `DeviceProtectionGate.svelte` and related vault paths without pasted screenshots.
- Log correlation: page logger via `browser_evaluate` works. Remaining gap from the pilot was missing sanitized passkey ceremony outcomes; #559 persists `vault-device-protection` outcomes (`passkey_unavailable`, `passkey_ceremony_not_allowed`, etc.) without secrets.
- Remaining friction: **two-window Chrome ↔ Playwright Dashboard handoff**, including the non-obvious Submit-then-Done requirement. Interact and annotate remain separate modes by design of Playwright MCP.
- Security/privacy observations: isolated ephemeral profile + synthetic data is the right default. Native WebAuthn/OS UI stays outside the DOM. Personal Chrome attachment would expand authenticated-state exposure and must not replace isolation. Local HTTPS/`wss` allowlist + `--ignore-https-errors` now match `NOOK_LOCAL_HTTPS` Docker (fixed in #559). Cursor project MCP config added for host parity.

### Next Step

Creating one focused follow-up for the largest evidenced friction: reduce the AI-debug two-window annotation handoff cost without building a custom Nook overlay/bridge.

Parent update will be posted on #334.

### cypherkitty — 2026-07-21T04:40:35Z

Next focused issue created: #560

### cypherkitty — 2026-07-21T04:40:36Z

Gate complete: **Go**. Follow-up is #560.

### cypherkitty — 2026-07-21T04:43:05Z

Next focused issue: #560
