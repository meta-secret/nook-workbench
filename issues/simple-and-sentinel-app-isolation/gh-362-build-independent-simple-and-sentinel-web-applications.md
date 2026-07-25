---
title: "Build independent Simple and Sentinel web applications"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-14T03:35:16Z
updated_at: 2026-07-14T05:44:31Z
source_issues: ["https://github.com/meta-secret/nook/issues/362"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:simple-sentinel-apps"]
legacy_state_reason: "COMPLETED"
---

# Build independent Simple and Sentinel web applications

## Imported context

This record was imported from [Nook GitHub issue #362](https://github.com/meta-secret/nook/issues/362)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #360.

## Problem

The current `nook-web-app` ships Simple and Sentinel workflows in one production
bundle and one origin-local runtime. The product requires independently built
applications so accidental routing or UI reuse cannot mix the two vault types.

## Scope

- Produce distinct Simple and Sentinel web application entrypoints, build
  artifacts, runtime configurations, and application shells.
- Keep shared code limited to presentation/browser glue that is safe for both
  apps; retain all vault/security policy in Rust/WASM.
- Simple exposes only Simple create/import/open/manage flows plus extension
  consent.
- Sentinel exposes only Sentinel genesis/import/quorum/open/manage flows and no
  extension UI or routes.
- Give each application separate origin-local IndexedDB namespaces, service
  worker/cache state, session markers, logs, CSP/security headers, branding, and
  visible vault-type context.
- Preserve localization and responsive/accessibility behavior in both apps.

## Acceptance Criteria

- Separate production commands emit independently deployable Simple and
  Sentinel artifacts; neither is a runtime hostname flag over one universal
  bundle.
- Bundle and route tests prove Simple contains no Sentinel workflow entry and
  Sentinel contains no Simple/extension workflow entry.
- Each app imports the matching typed WASM capability surface.
- One app cannot enumerate, select, or unlock the other app's origin-local vault
  registry.
- Targeted unit/component/Playwright tests cover create, import, lock, switch,
  and wrong-type rejection for each app.

## References

- `nook-app/nook-web/nook-web-app`
- `nook-app/nook-web/nook-web-shared`
- `.cortex/ARCHITECTURE.md`


## Historical comments

No comments.
