---
title: "Specify the Nook AI-harness threat model and broker protocol"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:08Z
updated_at: 2026-07-19T00:21:08Z
source_issues: ["https://github.com/meta-secret/nook/issues/497"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Specify the Nook AI-harness threat model and broker protocol

## Imported context

This record was imported from [Nook GitHub issue #497](https://github.com/meta-secret/nook/issues/497)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

Before Nook exposes any harness integration, it needs a versioned protocol and threat model that treats the model, harness process, workspace, browser page, local operating-system user, and Nook vault as distinct trust boundaries. A conventional MCP tool that returns a password/API key as text would place the secret in model context and transcripts and is not acceptable as the default design.

## Scope

- Threat-model Codex, Cursor, malicious prompts/repositories/pages, compromised plugins, local cross-user callers, replay, confused deputy, and stale grants.
- Define the V1 operation set and state machine: pair, status, request browser login, request brokered API use, cancel, list/revoke the caller's grants, and separately request high-risk plaintext export.
- Define typed request/response/error schemas, protocol negotiation, request ids, deadlines, cancellation, idempotency, and redaction.
- Define how harness instance, OS user, workspace/task context, target origin/API audience, account, operation, delivery mode, and expiry are cryptographically bound.
- Choose the local transport and authenticated handoff between the harness-facing bridge and Nook/extension; evaluate MCP sidecar/native messaging vs a localhost service without assuming MCP tool output can carry secrets.
- Specify capability lifecycle, safe audit metadata, unlock/consent transitions, and behavior on lock, vault deletion, device revocation, credential rotation, broker restart, browser restart, and harness disconnect.
- Define which requests are categorically denied in V1, including bulk enumeration/export and Sentinel access.

## Acceptance Criteria

- A checked-in design document contains data-flow and trust-boundary diagrams plus a misuse/abuse-case table.
- The protocol has a versioned machine-readable schema and examples for Codex and Cursor.
- Normal protocol responses cannot contain plaintext secret fields by construction.
- Origin/audience normalization, capability binding, expiry, replay rejection, redaction, and state transitions are specified as Rust-owned domain behavior.
- Security review explicitly covers prompt injection, malicious workspace configuration, local IPC substitution, DNS rebinding, symlink/socket attacks, arbitrary subprocess exfiltration, output/log leakage, and cancellation races.
- The document identifies the exact follow-on implementation boundaries in `nook-core`, native/WASM adapters, the extension, and harness adapters.

## Notes

- Reuse the memory-only, request/vault-bound extension handoff principles already documented in `.cortex/design-docs/vault-session-and-lock.md`.
- Related browser auth-agent work: #237, #461, #465.

## Historical comments

No comments.
