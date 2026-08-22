---
title: Complete the trusted GitHub Actions ARC migration
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/complete-actions-arc-migration.md
started_at: 2026-08-22T22:05:00Z
agent: codex
---

# Complete the trusted GitHub Actions ARC migration

## Interpreted request

Audit every GitHub Actions job and complete ARC placement wherever the job is
trusted and compatible with the Kata runner runtime.

## Requirements

- Inspect literal, expression-based, matrix, and reusable-workflow placement.
- Use `nook-k0s` for eligible trusted general work and `nook-k0s-hive` for Hive.
- Keep hosted workers for untrusted inputs and operations that require GitHub's
  hosted browser, deployment, release, or provider environment.
- Encode the complete classification as an executable repository contract.

## Constraints and exclusions

- Never expose ARC credentials or private services to fork or Dependabot code.
- Do not introduce DinD, Sysbox, a host Docker socket, or shared mutable build
  state.
- Do not use Python in code, tests, automation, images, or Taskfiles.
- Leave concurrent testing-quality PR 1079 unchanged.

## Change budget and PR sequence

- Estimated authored changed lines: 700
- Owning modules, packages, or layers: GitHub Actions manifests, TypeScript workflow-policy contracts, focused contract tests, and CI runner-placement documentation
- Public or cross-module interfaces: Workflow job runner labels and repository variables selecting the general and Hive ARC scale sets
- Delivery shape: One PR
- Current PR estimated authored changed lines: 700
- Current PR slice and acceptance evidence: Complete workflow runner placement and executable classification; Acceptance evidence: Focused contracts and exact-head complete validation pass
- PR slices and acceptance evidence: Complete workflow runner placement and executable classification; Acceptance evidence: Focused contracts and exact-head complete validation pass

## Initial plan

1. Inventory every workflow job and resolve its trust/runtime requirements.
2. Extend the workflow contract to require explicit ARC or hosted-exception
   classification.
3. Migrate eligible jobs and synchronize Cortex workflow documentation.
4. Run host formatting, focused static checks, exact-head review, and complete
   validation.
5. Squash-merge and publish completion evidence.

## Completion evidence

- A machine-readable inventory covers every workflow job.
- Focused contracts and repository policy pass.
- Exact-head PR readiness passes with zero unresolved feedback.
- The implementation PR is merged.

## Safety review

- The plan contains no credentials, private addresses, raw logs, prompts, or
  local filesystem paths.
