---
title: "Add one-command download and browser launcher for hosted extension builds"
status: in_progress
priority: p2
automation: manual
owner: "cypherkitty"
created_at: 2026-07-15T08:15:11Z
updated_at: 2026-08-29T00:06:00Z
source_issues: ["https://github.com/meta-secret/nook/issues/410"]
related_prs: ["https://github.com/meta-secret/nook/pull/1190"]
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Add one-command download and browser launcher for hosted extension builds

## Imported context

This record was imported from [Nook GitHub issue #410](https://github.com/meta-secret/nook/issues/410)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #408.

## Problem

Downloadable PR and development extension artifacts still require testers to
manually download, unpack, open the browser extensions page, enable Developer
mode, and select the unpacked directory. Contributors need a single Taskfile
command that safely installs a selected hosted artifact into a stable local
directory and launches an isolated browser profile with it loaded.

## Scope

- Add Taskfile commands for hosted development and PR artifacts, for example:
  - `task extension:run:chrome CHANNEL=dev`
  - `task extension:run:chrome PR=408`
  - `task extension:run:brave CHANNEL=dev`
  - `task extension:run:brave PR=408`
- Resolve the ZIP and expected digest from the channel's published
  `extension.json` instead of duplicating artifact names in Taskfile logic.
- Download with redirects and fail on HTTP errors.
- Verify SHA-256 before extracting anything.
- Extract atomically into a stable channel-specific directory under the Nook
  application-support directory.
- Launch Chrome or Brave with a stable, isolated profile and
  `--load-extension=<directory>`.
- Keep PR, development, and production extension storage and profiles isolated.
- Do not attempt to silently install an unsigned extension into an ordinary
  browser profile.

## Acceptance Criteria

- One Task command downloads, verifies, unpacks, and launches the selected
  hosted extension artifact.
- Re-running the command updates the selected artifact without changing its
  channel-specific install path or browser profile.
- Different PR numbers use different extension directories and profiles.
- Chrome and Brave launch paths work on macOS and produce actionable errors
  when the browser or artifact is unavailable.
- A digest mismatch leaves the previous working installation untouched.
- Task-level tests cover URL resolution, channel validation, checksum failure,
  archive validation, and stable directory selection without launching a real
  browser.
- The extension README documents the commands and explains that this launches
  a development profile rather than installing into the user's normal profile.

## References

- Parent deployment issue: #408
- Existing local launcher tasks: `nook-app/nook-web/.task/extension.yml`
- Extension package: `nook-app/nook-web/nook-web-extension`


## Historical comments

No comments.

## Progress

- 2026-08-29: Reopened the launcher boundary for executable-selection hardening. PR [#1190](https://github.com/meta-secret/nook/pull/1190) restricts explicit browser selection to reviewed platform paths, validates executability before probing or launch, and adds focused missing and non-executable coverage. Exact-head review and repository validation are pending.

## Findings and decisions

- Explicit browser overrides are a security-sensitive executable-selection boundary. The launcher accepts only the finite reviewed Chrome and Brave platform paths; arbitrary executable paths remain intentionally unsupported.
