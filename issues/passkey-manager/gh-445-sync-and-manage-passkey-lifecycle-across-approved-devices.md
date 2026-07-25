---
title: "Sync and manage passkey lifecycle across approved devices"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/445"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Sync and manage passkey lifecycle across approved devices

## Imported context

This record was imported from [Nook GitHub issue #445](https://github.com/meta-secret/nook/issues/445)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**. Depends on #442, #444, and #447.

## Goal

Complete passkey lifecycle behavior across approved Simple Vault devices using the canonical immutable event-log pipeline.

## Requirements

- Registration emits the normal encrypted secret-created event and syncs to approved replicas.
- Successful assertion persists a monotonic counter replacement atomically through the normal event path.
- Deletion/revocation makes the credential unavailable after convergence and prevents stale devices from silently resurrecting it.
- Concurrent counter updates converge safely; counter regressions fail closed or resolve by documented monotonic policy.
- Passkeys appear in Simple Vault metadata/search with RP and account labels, but cannot be revealed/copied as raw secrets.
- Importers continue to skip unsupported foreign passkey exports unless a separately specified safe format exists.

## Acceptance criteria

- Multi-device Rust workflow tests cover create/sync/assert/update/delete and concurrent counter behavior.
- Extension e2e proves use after sync on a second approved extension device.
- Lock, extension grant revocation, device revocation, and vault-type capability checks prevent use immediately.
- Existing password/login/secure-note/seed/API-key flows remain unchanged.



## Historical comments

No comments.
