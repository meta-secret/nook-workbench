---
title: Cortex document-navigation contract and enforcement delivered
feature: cortex-document-navigation
issue: issues/cortex-document-navigation/document-map-contract-and-enforcement.md
plan: plans/cortex-document-navigation/20260815T025405Z-contract-and-enforcement.md
nook_pr: 1003
status: completed
started_at: 2026-08-15T02:54:05Z
finished_at: 2026-08-15T04:10:33Z
agent: codex
---

# Cortex document-navigation contract and enforcement delivered

## Outcome

Merged the canonical Cortex document-navigation rule and the first five
compliant documents. Loom now parses Markdown structure and rejects navigation
drift while a monotonic ledger tracks the 78 remaining migrations.

## Progress

- Added the `Relationships` and `Document map` contract with standard Markdown
  links and exactly two concise explanation bullets per linked entry.
- Added a canonical dynamic skill, executable wrapper, and Cursor/Claude
  mirrors.
- Migrated the dynamic-skill template, registry, Cortex writer, Cortex
  consistency rule, and new navigation rule.
- Added AST checks for H1 placement, mandated H2 order, map coverage, hierarchy,
  GitHub-compatible fragments, relationship validity, and migration integrity.
- Added `.cortex/**` to the Loom workflow and protected the focused audit step
  through preflight.

## Implementation problems

- Advisory review found that the first ledger design could grow, a late H1
  could pass, and `None.` could coexist with links. Each case was fixed and
  covered by a regression test before the first push.
- The first selected Loom run found authored `undefined` guards and a raw
  string discriminant. They were replaced with explicit false sentinels and a
  named enum. The focused TypeScript-state preflight then passed locally.
- The first readiness attempt hit a transient Docker Hub 502. The retry ran and
  confirmed the exact head was current and mergeable.
- Readiness expected the complete product and Pages suite. That suite remained
  intentionally untriggered for this focused Cortex rollout.
- The merge succeeded remotely, but local cleanup could not switch to `main`
  because another worktree owns it. A follow-up query confirmed the merge.

## Decisions

- Use standard inline Markdown links rather than wiki links or code-like
  relationship identifiers.
- Loom owns Markdown parsing and semantic structure checks. Preflight protects
  only the workflow trigger and audit-step wiring.
- The migration ledger may only shrink relative to the Git baseline. Bootstrap
  is allowed only before the canonical navigation skill exists.
- `- None.` is valid only for a genuinely empty relationship set.
- Complete product validation is unnecessary for these bounded documentation
  migrations; only selected Cortex, Loom, TypeScript-state, and source checks
  run.

## Validation

- `task loom:verify`: 114 tests passed.
- `task loom:cortex-audit`: passed before and after commit.
- `task preflight:loom-contracts`: 2 tests passed.
- `task preflight:typescript-state`: 8 focused tests passed.
- `task loom:pre-push`: format and UI-demo contract passed on every pushed
  head.
- Source architecture and Loom selected checks passed on exact head
  `15bb3d6ed7dee94be9e3b13da1c04f8bfba8a1d7`.
- [Nook PR #1003](https://github.com/meta-secret/nook/pull/1003) squash-merged
  as `ee825c3b6dd7da602d07a4bd9e0fd491aaecbc5e`.

## Remaining work

- Continue the ordered document-family migrations in the four linked focused
  issues.
- Remove the temporary ledger after the last Cortex document complies.
