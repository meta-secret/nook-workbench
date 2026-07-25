---
title: "Add reality-grade onboarding e2e for file sync provider"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T04:57:56Z
updated_at: 2026-07-06T05:56:54Z
source_issues: ["https://github.com/meta-secret/nook/issues/188"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Add reality-grade onboarding e2e for file sync provider

## Imported context

This record was imported from [Nook GitHub issue #188](https://github.com/meta-secret/nook/issues/188)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #12.

## Problem

We do not currently have a single end-to-end test proving the real onboarding flow works when the vault is synchronized through the file sync provider. Existing coverage exercises the pieces separately, but the strongest onboarding specs still use shortcuts such as direct IndexedDB seeding of the joiner's local vault/provider snapshot before enrollment.

Current examples:

- `nook-app/nook-web/e2e/onboard-providers.spec.ts` covers the onboarding wizard/provider picker, not a second-browser enrollment.
- `nook-app/nook-web/e2e/password-envelope-sync.spec.ts` generates an enrollment link and enrolls a second browser, but seeds the joiner's vault YAML and saved provider row directly into IndexedDB.
- `nook-app/nook-web/e2e/file-sync-provider.spec.ts` proves the file-backed event-log provider can replicate across browsers, but it is not the password/onboarding QR flow.
- `nook-app/nook-web/e2e/local-folder-backup.spec.ts` covers the File System Access local-folder backup path, but not onboarding.

That leaves a product-risk gap: we can pass CI while missing a regression in the real setup order users depend on: create vault, attach file sync, add backup password, generate onboarding link, open it on another browser, connect/select the same file sync provider, enter the password, download the vault, and unlock.

## Scope

- Add an e2e spec that drives onboarding through browser UI actions instead of writing provider or vault records straight into IndexedDB.
- Start with the file sync provider because it is the default local sync-provider target for stub e2e.
- The test may use the existing file-backed e2e provider harness for CI isolation, but it must not use direct IndexedDB seeding to make the joiner look preconfigured or preloaded.
- Keep any unavoidable CI harnessing documented in the spec comments so the test does not masquerade as a live OS/native picker test.

## Acceptance Criteria

- Device A creates/unlocks a vault through the UI, connects the file sync provider through the UI, adds a vault password, adds at least one secret, and generates an onboarding link.
- Device B starts from a clean browser context, opens/pastes the onboarding link, connects/selects the same file sync provider through the UI, enters the vault password, and reaches an unlocked vault.
- Device B can reveal the secret created on Device A.
- The test fails if Device B only works because the test preloaded `nook_db` vault YAML or `nook_auth` provider rows directly.
- A follow-up issue or separate acceptance section should cover a truly native File System Access `local-folder` onboarding flow if/when CI can automate real directory handles without mocks.

## Notes

Found while auditing onboarding e2e coverage. The current product code also rejects embedding `local-folder` providers in enrollment codes, so the local-folder story likely needs its own product decision: either both browsers choose the same folder before enrollment, or enrollment links gain a new local-folder handoff model.


## Historical comments

No comments.
