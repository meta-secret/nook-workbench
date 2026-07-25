---
title: "Epic: Split Simple and Sentinel into isolated web applications"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:34:32Z
updated_at: 2026-07-14T05:44:30Z
source_issues: ["https://github.com/meta-secret/nook/issues/360"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Epic: Split Simple and Sentinel into isolated web applications

## Imported context

This record was imported from [Nook GitHub issue #360](https://github.com/meta-secret/nook/issues/360)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Split Nook's everyday Simple vault and high-assurance Sentinel vault into two
independent web applications:

- `https://simple.nokey.sh` owns Simple vault creation, unlock, management,
  sync, and browser-extension pairing/autofill.
- `https://sentinel.nokey.sh` owns Sentinel genesis, quorum unlock,
  participant/share management, and high-assurance storage without any Nook
  browser-extension integration.
- `https://nokey.sh` remains the public landing/router and never becomes a
  shared unlocked-vault runtime.

This is a product and security boundary, not a hostname-only presentation
change. The two apps must ship as separate artifacts with separate browser
origins, storage, WebAuthn relying-party scopes, session state, and typed
Rust/WASM capability surfaces. Sentinel must fail closed if an extension-class
client or Simple-only unlock path is presented.

## Product Decisions

- Simple and Sentinel vaults may coexist in a user's Nook portfolio, but never
  in one origin-local registry or unlocked session.
- Vault type remains immutable after `store_id` creation.
- The browser extension is a Simple-vault companion only.
- Sentinel has no extension pairing route, extension grant, autofill surface,
  password-only unlock fallback, or full-key extension envelope.
- Shared audited Rust crates are allowed; a shared universal production web
  bundle is not.
- Existing `nokey.sh` users receive an explicit encrypted migration/handoff;
  origin isolation must not silently strand or reinterpret vault data.
- Sync-provider credentials remain storage credentials and never bridge the
  Simple/Sentinel unlock boundary.

## Current Status

- Nook currently ships one `nook-web-app` that contains both Simple and
  Sentinel workflows.
- The extension pairing specification targets `https://nokey.sh/extension-connect`
  and currently permits selected vaults generally.
- The extension manifest injects the form scanner on `<all_urls>` and grants
  `<all_urls>` host access.
- The current Cloudflare/GitHub Pages workflow builds and deploys one web
  artifact.
- Rust already persists immutable `vault_type` and owns Sentinel quorum policy,
  providing a foundation for typed app-capability enforcement.

## Sub-Issues

- [ ] #361: Enforce Simple/Sentinel application capabilities in Rust and WASM
- [ ] #362: Build independent Simple and Sentinel web applications
- [ ] #363: Make the browser extension Simple-only and exclude Sentinel
- [ ] #364: Migrate unified-origin vaults safely and add cross-app navigation
- [ ] #367: Deploy and verify `simple.nokey.sh` and `sentinel.nokey.sh`
- [ ] #368: Add complete isolation tests, localization, and architecture documentation

## Acceptance Criteria

- `simple.nokey.sh` can create, import, unlock, sync, and manage only Simple
  vaults and supports the Nook extension.
- `sentinel.nokey.sh` can create, import, quorum-unlock, sync, and manage only
  Sentinel vaults and cannot authorize or communicate with the Nook extension.
- Wrong-type creation/import/open/enrollment fails in Rust/WASM before session
  creation or persistence.
- Each app has its own production build artifact, origin-local IndexedDB and
  service-worker state, explicit WebAuthn RP/origin policy, CSP/security headers,
  and deployment target.
- The extension pairs only through `simple.nokey.sh`, rejects Sentinel metadata,
  and does not inject its content script into `sentinel.nokey.sh`.
- Existing encrypted local vaults have a documented and tested migration path
  from the legacy unified origin without copying plaintext through TypeScript,
  page DOM, URLs, or logs.
- `nokey.sh` routes users to the appropriate app without holding an unlocked
  vault session.
- Rust behavior tests, WASM boundary tests, web unit tests, extension tests,
  targeted Playwright flows, deployment checks, architecture docs, product
  specs, and the public README all cover the final behavior.
- CI builds and validates both apps and records the required exact-head
  deployment state.

## Related Work

- #234 defines the broader browser-extension vault list and filling scope; this
  feature narrows extension eligibility to Simple vaults.
- #236 documented the original unified-origin extension pairing design and must
  be superseded by the Simple-only origin contract.
- #325 owns presence-first Simple/Sentinel entry UX; this feature moves those
  paths into isolated applications without weakening their Rust-owned rules.

## References

- `.cortex/design-docs/vault-architecture-modes.md`
- `.cortex/design-docs/sentinel-genesis.md`
- `.cortex/design-docs/vault-session-and-lock.md`
- `.cortex/product-specs/browser-extension.md`
- `.cortex/ARCHITECTURE.md`
- `nook-app/nook-web/nook-web-app`
- `nook-app/nook-web/nook-web-extension`
- `nook-app/nook-wasm`
- `nook-app/nook-core`
- `.github/workflows/main.yml`
- `.github/workflows/release.yml`


## Historical comments

No comments.
