---
title: "CI: web-deps `bun install` layer not cached across identical builds"
status: done
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-02T05:08:58Z
updated_at: 2026-07-02T05:25:04Z
source_issues: ["https://github.com/meta-secret/nook/issues/155"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: "COMPLETED"
---

# CI: web-deps `bun install` layer not cached across identical builds

## Imported context

This record was imported from [Nook GitHub issue #155](https://github.com/meta-secret/nook/issues/155)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

The `web-deps` stage's `bun install --frozen-lockfile` layer re-runs on **every** CI build (~38–42s), even on an identical-commit re-run where nothing changed. The Rust dependency warm-ups cache correctly, but this parallel web branch does not.

## Evidence

Verified across three consecutive runs of the same commit (workflow run `28566128981`):

- Run 1 (cold): populated cache; `bun install` ran (expected).
- Run 2 (re-run, cache published): `#69 bun install --frozen ... DONE 42.2s` — **not cached**.
- Run 3 (re-run, cache confirmed published, "Publish toolchain buildcache" = success): `#69 bun install --frozen ... DONE 38.0s` — **still not cached**.

Meanwhile the Rust coverage warm-up cached fine on the same runs:
- `#47 cargo llvm-cov nextest --no-report ... CACHED`

Layer stats on run 3: 124 layers `CACHED`, only 15 actually ran — but `bun install` is one of the 15 and it should be a cache hit.

## Relevant files

- `docker/toolchain.Dockerfile` — `web-deps` is a separate stage `FROM nook-base`, built in parallel with the Rust chain and merged into `toolchain` via `COPY --from=web-deps`:

```dockerfile
FROM nook-base AS web-deps
COPY nook-web/package.json nook-web/bun.lock ./nook-web/
RUN mkdir -p "$BUN_INSTALL_CACHE_DIR" \
    && cd nook-web && bun install --frozen-lockfile

FROM builder-wasm AS toolchain
COPY --from=web-deps /meta-secret/nook/nook-web/node_modules ./nook-web/node_modules
```

- `docker-bake.hcl` — cache-to is already `mode=max`:

```hcl
shared_cache_to = (TOOLCHAIN_REGISTRY != "" && TOOLCHAIN_PUSH != "") ? [
  "type=registry,ref=${TOOLCHAIN_REGISTRY}:buildcache,mode=max",
] : []
```

## Hypotheses to investigate

1. The `web-deps` intermediate stage isn't being exported into the `:buildcache` even under `mode=max` (possibly because the exported target is `toolchain`/`nook-web` and the parallel branch's blob isn't captured, or a `contexts`/named-context wiring issue in `docker/toolchain.docker-bake.hcl`).
2. Layer-invalidation before `COPY package.json` (e.g. a non-deterministic `nook-base` input or `WORKDIR`/env change) busts the `web-deps` chain, so the `bun install` layer never matches on pull.
3. `cache-from` may not include a ref that actually contains the `web-deps` layers.

## Suggested next steps

- Run `docker buildx bake toolchain-cache --print` and inspect the resolved cache-to/cache-from for the web-deps lineage.
- Compare the layer digest of `web-deps` between two builds locally (`--progress=plain`) to see if the `COPY package.json` layer digest is stable.
- Consider a `RUN --mount=type=cache` for the bun install cache dir as a more robust cache boundary.

## Impact

~40s wasted on every CI build and every warm local build. Not blocking (build is green), but defeats the parallel-branch caching goal.

## Historical comments

No comments.
