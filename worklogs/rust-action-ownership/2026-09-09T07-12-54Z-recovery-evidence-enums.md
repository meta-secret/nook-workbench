---
title: Model recovery evidence categories with enums
feature: rust-action-ownership
issue: issues/rust-action-ownership/global-type-safety-refactor.md
plan: plans/rust-action-ownership/2026-09-09T07-06-28Z-recovery-evidence-enums.md
nook_pr: 1573
status: completed
started_at: 2026-09-09T07:06:28Z
finished_at: 2026-09-09T07:12:54Z
agent: codex
---

# Work summary

## Outcome

Replaced string-array recovery categories with semantic Rust enums and typed recognition/evidence. Shared vocabulary now has one lexical owner. Published through [PR #1573](https://github.com/meta-secret/nook/pull/1573) at cfdd51dc62bfea1c1249e26b878d5896a5354b69.

## Progress

DEV-CORE committed the focused nine-file implementation as cfdd51dc62bfea1c1249e26b878d5896a5354b69. Direct core and WASM callers and inline fixture sources were adapted. No TypeScript contract change was required.

## Implementation problems

Recovery vocabulary appeared independently in strict offer recognition and broader candidate filtering. Their matching modes differ, so consolidation retains plural substring admission separately from singular/plural word-phrase recognition. Semantic outcomes now carry the recognized category instead of discarding it into stringly/boolean domain state.

## Decisions

Literal observed-language spellings remain only in enum-owned lexical methods and source examples. Ordinary predicate queries may still return booleans; domain subjects, instructions and stored candidate evidence use enums. Preserve matching order, candidate redaction, consent timing and existing transport schema.

## Validation

All verification remains deferred. Write-mode formatting only; no tests, compilation, typechecks, lint, audits, code reviews or validation workflows. Runtime and compile-time behavior remain unverified.

## Remaining work

None for the focused implementation. Verification and reviews await separate user instruction. Delivery ends at the open PR; no merge performed.

## Implementation inventory

# Recovery evidence enum implementation

Scope: focused portable recovery/authenticator recognition and direct Rust callers; existing browser ABI preserved.

## Semantic ownership

- `RecoveryCodeSubject::{Backup, Recovery, Emergency}` owns singular and plural recovery-language spellings.
- `PreservationInstruction::{Save, Store, Keep, Download, Print, Copy, Generated}` owns preservation/issuance tokens and their ASCII whole-token recognition.
- `AuthenticationCodeSubject::{Recovery(RecoveryCodeSubject), OneTime, TwoFactor, MultiFactor, Authenticator}` owns the broader code-hint categories, including hyphenated and spaced one-time aliases. Recovery vocabulary is shared with strict offer recognition.
- `RecoverySubjectObservation`, `PreservationObservation`, and `AuthenticationCodeHint` express absent or recognized semantic categories. `RecoveryCopyRecognition` retains recognized subject and instruction and exhaustively classifies the evidence.
- `BackupCodeCandidatePresence::{Absent, Present}` replaces the core evidence request's boolean and the recovery-copy aggregation's stored presence decision. It contains no candidate contents.

Literal English spellings remain in enum-owned lexical/parser methods because page language must ultimately be matched against characters. Domain callers no longer carry recovery subject or preservation string arrays. Inline examples retain literal page copy as source fixtures.

## Preserved behavior and boundaries

- Strict recovery offer subjects retain ASCII-case-insensitive plural substring matching, including historical substring acceptance; singular subjects alone do not become offers.
- Preservation tokens retain ASCII alphanumeric whole-token matching.
- Candidate prose exclusion retains singular/plural word-phrase boundaries and all previous broader code categories/aliases.
- Subject and instruction discovery retain their original order. Classification remains absent without a recovery subject; preservation evidence or separately present candidates can qualify a recognized recovery subject.
- Candidate extraction, limits, redaction, codepoint copy budget, consent timing, and wire/storage representations remain unchanged.
- Existing WASM `classify_authentication_backup_codes_observation(text, candidate_present: bool)` translates its fixed transport boolean immediately into `BackupCodeCandidatePresence`; no TS compatibility layer or enum string mirror added.
- Immediate lexical/predicate queries remain booleans where they answer a yes/no question; domain category recognition and stored candidate evidence are typed.

## Authored files

1. nook-app/nook-platform/nook-companion-core/src/recovery_code_language.rs — lexical owner, semantic observations, classification, inline boundary examples.
2. nook-app/nook-platform/nook-companion-core/src/backup_code_candidates.rs — broader hint recognition consumes typed enum observation.
3. nook-app/nook-platform/nook-companion-core/src/authentication_workflow/observation_facts/authenticator.rs — typed evidence request and classifier delegation, caller/source fixture adaptation.
4. nook-app/nook-platform/nook-companion-core/src/authentication_workflow/enrollment.rs — typed candidate evidence caller.
5. nook-app/nook-platform/nook-companion-core/src/authentication_workflow/transport.rs — typed aggregation presence and classifier requests.
6. nook-app/nook-platform/nook-companion-core/src/lib.rs — lexical module registration and presence export.
7. nook-app/nook-platform/nook-core/src/lib.rs — canonical core presence reexport alongside existing companion API.
8. nook-app/nook-platform/nook-companion-wasm/src/authentication_workflow.rs — existing boolean ABI adaptation.
9. nook-app/nook-platform/nook-companion-wasm/src/lib.rs — source fixtures use typed evidence.

## Execution boundaries

Write-mode rustfmt applied only to authored files with child traversal disabled. Inline source examples updated/authored but not executed. No tests, compilation, typechecks, lint/checks, audits, reviews, validation workflows, or final verification were performed. No TS, policy, generated artifacts, Workbench, or PR edits. Focused implementation scope complete; execution-based verification remains deferred by user instruction.

