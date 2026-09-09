---
title: Reuse canonical Rust contracts across TypeScript boundaries
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T08-47-08Z-rust-typescript-contract-transparency.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T08:47:08Z
finished_at: 2026-09-09T09:26:04Z
agent: codex
---

# Work summary

## Outcome

Completed the inventoried Rust/TypeScript contract-transparency refactoring and published [PR #1573](https://github.com/meta-secret/nook/pull/1573) at 09d7849c8936e4ba9998512f60159dadb870f10e. Browser consumers now depend directly on canonical generated Rust contracts; Hive has native contract/schema export and fresh generation prerequisites. Delivery stops at the open PR, with all generation and verification deferred.

## Progress

- DEV-CORE 95c492639785e9472cb2811b59218e7bd9d3b6fa: 40 Rust/dependency files; canonical event/TOTP declarations, typed event/log arrays, supported locales, typed assertion requests, provider outcomes/configuration admission and concrete session decoders.
- WEB 637fbcd7d18c06560716901866fbb85879ae5211: 53 browser files; removed result assertions and copied DTOs, reused generated account/preview/provider/session contracts, retained storage connection objects through callers, and adapted directly affected fixtures.
- SRE 09d7849c8936e4ba9998512f60159dadb870f10e: 18 Hive/console/build files; canonical native contract/schema/value export, generated standalone HTTP guards, direct console consumers, package generation prerequisites and a fresh Docker exporter stage.

## Implementation problems

Handwritten event and HTTP schemas, erased arrays, generic response assertions and provider handle-to-object copies concealed Rust contract changes. Provider identity metadata was conflated with complete credential-bearing configurations. Hive lacked an established contract-generation path in its direct build inputs. The refactor removes those parallel representations and uses standard generators rather than a bespoke schema parser.

## Decisions

- Derive product event/envelope/TOTP contracts from canonical Rust owners using existing Tsify and wasm-bindgen versions. Keep targeted primitive annotations only for actual custom wire encodings.
- Preserve secret records and session/capability handles as opaque owners, including live ceremony checks and required cleanup. Ordinary provider snapshots become generated tagged unions without intermediate copies.
- Keep unknown input at Chrome/HTTP boundaries until concrete admission. Full provider configurations and identity-only projections remain distinct.
- Use already-locked ts-rs 11.1.0 and schemars 0.8.22 for Hive native export, plus Ajv 8.20.0 standalone validator tooling. Preserve numeric JSON and open-ended status/kind strings. No coercion or default insertion is introduced.
- Generate Hive contracts before console check/build/dev. Docker stages derive fresh inputs from actual native source; generated artifacts are ignored and not handwritten or committed.

## Validation

No tests, generation, compilation, typechecks, lint/checks, audits, code reviews or validation workflows were run. Write-mode Rustfmt/Prettier was editing only. Ajv dependency resolution used lock-only/ignore-scripts, followed by frozen/ignore-scripts dependency materialization for formatting; no lifecycle scripts executed. Rust dependency changes add edges to already-resolved package versions without running Cargo. Git push and published-record receipts are delivery metadata, not code-validation evidence.

## Remaining work

The inventoried implementation groups are complete. Generated artifacts must be produced and the code compiled/tested only after separate user instruction. Hive generated imports intentionally have no local generated targets until that first generation. The new source wiring places generation before consumption, but successful emitted declarations, validators and cross-language compilation are unverified. Arbitrary internal Rust compiler errors do not literally become TypeScript errors: the intended coupling is through regenerated public contracts and dependent TypeScript compilation.

## Completed contract inventory

- Event schema: canonical VaultEvent graph and referenced envelopes/IDs replace the handwritten TypeScript custom section; event/log collection APIs retain concrete generated element types.
- Product DTOs: supported locales, StorageConnectArgs, OAuthAccessToken, DuplicateSyncProvider, account options and authenticator preview are consumed directly. The storage object remains intact until existing positional manager ABI calls.
- Session ingress: concrete device/status and four authenticator response decoders replace browser schema assertions and copied fields. Browser time checks and transport secret scrubbing remain.
- Provider ingress: canonical full-configuration admission is distinct from ExtensionStorageProviderIdentity metadata; malformed transport cleanup remains at the browser boundary.
- Passkeys: assertion accepts the generated request object; redundant origin/rpId copies are removed. Native WebAuthn buffers, message framing and live callbacks remain host adapters.
- Hive: Rust DTO derives feed TypeScript declarations, two JSON Schemas and canonical value projections. The console uses standalone guards on unknown HTTP data. Browser polling, abort/focus behavior, live clock and idle presentation remain browser-owned.
