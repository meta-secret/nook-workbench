# Main verification repair plan

## Interpreted request

Repair the failed Main verification for commit `426eb2a581e8` through a normal
Nook pull request and verify the replacement Main run.

## Requirements

- Diagnose the retained browser-job evidence without publishing raw logs.
- Make the smallest durable correction and add a browser regression for the
  failed interaction.
- Label the repair pull request `ci:full-e2e`, clear checks and feedback, then
  squash-merge it.

## Constraints and exclusions

- Preserve cache, authentication, and vault-security boundaries.
- Do not bypass checks or commit directly to `main`.
- Keep incident records limited to public-safe findings and links.

## Initial plan

1. Trace the vault lifecycle failure from the retained Main browser evidence
   to the refactor that introduced it.
2. Restore the missing behavior with focused Playwright coverage.
3. Publish the deterministic branch and PR, validate its exact head including
   full browser suites, then squash-merge and verify Main.
4. Record the completed incident, worklog, and delivery statistics in
   Workbench.

## Completion evidence

- A merged repair PR with green repository-owned exact-head checks.
- A green replacement Main workflow for the squash commit.
- Linked incident progress, worklog, and immutable PR statistics.

## Safety review

The repair will not expose vault material, credentials, raw CI logs, or
workflow environment data. It will retain serialized access to the WASM vault
manager and existing browser isolation.
