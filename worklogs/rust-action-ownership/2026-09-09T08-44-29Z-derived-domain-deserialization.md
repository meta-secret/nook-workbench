---
title: Derive deserialization through domain conversions
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T08-34-59Z-derived-domain-deserialization.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T08:34:59Z
finished_at: 2026-09-09T08:44:29Z
agent: codex
---

# Work summary

## Outcome

Replaced applicable handwritten Deserialize implementations and field hooks with derived deserialization through existing domain wrappers and From/TryFrom admission. Completed product and Hive inventories; preserved two necessary order-sensitive map visitors. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at 5d359f00b66c955e6748850d6d5327ecba5e9059.

## Progress

- SRE `fdaedd63ce41c0e6747ada998fcf71af22306511`: three authored Hive files; derived TerminalResult admission and nullable delivery wire conversion replace custom trait/helper boilerplate. Exact validation/default/null/unknown/output behavior retained; no verification.
- DEV-CORE `5d359f00b66c955e6748850d6d5327ecba5e9059`: 34 authored Rust files; numeric/string/aggregate/legacy/finite-expiry custom adapters replaced with derives and canonical conversions. Two streaming host-map visitors retain necessary ordering/duplicate validation. No verification.


## Implementation problems

Manual adapters repeated primitive decoding and parser/error forwarding. Derives now delegate to canonical domain conversion. Aggregate and legacy admission required private wire types rather than unchecked derives: contradictory states, explicit ID validation and local legacy acceptance remain intact. Ordinary map derives would discard duplicate occurrences and change normalized-key collision order, so the two streaming visitors remain.

## Decisions

Preserve numeric widths, discriminants, parser aliases, null/missing defaults, unknown handling and wire shapes. Queue expiry is a finite domain wrapper with the same accepted negative/fractional values. Guard temporary secret strings during conversion and retain existing Drop behavior. Keep future-version raw Value dispatch at its genuine version boundary. Do not replace standard external StringDeserializer use or non-Serde visitors mechanically.

## Validation

All verification remains deferred. No tests, cargo commands, compilation, typechecks, lint, audits, reviews or workflows were run. Write-mode formatting only. Existing and adapted source regressions remain unexecuted; correctness is not claimed from source editing.

## Remaining work

No applicable inventoried boilerplate adapter remains deferred. Two streaming host-map visitors are intentionally retained for required format semantics. Tests and verification await separate user instruction; delivery ends at the open PR.

## Completed migration inventory

The mechanisms below describe the completed migration groups and preserved boundaries.

## 1. Validated numeric conversion and transparent numeric transport

Replace manual Deserialize glue with derive Deserialize and serde(try_from = numeric source). Move current match/parser into canonical TryFrom, preserving numeric width, accepted versions/discriminants and error text. Existing Serialize implementations stay unchanged; do not combine try_from with incompatible transparent attributes.

- nook-authenticator-domain/src/lib.rs: TotpDigits (u32, existing TryFrom), TotpPeriod (u64, existing TryFrom).
- nook-auth2/src/auth/device_key_protection.rs: DeviceKeyProtectionVersion (u32, preserve all supported protection versions).
- nook-auth2/src/auth/password_envelope.rs: PasswordEnvelopeVersion (u32).
- nook-auth2/src/auth/sentinel_genesis_types.rs: SentinelGenesisVersion (u32).
- nook-auth2/src/auth/sentinel_unlock.rs: SentinelUnlockVersion (u32).
- nook-auth2/src/auth/multi_device/sentinel.rs: SentinelShareVersion (u32).
- nook-core/src/vault/vault_sentinel_onboarding.rs: SentinelOnboardingVersion (u32, only 1).
- nook-core/src/secrets/secret_types.rs: PasskeySecretVersion (u32, only 1).
- nook-companion-core/src/authentication_workflow/vocabulary.rs: AuthenticationWorkflowKind, AuthenticationWorkflowStage, AuthenticationWorkflowAction (u32, existing numeric WASM ABI).
- nook-companion-core/src/authentication_workflow/candidate_selection.rs: AuthenticationFormObservationPriority (u8, only 1..5).
- nook-companion-core/src/extension_session_status_response.rs: ExtensionSessionDeviceProtectionStatusWire (u32, 0..7).
- nook-companion-core/src/extension_session_protocol/request.rs: PasskeyDeviceModeWire (u32, 0..1).
- nook-companion-core/src/website_login_save_offer_response.rs: WebsiteLoginSaveOfferDecision (u32, 0..1).
- nook-companion-core/src/extension_persistence.rs: ExtensionPersistenceArea (u32, 0..2).
- nook-companion-core/src/outcome_evidence.rs: AuthenticationOutcomeVerdict (u32, 0..3).
- nook-companion-core/src/companion_pairing.rs: CompanionPairingEpochMilliseconds currently wraps f64 without validation; derive transparent Deserialize preserves admission. Do not silently add finite/range checks here: separate runtime pairing validation remains authoritative.

## 2. String validation and infallible wire wrappers

Derived try_from=String plus canonical TryFrom<String> invoking existing parse preserves trimming, exact validation, unavailable sentinels, and serialization. Current manual adapters already allocate String; no new plaintext representation is introduced. DeviceIdentitySecret Drop zeroization must remain; conversion must not add cloning or retained temporary buffers (the conversion uses a zeroizing input guard around the existing parser allocation).

- nook-auth2/src/wire.rs: validated SymmetricKey, AgeArmoredCiphertext, DevicePublicKey, DeviceIdentitySecret, SigningSeedHex, PasswordEntryId. Infallible MemberLabel and OpaqueCiphertext can derive transparent or from=String.
- nook-auth2/src/wire/metadata.rs: Sha256Hex, IdentityVaultEventId, DeviceSigningPublicKey, IsoTimestamp. DeviceSigningPublicKey remains primitive string with empty-string Unavailable, not tagged enum.
- nook-event-log/src/canonical.rs: EventId, Ed25519Signature.
- nook-event-log/src/fingerprint.rs: SecretFingerprint.
- nook-core/src/vault/vault_wire.rs: StoredVaultYaml validated; SecretPayloadYaml infallible (preserve owned secret data behavior).
- nook-core/src/vault/vault_architecture.rs: VaultType, ReplicationType; retain parser aliases including empty string defaults.
- nook-core/src/vault/vault_architecture/device_mode.rs: DeviceMode; retain empty-string Standard default.

## 3. Aggregate and legacy admission

- nook-companion-core/src/outcome_evidence.rs: AuthenticationOutcomeDecision -> derive try_from=DecisionWire; typed TryFrom retains deny_unknown_fields and verdict/commit consistency rejection. Never unchecked derive directly into decision fields.
- nook-core/src/sync/sync_provider_store/mod.rs: OAuthFileConfig -> derive from=OAuthFileConfigWire plus From; existing wire field defaults/renames remain exact, credential objects are moved.
- nook-auth2/src/auth/password_envelope.rs: VaultUnlock -> derive from=VaultUnlockTagged; move existing two-variant conversion into From. Keys omission/tagged password wire remains unchanged.
- nook-wasm/src/storage/identity_record/simple_genesis.rs: PendingSimpleGenesis -> derive try_from=PendingSimpleGenesisWire; retain all sealed/unsealed and current/legacy contradictions, legacy timestamp and equal staged-flow exception. Conversion moves existing owned values. Does not create or authorize active state capabilities.
- nook-event-log/src/event.rs: EpochMetadataState::deserialize_epoch_metadata_state and EpochPasswordState::deserialize_epoch_password_state -> derive from=Vec<StoredSecretRecord>/Vec<PasswordUnlockEntry>, From always Replace. Field defaults still select LegacyRetain on absence; explicit null remains invalid; current serializers and omission rule remain.
- nook-core/src/vault/device_access.rs plus device_access/passkey_observation.rs: remove two deserialize_legacy field hooks using private parent PasskeyAccessProfileWire and dedicated untagged created/last-used input enums -> From parent wire. Preserve current evidence enum Deserialize as tagged only, preventing new global legacy acceptance/recursive derived type; retain missing/default, null Unavailable, timestamp Known, and explicit NotYetObserved distinction.
- nook-core/src/vault/device_access.rs: VerifiedVaultAccess device/store ID hooks -> derive try_from=VerifiedVaultAccessWire with string ID fields and existing parsers in aggregate TryFrom. Canonical IDs currently derive unchecked transparent Deserialize (nook-auth2/src/ids.rs), so simply deleting hooks would weaken this boundary. Do not globally tighten all ID storage admission as an incidental change.
- nook-companion-core/src/authentication_workflow/observation_facts/disclosure/control.rs: VersionedAuthenticationDisclosureControlObservation -> derive try_from=serde_json::Value and TryFrom uses existing decoder. Keep arbitrary future-version envelope acceptance and strict required/deny_unknown V1 decoder. Value is a genuine version-dispatch wire buffer, not a domain value. No new untagged fallback that admits malformed current versions as unsupported.

## 4. Finite expiry semantic admission

- nook-companion-core/src/extension_session_protocol/queue.rs: QueueDisposition::deserialize_finite_f64 currently used on QueueDisposition::Deadline.expires_at and PasskeyCeremonyQueueDisposition::Deadline.expires_at.
- nook-companion-core/src/extension_session_protocol/login_picker.rs: LoginPickerQueueDisposition deadline hook uses same helper; decoded LoginPickerRequest projection carries corresponding f64 field.
- Replace helper with QueueExpiryMilliseconds derived try_from=f64 and typed TryFrom rejecting only nonfinite values. Preserve negative/fractional acceptance and exact numeric wire, expose Tsify number. Carry wrapper through direct projection fields and adapt inline source literals. No browser ABI changes needed.

## 5. Genuine retained streaming visitors

- nook-core/src/secrets/login_site_hosts.rs: LoginSiteHosts / HostsVisitor.
- nook-core/src/secrets/authenticator_issuer_hosts.rs: AuthenticatorIssuerHosts / HostsVisitor.

Both iterate original map entries, validate each occurrence before insertion, normalize keys, and preserve input-order last-normalized-key-wins. Replacing with HashMap/BTreeMap/String Value derive discards duplicate occurrences and can change normalized collisions or admit an earlier invalid duplicate. An ordered raw-entry collector would itself need a visitor and add an unnecessary abstraction. Retain these two custom map visitors with explicit source rationale; they are genuine format semantics, not manual numeric boilerplate.

## Other source occurrence accounting

- logger FieldVisitor/Visit (nook-wasm/src/logger.rs) is tracing, not Serde.
- dylint RawNumericHirVisitor is compiler AST tooling, not Serde/product admission.
- vault_format deserialize*/vault_yaml deserialize_stored_yaml are named domain decode operations/test fixture methods, not Deserialize implementations; retain.
- Existing derived from=bool PageLoginContext and from=Option<String> Bitwarden nullable fields are already declarative; retain.
- No new generic wrapper framework, serde dependency, dev-dependency or lock change is required. No tests, compiler, checks, reviews, audits or workflows were run.

## Completed implementation handoff

- All listed numeric/version, string, aggregate, legacy-field and finite-expiry manual adapters are replaced by derived admission and canonical conversions. Private numeric version parsers were folded into TryFrom rather than retained as one-line forwarding layers.
- Private PasskeyAccessProfileWire preserves local legacy timestamp/null admission while global evidence remains tagged-only. VerifiedVaultAccessWire preserves explicit ID parsing without changing global permissive ID storage schemas.
- QueueExpiryMilliseconds carries the admitted finite value through login-picker projection and is reexported from extension_session_protocol. Existing numeric JSON/TypeScript shape is unchanged; negative/fractional/zero values remain valid. Inline source covers value preservation and nonfinite rejection; login-picker source fixture uses fallible construction.
- SymmetricKey, DeviceIdentitySecret and SigningSeedHex String conversion immediately guards the decoded allocation with Zeroizing while invoking existing validation. Existing DeviceIdentitySecret/SecretPayloadYaml Drop implementations remain; infallible SecretPayloadYaml conversion moves the original String. No additional secret clone or stored plaintext field was introduced.
- Two host-map visitors remain with exact source rationale. Disclosure version dispatch still uses Value solely to distinguish future envelopes from strict current payloads. Other non-Serde occurrences remain untouched.
- All existing inline deserialization regressions remain; no test/compiler/typecheck/linter/check/audit/review/workflow was run. Only source edits and write-mode rustfmt. No dependencies, lockfile, TS, generated, policy or external changes.


### Hive handoff

## Implemented handoff

Both applicable replacements are complete. TerminalResult derives Deserialize through its unchanged WireTerminalResult TryFrom; handwritten Deserialize and unused serde::de import were removed. DeliveryPullRequest derives Deserialize through the private WireDeliveryPullRequest in delivery/wire.rs; the infallible From normalizes only the nullable/missing rollup to its existing internal Vec. All other required fields, ignored unknown fields, nested aliases/defaults and item type failures are left to equivalent derives. Removed null_to_default and deserialize_with. Updated the intersecting CheckConclusion fixture assertion to its typed Success variant.

Retained Codex StringDeserializer because it is standard external enum admission rather than a handwritten codec. No dependency, serialized output, config, TS, workflow or trusted source digest changes. Only write-mode formatting was performed; all verification remains deferred.

Exact scope:
- agentic-ai/minds/hive/src/model.rs
- agentic-ai/minds/hive/src/delivery.rs
- agentic-ai/minds/hive/src/delivery/wire.rs

