---
title: Lower the authored source line limit to 750
feature: unplanned
started_at: 2026-08-10T16:34:48Z
agent: codex
---

# Task plan

## Interpreted request

Reduce Nook's uniform authored-source ceiling from 1,000 physical lines to 750.
Refactor every source file that violates the new ceiling.
Each decomposition must follow a cohesive architectural boundary.

## Requirements

- Apply one 750-line ceiling to every authored source language already covered by the preflight scanner.
- Update the executable scanner, its tests, agent guidance, and canonical cortex policy together.
- Inventory all newly oversized files across production code, tests, scripts, build logic, and agent tooling.
- Split each violation by domain, capability, ownership, lifecycle, or dependency boundary.
- Keep Rust unit tests inline with the focused implementation they cover.
- Preserve behavior and dependency direction.
- Deliver through an exact-head pull request with repository-owned checks passing.

## Constraints and exclusions

- Generated code, vendored dependencies, build outputs, caches, and non-source fixture data remain excluded under the existing provenance rules.
- Arbitrary numbered fragments and test-only extraction are prohibited.
- The task changes structural ownership and enforcement. It does not intentionally change product behavior.
- Heavy builds and product tests run only on GitHub-hosted workers.

## Initial plan

1. Enumerate all files that exceed 750 lines under the scanner's current classification.
2. Map each violation to a cohesive extraction seam.
3. Lower the guard and align its tests and durable guidance.
4. Refactor every violation and retain focused coverage with its owning module.
5. Apply repository formatting, publish the branch, and run exact-head hosted validation.
6. Resolve existing actionable feedback, merge, and publish completion records.

## Completion evidence

- The source-architecture scanner reports no authored file above 750 lines.
- Contract tests prove the new threshold remains wired through code and guidance.
- The implementation pull request passes exact-head repository-owned checks and is squash-merged.
- A linked Workbench worklog and delivery statistics record the result.

## Safety review

- This record contains no raw prompt, chat transcript, secret, private data, raw log, local path, or unnecessary infrastructure detail.
