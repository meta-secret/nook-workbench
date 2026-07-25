---
title: "Migrate unified-origin vaults safely and add cross-app navigation"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:21Z
updated_at: 2026-07-14T05:44:32Z
source_issues: ["https://github.com/meta-secret/nook/issues/364"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Migrate unified-origin vaults safely and add cross-app navigation

## Imported context

This record was imported from [Nook GitHub issue #364](https://github.com/meta-secret/nook/issues/364)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

Moving from `nokey.sh` to two subdomains creates new origins. IndexedDB,
service-worker state, session storage, and origin-scoped WebAuthn behavior do not
move automatically. Existing encrypted vaults and protected device identities
must not be stranded, silently copied, downgraded, or mixed.

## Scope

- Keep `nokey.sh` as a locked public landing/router and a time-bounded legacy
  migration broker, never a shared unlocked runtime after migration.
- Detect each existing local vault's validated Rust-owned type and offer only
  the matching destination.
- Transfer encrypted vault artifacts through an explicit, origin-authenticated,
  replay-resistant handoff; never place plaintext, keys, shares, provider
  credentials, or full vault blobs in URLs, DOM, logs, or untyped TypeScript.
- Re-establish destination-origin device protection and re-enrollment safely;
  Sentinel participant shares must remain quorum-bound and must not become a
  full-key envelope during migration.
- Define migration retry, cancellation, partial-state cleanup, rollback, and
  already-migrated behavior.
- Provide explicit cross-app navigation that locks/clears the current session
  before leaving the origin.
- Configure distinct WebAuthn RP/origin policy and host-only browser state.

## Acceptance Criteria

- Existing Simple and Sentinel local data each have a tested migration path to
  the correct origin.
- Wrong-destination, replayed, expired, partial, or tampered transfers fail
  closed and leave source data intact.
- Sentinel migration still requires a valid participant/quorum protocol and
  never creates an extension/full-key bypass.
- Cross-app navigation cannot carry an unlocked session or plaintext data.
- Unit, Rust, WASM, and Playwright tests cover success and all failure/rollback
  states.

## References

- `.cortex/design-docs/vault-session-and-lock.md`
- `.cortex/design-docs/secret-store-identity.md`
- `nook-app/nook-wasm/src/storage/indexed_db.rs`
- `nook-app/nook-web/nook-web-app/src/lib/passkey-device-protection.ts`


## Historical comments

No comments.
