---
title: "Implement `nokeyd`: macOS Rust tray daemon for Nook P2P sync over Iroh"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-08T05:55:20Z
updated_at: 2026-07-21T04:19:09Z
source_issues: ["https://github.com/meta-secret/nook/issues/245"]
related_prs: []
depends_on: []
legacy_labels: []
legacy_state_reason: ""
---

# Implement `nokeyd`: macOS Rust tray daemon for Nook P2P sync over Iroh

## Imported context

This record was imported from [Nook GitHub issue #245](https://github.com/meta-secret/nook/issues/245)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

# Implement `nokeyd`: macOS Rust tray daemon for Nook P2P sync over Iroh

## Summary

Implement `nokeyd`, a small native macOS daemon/tray app written in Rust.

`nokeyd` should run in the macOS menu bar, use `nook-core` for vault/device/sync logic, and use Iroh for device-to-device networking through the relay:

```text
https://p2p.nokey.sh
```

`nook-core` is located here:

```text
https://github.com/meta-secret/nook/tree/main/nook-app/nook-core
```

## Goal

Create the native background process that browser extensions, CLI tools, and future UI apps can talk to.

The daemon should be responsible for:

- keeping a persistent Iroh endpoint online;
- connecting to approved devices through Iroh;
- using `nook-core` to read/write/validate encrypted vault state;
- exposing a minimal local control API;
- showing basic status/actions in the macOS tray.

## Proposed crate location

```text
nook-app/
  nokeyd/
    Cargo.toml
    src/
      main.rs
      app.rs
      config.rs
      tray.rs
      iroh_node.rs
      p2p_protocol.rs
      sync_service.rs
      local_api.rs
      storage.rs
```

## Runtime model

```text
macOS menu bar app
  ↓
nokeyd daemon runtime
  ├── nook-core integration
  ├── persistent Iroh endpoint
  ├── P2P vault sync protocol
  ├── local control API
  └── tray status/actions
```

## Dependencies

Add a new Rust workspace member for `nokeyd`.

Suggested dependencies:

```toml
[dependencies]
nook-core = { path = "../nook-core" }

iroh = "1"
tokio = { version = "1", features = ["full"] }
serde = { version = "1", features = ["derive"] }
serde_json = "1"
toml = "0.9"
thiserror = "2"
tracing = "0.1"
tracing-subscriber = "0.3"

# Tray/menu bar. Exact crate can be decided during implementation.
tray-icon = "*"

# Local API candidate.
axum = "*"

# Config/data dirs.
directories = "*"
```

Use exact pinned versions during implementation.

## Iroh relay configuration

`nokeyd` should use a custom Iroh relay map with:

```text
https://p2p.nokey.sh
```

Sketch:

```rust
use iroh::{Endpoint, RelayMap, RelayMode, RelayUrl, endpoint::presets};

async fn build_endpoint() -> anyhow::Result<Endpoint> {
    let relay: RelayUrl = "https://p2p.nokey.sh".parse()?;

    let endpoint = Endpoint::builder(presets::N0)
        .relay_mode(RelayMode::Custom(RelayMap::from_iter([relay])))
        // Add persistent secret key loading here.
        .bind()
        .await?;

    endpoint.online().await;

    Ok(endpoint)
}
```

## Persistence

Persist these separately:

```text
Iroh endpoint secret key
  = transport/network identity

Nook device identity
  = app-level authorization identity

Vault state
  = encrypted local vault replica
```

Suggested macOS paths:

```text
~/Library/Application Support/Nokey/nokeyd/config.toml
~/Library/Application Support/Nokey/nokeyd/state/
~/Library/Logs/Nokey/nokeyd.log
```

Prefer macOS Keychain for long-term private keys if practical. Otherwise store encrypted local key material using existing `nook-core` device protection APIs.

## Default config

```toml
[network]
relays = ["https://p2p.nokey.sh"]
alpn = "nokey/nook-sync/1"

[daemon]
local_api_host = "127.0.0.1"
local_api_port = 0
start_at_login = false

[logging]
level = "info"
```

If `local_api_port = 0`, the daemon should choose a random available local port and write the chosen endpoint to a state file readable only by the current user.

## P2P protocol MVP

Implement one ALPN protocol:

```text
nokey/nook-sync/1
```

Minimum handshake:

```text
1. hello
   - protocol_version
   - iroh_endpoint_id
   - nook_device_id
   - supported_features
   - known_vault_ids

2. challenge
   - nonce

3. challenge_response
   - signature_by_nook_device_key(nonce)

4. vault_heads
   - vault_id
   - known_event_heads / snapshot ids

5. sync
   - request missing encrypted events
   - send missing encrypted events
   - verify through nook-core
```

The P2P layer must not trust the Iroh endpoint ID alone. The app-level Nook device identity must authorize vault access.

## Tray UI MVP

The macOS tray menu should include:

```text
Nokey: Online / Offline
Endpoint: <short endpoint id>
Relay: p2p.nokey.sh connected / disconnected

Sync now
Copy Endpoint ID
Show logs
Open config folder
Quit
```

Later tray actions can include:

```text
Approve new device
Show pending join requests
Rotate device identity
```

## Local API MVP

Expose a local-only API for future browser extension / CLI integration.

Minimum endpoints:

```http
GET  /health
GET  /status
GET  /peers
POST /sync
POST /shutdown
```

Security requirements:

- bind only to `127.0.0.1`;
- require a random bearer token generated on first launch;
- store the token with user-only permissions or in Keychain;
- do not enable permissive CORS by default;
- never expose plaintext vault secrets through this API in the MVP.

Example response:

```json
{
  "status": "online",
  "endpoint_id": "abc123...",
  "relays": [
    {
      "url": "https://p2p.nokey.sh",
      "connected": true
    }
  ],
  "known_peers": 2
}
```

## Sync behavior MVP

For this issue, implement transport + handshake + sync shell first.

MVP success path:

```text
Mac A runs nokeyd
Mac B runs nokeyd
Both use https://p2p.nokey.sh
Both know each other’s Nook device identity
Both can establish Iroh connection
Both can complete signed challenge/response
Both can exchange vault heads
Both can transfer at least one encrypted test event/blob
```

Full conflict resolution can be a follow-up if the current `nook-core` sync API is not ready for complete P2P replication.

## Non-goals

This issue should not implement:

- a custom Iroh relay;
- async offline storage;
- Matrix/Nostr/GitHub sync backend;
- global account namespace;
- browser extension integration;
- mobile support;
- production auto-update/signing/notarization.

## Acceptance criteria

- [ ] New `nokeyd` Rust crate is added to the workspace.
- [ ] `cargo build -p nokeyd` works on macOS.
- [ ] App starts as a macOS tray/menu-bar app.
- [ ] App loads/creates persistent Iroh endpoint identity.
- [ ] Endpoint ID remains stable across restarts.
- [ ] App connects through custom relay `https://p2p.nokey.sh`.
- [ ] Tray shows online/offline status and short endpoint ID.
- [ ] Local API exposes `/health` and `/status`.
- [ ] Local API is protected by a local auth token.
- [ ] P2P protocol supports signed hello/challenge handshake.
- [ ] Two `nokeyd` instances can exchange a test sync message.
- [ ] No vault plaintext is logged.
- [ ] No vault plaintext is sent over the local API.
- [ ] Basic unit tests cover config loading, key persistence, and handshake validation.
- [ ] README documents how to run `nokeyd` locally on macOS.

## Follow-up issues

- Implement browser extension ↔ `nokeyd` native messaging.
- Implement full encrypted vault event replication.
- Implement QR-code device enrollment over Iroh.
- Add start-at-login support.
- Add macOS signing/notarization.
- Add crash reporting/log export.
- Add relay auth token support if `p2p.nokey.sh` is private.


## Historical comments

### cypherkitty — 2026-07-21T04:19:09Z

Assigned to milestone [Feature: P2P sync over Iroh](https://github.com/meta-secret/nook/milestone/13) together with #246 (`relayd`).

No other open P2P/Iroh issues were found in the repo search; follow-ups listed in this issue body can become sub-issues under the same milestone when opened.
