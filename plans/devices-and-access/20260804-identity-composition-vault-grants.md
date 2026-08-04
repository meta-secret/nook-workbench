# Identity composition and vault grants

## Context

The accepted dark chain-strength experiment currently mixes identity composition with vault authorization at the device-key strand level. The next iteration must split those concerns while preserving the accepted visual world. The current rope is retained unchanged as an Inspiration experiment.

This plan supersedes only the interaction and information architecture of the active identity experiment. The identity, device-key, provider, passkey-locality, and vault-separation architecture decisions remain unchanged.

## Work

1. Register the accepted dark identity-chain-strength component unchanged under Inspiration.
2. Keep the active experiment route and dark chain-strength visual language.
3. Build an independent identity-composition section: list virtual identities; selecting one reveals its physical devices, device keys, passkey access methods, and identity-record provider mounts.
4. Build a visually separate vault-authorization section showing only vault-to-identity grants. Device keys and passkeys must not appear in this section.
5. Preserve explicit zero-key and local-only identity states.
6. Inspect identity selection and both sections at desktop, phone, and compact widths. Keep repository formatting, builds, tests, detectors, and validation deferred until the concept is accepted.

## Deliverable

One preserved Inspiration experiment plus one iterated identity-management route with two independent relationship sections.

## Safety

Fixtures use illustrative labels and shortened public identifiers only. No secrets, provider credentials, private keys, raw prompts, logs, or private operational data are included.
