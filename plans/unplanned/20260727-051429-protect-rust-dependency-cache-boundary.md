---
title: Protect the Rust dependency cache boundary
feature: unplanned
issue: issues/backlog/gh-35-optimize-docker-builds-cache-rust-dependencies-with-cargo-chef.md
started_at: 2026-07-27T05:14:29Z
agent: codex
---

# Protect the Rust dependency cache boundary

## Interpreted request

Restore deterministic reuse of Cargo dependency layers and make future
credential-mount regressions fail preflight before they can degrade CI.

## Requirements

- Keep optional remote compiler-cache credentials out of manifest-only
  dependency stages.
- Preserve Redis-backed sccache for source-sensitive compiler stages where it
  provides useful cross-run compiler-object reuse.
- Add a stage-aware preflight regression check that rejects secret mounts in
  the protected dependency boundary.
- Deliver the change through the normal pull request, exact-head validation,
  and merge workflow.

## Constraints and exclusions

- GitHub Secrets or encrypted configuration may store the credential, but they
  do not replace the need for a stable Docker build definition.
- Untrusted pull requests must remain credential-free.
- The change must not expose credential values or weaken the existing direct
  compilation fallback.

## Initial plan

1. Confirm the slow Docker stage and its cache import and publication behavior.
2. Remove credential mounts from the protected manifest-only dependency
   stages.
3. Add stage-aware preflight coverage that fails if those mounts return.
4. Format, publish a pull request, monitor repository-owned checks, resolve
   active feedback, and squash-merge when exact-head readiness passes.
5. Publish the linked completion worklog and agent statistics.

## Completion evidence

- A focused preflight test proves the protected stages contain no secret
  mounts while source-sensitive stages retain compiler-cache access.
- The implementation pull request passes current repository-owned checks and
  exact-head readiness, then merges.
- A linked Workbench worklog and statistics record capture the result.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data,
raw logs, local paths, or unnecessary infrastructure details.
