---
title: "Restyle help, logs, legal, and supporting web-app surfaces"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-10T04:25:37Z
updated_at: 2026-07-21T04:33:16Z
source_issues: ["https://github.com/meta-secret/nook/issues/301"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:security-console-ui"]
legacy_state_reason: "COMPLETED"
---

# Restyle help, logs, legal, and supporting web-app surfaces

## Imported context

This record was imported from [Nook GitHub issue #301](https://github.com/meta-secret/nook/issues/301)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #295.

## Visual Reference

<img width="1200" height="900" alt="Dark layered security-console UI visual reference" src="https://github.com/user-attachments/assets/6bd5a67d-0a5b-4cfa-a6a3-c74270d0e66f" />

Use this image as the visual reference for atmosphere, layering, typography, spacing, translucency, restrained accent color, and overall polish. Adapt it to Nook rather than copying payment-card content, low contrast, or the decorative perspective angle. The canonical feature brief is #295.

## Dependency

Depends on #296 and should follow the shell conventions established in #297.

## Problem

Help, logs, legal documents, Markdown content, and supporting pages sit outside the core vault flow but are still part of the product. Leaving them on the old visual language would make the redesign feel incomplete and could create theme/contrast regressions.

## Scope

- Restyle Help, Logs, Legal, Markdown content/editor presentation, product introduction, and other non-authenticated/supporting web-app pages.
- Reconcile `github-markdown-css` variables with the shared Nook theme so prose, tables, code, diagrams, and links fit the new visual system.
- Preserve log filtering, pagination, copying, clearing, and machine-readable `/app-logs` behavior.
- Preserve legal readability, deep-link/back navigation, and print/select/copy usability.
- Cover empty, loading, expanded/collapsed, code-block, diagram, and long-document states.

## Out of Scope

- Rewriting product documentation or legal text except where new UI labels require localization.
- Changing persisted logging behavior or the `/app-logs` machine-readable contract.
- Redesigning the browser extension.

## Acceptance Criteria

- Supporting pages feel native to the same product in dark and light modes.
- Markdown headings, links, code, tables, callouts, and Mermaid diagrams meet readable contrast and do not inherit conflicting GitHub theme colors.
- Logs remain dense and scannable without losing severity, timestamp, source, or copy affordances.
- Legal and help pages remain usable on narrow screens and with long localized content.
- `/app-logs` output remains machine-readable and behaviorally unchanged.
- Help, logs, and legal Playwright tests pass with representative visual review.

## Code Anchors

- `nook-app/nook-web/nook-web-app/src/lib/components/HelpPage.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/LogsPage.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/LegalDocumentPage.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/MarkdownBody.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/MarkdownContent.svelte`
- `nook-app/nook-web/nook-web-app/src/lib/components/HelpMermaidDiagram.svelte`
- `nook-app/nook-web/nook-web-app/e2e/logs-page.spec.ts`
- `nook-app/nook-web/nook-web-app/e2e/legal-pages.spec.ts`




## Historical comments

### cypherkitty — 2026-07-21T04:33:15Z

Closing as completed: security-console UI redesign work for this slice is considered done on current main. Tracking via milestone 2 close-out.
