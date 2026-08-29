function assertPreserved(previous, next, field) {
  if (previous && previous !== next) {
    throw new Error(`${field} is immutable once recorded`);
  }
}

export function validateFocusedIssueTransition(previous, next) {
  if (previous.gizmoId !== "null") {
    assertPreserved(previous.gizmoId, next.gizmoId, "gizmo_id");
  }
  assertPreserved(previous.stackBranch, next.stackBranch, "stack_branch");
  assertPreserved(
    previous.stackPredecessorBranch,
    next.stackPredecessorBranch,
    "stack_predecessor_branch",
  );
}

if (import.meta.main) {
  const previous = {
    gizmoId: process.argv[2] || "",
    stackBranch: process.argv[4] || "",
    stackPredecessorBranch: process.argv[6] || "",
  };
  const next = {
    gizmoId: process.argv[3] || "",
    stackBranch: process.argv[5] || "",
    stackPredecessorBranch: process.argv[7] || "",
  };
  try {
    validateFocusedIssueTransition(previous, next);
  } catch {
    console.error("focused issue identity fields are immutable once recorded");
    process.exitCode = 1;
  }
}
