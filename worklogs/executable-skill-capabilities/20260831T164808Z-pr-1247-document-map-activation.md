---
title: Work summary
feature: executable-skill-capabilities
issue: issues/executable-skill-capabilities/cortex-document-map-activation.md
plan: plans/executable-skill-capabilities/20260831T014157Z-cortex-document-map-stack.md
nook_pr: 1247
status: completed
started_at: 2026-08-31T01:41:57Z
finished_at: 2026-08-31T16:48:08Z
agent: codex
---

# Work summary

## Outcome

The provider-neutral YAML host now discovers and executes the closed
`cortexDocumentMap.audit` action through the owner-local skill application.
Mandatory Cortex auditing uses the verified provider, and Loom no longer owns a
duplicate document-map semantic implementation.

## Progress

- Added a statically registered, schema-discoverable YAML action with a copyable
  request example.
- Bound execution to strict YAML, schema, package, repository path, symlink, and
  source-profile audits before provider invocation.
- Routed Cortex audit aggregation through independently accepted provider output.
- Made repository policy fetch the exact pull-request base needed for the
  fail-closed published-identifier audit on stacked pull requests.

## Implementation problems

- The stacked pull-request checkout initially lacked its exact base object, so
  the published identifier baseline could not resolve. A bounded read-only fetch
  of the event base SHA fixed the audit without weakening it.
- GitHub rebased the successor automatically after the foundation merged. The
  new exact head was fully revalidated and independently reviewed before merge.

## Decisions

- Manifests remain declarative; only the reviewed static action registry chooses
  executable providers.
- Native subagent lifecycle remains harness-owned and outside this application.
- Failures remain bounded and redact request values while retaining canonical
  diagnostic paths.

## Validation

- The final rebased head passed Loom verification, all three skill-package
  suites, Cortex audit, and pre-push checks locally.
- Repository policy and the full hosted native, Rust, WASM, web, preview, and
  security matrix passed.
- Exact-head hosted Codex review and independent patch review found no issues.

## Remaining work

- None for the document-map foundation and activation slices.
