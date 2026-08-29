import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test } from "bun:test";

import {
  reconcileLegacyFindings,
  validateRecords,
} from "./validate-records.mjs";
import { validateFocusedIssueTransition } from "./focused-issue-transition.mjs";

async function fixtureRoot() {
  const root = await mkdtemp(join(tmpdir(), "workbench-validation-"));
  await Promise.all(
    ["issues", "plans", "worklogs"].map((area) =>
      mkdir(join(root, area), { recursive: true }),
    ),
  );
  return root;
}

describe("Workbench record validation", () => {
  test("accepts direct-request plans and worklogs without an issue", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "direct.md"),
      `---
title: Direct task
feature: unplanned
started_at: 2026-08-29T07:30:00Z
agent: codex
gizmo_id: gizmo-direct-task
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Change budget and PR sequence
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );
    await writeFile(
      join(root, "worklogs", "direct.md"),
      `---
title: Direct task
feature: unplanned
status: completed
started_at: 2026-08-05T00:00:00Z
finished_at: 2026-08-05T00:01:00Z
agent: codex
plan: plans/unplanned/direct.md
---

## Outcome
x
## Progress
x
## Implementation problems
x
## Decisions
x
## Validation
x
## Remaining work
x
`,
    );

    expect(await validateRecords(root)).toEqual([]);
  });

  test("rejects a new issue with a retired automation value", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "issues", "invalid.md"),
      `---
title: Invalid automation
status: ready
automation: hive
created_at: 2026-08-05T00:00:00Z
updated_at: 2026-08-05T00:00:00Z
---
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "automation must be manual or agent",
    ]);
  });

  test("validates a focused issue gizmo_id whenever it is present", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "issues", "valid.md"),
      `---
title: Valid Gizmo mapping
status: ready
automation: agent
gizmo_id: gizmo-auth-core
stack_branch: codex/auth-core
stack_predecessor_branch: codex/auth-foundation
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );
    await writeFile(
      join(root, "issues", "invalid.md"),
      `---
title: Invalid Gizmo mapping
status: proposed
automation: manual
gizmo_id: Gizmo Auth Core
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "gizmo_id must be a lowercase kebab-case identifier",
    ]);
  });

  test("requires a complete valid and distinct stacked-branch pair", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "issues", "missing-predecessor.md"),
      `---
title: Missing predecessor
status: proposed
automation: manual
stack_branch: codex/auth-core
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );
    await writeFile(
      join(root, "issues", "invalid-branch.md"),
      `---
title: Invalid stack branch
status: proposed
automation: manual
stack_branch: codex/../auth-core
stack_predecessor_branch: codex/auth-foundation
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );
    await writeFile(
      join(root, "issues", "same-branch.md"),
      `---
title: Same stack branch
status: proposed
automation: manual
stack_branch: codex/auth-core
stack_predecessor_branch: codex/auth-core
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );
    await writeFile(
      join(root, "issues", "invalid-predecessor.md"),
      `---
title: Invalid predecessor branch
status: proposed
automation: manual
stack_branch: codex/auth-core
stack_predecessor_branch: -bad-base
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message).sort()).toEqual(
      [
        "stack_branch and stack_predecessor_branch must be present together",
        "stack_branch is not a valid branch name",
        "stack_predecessor_branch is not a valid branch name",
        "stack branches must be distinct",
      ].sort(),
    );
  });

  test("rejects an empty focused issue gizmo_id", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "issues", "empty.md"),
      `---
title: Empty Gizmo mapping
status: proposed
automation: manual
gizmo_id:
created_at: 2026-08-29T08:00:00Z
updated_at: 2026-08-29T08:00:00Z
---
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "gizmo_id must be a lowercase kebab-case identifier",
    ]);
  });

  test("requires the change-budget H2 for plans after contract activation", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "new-contract.md"),
      `---
title: New contract
feature: delivery
started_at: 2026-08-29T07:30:00Z
agent: codex
gizmo_id: gizmo-new-contract
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "plan sections must exactly match ## Interpreted request, ## Requirements, ## Constraints and exclusions, ## Change budget and PR sequence, ## Initial plan, ## Completion evidence, ## Safety review",
    ]);
  });

  test("accepts the legacy six-H2 plan shape before contract activation", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "legacy-contract.md"),
      `---
title: Legacy contract
feature: delivery
started_at: 2026-08-29T07:29:59Z
agent: codex
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );

    expect(await validateRecords(root)).toEqual([]);
  });

  test("rejects a null post-activation plan gizmo_id", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "invalid-gizmo.md"),
      `---
title: Invalid plan mapping
feature: delivery
started_at: 2026-08-29T07:30:00Z
agent: codex
gizmo_id: null
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Change budget and PR sequence
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "gizmo_id must be a lowercase kebab-case identifier",
    ]);
  });

  test("rejects a post-activation plan with no gizmo_id", async () => {
    const root = await fixtureRoot();
    await writeFile(
      join(root, "plans", "missing-gizmo.md"),
      `---
title: Missing plan mapping
feature: delivery
started_at: 2026-08-29T07:30:00Z
agent: codex
---

## Interpreted request
x
## Requirements
x
## Constraints and exclusions
x
## Change budget and PR sequence
x
## Initial plan
x
## Completion evidence
x
## Safety review
x
`,
    );

    const findings = await validateRecords(root);
    expect(findings.map(({ message }) => message)).toEqual([
      "missing gizmo_id",
    ]);
  });

  test("preserves present focused-issue identity fields across updates", () => {
    const unbound = { gizmoId: "", stackBranch: "", stackPredecessorBranch: "" };
    const legacy = {
      gizmoId: "null",
      stackBranch: "",
      stackPredecessorBranch: "",
    };
    const bound = {
      gizmoId: "gizmo-auth-core",
      stackBranch: "codex/auth-core",
      stackPredecessorBranch: "codex/auth-foundation",
    };
    expect(() => validateFocusedIssueTransition(unbound, bound)).not.toThrow();
    expect(() => validateFocusedIssueTransition(legacy, bound)).not.toThrow();
    expect(() => validateFocusedIssueTransition(bound, bound)).not.toThrow();
    expect(() =>
      validateFocusedIssueTransition(bound, { ...bound, gizmoId: "" }),
    ).toThrow("immutable");
    expect(() =>
      validateFocusedIssueTransition(bound, {
        ...bound,
        stackBranch: "codex/new-auth-core",
      }),
    ).toThrow("immutable");
    expect(() =>
      validateFocusedIssueTransition(bound, {
        ...bound,
        stackPredecessorBranch: "",
      }),
    ).toThrow("immutable");
  });

  test("exempts only exact findings on immutable historical content", () => {
    const finding = {
      path: "issues/history.md",
      sha256: "current-hash",
      message: "automation must be manual or agent",
    };
    const baseline = {
      schema_version: 1,
      records: {
        "issues/history.md": {
          sha256: "current-hash",
          errors: ["automation must be manual or agent"],
        },
      },
    };

    expect(reconcileLegacyFindings([finding], baseline)).toEqual({
      active: [],
      exempted: [finding],
    });
    expect(
      reconcileLegacyFindings(
        [{ ...finding, sha256: "modified-hash" }],
        baseline,
      ).active,
    ).toHaveLength(1);
    expect(
      reconcileLegacyFindings(
        [{ ...finding, message: "missing title" }],
        baseline,
      ).active,
    ).toHaveLength(1);
  });
});
