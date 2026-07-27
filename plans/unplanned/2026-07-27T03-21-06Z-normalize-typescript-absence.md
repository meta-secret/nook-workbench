---
title: Normalize authored TypeScript absence semantics
feature: unplanned
issue: none
started_at: 2026-07-27T03:21:06Z
agent: codex
---

# Normalize authored TypeScript absence semantics

## Interpreted request

Refactor the web-family TypeScript and Svelte sources so ordinary application
state consistently represents absence with `undefined`, while keeping explicit
browser and generated API compatibility at narrow boundaries.

## Requirements

- Remove authored `null` state sentinels, nullable internal types, and nullable
  default component references from product source.
- Normalize nullable browser and URL API results before they enter application
  state.
- Preserve browser-mandated signatures and generated or ambient declarations
  where `null` is part of an external contract.
- Add a repository-level regression guard that rejects future internal nullable
  state while documenting narrow external-boundary exceptions.
- Preserve behavior and add focused automated coverage for the guard and any
  changed boundary normalization.
- Deliver through a Nook pull request, repository-owned GitHub Actions,
  exact-head readiness, and squash merge.

## Constraints and exclusions

- This is an absence-semantics refactor, not a redesign or a change to vault,
  authentication, cryptographic, or persistence policy.
- External Web Platform APIs may require or return `null`; those values must be
  consumed or produced only at their platform boundary.
- Generated WASM bindings and third-party code are not hand-edited.
- Product validation runs on GitHub Actions; only formatting and the applicable
  lightweight demo contract run locally before push.

## Initial plan

1. Classify every authored product-source `null` occurrence as internal state,
   inbound browser data, outbound platform contract, or ambient declaration.
2. Replace internal nullable state and props with `undefined`, and normalize
   inbound nullable values at the call boundary.
3. Add a syntax-aware or tightly scoped preflight invariant with fixtures for
   allowed external contracts and rejected internal nullable state.
4. Format the host tree, commit, push, and validate the exact PR head through
   repository-owned GitHub Actions.
5. Address current feedback, squash-merge, and publish the linked completion
   worklog and agent statistics.

## Completion evidence

- Authored product state and props no longer use `null` as an absence sentinel.
- Remaining `null` occurrences are demonstrably required by browser or ambient
  external contracts and are covered by the regression guard's allowlist.
- Repository-owned PR checks and the exact-head readiness audit pass before the
  PR is squash-merged.
- The Workbench completion record links the plan, merged PR, validation, and
  measured delivery statistics.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
