---
title: Prohibit fully qualified Rust paths in Cortex
feature: unplanned
issue: null
plan: plans/unplanned/20260905T004400Z-rust-qualified-path-cortex.md
nook_pr: 1358
status: completed
started_at: 2026-09-05T00:44:00Z
finished_at: 2026-09-05T00:52:23Z
agent: codex
---

# Work summary

## Outcome

PR #1358 captured the completed crate migration as canonical Cortex Rust guidance and squash-merged as `a65602cc1fe31a3b9ed0f474617d810ad1f6ba97`.

## Progress

- Added a dedicated concise-path rules article to the existing Development Core Rust coding card.
- Prohibited authored non-`use` paths above two inline segments.
- Required meaningful module or type context for free functions and associated operations.
- Documented `str::from_utf8(data)` as the standard-library pattern.
- Aligned the AI-owned skill catalog description with the expanded rule.

## Implementation problems

- Combined review found the first catalog sentence joined two independent ideas with a semicolon. AI split it into two short sentences before push.
- No product or policy defect was found during hosted validation.

## Decisions

- Update the existing `rust-coding.md` authority instead of creating a duplicate skill.
- Treat Clippy `absolute_paths` with a two-segment maximum as the mechanical baseline.
- Retain semantic review for relative and other non-absolute paths that Clippy does not cover.
- Keep the change instruction-only; do not add a second source scanner or Loom implementation.

## Validation

- `task loom:cortex-audit` passed with zero findings after each Team Agent edit.
- `git diff --check` and exact two-file scope checks passed.
- Current product, Dylint, fuzz, preflight, and Minds manifests confirm `absolute_paths = "deny"` with `absolute-paths-max-segments = 2`.
- Hosted repository policy run `33934327605` passed on exact head `5e20d218fd99a56707c762a9101676639f3ca5e8`.
- `task pr:ready PR=1358` reported ready against Main `48a5794fe536c8c45f40c80be97f9bf0df8d9b3e`.

## Remaining work

- None.
