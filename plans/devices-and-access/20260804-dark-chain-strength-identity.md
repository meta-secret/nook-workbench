# Dark chain-strength identity adaptation

## Context

The first single identity proof of concept used the correct domain model but introduced a wide dashboard composition. The product direction is to preserve the existing chain-strength experiment itself as the blueprint and adapt only its content and palette.

This plan supersedes the layout portion of [the earlier chain-strength identity plan](20260804-chain-strength-identity-poc.md). Its architecture decisions remain valid.

## Work

1. Replace the wide dashboard composition with the actual chain-strength topology: physical-device anchor, rounded identity band, compact vault rope rows, brace connectors, and quiet other-device footer.
2. Preserve the narrow container, density, typography hierarchy, selection/dimming grammar, identifiers, and responsive stacking of the reference component.
3. Convert the light reference palette to the Nook near-black dark surface without introducing a different template.
4. Map each vault strand to `identity → local device key → passkey access method`; keep provider-mount state on identity tags and independent encrypted DEK grants on vault rows.
5. Inspect desktop and phone rendering locally. Keep repository format, build, test, and validation commands deferred until the concept is accepted.

## Deliverable

One locally runnable dark chain-strength identity proof of concept at the existing experiment route.

## Safety

The experiment uses illustrative identifiers and labels only. It contains no secrets, provider credentials, private keys, raw prompts, logs, or private operational data.
