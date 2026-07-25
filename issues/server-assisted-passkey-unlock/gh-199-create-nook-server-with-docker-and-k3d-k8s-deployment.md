---
title: "Create nook-server with Docker and k3d/k8s deployment"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-06T20:03:17Z
updated_at: 2026-07-21T04:18:00Z
source_issues: ["https://github.com/meta-secret/nook/issues/199"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# Create nook-server with Docker and k3d/k8s deployment

## Imported context

This record was imported from [Nook GitHub issue #199](https://github.com/meta-secret/nook/issues/199)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #197.

## Problem

Assisted Mode needs a Nook-controlled server because clients without WebAuthn PRF need a second source of secrecy after passkey authentication. The repo does not currently have a `nook-server` service, container image, or local/cluster deployment path.

## Implementation Decision

Use `1Password/passkey-rs` as the chosen passkey/WebAuthn Rust dependency for `nook-server` and assisted-unlock protocol work.

Build the Nook server flow from scratch. Do not scaffold the server around `kanidm/webauthn-rs` examples or adopt `webauthn-rs` as the relying-party framework for this track.

Rationale:

- `1Password/passkey-rs` has the stronger product/vendor trust signal for a security-sensitive passkey dependency.
- Its latest release is newer than `kanidm/webauthn-rs` as of the issue decision: `passkey-v0.5.0` on 2026-01-07 versus `webauthn-rs` `v0.5.2` on 2025-07-30.
- The project is active and maintained by a world-class password-manager vendor whose core product depends on passkey correctness.
- Nook wants to own the server design and security model directly, not copy an example server. That makes `passkey-rs` attractive as a flexible WebAuthn/passkey toolkit even if more server/RP glue must be written in Nook.
- `webauthn-rs` remains a useful comparison/reference, but it is not the chosen dependency for `nook-server`.

Implementation caveat:

`1Password/passkey-rs` focuses on WebAuthn client, authenticator/CTAP, transport, and shared protocol types. During the server implementation, prove early that the crate family gives Nook enough primitives/types for server-side registration and assertion verification. If missing pieces require custom RP verification code, implement that code in Nook with focused tests and document the boundary. Do not silently switch back to `webauthn-rs`; update this issue first if a blocker forces a reconsideration.

Licensing note: Nook's Rust workspace is MIT; `1Password/passkey-rs` is MIT OR Apache-2.0, which is simpler for this repo than the MPL-2.0 license on `kanidm/webauthn-rs`.

## Scope

- Add a `nook-server` package/service that can support Assisted Mode APIs.
- Implement server-side passkey registration/authentication verification for assisted unlock accounts/devices using `1Password/passkey-rs` primitives/types where applicable, with Nook-owned server/RP glue.
- Persist only the minimum assisted-unlock state: account/device metadata, passkey credential metadata, protected server share or protocol state, revocation state, and audit/rate-limit metadata.
- Expose health/readiness endpoints and structured logs suitable for local and Kubernetes operation.
- Dockerize the service and wire Taskfile commands for build/run/check.
- Add `infra/` deployment support modeled on `meta-secret-core/infra`: top-level infra Taskfile includes, `k3d` cluster tasks/config, and `k8s` plain YAML manifests.
- Provide Kubernetes stateful workload/service/ingress or equivalent manifests, config/secret handling, probes, image override support, and local k3d validation docs.

## Out Of Scope

- Browser Assisted Mode UI and fallback flow, except for API fixtures/contracts needed by tests.
- Storing plaintext vault contents, plaintext browser device identities, or final vault keys on the server.
- Weakening the existing no-server Local Mode.
- Using KCL or another manifest generator for Kubernetes deployment.
- Switching to `kanidm/webauthn-rs` without first documenting the blocker and revisiting this issue.

## Acceptance Criteria

- `nook-server` uses `1Password/passkey-rs` as the selected passkey/WebAuthn dependency unless a documented blocker causes a deliberate issue update.
- An early implementation spike proves the server can verify registration and authentication with the chosen `passkey-rs`-based design, or clearly identifies the Nook-owned glue code required.
- `nook-server` has automated tests for registration, authentication challenge/response, share/protocol access, revocation, replay rejection, and rate-limit behavior.
- Docker image builds locally and runs health/readiness endpoints.
- A local k3d cluster can deploy the server via the repo's infra tasks.
- Kubernetes YAML manifests include image overrides and environment/secret configuration needed outside local dev.
- Docs reference the Meta Secret infra approach for k3d/k8s layout while explicitly using checked-in plain YAML, not KCL or another manifest generator. They explain how to build, run, redeploy, and tear down the local cluster safely.
- The server API contract is stable enough for the client issue to consume.

## References

- `1Password/passkey-rs`: https://github.com/1Password/passkey-rs
- `kanidm/webauthn-rs` comparison only: https://github.com/kanidm/webauthn-rs
- Meta Secret infra pattern: https://github.com/meta-secret/meta-secret-core/tree/main/infra
- Meta Secret k3d tasks/config: https://github.com/meta-secret/meta-secret-core/tree/main/infra/k3d
- Meta Secret k8s layout reference only; do not copy its KCL generator: https://github.com/meta-secret/meta-secret-core/tree/main/infra/k8s


## Historical comments

No comments.
