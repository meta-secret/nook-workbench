---
title: "Add first-class API credentials and agent-use policy to nook-core"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:05Z
updated_at: 2026-07-19T00:21:05Z
source_issues: ["https://github.com/meta-secret/nook/issues/494"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Add first-class API credentials and agent-use policy to nook-core

## Imported context

This record was imported from [Nook GitHub issue #494](https://github.com/meta-secret/nook/issues/494)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

API keys are a primary use case, but a generic password entry does not carry enough policy to safely decide where and how an agent may use a credential. Nook needs a typed API-credential model and Rust-owned matching/authorization rules before any harness transport can consume it.

## Scope

- Add a first-class encrypted API credential item (or an explicitly versioned equivalent) with service name, normalized API audience(s), account/label, secret value, authentication scheme, optional scopes, optional expiry/rotation metadata, and allowed delivery modes.
- Define safe representation for common schemes such as bearer token, API-key header, and target-specific credential helper without allowing arbitrary secret-bearing shell templates.
- Implement create/update/delete/project/search/reveal behavior through `nook-core` and typed WASM/native bindings.
- Implement origin/API-audience normalization, match confidence, ambiguity handling, deny rules, and agent-use policy in Rust.
- Persist and synchronize the item through the encrypted event log with documented schema/migration handling.
- Keep provider tokens distinct: Nook sync-provider credentials are not automatically agent-usable API credentials.

## Acceptance Criteria

- Users can create, edit, rotate, and delete an API credential with explicit audience and delivery policy.
- API credentials remain encrypted at rest and in the event log; metadata exposed to UI/harnesses is the minimum needed for an approved selection.
- Rust rejects wrong-audience, ambiguous, expired, disallowed-delivery, forged-item-kind, and Sentinel-incompatible requests.
- Rotation/replacement invalidates outstanding capabilities for the prior secret.
- Behavior-focused Rust tests cover item lifecycle, migrations/backward compatibility, projection/conflict behavior, matching, authorization, redaction, and zeroization.
- Typed WASM/native wrappers contain no authored TypeScript domain policy or `null`.
- User-visible UI strings use shared translation catalogs.

## Notes

This issue models API keys as vault secrets. It must not repurpose GitHub/Drive/iCloud sync-provider credentials from `nook_auth`.

## Historical comments

No comments.
