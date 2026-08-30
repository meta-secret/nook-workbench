---
title: Correct post-merge trusted publisher findings
feature: pr-delivery-efficiency
issue: null
started_at: 2026-08-30T00:00:00Z
agent: codex
gizmo_id: trusted-publisher-post-merge-corrections
---

# Task plan

## Interpreted request

Complete the remote-first delivery mission by correcting the six actionable findings submitted against the exact pull request 1208 head after that pull request merged, then deliver the correction through hosted validation, readiness, merge, and Workbench completion.

## Requirements

- Pin manual dependency-update execution to a commit resolved from trusted `main` before repository-controlled actions or Taskfiles execute.
- Parse Cargo dependency declarations structurally or fail closed on dependency forms that cannot be proven crates.io-only, including quoted TOML keys.
- Preserve sufficient ancestry for existing-PR merge-base validation.
- Deny arbitrary HTTPS egress from editor-authored Hive tests while preserving only explicitly trusted infrastructure destinations.
- Preserve trusted numeric GitHub run identity for Hive validation.
- Check out and verify the live existing-PR head for both dependency-update and default fix profiles.
- Preserve remote-first execution: only focused proof and pre-push hygiene run locally; broad validation runs through GitHub Actions.

## Constraints and exclusions

- Do not edit the universal multi-team admission runtime or ordinary delegation runtime; that remains a separate task.
- Do not weaken credential isolation, fail-closed network denial, exact-head verification, or adversarial coverage already on `main`.
- Gizmo owns Workbench, integration, pull-request state, review coordination, validation, readiness, and merge, and does not implement team-owned files.
- SRE owns implementation. Security supplies a required exact-head trust-boundary verdict after the SRE handoff is integrated.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: trusted-publisher-post-merge-corrections
- Estimated authored changed lines: 800
- Owning modules, packages, or layers: Weekly Rust dependency workflow, CI-agent trusted publisher, ARC Hive egress policy, and focused publisher tests
- Ownership units:
1. Capability: Trusted publisher post-merge corrections; Gizmo ID: trusted-publisher-post-merge-corrections; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: focused CI-agent tests cover trusted-main workflow dispatch, quoted Cargo keys, sufficient fetch ancestry, numeric run identity, default-profile existing-PR checkout, and fail-closed Hive egress; exact-head GitHub policy and PR validation pass
2. Capability: Trusted publisher security acceptance; Gizmo ID: trusted-publisher-post-merge-corrections; Functional owner: Security; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Security returns a non-blocking exact-head verdict proving untrusted workflow refs, Cargo sources, build scripts, and Hive test processes cannot obtain publication credentials or arbitrary network egress
- Public or cross-module interfaces: CI-agent fix profile, weekly workflow dispatch boundary, existing-PR publication verification, and ARC Hive validation egress
- Delivery shape: One PR
- PR sequence mode: One PR
- Current PR estimated authored changed lines: 800
- Current PR slice and acceptance evidence: Correct all six post-merge findings; Acceptance evidence: SRE focused tests, Security exact-head verdict, GitHub repository policy and complete PR validation, readiness, and merge
- PR slices and acceptance evidence:
1. Correct all six post-merge findings; Acceptance evidence: SRE focused tests, Security exact-head verdict, GitHub repository policy and complete PR validation, readiness, and merge

## Initial plan

1. Freeze two worker tasks on current `main`: SRE implementation followed by a repository-reading Security acceptance task over the integrated SRE frontier.
2. Use the installed universal typed admission runtime to compute, validate, authorize, and lease the exact attempts before the active harness creates them.
3. Integrate the accepted SRE commit, accept the Security verdict, run pre-push hygiene, publish the corrective PR, and resolve the six original threads with successor-PR evidence.
4. Complete exact-head hosted validation, readiness, squash merge, and Workbench completion.

## Completion evidence

- All six original findings have published fixes and successor-PR evidence.
- The required SRE implementation and Security verdict were admitted through the canonical typed runtime and bound to exact frontiers.
- The corrective PR has zero actionable unresolved threads and green exact-head GitHub validation.
- Readiness succeeds and the corrective PR is squash-merged.

## Safety review

This plan contains no raw prompt, transcript, credentials, private data, local paths, or raw logs.
