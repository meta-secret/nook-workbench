# Task plan

## Interpreted request

Devices and access should name the password manager or platform authenticator that holds a passkey whenever the WebAuthn authenticator GUID is known, matching the access-methods pattern used by Internet Identity. Proton Pass, Apple Passwords, Google Password Manager, and similar keepers must appear by product name, with last-used time and a short storage note. The existing relationship graph stays. A second layout presents the current identity and its keys as a scannable card grid instead of a node canvas.

## Requirements

- Classify keepers in Rust from the authenticator GUID captured at registration. Unknown or zero GUIDs stay unknown. Do not invent a keeper.
- Treat keeper names as browser-reported evidence, distinct from the optional user reminder about where a passkey was saved.
- Never claim Nook inventories an external password manager or opened Proton, Apple, or Google stores.
- Expose the classified keeper on the device-access snapshot so the web UI does not reimplement the map.
- Show keeper name, type Passkey, last successful use, and a keeper-specific storage description on passkey surfaces.
- Keep the Identity Bridge graph. Add a Graph versus List control on Devices and access.
- List layout is identity-centric cards for keys that belong to the current identity: passkey, PIN or passphrase, companion session, and the local app key. Selecting a card opens the existing evidence panel.
- Localize all new copy in English and Russian catalogs. Generate i18n keys. No authored inline English in Svelte.
- Domain tests cover GUID classification. Web unit tests cover list versus graph switching and card facts. Update the devices-access demo and e2e, including narrow viewport checks if cards can clip.
- Update the devices-and-access product spec for keeper evidence and the dual layouts.

## Constraints and exclusions

- Branch from origin main. Do not mutate the vault-switcher companion pairing branch or pull request.
- Do not persist a second copy of keeper names; derive them from stored GUID evidence.
- Do not add a live fetch of the community GUID catalog. Ship a curated in-repo map of well-known keepers.
- Do not add multi-passkey enrollment in this slice. The list shows keys Nook already records for the current identity.
- Do not put business classification in TypeScript. Do not author null or unknown in new TypeScript. Named object arguments. Max one TypeScript parameter.
- No unwrap or expect in authored Rust. Enums for named states.
- Authored files stay at or under 1,000 lines. Extract a list component instead of growing the dashboard past the limit.
- Heavy product tests run on GitHub Actions. Host format via task loom:pre-push.

## Change budget and PR sequence

- Estimated authored changed lines: 1600
- Owning modules, packages, or layers: nook-core device access, nook-wasm snapshot, nook-web-shared Devices and access UI, locale catalogs, devices-and-access spec
- Public or cross-module interfaces: WASM device-access snapshot gains a typed passkey keeper enum derived from authenticator GUID
- Delivery shape: One PR
- Current PR estimated authored changed lines: 1600
- Current PR slice and acceptance evidence: Passkey keeper naming plus graph and list layouts on Devices and access; Acceptance evidence: Rust GUID tests, web unit tests for layout toggle and card facts, updated demo and e2e, spec prose for keeper evidence and both layouts
- PR slices and acceptance evidence:
  1. Passkey keeper naming plus graph and list layouts on Devices and access; Acceptance evidence: Rust GUID tests, web unit tests for layout toggle and card facts, updated demo and e2e, spec prose for keeper evidence and both layouts

## Initial plan

1. Add a curated Rust keeper enum and GUID map in nook-core, with tests for Apple Passwords, Proton Pass, Google Password Manager, unknown, and zero GUID.
2. Project the keeper on the WASM snapshot next to existing GUID text.
3. Add locale strings for keeper names, storage notes, last-used labels, and Graph versus List chrome. Generate keys.
4. Extract an identity-to-keys card list. Add a layout toggle that keeps the graph intact.
5. Surface keeper facts on the unlock panel and list cards without replacing the user reminder.
6. Update unit tests, Playwright coverage, the demo, and the product spec.
7. Host-format, commit, local review, push, open the pull request, and run complete validation.

## Completion evidence

- Authenticator GUIDs for well-known keepers resolve to the typed enum; unknown GUIDs do not.
- Devices and access can show the graph or the identity-to-keys list.
- Passkey cards and the unlock panel show keeper name, Passkey type, last use, and storage note when known.
- Spec describes browser-reported keeper mapping and both layouts.
- Hosted PR checks on the exact head are green.

## Safety review

This record restates product intent in original wording. It does not copy the source task, chat turns, secrets, credentials, vault contents, environment values, raw logs, local filesystem paths, or internal hosts.
