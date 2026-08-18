---
title: Improve Cortex architecture security domain flowchart
feature: unplanned
started_at: 2026-08-18T06:20:00Z
agent: antigravity
---

# Task plan

## Interpreted request

Improve the security domain model diagram in Cortex architecture documentation (.cortex/ARCHITECTURE.md and related design specifications). Replace the disconnected vertical tracks with a structured, coherent Mermaid flowchart that accurately captures cross-domain relationships across user/device, identity, vault, and replication tiers.

## Requirements

- Update the security domain model flowchart in `.cortex/ARCHITECTURE.md` to clearly depict:
  - User and local device boundary (Person -> Passkey -> Local App Key).
  - Identity domain (Identity -> Identity Control Log, Per-Vault DEK Envelopes).
  - Cross-domain links (Local App Key membership in Identity Control Log, DEK unwrap).
  - Vault domain (Identity authorization, Encrypted Vault Event Log decryption).
  - Replication transport (Provider replication of encrypted identity and vault event logs).
- Align `.cortex/design-docs/identity-vault-architecture.md` domain map where appropriate.
- Verify Cortex links, index synchronization, and article structure via `task loom:cortex-audit`.
- Host-format and pass pre-push hygiene via `task loom:pre-push`.
- Open a PR on `origin/main`, run exact-head validation, and squash-merge when ready.

## Constraints and exclusions

- Maintain strict compliance with .cortex/AGENTS.md, cortex-writer, and cortex-article-structure rules.
- Do not alter domain logic or cryptographic boundaries.
- Keep cognitive complexity low with clear sentences and semantic subgraphs.
- Do not copy raw conversation transcripts into Workbench records.

## Change budget and PR sequence

- Estimated authored changed lines: 80
- Owning modules, packages, or layers: .cortex architecture documentation
- Public or cross-module interfaces: none; documentation and architecture diagram only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 80
- Current PR slice and acceptance evidence: Coherent Mermaid flowchart and security domain map in .cortex/ARCHITECTURE.md and identity-vault-architecture.md; Acceptance evidence: task loom:cortex-audit passes with 0 broken links/findings, PR checks green
- PR slices and acceptance evidence: Coherent Mermaid flowchart and security domain map in .cortex/ARCHITECTURE.md and identity-vault-architecture.md; Acceptance evidence: task loom:cortex-audit passes with 0 broken links/findings, PR checks green

## Initial plan

1. Publish this task plan to Workbench.
2. Update .cortex/ARCHITECTURE.md and .cortex/design-docs/identity-vault-architecture.md with the improved Mermaid diagrams.
3. Run `task loom:cortex-audit` and `task loom:pre-push`.
4. Commit, run local review, push branch, and open PR.
5. Trigger exact-head PR validation and monitor checks.
6. Squash-merge when green and publish Workbench worklog and statistics.

## Completion evidence

- .cortex/ARCHITECTURE.md contains the coherent, subgraph-grouped security domain flowchart.
- .cortex/design-docs/identity-vault-architecture.md domain map is consistent.
- `task loom:cortex-audit` passes cleanly.
- Pull request is validated and squash-merged to main.

## Safety review

- The record contains only public-safe development context.
- No secrets, credentials, private user data, or raw logs are present.
