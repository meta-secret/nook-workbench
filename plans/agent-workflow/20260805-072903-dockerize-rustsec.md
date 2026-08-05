---
title: Dockerize RustSec and cargo-deny in rust-ecosystem
feature: agent-workflow
issue: none
started_at: 2026-08-05T07:30:00Z
agent: cursor
---

# Task plan

## Interpreted request

Stop compiling cargo-audit on the GitHub-hosted runner. Run RustSec audits
and cargo-deny inside Docker with pinned release binaries.

## Requirements

- Replace rustsec/audit-check host installs with a Bake/Docker check target.
- Prefer pinned musl binaries for cargo-audit and cargo-deny (no cargo install).
- Keep the four workspace audits (nook-app, fuzz, preflight, minds).
- Preserve minds advisory ignores via existing `.cargo/audit.toml`.
- Update preflight contracts and quality docs.

## Constraints and exclusions

- Do not put cargo-audit into the shared rust-base image.
- Do not require SeaweedFS/Zot credentials for this slim dependency-policy job.
- Leave Kani/fuzz/Dylint host tooling for a later change unless blocked.

## Initial plan

1. Add dependency-policy Dockerfile + bake target with pinned binaries.
2. Rewire rust-ecosystem.yml dependency-policy job to Bake that target.
3. Update contracts/docs; format; push; revalidate PR 922.

## Completion evidence

- Workflow no longer uses rustsec/audit-check or host cargo install.
- Docker Bake runs cargo-deny and cargo-audit for all four workspaces.
- PR validation re-triggered on the new head.

## Safety review

- Contains no raw prompt, transcript, secrets, private data, or raw logs.
