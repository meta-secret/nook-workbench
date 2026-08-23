---
title: Complete ARC local cache promotion
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/eliminate-arc-cache-publication-tail.md
started_at: 2026-08-23T05:49:00Z
agent: codex
---

# Complete ARC local cache promotion

## Interpreted request

Close the remaining production cache tail discovered in the first Main run
after PR 1083. Successful trusted ARC jobs must promote their private BuildKit
state locally instead of rebuilding and exporting even a minimal registry cache.

## Requirements

- Preserve ephemeral runners and per-job writable BuildKit isolation.
- Let job success request local promotion without granting job code direct
  access to host cache-control state.
- Validate the request against the current Pod identity and seed generation.
- Keep a bounded registry fallback for non-ARC runners and cross-node recovery.
- Prove ordinary and Hive production-equivalent jobs complete and the local
  seed advances after each successful job.
- Deliver the change through a separate exact-head PR and merge it after the
  normal repository gates.

## Constraints and exclusions

- Docker-in-Docker, Sysbox, host Docker sockets, and a shared writable BuildKit
  daemon remain prohibited.
- Job containers cannot mount the host request or runtime directories.
- Failed or cancelled jobs cannot promote their state.
- The follow-up must remain compatible with zero-to-ten ephemeral scale sets.

## Change budget and PR sequence

- Estimated authored changed lines: 250
- Owning modules, packages, or layers: ARC runner manifest, BuildKit cloner,
  cache publication tasks, manifest contracts, and focused workflow steps
- Public or cross-module interfaces: successful-job cache promotion signal
- Delivery shape: One PR
- Current PR estimated authored changed lines: 250
- Current PR slice and acceptance evidence: trusted sidecar promotion request;
  Acceptance evidence: static contracts, exact-head ordinary and Hive smoke,
  complete PR validation, merged Main timing, and local seed advancement
- PR slices and acceptance evidence: trusted sidecar promotion request;
  Acceptance evidence: static contracts, exact-head ordinary and Hive smoke,
  complete PR validation, merged Main timing, and local seed advancement

## Initial plan

1. Add a runner-visible in-guest success signal and a trusted sidecar that
   converts only its own Pod signal into a host promotion request.
2. Extend the host cloner to validate and consume promotion requests only after
   the matching Kata sandbox fully stops.
3. Make ARC cache publication signal local promotion while retaining registry
   export for non-ARC fallback runners.
4. Add static and behavior-focused contracts, deploy the exact head, prove both
   scale sets, validate, review, merge, and measure post-merge Main.

## Completion evidence

- A successful ordinary or Hive job advances the local seed generation after
  its Kata VM stops.
- A failed or untrusted signal cannot promote cache state.
- ARC jobs skip the registry cache export; fallback runners retain it.
- Exact-head and merged Main evidence show the publication tail is removed.

## Safety review

- This record contains no credentials, private addresses, service identifiers,
  raw logs, local paths, prompts, or transcripts.
