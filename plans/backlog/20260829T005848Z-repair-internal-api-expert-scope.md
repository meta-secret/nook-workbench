# Task plan

## Interpreted request

Restore the exact internal API expert consumer inventory after two production vault-login consumers began importing the generated WASM binding.

## Requirements

Add both discovered production consumers to the canonical authored consumer list, preserve sorted exact scope, prove the direct audit is clean, run focused module-expert tests and the full Loom verification gate, and deliver the prerequisite independently before updating its dependent pull request.

## Constraints and exclusions

Keep the repair inside the AI-owned executable catalog and its existing deterministic regression coverage. Do not change product behavior, generated bindings, Docker scripts, workflows, Cortex policy, or unrelated catalog entries. Do not weaken fail-closed catalog validation.

## Change budget and PR sequence

- Estimated authored changed lines: 2
- Owning modules, packages, or layers: Loom module-expert catalog
- Ownership units:
1. Capability: Exact internal API consumer registration; Functional owner: AI; Expertise provider: None; Expertise allowed code paths: None; Expertise allowed test paths: None; Expertise forbidden paths: None; Expertise consumer interfaces: None; Expertise acceptance evidence: None; Capability acceptance evidence: direct module-expert audit reports no findings, focused consumer-scope tests pass, and full Loom verification passes
- Public or cross-module interfaces: Read-only internal API expert evidence scope gains the two production consumers already discovered by the deterministic scanner
- Delivery shape: One PR
- Current PR estimated authored changed lines: 2
- Current PR slice and acceptance evidence: Register the two missing vault-login generated-binding consumers; Acceptance evidence: exact catalog audit, focused tests, full Loom verification, repository policy, and clean review
- PR slices and acceptance evidence: 1. Register the two missing vault-login generated-binding consumers; Acceptance evidence: exact catalog audit, focused tests, full Loom verification, repository policy, and clean review

## Initial plan

1. Confirm the direct discovered-versus-catalog delta contains exactly the two known consumers.
2. Insert both paths into the sorted authored consumer list without changing discovery or audit policy.
3. Run the direct audit, focused module-expert coverage, full Loom verification, and repository delivery gates.
4. Deliver and merge the prerequisite, then rebase and revalidate the dependent pull request.

## Completion evidence

Record the exact prerequisite commit and pull request, zero direct audit findings, passing focused and full Loom suites, repository review and CI state, merge commit, and the dependent pull request rebase result.

## Safety review

This plan contains no raw prompt or transcript, secrets, credentials, private data, raw logs, local paths, internal service details, or unrelated infrastructure information.
