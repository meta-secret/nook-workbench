---
title: Refresh repository dependencies
feature: unplanned
issue: issues/unplanned/refresh-repository-dependencies.md
started_at: 2026-08-08T17:20:00Z
agent: codex
---

# Task plan

## Interpreted request

Bring supported third-party dependencies across the repository up to date,
including Rust crates, JavaScript and TypeScript packages, GitHub Actions, and
container or downloaded tool pins. Complete safe major-version migrations where
the current code can adopt them, then deliver and merge one validated Nook PR.

## Requirements

- Inventory direct and locked Rust dependencies across every Cargo workspace.
- Inventory JavaScript and TypeScript dependencies across every package and lockfile.
- Inspect GitHub workflow action pins and versioned tools used by CI scripts.
- Inspect Docker base images, package-manager tools, and downloaded binaries.
- Update stale dependencies and migrate supported major versions with required code or configuration changes.
- Preserve security boundaries, deterministic installs, and reproducible image pins.
- Run repository formatting before every push and use GitHub-hosted exact-head validation.
- Address existing PR feedback and squash-merge only after the readiness audit passes.

## Constraints and exclusions

- Do not replace mature dependencies solely for novelty.
- Do not force unsupported upgrades or remove intentional compatibility pins without evidence.
- Do not run heavy product validation on the local agent host.
- Treat generated and transitive lockfile changes as mechanical consequences of direct upgrades.

## Initial plan

1. Establish the current dependency inventory and determine available stable upgrades.
2. Apply Rust, web, workflow, and container upgrades in coherent groups.
3. Resolve migration breakage and refresh all affected lockfiles and immutable digests.
4. Format, publish a PR, and run focused hosted checks followed by complete exact-head validation.
5. Fix failures and feedback until readiness passes, squash-merge, and publish completion records.

## Completion evidence

- A merged Nook PR listing upgraded dependencies and any deliberately retained pins.
- Deterministic lockfiles and digest-pinned container or action references where required.
- Green repository-owned exact-head checks, zero unresolved review threads, and a successful readiness audit.
- A linked Workbench issue, plan, worklog, and AI-agent statistics record.

## Safety review

- This record contains no raw prompt, chat transcript, secrets, private data,
  raw logs, local paths, or unnecessary infrastructure details.
