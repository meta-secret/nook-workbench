---
title: "Close web research TypeScript coverage gap"
feature: typescript-quality
started_at: 2026-08-28T22:43:44Z
agent: codex
---

# Close web research TypeScript coverage gap

## Interpreted request

Make the existing web-owned TypeScript quality gates cover the two authored
research Playwright files that are currently outside every TypeScript program,
without touching the actively owned Loom, AI Cortex, Task, preflight, GitHub
script, or infrastructure migration surfaces.

## Requirements

- Include the research Playwright configuration and E2E specification in the
  research TypeScript project.
- Include both files in the existing typed ESLint invocation.
- Repair any violations exposed by those existing strict web rules without
  changing application behavior.
- Deliver the focused change through validation, pull request, readiness, and
  Workbench closeout.

## Constraints and exclusions

- Do not modify Loom, AI Cortex, Task, preflight, GitHub scripts,
  infrastructure, Rust, or the active executable-skill PR stack.
- Do not introduce a repository-wide TypeScript super-package or a Rust super
  crate; those remain user-owned architecture decisions.
- Preserve Playwright's host callback signatures and keep any necessary lint
  exception narrow and documented.
- Preserve the research application's isolated package and runtime ownership.

## Change budget and PR sequence

- Estimated authored changed lines: 80
- Owning modules, packages, or layers: Nook web research TypeScript project and its E2E configuration
- Ownership units:
1. Capability: Strict TypeScript and typed-lint coverage for web research Playwright files; Functional owner: Web development; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: Both authored Playwright files belong to the research TypeScript program and pass existing web lint, format, check, and test-discovery gates
- Public or cross-module interfaces: No public or cross-module interface changes
- Delivery shape: One PR
- Current PR estimated authored changed lines: 80
- Current PR slice and acceptance evidence: Close the web research Playwright TypeScript coverage gap; Acceptance evidence: research check, typed lint, formatting, targeted E2E discovery, repository TypeScript inventory, and PR readiness pass
- PR slices and acceptance evidence: Close the web research Playwright TypeScript coverage gap; Acceptance evidence: research check, typed lint, formatting, targeted E2E discovery, repository TypeScript inventory, and PR readiness pass

## Initial plan

1. Extend the research project and lint scope to the two uncovered Playwright
   files.
2. Apply existing web TypeScript contracts to any newly exposed violations and
   add no new policy exemptions unless Playwright owns the callback shape.
3. Run focused web checks and the repository inventory, then open and finish a
   focused pull request.

## Completion evidence

- Both research Playwright files are members of a checked TypeScript program.
- Both files pass the existing typed ESLint and formatting rules.
- The research package check and targeted Playwright discovery pass.
- The focused PR reaches the repository's exact-head readiness boundary.

## Safety review

This plan contains no raw request, transcript, secrets, private data,
environment dumps, local paths, internal addresses, or unnecessary
infrastructure details.
