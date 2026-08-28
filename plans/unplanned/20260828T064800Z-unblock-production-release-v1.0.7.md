---
title: Unblock and publish production release v1.0.7
feature: unplanned
issue: none
started_at: 2026-08-28T06:48:00Z
agent: codex
supersedes: plans/unplanned/20260828T064000Z-production-release-v1.0.7.md
---

# Task plan

## Interpreted request

Remove the newly discovered release blocker with the smallest governed validation correction, deliver that correction normally, and then publish the current product as immutable stable release `v1.0.7`.

## Requirements

- Preserve the existing optimized and compressed production WASM requirements.
- Calibrate the raw artifact ceiling to accommodate the current optimized vault engine without relaxing the 2.3 MB Brotli transfer budget.
- Add or retain focused contract evidence that both size protections remain enforced.
- Deliver the correction through a focused pull request with exact-head repository validation and readiness.
- After merge, release `1.0.7` from the resulting exact `origin/main` commit and verify the tag, GitHub Release assets, and live metadata on every production domain.
- Record both the failed first release attempt and final outcome in Workbench.

## Constraints and exclusions

- Do not remove the size gate, increase the Brotli limit, skip release checks, or change product behavior.
- Do not move an existing tag or publish from a non-main commit.
- Keep changes limited to the production WASM size-budget contract and its focused tests; route any product-code optimization dependency back to the delivery owner.
- Do not expose credentials, raw logs, private data, or internal infrastructure details.

## Change budget and PR sequence

- Estimated authored changed lines: 10
- Owning modules, packages, or layers: Production vault artifact verification and release-gate contracts
- Ownership units:
1. Capability: Calibrate the optimized vault WASM raw-size release budget while preserving the compressed transfer budget; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused verifier and preflight contracts pass, the current optimized artifact is below both explicit ceilings, and the Brotli ceiling remains 2.3 MB
2. Capability: Integrate, validate, merge, re-freeze main, authorize the release, and publish lifecycle evidence; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Ready and merged focused PR, successful exact-source release workflow, immutable tag and release assets, matching live metadata, and published completion worklog
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 10
- Current PR slice and acceptance evidence: Calibrate the production raw WASM ceiling without changing the Brotli transfer ceiling; Acceptance evidence: focused release-budget contract tests and exact-head repository validation pass
- PR slices and acceptance evidence: Calibrate the production raw WASM ceiling without changing the Brotli transfer ceiling; Acceptance evidence: focused release-budget contract tests and exact-head repository validation pass

## Initial plan

1. Apply the smallest justified raw-budget correction and focused contract coverage in an isolated SRE-owned workspace.
2. Integrate the verified handoff, run repository pre-push checks, open and validate a focused pull request, address owned findings, and merge only when exact-head readiness succeeds.
3. Freeze the resulting main commit, dispatch one `v1.0.7` release, verify all immutable and live artifacts, and publish the Workbench worklog.

## Completion evidence

- Focused tests prove the optimized raw ceiling is explicit and the Brotli ceiling remains unchanged.
- A merged Nook pull request passes the authoritative exact-head readiness audit.
- A successful Release production workflow publishes `v1.0.7` from the merged main commit.
- The tag, GitHub Release, extension assets, and all three production `release.json` endpoints identify the same version and commit.
- The linked Workbench worklog records the initial blocked attempt, remediation, and final state.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, internal hostnames or addresses, or unnecessary infrastructure details.
