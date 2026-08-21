---
title: Address merged ARC review follow-ups
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
started_at: 2026-08-21T16:06:41Z
agent: codex
---

# Address merged ARC review follow-ups

## Interpreted request

Deliver a new pull request that resolves every actionable review finding left on
the merged ARC runner change, without reopening or rewriting the original pull
request.

## Requirements

- Reconcile the executable agent workflow with the configured-runner policy.
- Make the ARC operational smoke command dispatchable from a normal Main
  checkout.
- Give cold scale-from-zero smoke runs enough time for provisioning plus the
  bounded preflight command.
- Define the accepted ARC GitHub credential, minimum access, ownership,
  rotation, and revocation contract.
- Keep the public umbrella deployment command description synchronized with its
  ARC deployment behavior.
- Add focused contract coverage for changed operational behavior.
- Reply to each original review thread with exact validation evidence.
- Deliver through a separate exact-head validated pull request.

## Constraints and exclusions

- Preserve the deployed runner topology, 100 GiB disposable storage limit,
  zero-warm-runner policy, QEMU isolation, and DinD/Sysbox prohibition.
- Do not mutate the merged PR branch or unrelated infrastructure work.
- Do not store GitHub credentials or credential values in source or Workbench.
- Keep complete PR and release validation on GitHub-hosted workers.

## Change budget and PR sequence

- Estimated authored changed lines: 220
- Owning modules, packages, or layers: ARC Task operations, infrastructure contract tests, executable agent workflow guidance, Hive platform design authority, and the root infrastructure command reference
- Public or cross-module interfaces: `task infra:arc:smoke`, `task infra:deploy`, and the ARC GitHub credential contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 220
- Current PR slice and acceptance evidence: One cohesive review-follow-up slice covering all five current-head findings; Acceptance evidence: focused ARC contracts, Cortex audit, pre-push validation, exact-head repository checks, and targeted thread replies
- PR slices and acceptance evidence: One cohesive review-follow-up slice covering all five current-head findings; Acceptance evidence: focused ARC contracts, Cortex audit, pre-push validation, exact-head repository checks, and targeted thread replies

## Initial plan

1. Verify each current-head finding against current Main and map it to its
   owning source and contract coverage.
2. Implement the minimal operational and documentation corrections.
3. Run focused contracts, Cortex consistency validation, and host pre-push
   checks.
4. Push a new branch, open a new pull request, and trigger complete exact-head
   validation and review.
5. Reply to the five original PR threads with the new PR and exact evidence,
   resolve them, then complete the new PR delivery lifecycle.

## Completion evidence

- ARC smoke dispatch works from Main without the branch-only helper and has a
  deadline longer than cold setup plus the command timeout.
- Static contracts enforce the smoke dispatch and timeout behavior.
- Canonical and executable workflow guidance agrees on focused ARC placement.
- The design authority records least-privilege ARC credential lifecycle rules.
- The public README identifies ARC as part of `infra:deploy`.
- The new PR passes exact-head required checks and all original actionable
  threads have visible targeted replies and are resolved.

## Safety review

- This plan contains public-safe implementation context only. Sensitive
  operational material and private user content are absent.
