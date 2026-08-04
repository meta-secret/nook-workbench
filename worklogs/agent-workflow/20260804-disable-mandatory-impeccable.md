# Disable mandatory Impeccable use

Plan: [Disable mandatory Impeccable use](../../plans/agent-workflow/20260804-disable-mandatory-impeccable.md)

## Outcome

Impeccable is no longer part of Nook's default UI workflow. The repository now requires `design-taste-frontend` for user-visible UI work and treats Impeccable as explicit opt-in only.

## Changes

- Updated `.cortex/AGENTS.md` to remove the mandatory two-skill rule and prohibit automatic Impeccable installation, loading, context, playbook, detector, hook, and delegated-review use.
- Rewrote the canonical `.cortex/dynamic-skills/ui-design-skills.md` card around the Nook-specific design skill and documented Impeccable as opt-in.
- Updated the dynamic-skill registry description.
- Updated the executable `design-taste-frontend` skill so it no longer pulls Impeccable back in indirectly.
- Left the generated Impeccable directory installed; deletion is unnecessary and would not prevent later installation.

## Evidence

A focused text inventory shows remaining Impeccable mentions only describe its disabled, explicit-opt-in status.

## Validation boundary

Per the user's hold, no repository formatter, build, test, linter, detector, or validation task was run. No commit, push, or pull request was created.
