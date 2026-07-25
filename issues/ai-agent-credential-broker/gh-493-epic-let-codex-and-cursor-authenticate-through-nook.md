---
title: "Epic: Let Codex and Cursor authenticate through Nook"
status: proposed
priority: p2
automation: manual
owner: "unassigned"
created_at: 2026-07-19T00:19:38Z
updated_at: 2026-07-19T00:21:45Z
source_issues: ["https://github.com/meta-secret/nook/issues/493"]
related_prs: []
depends_on: []
legacy_labels: ["enhancement","feature:ai-harness-access"]
legacy_state_reason: ""
---

# Epic: Let Codex and Cursor authenticate through Nook

## Imported context

This record was imported from [Nook GitHub issue #493](https://github.com/meta-secret/nook/issues/493)
on 2026-07-25T23:56:27Z. Its historical body and comments are preserved below.

## Original issue body

## Summary

Let AI coding/automation harnesses such as Codex and Cursor ask Nook to obtain access to a website or API on the user's behalf. Nook remains the credential authority: it selects the approved vault entry, obtains user consent/unlock when required, and performs or brokers the authentication action.

Passwords and API keys are both first-class requirements. The integration must not become an unrestricted "export every secret to the model" API.

## User Stories

- As a user, I can tell Codex or Cursor to work on a site; the harness asks Nook to sign in, Nook requests any required approval/unlock, and the browser session becomes authenticated.
- As a user, I can authorize an agent to use a specific API credential for a bounded task without copying it into chat, source files, shell history, logs, or URLs.
- As a user, I can see, deny, expire, and revoke each agent grant.
- As a user, I can explicitly reveal/export a credential when a target cannot support brokered use, with a stronger warning and narrower consent than ordinary use.

## Product Decisions

1. **Local broker, explicit pairing.** Nook exposes a local authenticated agent bridge (MCP is the initial harness-facing candidate). Codex/Cursor must pair with Nook; arbitrary pages, processes, workspaces, or remote clients cannot call it.
2. **Capabilities, not vault access.** A grant is bound to harness identity, workspace/task, operation, site/API audience, account/secret, and expiry. The harness never receives a general vault-search or bulk-export capability.
3. **Use without reveal by default.**
   - Website login: Nook's extension/WASM path selects and fills the approved credential; the harness receives status, not the password.
   - API access: prefer a request proxy or ephemeral injection into one approved subprocess/request. Returning plaintext in an MCP/tool result is forbidden by default because that enters model context and transcripts.
   - Plaintext reveal/export is a separate high-risk operation requiring explicit, per-use approval when no safer mechanism works.
4. **API keys are a first-class item/use case.** The domain model must represent API credentials with service/audience metadata, allowed delivery modes, optional scopes, and rotation/expiry metadata. Policy and matching belong in `nook-core` and typed WASM/native boundaries, not TypeScript.
5. **Unlock and consent stay user-owned.** Agents may request access but cannot silently unlock Nook, approve themselves, broaden a grant, or bypass passkey/PIN/Sentinel policy. Approval UI must name the harness, workspace/task, target, account, operation, and duration.
6. **No secret-bearing side channels.** Secret values must never appear in URLs, command-line arguments, prompts, model/tool transcripts, logs, telemetry, exceptions, repo files, or durable environment configuration.
7. **Simple Vault first.** V1 supports Simple Vault. Sentinel requests are denied in Rust policy unless a later feature defines explicit quorum/participant authorization for agent capabilities.
8. **Reuse browser auth work.** Browser sign-in should build on #237 and #461/#465 rather than duplicating form matching, passkey, or extension auth-agent logic.

## Proposed Architecture

```text
Codex / Cursor
      |
      | authenticated local request
      v
Nook agent broker (pairing + scoped capability)
      |
      +--> nook-core policy / selection / grant lifecycle
      |
      +--> browser extension: approved login/passkey action
      |
      +--> API executor: scoped proxy or one-process ephemeral injection
      |
      v
status + redacted audit event (no secret value)
```

The transport may use MCP for compatibility, but secret values must not be returned as ordinary MCP content. The implementation should define a broker-owned opaque handle/capability and safe consumers for browser login and API execution.

## Security Requirements

- Bind every request to a locally paired harness instance and current workspace/task context.
- Default deny; use short expiries and least privilege; support allow once, allow for task/session, deny, and revoke.
- Prevent confused-deputy attacks: normalize and validate website origins and API audiences in Rust; never trust an agent-supplied display name.
- Require a fresh approval when target, account, operation, delivery mode, process/request, or scope changes.
- Keep decrypted secrets page/action scoped in memory and zeroize them after completion, denial, timeout, cancellation, lock, or harness disconnect.
- Authenticate local IPC and resist cross-user, browser-page, DNS-rebinding, symlink/socket substitution, replay, and stale-capability attacks.
- Redact errors and audit only metadata: requester, target, account identifier/label, operation, decision, time, result, expiry, and revocation.
- Never let an agent enumerate unrelated secret names or infer whether arbitrary targets/accounts exist.
- Respect Nook lock, browser-extension device isolation, vault deletion, device revocation, credential rotation, and session expiry immediately.

## Sub-Issues

- [ ] #497 — Specify the Nook AI-harness threat model and broker protocol
- [ ] #494 — Add first-class API credentials and agent-use policy to `nook-core`
- [ ] #495 — Implement the authenticated local Nook agent broker and scoped grants
- [ ] #496 — Let AI harnesses request browser login through the Nook extension
- [ ] #498 — Broker API-key use without exposing keys to the AI model
- [ ] #499 — Ship Codex and Cursor adapters for the Nook credential broker
- [ ] #500 — Build agent-access consent, audit, revocation, and end-to-end security UX

## Delivery Order

1. #497 and #494 establish the security/protocol and API-credential domain contracts.
2. #495 implements the authenticated broker and grant lifecycle.
3. #496 and #498 add browser-login and API-use consumers.
4. #499 integrates Codex/Cursor; #500 completes user controls and cross-harness security proof.

## Acceptance Criteria

- Codex and Cursor can pair with a local Nook instance through documented, versioned integration contracts.
- From each harness, a user can complete one real browser username/password login through Nook without the password entering model context or the harness transcript.
- From each harness, a user can use one API key for an approved API call or subprocess without the key entering model context, argv, logs, repo files, or durable environment storage.
- A distinct, strongly warned per-use flow exists for unavoidable plaintext export; it is disabled unless explicitly approved.
- Grants are audience/account/action/task scoped, short-lived, visible, cancellable, and revocable; lock/revocation takes effect immediately.
- API credential modeling, origin/audience matching, grant policy, validation, and redaction are covered by behavior-focused Rust tests.
- Harness adapters have contract/integration tests, and browser/API flows have targeted end-to-end coverage including denial, locked vault, timeout, replay, wrong origin/audience, cancellation, and malicious prompt/agent requests.
- No authored TypeScript/Svelte domain policy, `null`, inline visible English, secret logging, or secret-bearing URL/CLI transport is introduced.
- Documentation explains supported operations, consent semantics, threat model, recovery/revocation, and safe API-key usage.

## Non-Goals

- Giving an AI model unrestricted read/list access to a vault.
- Silently logging in, submitting forms, creating accounts, or rotating credentials without user/policy authorization.
- Persisting raw secrets in agent configuration, `.env` files, shell profiles, MCP configuration, or workspace files.
- Supporting remote/cloud brokers in V1.
- Granting Sentinel access without a separately designed quorum-aware policy.

## Related Work

- #234 — Simple-only browser companion and password filling scope
- #237 — matched-account browser fill experience
- #461 / #465 — extension auth-agent and automatic sign-in/passkey policy
- `.cortex/product-specs/browser-extension.md`
- `.cortex/design-docs/vault-session-and-lock.md`



## Historical comments

No comments.
