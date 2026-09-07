---
title: Fix delayed extension pairing acknowledgement
status: done
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: extension-pairing-acknowledgement
created_at: 2026-09-07T02:06:00Z
updated_at: 2026-09-07T06:58:30Z
source_issues: []
related_prs: ["https://github.com/meta-secret/nook/pull/1486"]
depends_on: []
---

# Fix delayed extension pairing acknowledgement

## Context

An observed Simple Vault approval displayed a failed browser handoff even though the extension later showed the vault as connected. This repair belongs to [Unplanned engineering repairs](README.md).

## Outcome

Simple Vault sends one pairing grant and waits for the extension's completed-import acknowledgement, so a valid slow import cannot be reported as rejected or replayed. The shared extension harness, Playwright teardown, and ARC runner placement required to prove that flow are also repaired.

## Scope

- Include the website-to-extension message wait policy and focused web unit/browser-demo regression coverage.
- Include the shared extension mock-auth host and provider smoke semantics required by full extension E2E.
- Include bounded Playwright preview shutdown and fail-closed ARC container-job eligibility.
- Include Security acceptance, live SRE deployment, exact-head hosted validation, squash merge, and Workbench closeout.
- Exclude Sentinel pairing, Rust/WASM authorization changes, recovery engines, retries, and compatibility behavior.

## Acceptance criteria

- [x] A valid pairing import that acknowledges after more than five seconds reaches the approved state.
- [x] One user approval causes exactly one extension grant delivery.
- [x] Runtime errors and missing responses remain fail-closed.
- [x] Security review confirms unchanged sender authorization, grant validation, and secret lifecycle.
- [x] Applicable PR checks and full browser validation pass on the exact head before squash merge.

## Progress

- 2026-09-07: Root cause isolated to the sender's five-second timeout and duplicate resend behavior; implementation and focused regression contracts committed for hosted validation.
- 2026-09-07: Initial full extension E2E exposed shared mock-auth/static-host failures before the pairing path; the user explicitly expanded scope and Web Development repaired the harness.
- 2026-09-07: Full browser validation exposed unbounded preview teardown, which was replaced with a bounded graceful shutdown contract.
- 2026-09-07: Full extension E2E exposed a Bun crash specific to the Ubuntu 26.04 kernel-7 secondary runner. SRE added and deployed an exact three-node eligibility contract excluding that runner.
- 2026-09-07: Final exact-head validation passed all applicable jobs; canonical readiness passed; PR 1486 squash-merged as `caaef127dad2d2c390378fd5e007f36dd33850e5`.
- 2026-09-07: Final worklog and immutable AI-agent statistics were published; the issue is complete.

## Findings and decisions

- The extension acknowledges only after validation, durable storage, session import, and authentication-surface refresh, which can legitimately exceed five seconds.
- A sender timeout cannot distinguish a failed import from a completed import with a delayed acknowledgement and therefore must not trigger duplicate grant delivery.
- Containerized browser jobs now use an explicit repository-owned eligibility inventory; no runtime host/kernel fallback was introduced.

## References

- [Nook repository](https://github.com/meta-secret/nook)
- [PR 1486](https://github.com/meta-secret/nook/pull/1486)
- [Final validation](https://github.com/meta-secret/nook/actions/runs/34091381015)
- [Delivery statistics](https://github.com/meta-secret/nook-workbench/blob/main/stats/ai-agent/1486.yaml)
