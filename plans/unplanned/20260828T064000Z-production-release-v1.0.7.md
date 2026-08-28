---
title: Production release v1.0.7
feature: unplanned
issue: none
started_at: 2026-08-28T06:40:00Z
agent: codex
---

# Task plan

## Interpreted request

Publish the current, validated main revision as the next immutable stable Nook release so the production landing page and isolated vault applications no longer serve the month-old build.

## Requirements

- Release semantic version `1.0.7` from the exact current `origin/main` commit.
- Use the repository-owned production release workflow without bypassing its invariant, build, browser, isolation, or artifact checks.
- Require an immutable `v1.0.7` tag and matching GitHub Release assets.
- Verify `release.json` on the landing, Simple Vault, and Sentinel Vault production domains reports version `1.0.7` and the released commit.
- Record the completed or blocked release in Workbench.

## Constraints and exclusions

- No product, test, workflow, configuration, or documentation changes are expected.
- Do not move an existing tag, skip failed release gates, weaken runner isolation, or expose credentials or internal infrastructure details.
- Release only the fetched `origin/main` commit; abort if `main` advances before dispatch and re-freeze the new exact commit.

## Change budget and PR sequence

- Estimated authored changed lines: 1
- Owning modules, packages, or layers: Production release operations and delivery lifecycle records
- Ownership units:
1. Capability: Execute and verify the immutable production release; Functional owner: SRE; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Green Release production workflow for version 1.0.7 at the frozen origin/main commit, immutable tag and GitHub Release, and matching live metadata on all production domains
2. Capability: Coordinate exact-source authorization and publish lifecycle evidence; Functional owner: Gizmo; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Published plan and completion worklog linked to the release run and exact commit
- Public or cross-module interfaces: None
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1
- Current PR slice and acceptance evidence: No source PR; release the frozen main commit through the existing production workflow; Acceptance evidence: successful exact-source release and matching live release metadata
- PR slices and acceptance evidence: No source PR; release the frozen main commit through the existing production workflow; Acceptance evidence: successful exact-source release and matching live release metadata

## Initial plan

1. Confirm the current main revision, recent Main validation, latest semantic release, and absence of an existing `v1.0.7` tag.
2. Dispatch the repository-owned production release workflow for `1.0.7` at the frozen commit and monitor it to a terminal result.
3. Verify the tag, GitHub Release, release assets, and production metadata on all three domains, then publish the Workbench worklog.

## Completion evidence

- A successful Release production workflow URL tied to the frozen main commit.
- Git tag and GitHub Release `v1.0.7` resolve to that commit with the expected immutable extension artifacts.
- The landing, Simple Vault, and Sentinel Vault `release.json` responses all report `1.0.7` and the exact released commit.
- A published Workbench worklog records the outcome and any failures or remaining work.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data, raw logs, local paths, internal hostnames or addresses, or unnecessary infrastructure details.
