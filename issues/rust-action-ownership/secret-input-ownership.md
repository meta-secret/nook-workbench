---
title: Own secret input and construction actions
status: in_progress
priority: p1
automation: manual
owner: cypherkitty
gizmo_id: rust-action-ownership-secret-input-ownership
created_at: 2026-09-08T09:03:00Z
updated_at: 2026-09-08T09:03:00Z
source_issues: []
related_prs: []
depends_on:
  - issues/rust-action-ownership/secret-presentation-actions.md
---

# Own secret input and construction actions

## Context

Secret generation, mnemonic handling, payment-card normalization, validation,
and YAML construction still expose production helpers as detached functions.
Those operations accept domain values that should travel through named owners so
callers cannot bypass the intended action graph.

## Outcome

Password generation, BIP-39 vocabulary and parsing, payment-card validation,
secret filtering/validation, and secret YAML construction are owned by existing
secret domain types or small named request types. Public core and WASM callers
use the owned APIs while preserving wire behavior, validation order, and error
semantics. Test-only helpers remain permitted under `#[cfg(test)]` and are not
converted into production compatibility shims.

## Scope

- Core secret password, BIP-39, credit-card, validation, and secret-view modules.
- Direct core callers, public re-exports, and typed WASM adapters required by the
  migrated APIs.
- Existing focused behavior tests and bounded ownership coverage.

## Exclusions

- Cryptographic algorithms, persisted schemas, browser UI, and unrelated import
  pipelines.
- Framework/export callbacks that remain explicit adapter boundaries.
- Artificial typestate for stateless validation operations.

## Acceptance criteria

- [ ] No production free functions remain in the scoped modules without a
  meaningful domain owner.
- [ ] Password, mnemonic, card, filtering, validation, and YAML behavior remain
  unchanged and existing tests use owned calls.
- [ ] Core and WASM consumers use named typed APIs without compatibility free
  wrappers.
- [ ] Dylint ownership enforcement covers the migrated modules; ordinary
  `#[cfg(test)]` helpers remain accepted by policy.
- [ ] Hosted validation, exact-head readiness, remote Loom, merge, and
  Workbench closeout pass.

## Progress

- 2026-09-08: Started after secret host/presentation ownership merged; selected
  as the next cohesive secret action graph under the project-wide migration.

## Findings and decisions

- Prefer associated methods on `PasswordGenerationOptions`, `Bip39MnemonicWordCount`,
  `CreditCardSecret`, `SecretType`, and `SecretFormFields`; introduce a small
  request owner only where an operation has multiple independent inputs.
- Preserve public return types and validation error ordering. Do not add broad
  suppression attributes for production code.
