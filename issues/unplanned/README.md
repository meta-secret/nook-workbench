---
title: Unplanned engineering repairs
status: active
created_at: 2026-07-27T05:45:15Z
updated_at: 2026-08-26T04:27:46Z
---

# Unplanned engineering repairs

## Goal

Preserve focused, user-requested engineering repairs that do not belong to an
existing product feature, including their plans, decisions, delivery evidence,
and follow-up state.

## Current state

Directly requested repository repairs are tracked here when no narrower feature
record exists.

## Decisions

- Keep each repair in a focused issue rather than treating `unplanned` as a
  substitute for task ownership and completion evidence.

## Issues

- [x] [Consolidate automatic repository policy checks](consolidate-repository-policy-checks.md)
- [x] [Unify Main and Rust ecosystem orchestration](unify-main-rust-ecosystem-workflow.md)
- [ ] [Apply strict TypeScript API discipline across Nook web](nook-web-typescript-api-discipline.md)
- [x] [Remove Redis from hosted Rust builds](remove-redis-from-hosted-rust-builds.md)
- [x] [Add persistent URLs to vault application pages](persistent-vault-page-urls.md)
- [ ] [Resolve open Dependabot security alerts](resolve-dependabot-security-alerts.md)
- [x] [Disable headless UI demos in GitHub Actions](disable-headless-ui-demos.md)

## References

- [Nook repository](https://github.com/meta-secret/nook)
