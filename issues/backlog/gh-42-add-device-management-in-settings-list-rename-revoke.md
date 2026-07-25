---
title: "Add device management in Settings (list, rename, revoke)"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T04:50:36Z
updated_at: 2026-06-25T05:40:26Z
source_issues: ["https://github.com/meta-secret/nook/issues/42"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Add device management in Settings (list, rename, revoke)

## Imported context

This record was imported from [Nook GitHub issue #42](https://github.com/meta-secret/nook/issues/42)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Nook needs a first-class **Devices** management surface in Settings — on par with **Storage providers** and **Vault passwords**. Users should be able to see every device enrolled in the vault, give them friendly names, and revoke access when a browser is lost or compromised.

Today, device state exists in the backend (`list_vault_members`, `list_pending_joins`) and partial UI exists (`DeviceEnrollment.svelte`, `PendingJoinsBanner`), but there is no dedicated settings section and no rename/revoke flows.

## Problem

### What users see today

- **Settings** has two accordion sections only: *Storage providers* and *Vault passwords* (`VaultSettingsAccordion.svelte`).
- Pending join requests surface as a banner on the Vault page (`PendingJoinsBanner`) with Approve buttons — but the banner copy references managing joins in storage settings, which **does not exist yet**.
- `DeviceEnrollment.svelte` implements a read-only member list (current device gets a UA-derived name like "Chrome on MacIntel"; others show raw `device_id`), but it is **not wired into the app**.
- `VaultState` already hydrates `vaultMembers` and `pendingJoins` via WASM, but there is no UI to manage them beyond approve-on-banner.

### What's missing in the stack

| Capability | UI | WASM / core |
|------------|-----|-------------|
| List enrolled devices | Partial (`DeviceEnrollment.svelte`, unused) | ✅ `list_vault_members()` |
| List pending join requests | Banner only | ✅ `list_pending_joins()`, `approve_join_request()` |
| Rename device (friendly label) | ❌ | ❌ `VaultMember` / `MemberEntry` have no `label` field |
| Revoke / delete device | ❌ | ❌ No `remove_device` / `revoke_member` API (spec mentions as future work in `password-envelope.md` §5.1) |

Current `VaultMember` shape (`nook-core/src/multi_device.rs`):

```rust
pub struct VaultMember {
    pub auth_id: String,
    pub device_id: String,   // 16-hex fingerprint — not user-friendly
    pub public_key: String,
    pub enrolled_at: String,
}
```

## Proposed UX

Add a third accordion section in **Settings → Devices** (or standalone page — accordion preferred for consistency):

```
Settings
├── Storage providers     (existing)
├── Vault passwords       (existing)
└── Devices               (new)
    ├── Enrolled devices list
    ├── Pending requests  (approve / deny)
    └── Actions per device: Rename · Revoke
```

### Device list row

Each enrolled device shows:

- **Display name** — user-editable label (default: UA hint for current device, truncated `device_id` for others until renamed)
- **Status badge** — `Current` for this browser, `Enrolled` for others
- **Metadata** — enrolled date, optional technical details (device ID, public key) behind a disclosure toggle
- **Actions** — Rename, Revoke (with confirmation)

Pending join requests appear in the same section (or a sub-list) with Approve / Deny actions — consolidating what `PendingJoinsBanner` does today.

### Rename

- Persist a `label` on the member roster entry (extend `MemberEntry` with optional `label: Option<String>`; encrypted in `members:` records like other roster fields).
- Any enrolled device can rename any member (including itself).
- WASM: `renameVaultMember(authId, label)` → update roster, `save_current_db()`.

### Revoke (delete device access)

- Remove the device's `auth:` envelope and `members:` roster row from the vault file.
- WASM: `revokeVaultMember(authId)` in `nook-core` + `nook-wasm`.
- After revoke, the target device can no longer decrypt the vault on next connect.

#### Open question: can you revoke **yourself** (the current device)?

This needs an explicit product decision. Suggested rules:

| Scenario | Behaviour |
|----------|-----------|
| ≥2 enrolled devices, revoking **another** device | ✅ Allowed — standard revoke |
| Only device in vault, revoking self | ❌ Block — show warning: *"Add another device or a vault password before removing this one."* |
| ≥2 devices, revoking **self** (current browser) | ⚠️ Allowed with strong confirmation — revoke, lock vault, clear local device identity; user must use another enrolled device or backup password to return |
| Password-mode vault | Revoke may be N/A (no per-device `auth:` rows) — section should explain that device list is keys-mode only, or show members without revoke |

Document the chosen behaviour in `.cortex/product-specs/decentralized-auth.md`.

## Scope

### Frontend (`nook-web`)

- Add **Devices** section to `VaultSettingsAccordion.svelte` (extend `accordionSection` union: `'storage' | 'passwords' | 'devices'`).
- Wire up / refactor `DeviceEnrollment.svelte` → `VaultDevicesCard.svelte` (mirror `VaultPasswordCard` / `AuthStorage` patterns: list, inline rename, confirm revoke).
- `VaultState` methods: `renameDevice`, `revokeDevice`, reuse `approveJoin`.
- Consider removing or slimming `PendingJoinsBanner` once Settings owns pending joins (or keep banner as a shortcut that links to Settings).
- E2e: `data-testid` for device list, rename, revoke, approve.

### Backend (`nook-core` + `nook-wasm`)

- Extend `MemberEntry` with optional `label`.
- `rename_vault_member(roster, auth_id, label)`.
- `revoke_vault_member(records, auth_id, members_key)` — drop `auth:` + `members:` rows, rebuild roster.
- WASM bindings: `renameVaultMember`, `revokeVaultMember`.
- Unit tests in `multi_device.rs` / `multi_device_workflow.rs`.

### Docs

- Update `auth-providers.md` (Settings copy mentions devices).
- Update `decentralized-auth.md` with revocation semantics and self-revoke policy.

## Acceptance criteria

- [ ] Settings has a **Devices** section alongside providers and passwords
- [ ] User can see all enrolled devices and pending join requests
- [ ] User can rename any device; label persists in vault and syncs across devices
- [ ] User can revoke another device's access; revoked device cannot reconnect
- [ ] Self-revoke behaviour is defined, implemented, and covered by tests
- [ ] Current device is clearly marked; technical IDs available but not primary UI
- [ ] Keys-mode vaults only (password-mode shows appropriate empty state or members-without-revoke)
- [ ] E2e covers list + approve join; unit tests cover rename + revoke in core

## References

- `nook-web/src/lib/components/settings/VaultSettingsAccordion.svelte` — settings shell
- `nook-web/src/lib/components/DeviceEnrollment.svelte` — unused starting point
- `nook-web/src/lib/components/PendingJoinsBanner.svelte` — join approval today
- `nook-wasm/src/manager/multi_device.rs` — `list_vault_members`, `approve_join_request`
- `nook-core/src/multi_device.rs` — `VaultMember`, `MemberEntry`, roster helpers
- `.cortex/product-specs/password-envelope.md` §5.1 — "future revocation work"
- `.cortex/design-docs/auth-providers.md` — mentions `AuthStorage` for "devices & access" (not implemented)

## Historical comments

No comments.
