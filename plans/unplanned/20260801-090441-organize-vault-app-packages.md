---
title: Organize vault application modules into cohesive packages
feature: unplanned
issue: none
started_at: 2026-08-01T09:04:41Z
agent: codex
---

# Task plan

## Interpreted request

Replace the flat shared vault application module layout with cohesive domain
packages so authentication, provider, and platform-specific implementation is
discoverable from directory structure. Establish authentication as an explicit
package and group iCloud implementation beneath it rather than keeping related
files at the library root.

## Requirements

- Inventory the complete vault application file tree, imports, tests, aliases,
  and tooling assumptions before moving modules.
- Group authentication and provider browser adapters under an `auth` package,
  with dedicated iCloud and Google subpackages.
- Organize other clearly related root-level modules where the dependency graph
  supports a cohesive package without mixing unrelated responsibilities.
- Update every application, test, demo, and tooling import while preserving
  runtime behavior and public module contracts.
- Document the durable package ownership boundary and enforce important paths
  with repository preflight where appropriate.
- Extend PR 900 and keep it open and unmerged until explicit user direction.

## Constraints and exclusions

- This is an ownership and discoverability refactor, not a visual redesign.
- Do not move portable authentication or provider policy from Rust back into
  TypeScript; TypeScript packages contain browser adapters and presentation
  integration only.
- Do not combine browser lifecycle, UI state, and portable domain policy merely
  because they participate in the same user flow.
- Keep authored source files below the repository size limit.

## Initial plan

1. Classify root modules and component groups by domain, dependency direction,
   and browser versus Rust ownership.
2. Update the branch with current `origin/main` and resolve any structural
   overlap before moving files.
3. Create cohesive package directories, move files with history-preserving Git
   operations, and update all consumers and tests.
4. Add or update architecture and preflight coverage for the new boundaries.
5. Format, satisfy the UI demo contract, update PR 900, and run exact-head
   hosted validation without merging.

## Completion evidence

- No iCloud implementation modules remain scattered at the vault library root.
- Authentication/provider imports resolve through cohesive package paths and no
  stale paths remain anywhere in the repository.
- Architecture/preflight checks describe and constrain the package layout.
- Exact-head GitHub-hosted validation passes and PR 900 remains open.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data,
  raw log, local path, or unnecessary infrastructure detail.
