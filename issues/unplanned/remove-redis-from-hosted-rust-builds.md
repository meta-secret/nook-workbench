---
title: Remove Redis from hosted Rust builds
status: done
priority: p1
automation: manual
owner: codex
created_at: 2026-07-27T05:45:15Z
updated_at: 2026-08-08T12:30:53Z
source_issues: []
related_prs:
  - https://github.com/meta-secret/nook/pull/805
  - https://github.com/meta-secret/nook/pull/812
  - https://github.com/meta-secret/nook/pull/816
  - https://github.com/meta-secret/nook/pull/818
  - https://github.com/meta-secret/nook/pull/902
  - https://github.com/meta-secret/nook/pull/950
depends_on: []
---

# Remove Redis from hosted Rust builds

## Context

Hosted Rust and WASM builds repeatedly recompiled unchanged cargo-chef
dependencies. This direct repair belongs to
[Unplanned engineering repairs](README.md).

## Outcome

Hosted builds use two purpose-specific private caches without Redis or GitHub
Actions cache storage: Zot persists portable BuildKit layers, and SeaweedFS
persists compiler objects. Remote branches publish only isolated Zot refs while
Main publishes protected refs and the authoritative SeaweedFS objects.

## Scope

- Remove hosted Redis and GitHub Actions cache transport.
- Fingerprint all dependency graph and compiler-environment inputs.
- Persist BuildKit layers in Zot and compiler objects in SeaweedFS through stable,
  scoped secret mounts.
- Add hard preflight protection for cache isolation and secret handling.
- Keep explicit local/runtime Redis tooling outside the hosted build path.

## Acceptance criteria

- [x] Hosted compiler stages do not mount a Redis secret.
- [x] Hosted Docker Bake targets do not import or export GitHub Actions caches.
- [x] The dependency scope changes only when a declared build input changes.
- [x] Stable BuildKit secret mounts keep credential values out of layer cache
  keys, build arguments, image environments, source files, URLs, and logs.
- [x] Preflight rejects permission, restore-order, secret-handling, and
  fingerprint-contract regressions.
- [x] Exact-head PR checks pass and Main publishes the new native and WASM
  protected Zot cache refs.
- [x] A fresh hosted builder importing only the fingerprinted WASM scope
  restores cargo-chef release, cargo-chef clippy, and release-test dependency
  layers without executing them.
- [x] A source-only native change restores all nextest, clippy, and coverage
  dependency producer layers from the published cache on its first hosted
  solve.
- [x] Remote branches restore their own Zot refs before Main and can publish
  only deterministic branch/task refs.
- [x] SeaweedFS allows Main read/write, allows Remote reads, and denies Remote
  writes.

## Progress

- Completed and merged in Nook PR 805.
- Native and WASM dependency scopes were published by merged Main run
  30252352302.
- PR 812 exposed the fingerprinted scope to outer WASM consumers, but
  controlled proof PR 815 showed the first hosted solve still missed all three
  expensive dependency layers.
- PR 816 made the dependency producer self-contained, added a mandatory
  fresh-builder publication assertion, and merged as
  `634fa4a4f99b70973c07eb9aae960014af313162`.
- Main run 30292970348 published scope
  `nook-rust-wasm-deps-v4-6d5fad2500bed3cb4d79822e1d7724610f10bcde284225b2956a5a3743fae538`;
  its isolated verifier restored all three required stages as cached.
- Source-only proof PR 817 preserved that fingerprint and independently
  restored all three stages as cached in its first hosted WASM solve.
- Source-only proof PR 818 preserved native dependency inputs. Its first hosted
  Native solve restored all nine dependency producer layers as cached and
  completed successfully in 3 minutes 53 seconds.
- PR 902 replaced GitHub Actions cache storage with private Zot cache images,
  added branch-first/Main-second Remote restore and branch-only publication,
  and integrated SeaweedFS compiler-object reuse through scoped identities.
- A repeated fresh-worker Rust test restored its compile layer and completed in
  4 minutes 30 seconds; lint completed in 2 minutes 52 seconds and coverage in
  3 minutes 39 seconds. Cargo itself finished cached compilation in under one
  second before the tests ran.
- The live SeaweedFS cache held 5,033 objects totaling about 4.37 GB at delivery.
- PR 950 audited every Rust-producing pull-request job, repaired orphaned
  full-graph cache lineages, and added exact-head publication for each verified
  producer. Its unchanged-head replay emitted zero Rust `Compiling` lines in
  Native, WASM, Kani, Loom, policy, Dylint, fuzz, WASM Node, and Web jobs.
- The PR 950 replay restored 602 BuildKit vertices as cached across those jobs.
  All emitted sccache reports had zero misses.

## Findings and decisions

- Secret contents were not the sole cause; the mutable cross-run cache scope
  restored only part of the dependency graph.
- Cache imports attached to named target contexts do not make the parent
  identity portable across hosted builders. Manifest-only dependency stages
  now extend their digest-pinned Rust base in the same Dockerfile.
- A trusted publication is accepted only after a separate Docker-container
  builder imports the exact hosted scope and proves the required layers are
  cached.
- A changed fingerprint intentionally incurs one cold seed build.
- Redis is not part of hosted compilation; local/runtime diagnostics remain
  available explicitly.
- Zot is authoritative for portable BuildKit layers. Remote refs are
  deterministic per branch and task, cannot overwrite protected Main refs, and
  restore Main as fallback.
- SeaweedFS separates a Main read/write identity from a Remote read-only
  identity. Newly introduced dependencies still become reusable immediately via
  the branch Zot export; Main later publishes authoritative compiler objects.
- Cache credentials use stable BuildKit secret identifiers and secret mounts;
  credential contents do not participate in layer cache keys.
- `Compiling` output with sccache hits is useful fallback evidence but is not a
  BuildKit cache success. Same-head acceptance requires the complete consumer
  leaf to restore without invoking Cargo.
- Parallel consumers own separate exact scopes. In particular, WASM package
  export and WASM Node tests cannot race while writing one mutable cache ref.
- Local dependency candidates remain quarantined until a GitHub-hosted worker
  validates and promotes them. Main remains the trusted cross-PR seed.

## References

- [Task plan](../../plans/unplanned/20260727-054515-remove-redis-from-hosted-rust-builds.md)
- [Completion worklog](../../worklogs/unplanned/20260727-092640-805.md)
- [WASM cache completion worklog](../../worklogs/unplanned/20260727-184600-816.md)
- [Nook PR 805](https://github.com/meta-secret/nook/pull/805)
- [Nook PR 812](https://github.com/meta-secret/nook/pull/812)
- [Nook PR 816](https://github.com/meta-secret/nook/pull/816)
- [Native cache proof PR 818](https://github.com/meta-secret/nook/pull/818)
- [SeaweedFS and Zot cache repair PR 902](https://github.com/meta-secret/nook/pull/902)
- [SeaweedFS and Zot cache repair plan](../../plans/unplanned/20260801T170000Z-repair-remote-rust-cold-cache-rw.md)
- [SeaweedFS and Zot cache repair worklog](../../worklogs/unplanned/20260802-023613-pr-902.md)
- [PR 950 cache-correctness plan](../../plans/unplanned/20260808T051149Z-pr950-all-job-rust-cache-audit.md)
- [PR 950 completion worklog](../../worklogs/unplanned/20260808T123053Z-pr-950-rust-cache-correctness.md)
- [All-job Rust cache repair PR 950](https://github.com/meta-secret/nook/pull/950)
