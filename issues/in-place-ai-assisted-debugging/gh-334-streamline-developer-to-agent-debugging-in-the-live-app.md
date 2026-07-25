---
title: "Feature: Streamline developer-to-agent debugging in the live app"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-13T03:15:07Z
updated_at: 2026-07-21T05:05:42Z
source_issues: ["https://github.com/meta-secret/nook/issues/334"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-debug-workflow"]
legacy_state_reason: "COMPLETED"
---

# Feature: Streamline developer-to-agent debugging in the live app

## Imported context

This record was imported from [Nook GitHub issue #334](https://github.com/meta-secret/nook/issues/334)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Streamline the conversation between a developer using Nook and an AI coding agent. The developer should be able to indicate a problem in the live application and explain it in context, while the agent receives enough browser and repository evidence to investigate without requiring the developer to manually create, paste, and describe screenshots.

The rollout is deliberately evidence-driven. The first implementation must use **Playwright MCP annotation mode** with the existing Nook development server and diagnostics. We will add Nook-native functionality only one small step at a time after the preceding step proves efficient.

## Product Decisions

- Playwright MCP annotation mode is the mandatory first implementation.
- The first phase must reuse existing browser-agent tooling; it must not build a custom Nook annotation overlay.
- Expansion requires an explicit go/no-go evaluation based on real debugging sessions.
- Later functionality must be proposed and delivered one focused step at a time.
- Nook's privacy and Rust/WASM boundaries remain unchanged: diagnostic domain decisions and redaction belong in Rust/WASM; TypeScript/Svelte stays a thin browser/UI consumer.

## Current Status

- Nook already persists structured Rust/WASM and browser logs and exposes them through the browser-hydrated `/app-logs` surface.
- Development builds already expose selected debug hooks.
- Metadata-only vault-access diagnostics already exist without returning plaintext keys, private device material, or decrypted secret values.
- Playwright MCP annotation pilot landed (#335 / #338) with boundary follow-ups (#341, #351).
- Evaluation gate (#336) recorded **Go**; pilot defects fixed in #559.
- Next authorized step: #560 (reduce two-window annotation handoff friction). Partial docs/Task hints shipped in #559.

## Rollout Gate

Only the Playwright MCP annotation pilot and its evaluation were initially authorized.

Do **not** implement or create execution issues for a custom in-app overlay, local agent bridge, session replay, automatic diagnostic submission, or production-facing debug mode beyond the single focused next step authorized by #336.

## Sub-Issues

- [x] #335: Playwright MCP annotation-mode pilot
- [x] #336: Pilot evaluation and go/no-go decision
- [ ] #560: Reduce AI-debug two-window annotation handoff friction

## Acceptance Criteria

- A developer can annotate a problem in a live local Nook session without manually capturing and pasting a screenshot.
- The agent receives the annotation plus enough structured browser context to identify the intended element or region.
- The agent can correlate the annotation with Nook's persisted application logs and relevant source code.
- The workflow is evaluated across representative real debugging sessions.
- Privacy risks, browser/platform limitations, and developer friction are documented.
- No later implementation begins until the evaluation gate passes.

## Candidate Later Steps — Not Yet Approved

These are hypotheses, not committed scope:

- A minimal Nook-native element-selection/comment overlay.
- A privacy-filtered diagnostic packet.
- A localhost-only agent bridge and progress channel.
- Short semantic action history or replay.
- Automatic focused regression-test generation.

## References

- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Playwright tracing: https://playwright.dev/docs/trace-viewer-intro
- Nook logging reference: `.cortex/references/logging.md`
- Nook AI-debug runbook: `.cortex/references/ai-debugging.md`
- Nook web logger: `nook-app/nook-web/nook-web-shared/src/vault-app/lib/log.ts`
- Nook app-log envelope: `nook-app/nook-web/nook-web-shared/src/vault-app/lib/app-logs-api.ts`
- Safe vault diagnostics: `nook-app/nook-core/src/vault/vault_access_diagnostics.rs`

## Historical comments

### cypherkitty — 2026-07-21T04:40:23Z

## Milestone 5 status update

- #335 Playwright MCP annotation pilot: **done** (evidence on the issue; landed via #338, with boundary fixes in #341/#351).
- #336 evaluation gate: **Go** — screenshot/paste eliminated; largest remaining friction is the two-window Chrome ↔ Playwright Dashboard handoff.
- Pilot defects that blocked a trustworthy Go (HTTPS/`wss` allowlist mismatch vs `NOOK_LOCAL_HTTPS`, Codex-only check, thin passkey log correlation): fixed in #559.

Authorized next implementation: exactly one focused issue for the two-window handoff friction. No overlay, agent bridge, replay, or production debug mode until that issue is scoped and delivered.

### cypherkitty — 2026-07-21T05:02:05Z

Implementation PR for pilot gaps: #559 (merged). Stats: #563. Next focused work remains #560.

### cypherkitty — 2026-07-21T05:05:41Z

Closing the feature pack for milestone 5.

Delivered:
- #335 Playwright MCP annotation pilot
- #336 Go evaluation gate
- Pilot defect fixes and Cursor/HTTPS/log correlation in #559
- #560 two-window handoff guidance (docs/Task surface)

Nook-native overlay/bridge/replay remains explicitly out of scope until a future evidence-gated proposal.
