---
title: "Add persistent URLs to vault application pages"
status: in_progress
priority: p1
automation: manual
owner: codex
created_at: 2026-08-04T21:07:05Z
updated_at: 2026-08-04T21:07:05Z
source_issues: []
related_prs: []
depends_on: []
---

# Add persistent URLs to vault application pages

## Context

The Simple and Sentinel vault applications currently keep their primary page
selection only in transient Svelte state. This prevents bookmarking, reloading,
sharing safe page locations, and using browser back and forward navigation.
This focused repair belongs to the [unplanned engineering repairs](README.md)
feature because no narrower active Workbench feature owns application routing.

## Outcome

Each primary vault workspace has a stable, non-sensitive URL that survives a
reload and participates in browser history without changing the existing Svelte
application architecture.

## Scope

- Add canonical routes for Vault, Devices & access, Admin, Add device,
  Settings, and Help.
- Restore route-selected workspaces after authentication and on reload.
- Make browser back and forward update the visible workspace.
- Emit static SPA fallback assets for every supported route in unified,
  Simple, and Sentinel builds.
- Add focused unit and Playwright regression coverage, including a UI demo.
- Exclude secret identifiers, vault identifiers, search text, editor state,
  accordion state, and other sensitive or transient data from URLs.
- Exclude a SvelteKit migration unless the current Vite/Svelte shell proves
  incapable of correct deep-link behavior.

## Acceptance criteria

- [ ] Selecting each primary workspace updates the pathname to its canonical route.
- [ ] Loading a supported pathname directly restores that workspace once the vault is authenticated.
- [ ] Browser back and forward restore prior workspaces without a reload.
- [ ] Unknown paths do not expose an unintended workspace and use a safe canonical fallback.
- [ ] Unified, Simple, and Sentinel deployment artifacts serve the SPA shell for supported routes.
- [ ] URLs contain no vault, secret, credential, query, editor, or search state.
- [ ] Route parsing has focused unit coverage and the user flow has Playwright regression coverage.

## Progress

- 2026-08-04: Claimed for implementation from a direct product request.

## Findings and decisions

- The application already uses the History API for legal, logs, and extension-connect routes, so persistent workspace URLs can extend the existing architecture without adding a framework or router dependency.

## References

- [Nook vault application shell](https://github.com/meta-secret/nook/tree/main/nook-app/nook-web/nook-web-shared/src/vault-app)

