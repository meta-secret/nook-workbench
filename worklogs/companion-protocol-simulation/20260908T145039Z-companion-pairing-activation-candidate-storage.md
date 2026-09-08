---
title: Atomic companion pairing candidate persistence
feature: companion-protocol-simulation
issue: issues/companion-protocol-simulation/companion-pairing-activation-candidate-storage.md
plan: plans/companion-protocol-simulation/20260908T131050Z-companion-pairing-activation-candidate-storage.md
nook_pr: 1563
status: completed
started_at: 2026-09-08T09:07:52Z
finished_at: 2026-09-08T14:50:39Z
agent: codex
---

# Atomic companion pairing candidate persistence

## Outcome

Rust now consumes a prepared pairing capability and atomically persists one
complete inert activation candidate plus an immutable typed publication gate.
The candidate remains outside authoritative product scans, provider values stay
sealed, transient plaintext is zeroized, and no TypeScript domain logic or
browser transport is required to exercise the behavior.

## Progress

- Added effect-time authority validation, replay and concurrency rejection,
  typed V1 candidate rows, an integrity gate, and one-transaction persistence.
- Added 37 focused real-instance Rust/browser-WASM cases across preparation,
  admission/outcomes, in-memory persistence, IndexedDB persistence, and
  generated direct dual-WASM composition.
- Squash-merged [PR #1563](https://github.com/meta-secret/nook/pull/1563)
  as `f126ee9d81e57964361489841c37c8e5f1ae9704`.

## Implementation problems

- The initial slice combined persistence and strict readback. Complete
  recipient-authority and scenario-ownership review fixes measured above the
  repository's 2,000-authored-addition ceiling.
- The scope was corrected at the functional boundary: this PR kept atomic
  inert persistence intact, while strict readback became an explicit serial
  successor. Tests and implementation were not compressed around line count.
- Two early hosted Rust compiler failures and successive review batches caused
  replacement heads before the final boundary stabilized.

## Decisions

- The integrity gate is an atomic publication marker, not an authorization
  root; strict readback must independently revalidate the approved recipient.
- Candidate rows use the activation namespace in the existing vault store and
  remain invisible to authoritative event scans.
- Every remaining capability starts from current `main` only after its
  predecessor is merged and closed; stacked PRs are prohibited.

## Validation

- Final exact head: `57a211aab595bb610f009b0ce359011e11bc600d`.
- Hosted PR run `34238506478` passed all required Rust, WASM, web, policy, and
  repository checks.
- Security and Web reviews passed with zero P1/P2 findings; final Codex review
  was clean and all 31 review threads were resolved.
- Deployment `6330093420` succeeded and `task pr:ready PR=1563` passed against
  the exact final head.

## Remaining work

- [Strict typed candidate readback](../../issues/companion-protocol-simulation/companion-pairing-activation-candidate-readback.md)
- Authoritative candidate adoption, followed by the browser pairing adapter
  migration.
