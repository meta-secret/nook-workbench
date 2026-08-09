---
title: Move browser-extension policy into Rust and finish web API rollout
feature: unplanned
issue: issues/unplanned/nook-web-typescript-api-discipline.md
started_at: 2026-08-09T18:10:00Z
agent: codex
supersedes: plans/unplanned/20260809-015012-complete-nook-web-typescript-api-rules.md
---

# Move browser-extension policy into Rust and finish web API rollout

## Interpreted request

Finish the strict Nook web API migration without preserving portable extension
logic in TypeScript. Browser APIs and lifecycle orchestration stay in
TypeScript. Portable decisions, validation, protocol classification, and domain
state move into Rust and are exposed through typed WASM APIs.

Deliver the complete rollout through validated pull requests. Merge every
delivery PR. Finish only after the resulting Main branch is green.

## Requirements

- Extend the existing companion Rust and WASM boundary for extension code.
- Pass browser observations into Rust and act on typed Rust decisions.
- Keep DOM, Chrome runtime, WebAuthn ceremony calls, timers, and browser event
  registration in TypeScript.
- Move portable extension validation and policy out of TypeScript where the
  browser API itself is not required.
- Keep concrete domain values across the boundary.
- Do not introduce generic value bags as application APIs.
- Permit an untrusted transport value only in a dedicated ingress adapter.
- Narrow that value immediately through a concrete Rust or TypeScript decoder.
- Enforce at most one parameter for authored TypeScript functions and methods.
- Require named, explicitly typed object call arguments.
- Expand static checks to all authored Nook web packages.
- Keep generated WASM output outside authored-source lint rules.
- Keep every authored source file at or below 1,000 lines.
- Add Rust behavior tests for each moved decision.
- Resolve all actionable review feedback.
- Verify and repair the final Main workflow.

## Constraints and exclusions

- Reuse `nook-companion-core` and `nook-companion-wasm` unless a concrete
  dependency boundary proves that a new crate is required.
- Browser-owned callback signatures may use narrow documented exceptions.
- Product behavior and visual design stay unchanged.
- Generated Rust/WASM bindings are not authored source.
- No package or migration slice may be deferred.

## Execution plan

1. Inventory extension decisions, validators, state machines, and browser glue.
2. Correct durable architecture guidance and ownership enforcement.
3. Move portable extension behavior into companion Rust with Rust tests.
4. Replace TypeScript decisions with typed WASM calls.
5. Finish the extension and research TypeScript lint migrations.
6. Run pre-push hygiene and focused hosted Rust, WASM, web, and extension checks.
7. Resolve review feedback and pass exact-head validation and readiness.
8. Squash-merge the delivery PR and publish Workbench completion records.
9. Inspect Main and deliver a repair PR if any required check is red.

## Completion evidence

- Extension TypeScript contains browser and presentation orchestration only.
- Portable extension policy has behavior-focused Rust coverage.
- All authored Nook web packages pass the strict TypeScript rules.
- Mechanical checks reject known TypeScript domain-policy regressions.
- The delivery PR is squash-merged with no unresolved actionable feedback.
- Workbench issue, worklog, and immutable PR statistics are published.
- The final Main workflow completes successfully.

## Safety review

This plan contains no raw prompt, chat transcript, secret, private data, raw
log, local path, or unnecessary infrastructure detail.
