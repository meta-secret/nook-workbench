---
title: "Make the browser extension Simple-only and exclude Sentinel"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:18Z
updated_at: 2026-07-14T05:44:31Z
source_issues: ["https://github.com/meta-secret/nook/issues/363"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Make the browser extension Simple-only and exclude Sentinel

## Imported context

This record was imported from [Nook GitHub issue #363](https://github.com/meta-secret/nook/issues/363)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

The extension currently pairs through the unified `nokey.sh` origin, describes
selected vaults generally, and injects a content script on `<all_urls>`. Sentinel
must have no Nook-extension integration or extension-held vault/share/provider
material.

## Scope

- Change pairing to `https://simple.nokey.sh/extension-connect` only.
- Make extension grants and paired-vault metadata explicitly Simple-only through
  typed Rust/WASM validation.
- Reject Sentinel vault metadata, snapshots, envelopes, or pairing payloads
  before extension persistence.
- Exclude `https://sentinel.nokey.sh/*` from static content-script injection and
  add a runtime fail-closed origin guard.
- Keep extension storage/device identity separate from the Simple web app.
- Update consent copy, localization, device labels, revocation, and failure
  states for the Simple-only contract.
- Update #234's broader autofill work with this invariant without changing its
  ownership.

## Acceptance Criteria

- The manifest is externally connectable only to the Simple production origin
  and excludes the Sentinel origin from content scripts.
- Unit and packaged-extension Playwright tests prove Sentinel cannot pair, be
  selected, persist data, or receive fill actions.
- A forged/mislabeled Sentinel pairing payload fails in Rust/WASM, not only in
  the popup UI.
- The browser-extension product spec no longer implies that arbitrary vaults
  are eligible.

## References

- #234
- #236
- `.cortex/product-specs/browser-extension.md`
- `nook-app/nook-web/nook-web-extension/src/manifest.ts`
- `nook-app/nook-web/nook-web-extension/src/background/service-worker.ts`


## Historical comments

No comments.
