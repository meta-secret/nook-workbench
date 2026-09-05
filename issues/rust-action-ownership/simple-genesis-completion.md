---
title: Own Simple genesis completion actions
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-simple-genesis-completion
created_at: 2026-09-05T20:15:00Z
updated_at: 2026-09-05T20:15:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/sentinel-signature.md
---

# Own Simple genesis completion actions

## Outcome

Completed Simple-vault genesis owns its atomic staged publication and pending-marker cleanup through the existing consuming `SimpleGenesisCompletion` state.

## Scope

Five Rust files with a ceiling of 300 authored additions. Move cleanup and staged publication onto the existing completion state, adapt callers and tests, activate ownership enforcement in the cleanup child module, and add focused marker-safety coverage if absent.

## Acceptance criteria

- [ ] `SimpleGenesisCompletion` consumes itself to perform atomic completion cleanup.
- [ ] Staged publication preserves directory migration, validation, concurrent-update rebasing, signing-seed publication, and transaction ordering.
- [ ] Cleanup deletes only a marker matching store, identity, and creation timestamp.
- [ ] The cleanup child module denies homeless functions without blanket suppression.
- [ ] Hosted checks, source SECURITY, readiness, squash merge, and Workbench completion pass.

## Limits and decisions

Use the existing completion enum as the simplest typestate boundary. Do not add artificial states, public constructors, authorization claims, protocol, schema, recovery, fallback, ABI, dependency, or logging changes.
