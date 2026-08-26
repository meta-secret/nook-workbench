---
title: Extract active Cortex normalization from the dormant provider
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
plan: plans/executable-skill-capabilities/20260826T002004Z-nine-slice-executable-skill-stack.md
nook_pr: 1109
status: completed
started_at: 2026-08-26T00:20:04Z
finished_at: 2026-08-26T00:31:23Z
agent: codex
---

# Extract active Cortex normalization from the dormant provider

## Outcome

Active Cortex article normalization is now an independent predecessor PR. The
dormant provider no longer consumes its correction budget with authoritative
Loom behavior or required corpus repairs.

## Progress

- Published PR #1109 at exact head
  `c97894c96df8997ddc2c7463e05b4c317243d143` with 1,407 changed lines.
- Reconstructed PR #1089 on that predecessor at exact head
  `b540bf9a978d867d927abd7f03b8bf0ef9e45018` with 3,756 changed lines.
- Updated both PRs to the immutable nine-slice delivery plan.
- Replied to and resolved the three provider review threads superseded by the
  split and exact-head fixes.

## Implementation problems

- The provider PR had reached 4,994 changed lines before exact review exposed
  three additional semantic gaps.
- Moving authoritative active behavior into its own predecessor restored
  review headroom without weakening tests or compressing unrelated concerns.

## Decisions

- The active audit and its current-corpus repairs belong before the dormant
  provider because they are already authoritative production behavior.
- Universal hidden HTML, footnote definitions, and nested ordered procedures
  use one canonical semantic model mirrored by provider fixtures.
- Provider documents and migration baselines accept only canonical safe
  `.cortex/**/*.md` paths.

## Validation

- PR #1109 focused tests passed 28 tests with 104 assertions.
- PR #1109 repository policy passed at the exact published head.
- PR #1089 focused tests passed 59 tests with 225 assertions.
- All executable-skill verification passed 63 tests with 229 assertions.
- Independent exact reviews accepted both published patches with no P1 or P2.
- Source architecture, TypeScript state, Cortex audit, pre-push, and diff checks
  passed before publication.

## Remaining work

- Complete hosted exact-head validation and review for PRs #1109 and #1089.
- Repair the final reachability review findings before replaying PR #1108 onto
  the reconstructed provider head.
- Replay source policy and the analyzer runtime in dependency order.
