---
title: "Complete passkey-manager threat model, compatibility, and release proof"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-16T20:30:45Z
updated_at: 2026-07-16T23:50:07Z
source_issues: ["https://github.com/meta-secret/nook/issues/443"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:passkey-manager"]
legacy_state_reason: "COMPLETED"
---

# Complete passkey-manager threat model, compatibility, and release proof

## Imported context

This record was imported from [Nook GitHub issue #443](https://github.com/meta-secret/nook/issues/443)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #441 in milestone **Feature: Passkey manager**. Depends on #442, #446, #444, #447, and #445.

## Goal

Finish the security review, compatibility contract, documentation, and release proof for the passkey manager.

## Requirements

- Document trust boundaries for page world, isolated content script, service worker, offscreen WASM session, Simple Vault, sync providers, and relying parties.
- Threat-model origin/RP confusion, replay, message spoofing, clickjacking, malicious pages, compromised content scripts, stale counters, sync conflicts, logs, browser storage, and extension revocation.
- Define the supported Chromium/WebAuthn matrix and explicit native-authenticator fallback behavior; do not claim unsupported browser/native-provider integration.
- Audit generated artifacts, source maps, logs, IndexedDB, `chrome.storage`, URLs, and preview ZIPs for private material.
- Update the product spec, root README, extension README, privacy/security text, and release checklist.
- Prove the production extension ZIP and hosted Simple Vault flow, not only unit mocks.

## Acceptance criteria

- Full `task format` and `task check` pass after the final pushed commit.
- Repository-owned PR checks and exact-head preview deployment pass.
- A production-shaped browser test registers and uses a passkey against a local relying-party fixture, then demonstrates native fallback.
- Security review has no unresolved P1/P2 findings and every active PR review thread is replied to and resolved.
- Epic #441 and completed sub-issues are closed only after the acceptance path is verified.



## Historical comments

No comments.
