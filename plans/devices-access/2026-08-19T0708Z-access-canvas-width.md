# Access canvas width and protector list

## Interpreted request

The Access screen leaves unused gutters while Graph and List stay cramped.

Browse Identity appears twice: once as a perspective control and again as a lone entity row. List also draws the local app key beside the passkey that unwraps it.

Ship a denser Access layout: consume more horizontal measure, collapse browse chrome into a single top control, and let List present the protector without a duplicate app-key card.

## Requirements

- Expand the Access shell so Graph and List occupy the remaining column.
- Place Identity versus Vault on a top strip. Remove the extra identity entity row.
- Retain vault chips under Vault, since more than one vault can appear.
- Graph keeps the app-key node as relationship evidence.
- List emits protector cards only. Skip the local app-key card when a protector already unwraps that key.
- Detail inspection still exposes app-key facts.
- Amend devices-and-access under current headings.
- Graph stays the starting layout.
- Keeper labels remain browser-reported display help.

## Constraints and exclusions

- No additional passkey enrollment.
- Rust domain code stays untouched.
- Authored TypeScript avoids `null` and `unknown`.
- Foreign vault-switcher and companion work stays read-only.
- Secrets list keeps its existing measure.

## Change budget and PR sequence

- Estimated authored changed lines: 420
- Owning modules, packages, or layers: nook-web-shared Access UI, app shell, devices-and-access spec, locale catalogs, focused web tests
- Public or cross-module interfaces: none; internal Svelte layout and list projection only
- Delivery shape: One PR
- Current PR estimated authored changed lines: 420
- Current PR slice and acceptance evidence: Expand Access shell, top browse strip, skip 1:1 app-key list cards; Acceptance evidence: list-card unit coverage, e2e and demo toggle List then Graph, spec captures layout rules
- PR slices and acceptance evidence:
  Expand Access shell, top browse strip, skip 1:1 app-key list cards; Acceptance evidence: list-card unit coverage, e2e and demo toggle List then Graph, spec captures layout rules

## Initial plan

1. Record this plan, then code from origin/main.
2. Apply a wider shell while Access is visible.
3. Move IdentityBridgeNavigation above the canvas and drop the redundant identity row.
4. Omit the app-key list card after a protector card exists.
5. Refresh copy, spec, unit tests, and demo/e2e expectations.
6. Run loom pre-push, open the PR, and wait on hosted checks.

## Completion evidence

- A passkey List has one protector card and no app-key card.
- Graph copy still mentions the app key.
- Perspective testids survive without the identity entity row.
- Interaction requirements describe the top strip and the 1:1 list rule.

## Safety review

- Private app material never renders.
- Shell widening does not store secrets or emit them in logs.
- Omitting a card does not change wrap or unwrap.
