---
title: "Optimize Docker builds: cache Rust dependencies with cargo-chef"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-06-25T01:55:27Z
updated_at: 2026-06-26T21:08:57Z
source_issues: ["https://github.com/meta-secret/nook/issues/35"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# Optimize Docker builds: cache Rust dependencies with cargo-chef

## Imported context

This record was imported from [Nook GitHub issue #35](https://github.com/meta-secret/nook/issues/35)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Problem

Docker builds in Nook currently use a single **toolchain image** (`Dockerfile` + `docker-bake.hcl`) that installs Rust, Bun, wasm-pack, and other tooling, but **does not pre-compile or cache Rust crate dependencies**. Every CI run and local `task setup` / `task build` / `task check` recompiles the full dependency graph from scratch inside the container, which makes builds slow — especially for cryptographic crates and the wasm32 target.

CI already pushes BuildKit layer cache to `ghcr.io/meta-secret/nook-cache:latest`, but that only helps when Dockerfile layers are unchanged. Rust source changes still trigger full dependency recompilation because deps are not isolated into a cacheable layer.

## Proposed approach

Adopt **[cargo-chef](https://github.com/LukeMathWalker/cargo-chef)** to separate dependency compilation from application code, following the pattern already proven in **[meta-secret/meta-secret-core](https://github.com/meta-secret/meta-secret-core)**.

### Reference implementation

See [`meta-secret/Dockerfile`](https://github.com/meta-secret/meta-secret-core/blob/main/meta-secret/Dockerfile) and [`docker-bake.hcl`](https://github.com/meta-secret/meta-secret-core/blob/main/docker-bake.hcl) in meta-secret-core.

Key ideas from that project:

1. **Chef planner stage** — generate a dependency recipe without compiling app code:
   ```dockerfile
   FROM lukemathwalker/cargo-chef:latest-rust-${RUST_VERSION}-bookworm AS chef-planner
   COPY . .
   RUN cargo chef prepare --recipe-path recipe.json
   ```

2. **Commit `recipe.json` locally** — meta-secret-core exposes a `generate-recipe` bake target that writes `recipe.json` to the repo context. Checking in (or generating + caching) the recipe lets Docker reuse dependency layers when only application code changes.

3. **Pre-compile deps in dedicated builder stages**:
   ```dockerfile
   FROM builder-base AS builder-debug
   COPY recipe.json .
   RUN cargo chef cook --tests --recipe-path recipe.json

   FROM builder-base AS builder-wasm
   RUN rustup target add wasm32-unknown-unknown
   COPY recipe.json .
   RUN cargo chef cook --release --target wasm32-unknown-unknown --recipe-path recipe.json -p meta-secret-wasm
   ```

4. **Multi-stage bake targets for cache images** — separate `:cache` tags pushed to GHCR (`builder-debug:cache`, `builder-wasm:cache`) so CI and local builds can `cache-from` pre-compiled deps without rebuilding them every run.

5. **Useful env vars** from the reference:
   - `CARGO_INCREMENTAL=0` — keep compiles in image layers (registry cache-to exports layers, not BuildKit cache mounts)
   - `CARGO_HTTP_MULTIPLEXING=false` + `CARGO_NET_RETRY=10` — reduce crates.io flakes in CI

## Scope for Nook

Nook's workspace (`nook-core`, `nook-wasm`) mirrors meta-secret-core's layout. Adapt the reference to our toolchain image:

| Nook today | Target state |
|---|---|
| Single `toolchain` bake target | Multi-stage Dockerfile with `chef-planner`, `builder-debug`, `builder-wasm` (and possibly `builder-release`) |
| `docker-bake.hcl` caches only toolchain layers | Dedicated `builder-*-cache` bake targets + GHCR cache tags |
| `task setup` → `docker:build` → run tasks in container | Pre-warm dep cache on build; subsequent `task build` / `task check` / `task test` reuse cooked deps |
| CI: `CACHE_FROM`/`CACHE_TO` on toolchain image only | Pull/push `builder-debug:cache` and `builder-wasm:cache` (plus existing toolchain cache where useful) |

### Suggested deliverables

- [ ] Restructure `Dockerfile` with cargo-chef stages (planner → cook debug deps → cook wasm32 deps)
- [ ] Add `generate-recipe` bake target; decide whether to commit `recipe.json` or generate in CI
- [ ] Extend `docker-bake.hcl` with `builder-debug-cache` / `builder-wasm-cache` targets (mirror meta-secret-core)
- [ ] Update CI (`.github/workflows/ci.yml`) to push/pull dep cache images
- [ ] Update `Taskfile.yml` / docs if `task setup` workflow changes
- [ ] Verify local dev: `task setup && task check` is faster on second run
- [ ] Document recipe regeneration when `Cargo.lock` changes

## Acceptance criteria

- Changing only Rust application code (not `Cargo.toml` / `Cargo.lock`) does **not** trigger full dependency recompilation in Docker CI.
- Wasm32 and debug/test dependency graphs are cached separately (Nook uses optimized dev deps via `[profile.dev.package."*"]`).
- Approach is consistent with meta-secret-core so we can share operational knowledge across repos.

## References

- [meta-secret-core `meta-secret/Dockerfile`](https://github.com/meta-secret/meta-secret-core/blob/main/meta-secret/Dockerfile)
- [meta-secret-core `docker-bake.hcl`](https://github.com/meta-secret/meta-secret-core/blob/main/docker-bake.hcl) — see `builder-debug-cache`, `builder-wasm-cache`, `generate-recipe`
- [cargo-chef documentation](https://github.com/LukeMathWalker/cargo-chef)

## Historical comments

No comments.
