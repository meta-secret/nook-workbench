# Route Rust ecosystem CI through Taskfile

## Intent
Rust ecosystem Docker jobs must invoke Taskfile tasks as the source of truth,
matching `.cortex/workflows/quality.md`. Workflows may set up Docker/registry/
sccache credentials, but must not own Bake file lists or call Bake helpers
directly.

Also fix isolated PR BuildKit cache-from: first-run PR scopes under
`nook/remote-buildcache/**` do not exist yet and must import with
`ignore-error=true` so trusted Main `nook/buildcache/**` fallback can work.

## Scope
- Add `docker:ecosystem:*` tasks in `nook-app/docker/Taskfile.yml`
- Rewire `.github/workflows/rust-ecosystem.yml` to `task docker:ecosystem:...`
- Remove `.github/scripts/docker-bake-sccache.sh`
- Add `ignore-error=true` on isolated remote-buildcache cache-from refs
- Update preflight + quality docs/contracts
- Fold into PR #925 (Bake retry / isolation flake) and validate on GHA

## Non-goals
- Changing ecosystem Bake stage contents or Kani host action
- Broad cache policy redesign beyond cold isolated-import failure

## Validation
- `task remote TASK_NAME=preflight`
- `task pr:validate PR=925`
- Confirm ecosystem jobs run Task tasks and cold PR cache import no longer fails closed
