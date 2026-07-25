---
title: "Deploy browser-extension artifacts for PR, development, and production channels"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-15T08:01:05Z
updated_at: 2026-07-15T09:09:19Z
source_issues: ["https://github.com/meta-secret/nook/issues/408"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement"]
legacy_state_reason: "COMPLETED"
---

# Deploy browser-extension artifacts for PR, development, and production channels

## Imported context

This record was imported from [Nook GitHub issue #408](https://github.com/meta-secret/nook/issues/408)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Publish the tested Nook browser-extension bundle alongside every PR preview,
the development deployment, and immutable production releases. Keep the three
channels origin-isolated and make each artifact directly discoverable with
machine-readable metadata and integrity checks.

## Current Status

- `nook-web-extension` already builds in the sealed web image.
- `task extension:package` can produce a root-level ZIP for local installation.
- PR, development, and production workflows deploy the web applications but do
  not publish the extension bundle.
- PR CI still targets the legacy unified `/simple/` preview instead of the
  isolated `nokey-simple` preview, and main does not explicitly build the
  extension for `simple.dev.nokey.sh`.

## Scope

- Build one channel-specific Manifest V3 bundle from the same source package.
- Preserve distinct production, development, and per-PR extension identities.
- Publish a ZIP, `extension.json`, and SHA-256 checksum through the site Pages
  artifact for PR previews, `dev.nokey.sh`, and production releases.
- Point each extension at its matching isolated Simple Vault origin.
- Add installation documentation and surface download URLs in workflow output.
- Attach the production ZIP and metadata to the immutable GitHub Release.
- Do not add Chrome Web Store publication in this issue.

## Acceptance Criteria

- `https://pr-<number>.nokey-sh.pages.dev/downloads/` exposes an extension ZIP
  built for `https://pr-<number>.nokey-simple.pages.dev/`.
- `https://dev.nokey.sh/downloads/` exposes an extension ZIP built for
  `https://simple.dev.nokey.sh/`.
- production exposes the immutable versioned ZIP on `nokey.sh` and the GitHub
  Release, built for `https://simple.nokey.sh/`.
- Every channel exposes metadata containing channel, version, commit, target
  URL, extension ID, download URL, and SHA-256 digest.
- Rebuilds of one PR retain its extension ID, while different PR/dev/prod
  channels cannot share extension-origin state or passkeys.
- CI verifies archive structure, metadata, digest, manifest target, and live
  availability after deployment.
- Targeted extension/build tests and repository checks pass.

## References

- Related extension scope: #234
- Related application isolation: #360
- Code: `nook-app/nook-web/nook-web-extension`
- Workflows: `.github/workflows/pr.yml`, `.github/workflows/main.yml`,
  `.github/workflows/release.yml`

## Isolation boundary

- The extension must never connect to or inject content scripts into the matching Sentinel origin (`sentinel.nokey.sh`, `sentinel.dev.nokey.sh`, or the per-PR Sentinel Pages host).
- Deployed-manifest verification must fail unless Sentinel is excluded from every content script and absent from `externally_connectable`.

## Historical comments

No comments.
