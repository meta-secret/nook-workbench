---
title: Close deferred ARC workflow review findings
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/move-trusted-container-workflows-to-arc.md
started_at: 2026-08-25T16:48:35Z
agent: codex
---

# Close deferred ARC workflow review findings

## Interpreted request

Ship the already verified ARC migration immediately, then deliver the remaining review corrections as a small successor pull request without reopening the architecture or delaying the merged capacity improvement.

## Requirements

- Keep pull-request readiness usable with a PAT even when the local GitHub CLI session is absent.
- Build Main and pull-request browser images with the same URL and extension inputs as their verified web artifacts.
- Run current preflight tooling against an immutable historical release source.
- Reject remote dispatches that specify both the singular and batch task inputs.
- Add executable regression contracts for each correction.
- Run repository-owned exact-head validation and review, then merge the successor automatically when ready.

## Constraints and exclusions

- Preserve the merged ARC placement and trust boundaries.
- Do not introduce DinD, Podman, host runtime sockets, privileged runners, Kata, or Python.
- Do not broaden the pull request beyond the four deferred review findings.

## Change budget and PR sequence

- Estimated authored changed lines: 125
- Owning modules, packages, or layers: GitHub Actions workflows, Task automation, preflight container harness, workflow contracts
- Public or cross-module interfaces: remote workflow dispatch inputs and preflight source-selection environment
- Delivery shape: One PR
- Current PR estimated authored changed lines: 125
- Current PR slice and acceptance evidence: Four deferred review fixes; Acceptance evidence: static contracts, exact-head repository workflows, Cloud review, and readiness audit pass
- PR slices and acceptance evidence: Four deferred review fixes; Acceptance evidence: static contracts, exact-head repository workflows, Cloud review, and readiness audit pass

## Initial plan

1. Apply each review correction to the merged Main baseline.
2. Extend the TypeScript and Rust workflow contracts.
3. Format, review, push, and open the focused successor pull request.
4. Run exact-head GitHub Actions validation and resolve all active review threads.
5. Complete readiness and squash-merge.

## Completion evidence

- The successor pull request links the four deferred review threads.
- Repository contracts reject each former failure mode.
- All applicable exact-head checks pass on ARC.
- The pull request has no actionable review feedback and is merged.

## Safety review

This plan contains only public-safe development context and no sensitive or private material.
