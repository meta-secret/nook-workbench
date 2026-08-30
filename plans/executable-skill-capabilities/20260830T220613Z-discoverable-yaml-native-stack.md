---
title: "Restore the executable skill YAML protocol and article activation"
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/discoverable-yaml-protocol.md
started_at: 2026-08-30T22:06:13Z
agent: codex
gizmo_id: executable-skill-yaml-protocol
---

# Restore the executable skill YAML protocol and article activation

## Interpreted request

Restore a discoverable, MCP-like YAML command surface inside owner-local Cortex skills. Build the reusable host as a normal tested TypeScript project, expose a static article-structure action, and integrate it with the canonical all-package discovery and verification boundary without moving agent or subagent lifecycle authority into skill code.

## Requirements

- Support no-argument and `--tools-list` discovery.
- Accept invocation only as one `--request-yaml=<multiline YAML>` argument; reject files, paths, stdin, split arguments, generic command envelopes, and unknown fields.
- Reject ambiguous YAML features including duplicate keys, aliases, anchors, tags, directives, multiple documents, unsafe integers, excessive depth, and excessive node or byte counts.
- Bound and redact every failure and result envelope.
- Keep the action registry static and read-only; the active harness retains agent and subagent execution.
- Co-locate the article action with its owning skill and preserve deterministic automatic package install, format, and verify discovery.
- Use pinned Bun, TypeScript, ESLint, Prettier, frozen installs, strict compiler settings, and behavior-focused tests.
- Deliver the complete capability through a native two-PR GitHub stack, exact-head review, checks, squash merges, and Workbench closeout.

## Constraints and exclusions

- Do not introduce request files, stdin transport, dynamic action loading, network access, process spawning, repository mutation, or autonomous agent lifecycle inside the skill host.
- Do not restore the former global `agentic-ai/skills` ownership model or a manually maintained executable-package inventory.
- Preserve the merged #1195 path, symlink, source, configuration, and workflow execution audits.
- Exclude generated lockfile lines from the authored estimate while retaining the frozen lockfile in delivery.
- Preserve unrelated and separately owned worktrees.

## Change budget and PR sequence

- Mission controller: Gizmo Prime
- Current Gizmo ID: executable-skill-yaml-protocol
- Estimated authored changed lines: 2467
- Owning modules, packages, or layers: `.cortex/teams/ai/dynamic-skills/executable-skill-host`, `.cortex/teams/ai/dynamic-skills/cortex-article-structure`, `agentic-ai/loom` executable-skill repository and policy tests, repository task and Cortex documentation
- Ownership units:
1. Capability: provider-neutral strict YAML host, discovery, and typed request validation; Gizmo ID: executable-skill-yaml-protocol; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: one-action discovery, formatting, lint, strict TypeScript, YAML codec, invocation, task, and Loom boundary tests pass with bounded adversarial inputs
2. Capability: co-located article schema adapter, static registration, and repository integration; Gizmo ID: cortex-article-yaml-activation; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: two-action discovery and multiline article invocation pass, files and stdin fail closed, all executable packages verify automatically, and full Loom plus structural audits pass
- Public or cross-module interfaces: `--tools-list`; no-argument discovery; `--request-yaml=<strict-domain-yaml-v1>`; bounded `strict-domain-yaml-response-v1`
- Delivery shape: Multiple PRs
- PR sequence mode: Stacked PRs
- Current PR estimated authored changed lines: 1680
- Current PR slice and acceptance evidence: Add the complete pinned provider-neutral TypeScript host, policy card and manifest, strict YAML codec, one-action tools discovery, single-token invocation, task surface, repository enforcement, and generic tests; its own frozen install, formatting, lint, TypeScript, tests, executable-package verification, and Loom audits pass.
- PR slices, estimates, and acceptance evidence:
1. Gizmo ID: executable-skill-yaml-protocol; Gizmo name: Strict executable-skill YAML protocol; Predecessor Gizmo ID: None; provider-neutral inline-YAML CLI, one-action discovery, pinned package, task surface, repository enforcement, and generic tests; Estimated authored changed lines: 1680; Acceptance evidence: package verify and Loom boundary gates pass with duplicate, alias, tag, directive, multi-document, bounds, redaction, transport, and argument regressions
2. Gizmo ID: cortex-article-yaml-activation; Gizmo name: Cortex article YAML activation; Predecessor Gizmo ID: executable-skill-yaml-protocol; article schema adapter, static registration, exact action execution, configuration edges, activation documentation, and parity tests; Estimated authored changed lines: 787; Acceptance evidence: two-action discovery, article execution parity, automatic all-owner verification, and exact full repository gates pass

## Initial plan

1. Preserve the verified full-work commit on the successor branch and materialize this two-slice Workbench feature and focused issues.
2. Build the predecessor as the independently verified strict-YAML foundation, then rebase the preserved integration remainder onto it and register both branches as a native GitHub stack.
3. Validate, review, and squash-merge the predecessor; retarget and update the successor to current main, then repeat exact-head delivery.
4. Publish issue completion, worklogs, statistics, and final feature status.

## Completion evidence

- Both semantic PR slices remain below 2,000 authored changed lines and every file from the verified full-work commit is present in their ordered union.
- Package-local verify, source/config architecture tests, full Loom, module experts, structural experts, pre-push, and hosted PR checks pass on each exact head as applicable.
- The CLI demonstrates deterministic discovery and a valid multiline inline-YAML article audit while adversarial request transports and YAML constructs fail closed.
- Both stack PRs receive settled exact-head review and squash-merge; the successor is revalidated after retargeting to main.

## Safety review

This plan contains no raw prompt, transcript, secret, private data, raw log, local path, or unnecessary infrastructure detail. The runtime is static and read-only, rejects ambient authority and alternate transports, and leaves all agent lifecycle execution with the existing harness.
