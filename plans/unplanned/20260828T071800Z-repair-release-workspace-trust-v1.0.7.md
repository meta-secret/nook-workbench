---
title: Repair release workspace trust and publish v1.0.7
feature: unplanned
issue: none
started_at: 2026-08-28T07:18:00Z
agent: codex
supersedes: plans/unplanned/20260828T064800Z-unblock-production-release-v1.0.7.md
---

# Task plan

## Interpreted request

Repair the newly exposed release-container Git workspace trust boundary with the smallest workflow-only change, deliver it normally, and publish the current product as immutable stable release `v1.0.7`.

## Requirements

- Register only the checked-out Actions workspace as a trusted Git directory before the release workflow performs Git validation inside its custom job container.
- Add focused workflow-contract evidence that the trust setup precedes the first Git-dependent release step and does not use a wildcard.
- Deliver the correction through a focused pull request with exact-head repository validation and readiness.
- After merge, release `1.0.7` from the resulting exact `origin/main` commit and verify the tag, GitHub Release assets, and live metadata on every production domain.
- Record both pre-deployment failures and the final outcome in Workbench.

## Constraints and exclusions

- Do not disable Git ownership protection globally with `safe.directory '*'`, skip release checks, move an existing tag, or publish from a non-main commit.
- Do not change product behavior, artifact budgets, runner architecture, or deployment credentials.
- Keep changes limited to the production release workflow and focused workflow-contract coverage.
- Do not expose credentials, raw logs, private data, or internal infrastructure details.

## Change budget and PR sequence

- Estimated authored changed lines: 20
- Owning modules, packages, or layers: Production release workflow and preflight workflow contracts
- Ownership units:
1. Capability: Trust exactly the Actions checkout inside the release container and pin ordering and scope in focused tests; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Focused workflow-contract tests prove exact workspace trust is established before Git validation and wildcard trust is absent
2. Capability: Integrate, validate, merge, re-freeze main, authorize one successor release attempt, and publish lifecycle evidence; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Ready and merged focused PR, successful exact-source release workflow, immutable tag and release assets, matching live metadata, and published completion worklog
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 20
- Current PR slice and acceptance evidence: Repair exact workspace trust in the production release container; Acceptance evidence: focused workflow-contract tests and exact-head repository validation pass
- PR slices and acceptance evidence: Repair exact workspace trust in the production release container; Acceptance evidence: focused workflow-contract tests and exact-head repository validation pass

## Initial plan

1. Apply an exact-workspace Git trust setup and focused contract coverage in an isolated SRE-owned workspace.
2. Integrate the verified handoff, run repository pre-push checks, open and validate a focused pull request, address owned findings, and merge only when exact-head readiness succeeds.
3. Freeze the resulting main commit, dispatch one successor `v1.0.7` release attempt, verify all immutable and live artifacts, and publish the Workbench worklog.

## Completion evidence

- Focused tests prove the release container trusts exactly `$GITHUB_WORKSPACE` before the first Git-dependent validation step and never enables wildcard trust.
- A merged Nook pull request passes the authoritative exact-head readiness audit.
- A successful Release production workflow publishes `v1.0.7` from the merged main commit.
- The tag, GitHub Release, extension assets, and all three production `release.json` endpoints identify the same version and commit.
- The linked Workbench worklog records both failed attempts, their non-mutation evidence, remediation, and final state.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, internal hostnames or addresses, or unnecessary infrastructure details.
