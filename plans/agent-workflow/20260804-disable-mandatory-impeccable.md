# Disable mandatory Impeccable use

## Goal

Make Nook's repository-local frontend workflow rely on the maintained `design-taste-frontend` skill by default and stop automatically requiring the generated upstream Impeccable skill.

## Decision

Disable mandatory invocation in Cortex rather than deleting the generated skill files. Impeccable may remain installed and may be used only when a user explicitly requests it.

## Changes

- Replace the top-level Cortex requirement to load both design skills with a requirement to load `design-taste-frontend` only.
- Rewrite the canonical `ui-design-skills` card so Impeccable is opt-in and its setup, playbooks, hook, and detector are not part of the default UI workflow.
- Update the dynamic-skill registry description to match.
- Preserve Nook's incumbent-source inspection, Svelte, accessibility, responsive, browser-review, demo-contract, and hosted-validation guidance.

## Validation boundary

Inspect the edited Cortex text for contradictory mandatory-Impeccable language. Do not run repository formatters, builds, tests, linters, detectors, or validation tasks during this exploration step.
