---
title: Deliver executable skill capabilities as a fourteen-slice GitHub stack
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/runtime-and-article-structure.md
started_at: 2026-08-26T03:52:06Z
agent: codex
---

# Deliver executable skill capabilities as a fourteen-slice GitHub stack

## Interpreted request

Supersede the ten-slice plan because its provider and article-normalization
slices still accumulated too much code and review history. Use GitHub's native
stacked pull requests. Merge each green lower layer before continuing upward,
and keep every successor narrowly reviewable.

## Requirements

- Keep every immediate-base PR strictly below 5,000 changed lines.
- Target roughly 3,000 changed lines or fewer per PR and preserve review-fix
  headroom.
- Keep every authored source file at or below 1,000 lines with decomposition
  headroom.
- Let each layer own one contract, one reason to change, and focused evidence.
- Rebase or restack every successor after a predecessor changes or merges.
- Request exact-head hosted review and complete repository validation before
  merging each layer.
- Keep the executable provider dormant until the final activation layer.

## Constraints and exclusions

- No Docker-in-Docker, nested daemon, or host Docker socket mount is allowed.
- No runtime, registry, or activation code belongs in semantic audit layers.
- No Markdown or HTML parser contract may leak into the dormant provider.
- No transport decoder may decide article policy.
- No published plan is edited; this record supersedes the ten-slice plan.

### Change budget and PR sequence

- Estimated authored changed lines: 19000
- Owning modules, packages, or layers: shared skill tooling, semantic rendering, Cortex corpus, active audit, dormant provider, reachability, source policy, sealed analysis, registry, execution, activation
- Public or cross-module interfaces: semantic render states, article audit states, bounded codecs, verification receipt, reachability proof, source-policy result, analyzer receipt, opaque registry authority, execution receipt, Cortex transport
- Delivery shape: GitHub stack #1112 plus small successor stacks as needed
- Current PR estimated changed lines: 2733
- Current PR slice and acceptance evidence: Shared TypeScript and sealed formatter tooling; focused contracts, Hive verification, repository validation, and exact-head review.
- PR slices and acceptance evidence:
1. Shared TypeScript and formatter tooling (#1088); Acceptance evidence: canonical host and Hive formatting, atomic remote replacement, focused contracts, and no nested daemon or socket mount.
2. Semantic render engine (#1111); Acceptance evidence: source-owned semantic states, DOM ancestry, visibility behavior, and focused renderer tests.
3. Cortex corpus normalization (#1113); Acceptance evidence: only mechanical article repairs accepted by the semantic engine.
4. Active Cortex audit migration (#1109); Acceptance evidence: authoritative Loom audit consumes the semantic stream and removes the parallel visibility API.
5. Dormant provider semantic core (#1089); Acceptance evidence: six parser-independent states, active diagnostic parity, and migration-ledger behavior.
6. Dormant provider transport (#1114); Acceptance evidence: exact envelope decoding, canonical paths, diagnostic pairing, and capacity bounds.
7. Dormant provider verifier and manifest; Acceptance evidence: independent policy verification, executable manifest validation, production-import isolation, and no registry wiring.
8. Finite loader foundation; Acceptance evidence: finite package and local-data specialization with nonescaping callsites.
9. Generated-artifact provenance and reachability closure; Acceptance evidence: exact producer receipts plus recursive workflow, action, subprocess, shell, and script closure.
10. Pure executable-source policy; Acceptance evidence: semantic TypeScript capability denial without process or runtime authority.
11. Sealed source-analysis executor; Acceptance evidence: exact image identity, source and memory bounds, one-slot scheduling, cancellation, and teardown.
12. Immutable source closure and registry; Acceptance evidence: frozen discovery, content-addressed plans, opaque authority, and an empty production catalog.
13. Sealed executable-skill runtime; Acceptance evidence: deterministic input, containment, bounded output, cancellation, and teardown receipts.
14. Cortex article activation; Acceptance evidence: static registration, host Markdown transport, workflow wiring, legacy removal, documentation, and end-to-end parity.

## Delivery procedure

1. Finish exact-head checks for the bottom PR and merge it through the GitHub
   stack UI or CLI.
2. Restack successors on the new main head and validate the next smallest PR.
3. Publish provider core, transport, and verifier as three separate PRs.
4. Reconstruct reachability as two independent layers before touching source
   policy or runtime execution.
5. Publish policy, analyzer, registry, executor, and activation independently.
6. Stop and split again whenever a layer approaches its review-headroom target.

## Completion evidence

- Fourteen linked PRs or smaller successor stacks, each strictly below 5,000
  immediate-base changed lines.
- Every authored source file remains at or below 1,000 lines.
- Every merged head is current with its base, repository-green, reviewed at the
  exact head, and free of unresolved feedback.
- Production execution remains impossible until the final activation layer.
- Workbench worklogs record each merge and any further superseding split.

## Safety review

This plan contains no request transcript, raw prompt, secret, private data,
local path, or unnecessary infrastructure detail.
