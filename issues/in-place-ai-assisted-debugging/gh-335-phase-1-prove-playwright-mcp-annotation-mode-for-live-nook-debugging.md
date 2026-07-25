---
title: "Phase 1: Prove Playwright MCP annotation mode for live Nook debugging"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-13T03:15:17Z
updated_at: 2026-07-13T04:25:02Z
source_issues: ["https://github.com/meta-secret/nook/issues/335"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-debug-workflow"]
legacy_state_reason: "COMPLETED"
---

# Phase 1: Prove Playwright MCP annotation mode for live Nook debugging

## Imported context

This record was imported from [Nook GitHub issue #335](https://github.com/meta-secret/nook/issues/335)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #334.

## Problem

Developers currently have to take a screenshot, paste it into an agent prompt, identify the relevant area, and separately explain what happened. This loses live browser context and creates unnecessary friction.

Before building custom Nook UI or infrastructure, prove whether Playwright MCP annotation mode is sufficient for live local debugging.

## Scope

- Configure and document Playwright MCP annotation mode for the Nook local development workflow.
- Connect the agent to a browser session running the Nook application started through the repository's Task workflow.
- Let the developer mark an element or region and add an in-context explanation.
- Confirm that the agent receives the annotated screenshot, annotation details, and structured page/accessibility context.
- Correlate the report with persisted Nook application logs through the live browser and inspect the relevant repository source.
- Record the exact workflow and any browser, passkey/WebAuthn, or operating-system-dialog limitations.

## Explicitly Out of Scope

- Custom Nook annotation overlay or floating debug button.
- Local agent bridge, WebSocket status channel, or automatic prompt submission.
- DOM/session replay or new telemetry.
- Production-facing debug mode.
- Exporting vault contents, input values, credentials, tokens, cookies, request bodies, keys, or decrypted secrets.
- Implementing later feature phases before the evaluation gate passes.

## Acceptance Criteria

- A documented Task-first setup starts Nook and connects a trusted agent through Playwright MCP.
- The developer can enter annotation mode, mark the problematic UI, and explain the problem without manually capturing or pasting a screenshot.
- The agent receives the marked visual plus element/accessibility context and can identify the relevant Nook component or source path.
- The agent reads the existing persisted app logs through browser execution; it does not treat `/app-logs` as a curl-accessible server API.
- The pilot is exercised on at least three representative cases: a visual/layout problem, an application error or stuck state, and an unlock/passkey-adjacent flow while respecting the native WebAuthn/OS boundary.
- Each pilot records whether the target was unambiguous, whether logs/source correlation succeeded, and what manual explanation remained necessary.
- Testing uses a local development browser profile and synthetic/non-sensitive vault data.
- Documentation clearly warns that an attached browser agent may access the active page, cookies, storage, and authenticated state.
- No custom in-app debug feature is implemented in this issue.

## Validation Evidence

Attach or comment with:

- The Playwright MCP configuration/version used.
- One sanitized example annotation result.
- The relevant app-log excerpt or scopes consulted.
- The source path the agent identified.
- Short developer feedback on whether the workflow reduced screenshot/prompt friction.

## References

- Parent: #334
- https://github.com/microsoft/playwright-mcp
- https://playwright.dev/docs/trace-viewer-intro
- `.cortex/references/logging.md`


## Historical comments

### cypherkitty — 2026-07-13T03:55:11Z

## Phase 1 live-pilot evidence

Configuration: `@playwright/mcp@0.0.78`, `--caps=devtools`, isolated ephemeral browser profile, service workers blocked, exact local origins allowed, and a narrow tool allowlist. All test content was synthetic/non-sensitive.

### Pilot session: visual/layout and worktree targeting

- Developer annotation: a rectangle around the visible vault target with the sanitized note "does it work?"
- Target unambiguous: visually yes, but source correlation was not reliable—the browser was on another worktree's server already occupying port 5173.
- Source identified: the visible text only matched `nook-app/nook-web/nook-web-research/src/experiments/nook-auth/landing-handoff/Experiment.svelte`, demonstrating that the wrong build was open.
- App-log correlation: not accepted because the page belonged to a different worktree.
- Manual explanation still needed: the developer had to identify which worktree/browser instance was intended.
- Screenshot/paste eliminated: yes; Playwright returned the annotated screenshot, annotation coordinates/note, and ARIA snapshot directly.
- Resulting change: `WEB_DEV_PORT` support and a documented port-5175 fallback; cleanup now stops only a container mounted from the current worktree.

### Pilot session: application error

- Developer annotation: a rectangle around the page alert with the sanitized question about passkey support in the AI-debug browser.
- Target unambiguous: yes—ARIA included alert `Passkey create ceremony failed`, the `Create new passkey` workflow, and `Use existing passkey`.
- Source identified: `nook-app/nook-web/nook-web-app/src/lib/components/DeviceProtectionGate.svelte` and the caught setup-error path in `nook-app/nook-web/nook-web-app/src/lib/vault.svelte.ts`.
- App-log correlation: Playwright MCP successfully read the page logger through `browser_evaluate`; the sanitized persisted entry was scope `vault`, message `app init started`. The passkey failure itself was absent because the caught error is assigned to `VaultState.errorMsg` without a persisted log event. This is a diagnostic gap, not a Phase 1 fix.
- Manual explanation still needed: the user's question supplied intent; the target and source did not require a pasted screenshot.
- Screenshot/paste eliminated: yes.

Sanitized annotation result:

```text
annotation: { x: 421, y: 618, width: 365, height: 117 }
ARIA target: alert "Passkey create ceremony failed"
related controls: "Create new passkey", "Use existing passkey"
```

### Pilot session: unlock/passkey-adjacent interaction

- Developer observation: annotation mode is a frozen screenshot, so the underlying Nook controls cannot be clicked while drawing feedback.
- Target unambiguous: page-level passkey controls were visible in ARIA; the native WebAuthn/OS credential UI remained outside the DOM as expected.
- Source identified: `nook-app/nook-web/nook-web-app/src/lib/components/DeviceProtectionGate.svelte`.
- App-log correlation: page logging was reachable through live browser execution; no credential-dialog contents were inspected.
- Manual explanation still needed: yes—the developer needed to learn the explicit loop: interact in managed Chrome, switch to the Playwright Dashboard, draw feedback, click **Submit**, then **Done**. Clicking only **Done** returned no annotations.
- Screenshot/paste eliminated: yes once the annotation was submitted correctly.
- Browser limitation: the isolated managed profile cannot be expected to use the developer's normal platform passkeys. Nook's existing deterministic PRF test mock is a possible future option; attaching to personal Chrome would expand access to authenticated state and is not the safe default.

## Developer feedback and gate input

The pilot materially removes manual screenshot capture/paste and gives the agent correlated ARIA context. The largest observed friction is the two-window, two-mode handoff (managed Chrome for interaction; theater-mask Playwright Dashboard for annotation), including the non-obvious Submit-then-Done requirement. Port collisions and origin drift are now handled explicitly in the documented workflow.

No custom Nook overlay, agent bridge, replay, telemetry, or production debug mode was added. This evidence should feed #336 before any next implementation phase is created.


### cypherkitty — 2026-07-13T04:17:32Z

### Post-isolation smoke test

After adding the per-process launcher, a fresh interactive annotation session succeeded on `http://127.0.0.1:5175/app/`.

- Developer annotation: "passkey functionality is not working in ai-debug mode"
- Marked region: `{ x: 327, y: 331, width: 588, height: 271 }`
- Active origin before/after annotation: `http://127.0.0.1:5175`
- Source mapping: `nook-app/nook-web/nook-web-app/src/lib/components/DeviceProtectionGate.svelte` (`device-protection-create-workflow`, `device-protection-setup-btn`, `device-protection-use-existing-choice`)
- Sanitized persisted app log: scope `vault`, message `app init started`
- Screenshot/paste eliminated: yes
- Session isolation: artifact path was unique to `.playwright-mcp/session.ntuhcS1h`; the directory was removed automatically when the MCP process exited

This reconfirms the documented limitation rather than a launcher failure: the isolated AI-debug browser does not inherit the developer's normal platform passkeys. The page-level state is annotatable and source-correlatable; native WebAuthn/OS UI remains outside the DOM.

