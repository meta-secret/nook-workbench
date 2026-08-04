---
title: Finalize the identity bridge research direction
feature: devices-and-access
issue: issues/devices-and-access/README.md
started_at: 2026-08-04T09:09:17Z
agent: codex
---

# Task plan

## Interpreted request

Consolidate the identity-management research catalog around the accepted
identity bridge, preserve selected prior directions as frozen inspiration, and
deliver the finished research and architecture work through pull request 912.

## Requirements

- Present identity as a distributed relationship across physical devices and
  installation-specific device keys.
- Show vault authorization as explicit identity-to-vault grants in both
  identity-first and vault-first perspectives.
- Preserve a compact responsive hierarchy with readable graph labels and
  independent relationship paths on mobile.
- Keep only the research sketches selected during review and remove rejected
  variants from the catalog.
- Preserve accepted identity-and-keys and identity-bridge states as frozen
  Inspiration entries.
- Format the complete change, validate it through repository-owned GitHub
  Actions, address actionable feedback, and squash-merge pull request 912.

## Constraints and exclusions

- The interactive graph uses synthetic research fixtures and does not change
  shipping vault behavior, persisted identity state, cryptography, or the typed
  Rust/WASM boundary.
- Device keys, virtual identities, and vault grants remain distinct concepts;
  provider identity is not inferred from WebAuthn observations.
- Unrelated worktree state, active product surfaces, and infrastructure are
  outside this delivery.
- Heavy product validation runs only on GitHub-hosted workers; local execution
  is limited to required formatting and catalog-contract checks.

## Initial plan

1. Audit the accumulated research diff and remove stale rejected artifacts.
2. Apply repository formatting and the UI/catalog contract against current
   main.
3. Commit the coherent final research state and push it to pull request 912.
4. Trigger exact-head repository validation and inspect all current feedback.
5. Fix any failures or actionable comments, repeat validation as needed, and
   squash-merge when readiness passes.
6. Publish the linked completion worklog and PR statistics to Nook Workbench.

## Completion evidence

- Pull request 912 contains only the accepted architecture and research
  catalog state on a current base.
- The research build and applicable PR validation workflows succeed on the
  exact merged head.
- Review conversations are resolved and the readiness audit passes before the
  squash merge.
- Workbench contains the linked completion record and immutable PR statistics.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure detail.
