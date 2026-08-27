---
title: Restore Main with Kubernetes-native ARC browser execution
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/main-failure-effd9ce00a9d9ac00d21c9e44adbb3eb97b0d8bc.md
plan: plans/hive-isolated-agent-platform/20260827T160411Z-restore-main-kubernetes-native-arc.md
nook_pr: 1168
status: completed
started_at: 2026-08-27T10:18:41Z
finished_at: 2026-08-27T18:37:00Z
agent: codex
---

# Restore Main with Kubernetes-native ARC browser execution

## Outcome

Main is green at `ef3dfb3154ac16b7a61bbe72dfb93c467d90fad9` in
[run 33102386826](https://github.com/meta-secret/nook/actions/runs/33102386826).
PRs [1168](https://github.com/meta-secret/nook/pull/1168) and
[1171](https://github.com/meta-secret/nook/pull/1171) are squash-merged.

Playwright runs directly inside an ordinary prepared Kubernetes Pod. ARC does
not start Docker or Podman, use DinD, mount a daemon socket, or run a nested
container runtime.

## Progress

- Diagnosed the original Main failure as an OOM-killed shared BuildKit shard,
  not a Playwright installation failure. The downstream browser jobs had been
  skipped.
- Forced zstd with force-compression across shared Rust/WASM cache writers,
  rotated affected cache generations, separated ARC remote-only client setup
  from hosted/local daemon recovery, and preserved browser evidence when cache
  publication fails while retaining fail-closed cache and deployment gates.
- Pruned only the exact BuildKit Pod's rebuildable local records after two
  zero-runner precondition snapshots. The prune reclaimed 47.61 GiB without
  restarting or deleting the Pod, PVC, or PV.
- Diagnosed the first replacement Main failure as a missing runtime mapping
  between the development origins sealed into the prepared image and
  Playwright's runtime expectations.
- Passed the three Main development origins into the prepared web-e2e Pod and
  added a static regression contract.
- Split the cohesive prepared-Pod integration contract after the source-size
  gate caught the initial test file at 1,001 lines. The resulting modules are
  774 and 228 lines, and all 45 vault-isolation contracts pass.

## Implementation problems

- Two review rounds on PR 1168 caught a second post-verification WASM solve and
  stale SRE Cortex references. Both were corrected before final validation.
- The first PR 1171 repository-policy run caught the one-line source-size
  violation before full validation. The obsolete validation wait was canceled,
  so only the repaired exact head consumed a complete e2e run.
- The successful replacement Main run observed one upstream BuildKit
  Dockerfile-frontend `concurrent map writes` event. The bounded recovery path
  handled it without a BuildKit restart or failed job; all monitored error
  counts were zero after that event.

## Decisions

- Keep ARC execution Kubernetes-native. Prepared OCI images are ordinary Pod
  inputs; Docker daemons, DinD, Podman, daemon sockets, privileged Pods, and
  hostPath runtime access remain prohibited.
- Keep Playwright and browser dependencies in the prepared browser image and
  execute tests directly in that Pod.
- Keep verified artifact production independent from cache publication so
  browser evidence remains available, while cache proof and deployment gates
  remain fail-closed.
- Keep shared BuildKit transport incidents separate from deterministic product
  and test-configuration failures.

## Validation

- PR 1168 exact-head full run
  [33097481804](https://github.com/meta-secret/nook/actions/runs/33097481804)
  passed both browser shards, extension e2e, Rust/WASM/web checks, UI demos, and
  preview deployment.
- PR 1171 exact-head full run
  [33101652161](https://github.com/meta-secret/nook/actions/runs/33101652161)
  passed both browser shards, extension e2e, all required checks, and preview.
- Replacement Main run
  [33102386826](https://github.com/meta-secret/nook/actions/runs/33102386826)
  passed native/WASM/web cache publication, the WASM publication gate, portable
  cache proof, Web e2e, extension e2e, UI demos, and development deployment.
- After ARC drained, all scale sets and EphemeralRunners were zero. BuildKit
  remained Ready with the same Pod UID and restart count; its last OOM remained
  the original event. The cache held 780 reclaimable records totaling 49.12
  GiB with `inUse=0`; there were no post-run OOM, panic events, EOF, or resets.

## Remaining work

None for Main restoration. The single recovered upstream BuildKit frontend
concurrency defect remains operationally bounded and should continue to be
tracked separately from product delivery.
