---
title: Restore Main mobile shell e2e
feature: hive-isolated-agent-platform
issue: null
plan: plans/hive-isolated-agent-platform/20260829T013100Z-main-mobile-shell-e2e-superseding.md
nook_pr: 1193
status: completed
started_at: 2026-08-29T00:24:38Z
finished_at: 2026-08-29T03:08:05Z
agent: codex
---

# Restore Main mobile shell e2e

## Outcome

Restored the Main Web e2e contract for the responsive authenticated header, preserved green Extension e2e coverage, and updated the readiness audit to recognize the authenticated Codex review summary as repository status. PR 1193 was squash-merged as `1d06444b1d930e4a40e9f85f9f4c7b630328e2f3`.

## Progress

- Reproduced the Web failure remotely from exact Main source `141ca2eb5088a03104d8cf5dbe251b6f5b93d034` while running Extension e2e in parallel.
- Confirmed the mobile test asserted desktop-only header controls even though the product exposes those controls through the responsive tools menu.
- Updated the shell-height regression to open the mobile tools menu and verify language, theme, and vault-lock controls remain visible and in the viewport.
- Added an exact actor-and-marker classifier plus spoofing tests for the Codex review-summary status card.
- Rebased and revalidated after each Main advance, then squash-merged PR 1193.

## Implementation problems

- The original Main run failed only Web e2e; exact-source Extension e2e was green.
- The readiness audit initially counted the Codex summary card as substantive feedback. The classifier now trusts only `chatgpt-codex-connector[bot]` with the exact leading `codex-pull-request-review-summary` marker.
- Main advanced during delivery. Each advance invalidated prior proof, so review, full hosted validation, and readiness were repeated against the replacement exact head.
- The merged Main run queued behind a pre-fix Main run. The predecessor independently reproduced the same Web failure before releasing workflow concurrency.

## Decisions

- Keep the responsive product behavior and repair the stale e2e expectation; desktop controls remain intentionally hidden at mobile width.
- Preserve fail-closed feedback accounting by authenticating both actor and exact marker and retaining substantive treatment for human, actor-lookalike, marker-lookalike, and embedded-marker comments.
- Require exact-head and exact-base validation before merge rather than reusing green evidence after rebases.

## Validation

- Original failed Main: https://github.com/meta-secret/nook/actions/runs/33223441943
- Reproducing remote Web e2e: https://github.com/meta-secret/nook/actions/runs/33225185999
- Parallel exact-source Extension e2e: https://github.com/meta-secret/nook/actions/runs/33225185692
- Focused repaired Web e2e: https://github.com/meta-secret/nook/actions/runs/33225889238
- Final exact-head full PR matrix: https://github.com/meta-secret/nook/actions/runs/33227780516
- `task loom:pre-push`
- `task pr:review-local` with no findings
- `task ci-agent:test` with 98 passing tests
- `task pr:ready PR=1193` with current base, successful deployment, zero substantive feedback, zero unresolved threads, and all required jobs green
- Replacement Main: https://github.com/meta-secret/nook/actions/runs/33229391211

## Remaining work

None.
