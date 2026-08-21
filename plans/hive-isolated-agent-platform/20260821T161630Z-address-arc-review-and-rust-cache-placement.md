---
title: Address ARC review and Rust cache placement
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/connect-trusted-builds-to-zot-cache.md
started_at: 2026-08-21T16:16:30Z
agent: codex
---

# Address ARC review and Rust cache placement

## Interpreted request

Complete the remaining ARC review corrections in a fresh pull request and move
trusted daemon-free Rust cache consumers onto the deployed k0s scale set so
large Zot layers no longer cross the public network to hosted workers.

This plan supersedes the narrower review-only plan at
`plans/hive-isolated-agent-platform/20260821T160641Z-address-pr-1069-review-followups.md`.

## Requirements

- Resolve all five current-head findings left on merged PR 1069.
- Prove the active repository route and the live `nook-k0s` scale set.
- Route trusted Main and same-repository PR native Rust and Rust ecosystem jobs
  to the configured ARC runner.
- Keep fork pull requests and tasks requiring a Docker runtime on
  GitHub-hosted workers.
- Remove the policy-tools Docker image tar export/import path so the dependency
  policy gate is daemon-free on ARC.
- Preserve repository-scoped cache authorization and Main-versus-PR write
  boundaries.
- Add contracts for runner placement, daemon-free policy execution, smoke
  dispatch, timeout, and credential lifecycle.
- Deliver, validate, reply to the original threads, and merge through a new PR.

## Constraints and exclusions

- Docker-in-Docker, Sysbox, Docker socket mounts, shared BuildKit, and host paths
  remain prohibited.
- The 100 GiB BuildKit state limit, 16 GiB guest envelope, zero warm runners,
  and four-job concurrency ceiling remain unchanged.
- Browser, WASM, deployment, release, and other Docker-runtime jobs remain on
  hosted workers in this slice.
- The existing registry hostname is retained because live routing proves that
  it terminates locally on the k0s node for ARC traffic.
- No credential material enters source, artifacts, or Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 600
- Owning modules, packages, or layers: ARC Task operations, GitHub Rust workflow placement, Rust ecosystem BuildKit targets, infrastructure and preflight contracts, executable agent guidance, Hive platform design authority, and root command documentation
- Public or cross-module interfaces: trusted Rust job `runs-on` selection, `task docker:ecosystem:dependency-policy`, `task infra:arc:smoke`, `task infra:deploy`, and the ARC GitHub credential contract
- Delivery shape: One PR
- Current PR estimated authored changed lines: 600
- Current PR slice and acceptance evidence: One ARC review and trusted Rust placement slice; Acceptance evidence: focused static contracts, exact-head ARC native and ecosystem runs, Cortex audit, complete PR validation, targeted thread replies, and live scale-set status
- PR slices and acceptance evidence: One ARC review and trusted Rust placement slice; Acceptance evidence: focused static contracts, exact-head ARC native and ecosystem runs, Cortex audit, complete PR validation, targeted thread replies, and live scale-set status

## Initial plan

1. Verify unresolved feedback and trace the cited cache layer to its workflow,
   job, runner, registry path, and image-export behavior.
2. Correct smoke dispatch, timeout, credential lifecycle, executable guidance,
   and public deployment documentation.
3. Replace the policy-tools Docker load/run path with a BuildKit-only policy
   target.
4. Route only trusted daemon-free native and ecosystem Rust gates through ARC.
5. Run focused contracts, push the new PR, execute representative ARC jobs,
   and complete exact-head validation.
6. Reply to and resolve the original five threads, merge, deploy any required
   infrastructure changes, and publish Workbench completion evidence.

## Completion evidence

- GitHub reports `NOOK_RUNS_ON=nook-k0s` and representative Rust jobs report the
  `nook-k0s` label and ephemeral runner names.
- The cited policy-tools gate executes through BuildKit without `type=docker`,
  tarball export, Docker load, or Docker runtime use.
- Trusted Main and same-repository PR Rust gates use ARC. Fork paths remain
  hosted.
- ARC smoke works from pushed Main and has a 25-minute bounded deadline.
- Exact-head required checks pass with zero unresolved review threads.
- The new PR merges and the Workbench issue, worklog, and statistics identify
  both review closure and cache-placement evidence.

## Safety review

- Sensitive operational material and private user content are absent.
