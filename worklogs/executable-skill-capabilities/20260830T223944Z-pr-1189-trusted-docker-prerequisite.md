---
title: Complete the trusted Docker executable prerequisite
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/discoverable-yaml-protocol.md
plan: plans/executable-skill-capabilities/20260830T220613Z-discoverable-yaml-native-stack.md
nook_pr: https://github.com/meta-secret/nook/pull/1189
status: completed
started_at: 2026-08-29T00:01:33Z
finished_at: 2026-08-30T22:35:37Z
agent: codex
---

# Complete the trusted Docker executable prerequisite

## Outcome

PR 1189 completed a prerequisite for the discoverable executable-skill YAML
feature. It is not one of the governing plan's two declared stack slices. The
strict YAML protocol predecessor and article-activation successor remain open,
so the owning issue remains `in_progress`.

The prerequisite hardened the repository's trusted Docker wrapper boundary so
later executable-skill delivery cannot inherit attacker-selected executables,
runtime endpoints, builders, contexts, plugins, or proxy-derived build args.
The final implementation retained an exact six-file scope: two trusted wrapper
scripts, their Taskfile caller, the GitHub Actions cache verifier, the focused
Rust contract test, and the canonical Loom source-seam digest inventory.

## Delivery evidence

- Pull request: https://github.com/meta-secret/nook/pull/1189
- Exact reviewed head: `a3bc2b00037b9fa13859abdccc39e4fb97ff9a4f`
- Exact readiness base: `16a82891c648de8bc699953add1fa2afa025aa93`
- Squash commit on `main`: `80b8a5a20e8d4158f991df524d676f73dadfa0bf`
- Exact-head PR workflow run `33339254071` succeeded.
- Exact-head Hive run `33339046750` succeeded.
- Exact-head repository-policy run `33339046707` succeeded.
- The Pages deployment succeeded at https://pr-1189.nokey-sh.pages.dev.
- `task pr:ready PR=1189` reported current base, mergeable state, clean
  exact-head Codex review, zero unresolved threads, green required checks, and
  successful deployment.

## Verification

- `task infra:surface:check` passed.
- Vault isolation passed 46 of 46 tests.
- The bake simulation passed 1 of 1 test.
- Source architecture passed 7 of 7 tests.
- Loom passed 654 of 654 tests with 4,408 assertions.
- Module-expert audit passed for 9 profiles and 14 production modules.
- Structural expert audit passed for 3 profiles.
- Focused command security passed 19 of 19 tests.
- Bash syntax and `git diff --check` passed.
- `preflight/tests/vault_app_isolation/build_contracts.rs` remained at the
  exact 1,000-line source cap.
- The reviewed wrapper digests were
  `c2d9895d55a3039a55f0ebe79932278879237a7638778b41f706fa653cdcf360`
  for `with-healthy-buildkit.sh` and
  `1132f276fed615ce28a10a8a869c54d7b68c9174b2c2bb12865d9f5277042e38`
  for `with-remote-buildkit.sh`.

## Baseline and fix iterations

The initial boundary already constrained Docker configuration, but exact-head
review and hosted validation exposed composed authority paths in successive
iterations. The delivered prerequisite:

1. stripped inherited Docker endpoint, context, builder, BuildKit host, and
   proxy configuration while preserving only required authentication state;
2. restored the exact Taskfile source-contract comments after the first hosted
   Hive command-surface failure;
3. used `/bin/ln` to close hostile `PATH` plugin-link injection;
4. established system-only `PATH=/usr/bin:/bin` before any internal utility in
   all four initializers, with hostile `mktemp` and `ln` regressions;
5. refreshed the two canonical Loom digests whenever wrapper contents changed;
6. incorporated current `main` prerequisites, including PR 1235's contextual
   module-expert repair, and repeated exact-head gates after each base change.

The immutable statistics record intentionally relies on server-observed GitHub
delivery evidence. Historical local command timestamps were not captured in an
out-of-tree scratch log and are not reconstructed or invented after merge.

## Remaining work

The governing plan remains
`plans/executable-skill-capabilities/20260830T220613Z-discoverable-yaml-native-stack.md`.
Its two declared slices remain: the strict executable-skill YAML protocol, then
the co-located Cortex article YAML activation.
