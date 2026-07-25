---
title: "Ship Codex and Cursor adapters for the Nook credential broker"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:10Z
updated_at: 2026-07-19T00:21:10Z
source_issues: ["https://github.com/meta-secret/nook/issues/499"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Ship Codex and Cursor adapters for the Nook credential broker

## Imported context

This record was imported from [Nook GitHub issue #499](https://github.com/meta-secret/nook/issues/499)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

A generic broker is not a finished feature unless Codex and Cursor can discover it, pair safely, request supported operations, and present actionable status without encouraging secret export into prompts or project configuration.

## Scope

- Provide supported Codex and Cursor installation/configuration paths for the versioned Nook broker protocol.
- Expose only safe operations by default: broker status, pair/request approval, browser login request, brokered API request/use, cancel, and revoke own grants.
- Ensure adapter descriptions/prompts do not invite the model to ask for plaintext credentials or claim success before Nook reports completion.
- Bind requests to the current harness instance and workspace/task context using the broker's authenticated mechanism.
- Provide clear locked/approval/denied/cancelled/expired/unsupported recovery messages.
- Document safe examples for website login and API use, including why secrets are not returned as tool content.
- Version and test adapter compatibility independently from the vault schema.

## Acceptance Criteria

- Current supported Codex and Cursor builds can install/configure, pair, reconnect, request browser login, request brokered API use, cancel, and revoke through documented steps.
- Configuration files contain broker location/identity metadata only, never passwords/API keys or reusable bearer capabilities.
- Tool results are status/opaque handles only and are redacted in captured harness transcripts.
- Adapters do not expose bulk list/search/export operations.
- Contract tests run the same conformance suite against both harness adapters, including version mismatch, locked Nook, denial, timeout, cancellation, restart, revoked pairing, and malicious workspace instructions.
- User docs include uninstall/revoke/complete-data-deletion steps and troubleshooting without secret-bearing diagnostics.

## Dependencies

Blocked on the versioned protocol and authenticated broker. Browser and API actions consume their respective sibling implementations.

## Historical comments

No comments.
