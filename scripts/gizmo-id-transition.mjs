export function validateGizmoIdTransition(previous, next) {
  if (previous && previous !== "null" && previous !== next) {
    throw new Error("gizmo_id is immutable once recorded");
  }
}

if (import.meta.main) {
  try {
    validateGizmoIdTransition(process.argv[2] || "", process.argv[3] || "");
  } catch {
    console.error("gizmo_id is immutable once recorded");
    process.exitCode = 1;
  }
}
