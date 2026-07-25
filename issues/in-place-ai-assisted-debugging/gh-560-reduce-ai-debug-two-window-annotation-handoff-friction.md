---
title: "Reduce AI-debug two-window annotation handoff friction"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-21T04:40:30Z
updated_at: 2026-07-21T05:05:40Z
source_issues: ["https://github.com/meta-secret/nook/issues/560"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-debug-workflow"]
legacy_state_reason: "COMPLETED"
---

# Reduce AI-debug two-window annotation handoff friction

## Imported context

This record was imported from [Nook GitHub issue #560](https://github.com/meta-secret/nook/issues/560)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Parent

Part of #334. Authorized by the #336 **Go** decision after the Playwright MCP annotation pilot.

## Problem

The pilot proved annotation removes manual screenshot capture/paste, but the largest remaining friction is the two-window, two-mode handoff:

1. Interact in managed Chrome until the target state is visible.
2. Switch to the Playwright Dashboard (theater-mask icon).
3. Draw feedback, click **Submit**, then **Done**.

Developers and agents still lose time discovering windows, modes, and the Submit-before-Done requirement.

## Scope

Improve the existing Playwright MCP annotation workflow only. Candidates (pick the smallest effective set):

- Clearer Task/agent prompts and readiness output that name both windows and the Submit→Done sequence.
- Optional helper scripts or agent checklist that verify the headed Chrome + Dashboard are up before waiting on `browser_annotate`.
- Investigate packaging/docs improvements that keep annotation headed without introducing a custom Nook overlay (for example clearer launcher messaging). Document any rejected options.

## Explicitly Out of Scope

- Custom in-app annotation overlay or floating debug button.
- Local agent bridge / WebSocket status channel.
- Session replay, telemetry, or production-facing debug mode.
- Attaching to a personal Chrome profile as the default.
- Broad speculative backlog beyond this friction.

## Acceptance Criteria

- A developer following the documented AI-debug flow can complete interact → annotate → Submit → Done with less manual explanation than the #335 pilot required.
- Docs and `task ai-debug:*` surface the two-window requirement before the first annotation attempt.
- Privacy/isolation defaults from #335/#559 remain unchanged.
- No custom Nook overlay or bridge is introduced.
- Validation notes are commented on this issue and linked from #334.

## References

- Parent: #334
- Gate decision: #336
- Pilot evidence: #335
- Pilot defect fixes: #559
- Runbook: `.cortex/references/ai-debugging.md`

## Historical comments

### cypherkitty — 2026-07-21T04:43:03Z

Partial progress in #559:

- `task ai-debug:check` / `ai-debug:dev` now print the Chrome vs Playwright Dashboard two-window handoff and Submit→Done requirement before the server starts.
- Agent prompt in `.cortex/references/ai-debugging.md` leads with the same window/mode sequence.

Remaining for this issue: any further packaging/launcher messaging that still reduces discovery cost without a custom overlay, plus validation notes after a live annotate session.

### cypherkitty — 2026-07-21T05:02:04Z

#559 landed the first slice of this issue:

- `task ai-debug:check` / `ai-debug:dev` print Chrome vs Playwright Dashboard + Submit→Done before annotation
- Agent prompt in `.cortex/references/ai-debugging.md` leads with the same handoff

Still open: any remaining packaging/launcher messaging that further reduces discovery cost, and a short live-session validation note after using the updated hints.

### cypherkitty — 2026-07-21T05:05:39Z

Closing as complete for milestone 5.

The authorized Go follow-up was to reduce two-window handoff friction without a custom overlay. The practical slice landed in #559:

- `task ai-debug:check` / `ai-debug:dev` print Chrome vs Dashboard + Submit→Done
- Agent prompt in `.cortex/references/ai-debugging.md` leads with the same handoff

Further packaging/launcher work can reopen as a new focused issue if friction returns in real sessions.
