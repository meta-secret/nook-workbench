---
title: Restore Hive login-shell Rust tooling
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/hive-pr-lifecycle-reliability.md
started_at: 2026-08-17T03:12:33Z
agent: codex
---

# Restore Hive login-shell Rust tooling

## Interpreted request

Audit the production Hive queue and delivery backlog, correct platform faults
that prevent agents from completing their owned work, and verify recovery from
durable queue state through pull-request delivery.

## Requirements

- Preserve Hive worker and pull-request ownership while repairing shared
  platform prerequisites.
- Make the Rust formatter available to the login shell used by embedded Codex.
- Add a build-time regression check for the exact login-shell behavior.
- Deliver the repair through a reviewed, exact-head validated pull request.
- Deploy the merged image, rearm eligible failed repair roots once for that
  release, and verify live worker health and queue progress.

## Constraints and exclusions

- Do not modify or merge product-repair branches owned by active Hive workers.
- Do not weaken pre-push, review, validation, isolation, or squash-merge rules.
- Do not run heavy product builds or test suites locally.
- Keep the repair inside the Hive worker image and its focused contract tests.

## Change budget and PR sequence

- Estimated authored changed lines: 30
- Owning modules, packages, or layers: Hive production worker image.
- Public or cross-module interfaces: login-shell executable discovery only;
  no API or schema change.
- Delivery shape: One PR
- Current PR estimated authored changed lines: 30
- Current PR slice and acceptance evidence: Worker image path fix plus a build-time login-shell assertion; Acceptance evidence: hosted Hive validation, production tool discovery, and renewed queue progress
- PR slices and acceptance evidence: Worker image path fix plus a build-time login-shell assertion; Acceptance evidence: hosted Hive validation, production tool discovery, and renewed queue progress

## Initial plan

1. Prove the worker process and login-shell tool paths differ in production.
2. Preserve the Rust toolchain path across login-shell startup in the image.
3. Add a deterministic image-build assertion for Cargo and rustfmt discovery.
4. Format, review, publish, validate, squash-merge, and deploy the repair.
5. Rearm eligible durable roots and monitor the Hive-owned delivery backlog.

## Completion evidence

- Exact-head repository checks and readiness pass for the repair PR.
- The pull request is squash-merged and its exact image is deployed.
- A production login shell resolves Cargo and rustfmt.
- Hive deployments remain ready without restarts and eligible failed roots are
  rearmed on the new release.
- Hive-owned pull requests and durable task status are re-audited.

## Safety review

This plan contains no prompt transcript, credentials, private data, raw logs,
local paths, or unnecessary infrastructure detail.
