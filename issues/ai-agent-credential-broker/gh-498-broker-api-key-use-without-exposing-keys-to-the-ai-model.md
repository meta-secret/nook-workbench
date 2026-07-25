---
title: "Broker API-key use without exposing keys to the AI model"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:21:09Z
updated_at: 2026-07-19T00:21:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/498"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Broker API-key use without exposing keys to the AI model

## Imported context

This record was imported from [Nook GitHub issue #498](https://github.com/meta-secret/nook/issues/498)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #493.

## Problem

AI agents frequently need API access, but returning an API key from an MCP tool or placing it in a shell command/environment visible to the harness leaks it into model context, transcripts, logs, or repository state. Nook needs useful API-key consumption modes that keep the credential inside a trusted broker whenever possible.

## Scope

- Implement broker-owned HTTP request execution constrained to an approved normalized API audience, method/path policy, credential item, limits, and expiry.
- Implement target-specific credential-helper integrations where the target protocol can request credentials out of band without returning them to the model.
- Define and enforce response sanitization, header stripping, redirect policy, TLS requirements, request/response size limits, retries, cancellation, and rate limits.
- Evaluate subprocess support under the threat model. Arbitrary commands controlled by the model can print or exfiltrate injected secrets and must not be marketed as non-disclosing. Any supported exact-executable credential injection must be separately approved, tightly bound, and accurately labeled with its residual risk.
- Add a separate high-risk plaintext export path for unavoidable targets, disabled by default and requiring fresh per-use approval. It must never use ordinary MCP content, URLs, argv, logs, or durable environment/workspace files.
- Ensure cancellation, timeout, lock, rotation, revocation, and broker disconnect zeroize in-memory secret material and prevent further use.

## Acceptance Criteria

- A harness can complete an approved API call through Nook while the key is absent from model/tool content, argv, logs, errors, repository files, shell history, durable environment configuration, and returned headers/body.
- Redirects cannot move credentials to an unapproved origin; DNS/host normalization and audience checks are Rust-owned and tested.
- The agent cannot turn a scoped API capability into a generic proxy, arbitrary request signer, secret oracle, or bulk extractor.
- Output redaction is defense in depth, not the primary control; exact-secret, encoded/transformed, reflection, error, retry, and malicious-server cases are covered in the threat model and tests.
- Plaintext export is visibly distinct, per-use only, audited as metadata, and covered by deny/cancel/timeout tests.
- Behavior-focused Rust tests cover policy and sanitization; integration tests use a hostile local API fixture to test redirects, reflection, logging, cancellation, and audience escape.

## Dependency

Consumes the typed API credential/policy model and authenticated broker grants defined by sibling issues.

## Historical comments

No comments.
