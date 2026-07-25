---
title: "Device identity: mnemonic-first X25519 key generation and backup UI"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-26T02:32:18Z
updated_at: 2026-06-26T06:18:29Z
source_issues: ["https://github.com/meta-secret/nook/issues/51"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Device identity: mnemonic-first X25519 key generation and backup UI

## Imported context

This record was imported from [Nook GitHub issue #51](https://github.com/meta-secret/nook/issues/51)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Implement a **mnemonic-first** device identity workflow: generate a **24-word** BIP39 seed phrase at vault/device genesis, derive the age **X25519** device identity from it, and expose a **device key backup** UI so users can export (and restore) their device identity as a mnemonic.

**In scope:** age X25519 device identity only (`DeviceIdentity`, IndexedDB `device_identity_secret`).

**Out of scope:** password envelope, `secrets_key` / `members_key` scrypt passphrases, vault unlock passwords.

**No backward compatibility:** there is no legacy device key format to support. All device identities are mnemonic-derived from day one. No `Identity::generate()` path, no `AGE-SECRET-KEY-1…` import UI, no migration from random keys.

## Motivation

Device identity must be recoverable if the browser profile is lost. A **24-word BIP39 mnemonic** is the sole backup and restore format for the age X25519 device key. The mnemonic unwraps the device's `auth:` row (`pk_id`) so the user can access `secrets_key` / `members_key` without another enrolled device.

## Why always 24 words (not 12)

age X25519 identities are **exactly 32 bytes** (`StaticSecret` in age 0.11). BIP39 maps cleanly:

```
32-byte secret  ↔  AGE-SECRET-KEY-1… (internal storage)  ↔  24-word BIP39 (256 bits + checksum)
```

**All** age X25519 identities round-trip through a **24-word** mnemonic via raw entropy encoding. There is no special subset of “BIP39-compatible” keys.

12-word BIP39 only encodes 128 bits and is **not** sufficient for a full X25519 secret without an additional KDF. Device recovery phrases must therefore **always use 24 words**.

Wallet seed phrases stored as vault secrets (`SecretType::SeedPhrase`) may remain 12 or 24 words; that is unrelated to the device recovery phrase format.

## Design decision: store seed or derive on demand?

**Derive the age key from the mnemonic; do not persist the mnemonic separately.**

| Direction | Algorithm |
|-----------|-----------|
| Mnemonic → X25519 identity | BIP39 decode → 32 bytes → `StaticSecret::from(bytes)` → `Identity` |
| X25519 identity → mnemonic | Extract 32 bytes from identity → BIP39 encode (24 words) |

The mapping is **bidirectional**. IndexedDB stores `device_identity_secret` (age secret string, internal representation). The mnemonic is the **human backup encoding** shown at genesis and on explicit export — not a second secret synced anywhere.

Spec version label: `nook-device-mnemonic-v1` (documented in `.cortex` for future algorithm changes).

**Genesis flow:**

1. Generate cryptographically random 256-bit entropy.
2. Encode as **24-word** BIP39 mnemonic (English wordlist).
3. Derive age X25519 `DeviceIdentity` from that entropy via `nook-device-mnemonic-v1` in `nook-core`.
4. Persist `device_identity_secret` in IndexedDB.
5. Show mnemonic once in UI for user to write down; never sync to GitHub.

**Restore flow:**

1. User enters **24-word** device recovery phrase.
2. Validate BIP39 (wordlist + checksum) — reuse `validate_bip39_mnemonic` / `SeedPhraseGrid` (locked to 24 words).
3. Derive `DeviceIdentity` using `nook-device-mnemonic-v1`.
4. Verify `pk_id` matches vault `auth:` row.
5. Persist `device_identity_secret` in IndexedDB; unlock vault.

## Requirements

### 1. Mnemonic initialized at genesis

- On first device identity creation, generate a **24-word** BIP39 mnemonic **before** persisting the device identity.
- Device identity is **only** created via `DeviceIdentity::from_mnemonic(...)` — remove `Identity::generate()` from the device identity path.
- User must confirm they have backed up the phrase before continuing (checkbox or similar).

### 2. X25519 only — no password work

- Do not change `password_envelope`, `VaultCrypto` scrypt passphrases, or login backup-password flows.
- Device recovery phrase unlocks **device identity** only; vault `secrets_key` / `members_key` still come from the `auth:` section after identity unwrap.

### 3. Device key backup as mnemonic (24 words only)

- Core API (`nook-core`):
  - `device_identity_to_mnemonic(identity) -> String` (always 24 words)
  - `device_identity_from_mnemonic(mnemonic) -> DeviceIdentity`
  - Round-trip and determinism tests (same mnemonic → same `pk_id` / `public_key`).
  - Reject non-24-word mnemonics for device identity (distinct from wallet seed validation).
- WASM bindings for the above.
- Clear naming so this is **not** confused with `SecretType::SeedPhrase` wallet seeds stored inside the vault.

### 4. Storage model

- **Do not** persist the mnemonic in IndexedDB.
- Store `device_identity_secret` (age secret string) as the on-device representation.
- Mnemonic is export/display/restore input only.

### 5. UI — device key backup feature

| Surface | Behavior |
|---------|----------|
| **Genesis / onboarding** | After mnemonic generation, show numbered 24-word BIP39 grid (`SeedPhraseGrid` from #47), require acknowledgment before proceed. |
| **Settings / security** | “Back up device key” — re-export current identity as 24-word mnemonic (vault must be unlocked). |
| **Restore / login** | “Restore device from recovery phrase” — 24-word grid input → derive identity → validate `pk_id` against vault `auth:` before persisting. |

Copy must distinguish **device recovery phrase** (24 words, Nook device) vs **wallet seed phrase** (12/24 words, vault secret type).

Reuse `SeedPhraseGrid.svelte` and `bip39-wordlist.ts` where possible (#47); device recovery UI must use 24 words only.

### 6. Update `.cortex` documentation

Update architecture, design, and product docs to reflect mnemonic device identity and backup flows:

| Doc | Updates |
|-----|---------|
| `.cortex/product-specs/decentralized-auth.md` | 24-word device recovery phrase spec, `nook-device-mnemonic-v1` derivation, genesis/restore flows |
| `.cortex/ARCHITECTURE.md` | IndexedDB fields, device identity lifecycle, relationship between mnemonic backup and `auth:` unwrap |
| `.cortex/product-specs/password-manager.md` | Onboarding / unlock flows referencing device backup (if applicable) |
| `.cortex/design-docs/` | Add or update design doc if UX/security trade-offs need a dedicated home (e.g. device recovery vs wallet seed distinction) |
| `.cortex/product-specs/index.md` | Link new/updated spec sections if indexed |

Document explicitly: device identity is always mnemonic-derived; 24-word BIP39 is the only backup/restore format.

## Suggested implementation

| Layer | Work |
|-------|------|
| `nook-core` | New module e.g. `device_mnemonic.rs` — 32-byte entropy ↔ 24-word mnemonic ↔ `DeviceIdentity`; `nook-device-mnemonic-v1`; unit tests |
| `nook-core/src/multi_device.rs` | `from_mnemonic` / `to_mnemonic` on `DeviceIdentity`; remove `generate()` from device identity creation path |
| `nook-wasm` | WASM exports; wire genesis in `load_or_create_device_identity` |
| `nook-web` | Onboarding backup step, settings export, restore entry point |
| `.cortex` | See §6 above |

## Acceptance criteria

- [ ] Device identities are **only** derived from a **24-word** BIP39 mnemonic (no `Identity::generate()` path).
- [ ] `device_identity_to_mnemonic` and `device_identity_from_mnemonic` round-trip with stable `pk_id` and `public_key`.
- [ ] Non-24-word mnemonics are rejected for device identity restore.
- [ ] IndexedDB stores `device_identity_secret` only; mnemonic is not persisted after onboarding.
- [ ] UI shows 24-word mnemonic at genesis with backup acknowledgment.
- [ ] UI allows exporting device key as 24-word mnemonic when vault is unlocked.
- [ ] UI allows restoring device identity from 24-word mnemonic; connects when `auth:` row matches.
- [ ] User-facing strings clearly label “device recovery phrase” vs wallet seed phrases.
- [ ] No changes to password envelope or scrypt vault key flows.
- [ ] No legacy fallback paths (no random key generation, no age-secret-string import UI).
- [ ] Unit tests in `nook-core`; E2E test for export round-trip (mocked or test vector).
- [ ] `.cortex` docs updated (decentralized-auth, ARCHITECTURE, and related specs — see §6).

## Security notes

- Mnemonic must never be written to GitHub or the vault YAML file.
- Export UI should warn: anyone with the phrase can impersonate this device and unwrap `auth:` envelopes.
- Consider optional BIP39 passphrase (25th word) as a follow-up, not required for MVP.

## References

- `nook-core/src/multi_device.rs` — `DeviceIdentity`
- `nook-wasm/src/storage/indexed_db.rs` — `load_or_create_device_identity`
- `.cortex/product-specs/decentralized-auth.md` — device identity hierarchy
- `.cortex/ARCHITECTURE.md` — storage and crypto layout
- #47 — BIP39 grid UI and wordlist validation (dependency / reuse)

## Historical comments

### cypherkitty — 2026-06-26T06:18:29Z

Since we have passwords, most probably we don't need to backup age keys
