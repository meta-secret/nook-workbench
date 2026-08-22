---
title: Harden and document the Main native frontend retry boundary
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-83f845c0d0a3b535b4b0db46efe918ef34314bef.md
started_at: 2026-08-22T12:23:40Z
agent: codex
---

# Task plan

## Interpreted request

Complete the Main repair after exact-head review exposed additional fail-closed and documentation requirements. Bind transient authorization evidence to the Dockerfile frontend vertex, synchronize log capture before classification, preserve application-failure behavior, and align the authoritative harness descriptions before revalidating and merging.

## Requirements

- Preserve the original Main failure evidence and the one-retry cache isolation boundary.
- Retry only when the Dockerfile frontend vertex itself reports the authorization TLS timeout.
- Finish capturing command output before inspecting it.
- Prove a later application vertex cannot reuse an earlier successful frontend marker.
- Update both owning Cortex descriptions of retry topology.
- Resolve every exact-head review thread and rerun all repository-owned and Main-equivalent checks.

## Constraints and exclusions

- Do not retry application failures, genuine S3 failures, or unrelated authorization timeouts.
- Do not weaken cache publication, browser validation, or exact-head review requirements.
- No product behavior or public API changes are included.

## Change budget and PR sequence

- Estimated authored changed lines: 120
- Owning modules, packages, or layers: engineering harness; BuildKit retry helper; native platform Taskfile; hosted cache preflight; Cortex harness workflow authorities
- Public or cross-module interfaces: no public interface; internal BuildKit log-classification contract and documentation only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 120
- Current PR slice and acceptance evidence: harden the frontend retry classifier and synchronize its documentation; Acceptance evidence: adversarial shell regressions, preflight contracts, exact-head review, and full PR/Main-equivalent checks
- PR slices and acceptance evidence: harden the frontend retry classifier and synchronize its documentation; Acceptance evidence: adversarial shell regressions, preflight contracts, exact-head review, and full PR/Main-equivalent checks

## Initial plan

1. Replace asynchronous process-substitution capture with a synchronous streaming pipeline that preserves the command status.
2. Match frontend resolution and authorization timeout only when both carry the same BuildKit vertex identifier.
3. Add adversarial coverage for delayed output and a later application vertex.
4. Update the two owning retry-topology descriptions, reply to each review thread, and revalidate the replacement head.

## Completion evidence

- Focused shell coverage demonstrates delayed frontend output retries and later-vertex authorization failure does not.
- Cortex audit and exact-head repository checks pass.
- All review threads are replied to and resolved.
- The squash merge and resulting Main workflow succeed before incident completion is published.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, or unnecessary infrastructure detail.
