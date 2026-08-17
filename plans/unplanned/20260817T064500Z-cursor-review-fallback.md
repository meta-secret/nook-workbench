# Task plan

## Interpreted request

Keep one exact-head Cloud review on every Nook pull request even when Codex is out of review quota. Prefer Codex. When Codex reports that it cannot review, request Cursor Bugbot on the same head instead of retrying Codex. Do not wait for either result. Do not make review a merge gate.

## Requirements

- Keep Codex as the first Cloud reviewer.
- Detect Codex review unavailability from the existing usage-limit bot comment.
- Request Cursor Bugbot with an idempotent SHA-bound top-level `cursor review` comment.
- After a fresh Codex request, probe briefly for that usage-limit comment and switch immediately when it appears.
- On later heads of the same PR, skip Codex once a usage-limit comment is already present.
- Do not retry Codex after a usage-limit response.
- Do not request Cursor while Codex is pending without a usage-limit signal.
- Do not wait for Cursor or Codex findings after repository-owned checks finish.
- Treat Cursor findings that already exist as required feedback, same as Codex.
- Keep local `task pr:review-local` Codex-first. There is no headless Cursor review CLI.
- Update Cortex, Task descriptions, README, and ci-agent tests so they describe the fallback.

## Constraints and exclusions

- Do not add a Cursor API key or Bugbot REST client.
- Do not request Claude, CodeRabbit, or other optional reviewers.
- Do not make `Cursor Bugbot` a required GitHub check.
- Do not block validation or readiness on a missing review result.
- Do not run heavy product gates locally.
- Do not copy conversation text into Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 850
- Owning modules, packages, or layers: agentic-ai/ci-agent exact-head review request, Task PR helpers, and Cortex review workflow
- Public or cross-module interfaces: `task pr:review` may post a Cursor Bugbot request instead of a Codex retry; JSON result names the active provider
- Delivery shape: One PR
- Current PR estimated authored changed lines: 850
- Current PR slice and acceptance evidence: Codex-to-Cursor fallback in ci-agent plus Cortex contract; Acceptance evidence: ci-agent unit tests cover usage-limit fallback and idempotency, and cortex-audit stays green
- PR slices and acceptance evidence: Codex-to-Cursor fallback in ci-agent plus Cortex contract; Acceptance evidence: ci-agent unit tests cover usage-limit fallback and idempotency, and cortex-audit stays green

## Initial plan

1. Extract exact-head review request logic from ci-agent GitHub helpers into a focused module.
2. Replace Codex retry-after-usage-limit with an idempotent Cursor Bugbot request.
3. Add a short availability probe only after a newly posted Codex request.
4. Report the active provider in `task pr:review` JSON without waiting for findings.
5. Update Cortex, Task, README, and preflight contracts so Cursor is the documented fallback rather than an optional extra reviewer.

## Completion evidence

- `task pr:review` still posts `@codex review` when Codex has not reported a usage limit.
- After a Codex usage-limit comment, the next request posts `cursor review` with a SHA marker and does not post another Codex request.
- A probe after a fresh Codex request switches to Cursor when the usage-limit comment appears.
- Readiness still ignores missing review results and still requires handling of Cursor comments that already exist.
- ci-agent tests cover the fallback, idempotency, and no-double-request cases.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
