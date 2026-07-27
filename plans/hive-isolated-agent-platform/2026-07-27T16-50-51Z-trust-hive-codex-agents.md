---
title: Adopt trusted Codex agents for Hive
feature: hive-isolated-agent-platform
issue: issues/hive-isolated-agent-platform/build-k0s-kata-hive-agent-platform.md
started_at: 2026-07-27T16:50:51Z
agent: codex
---

# Adopt trusted Codex agents for Hive

## Interpreted request

Change the Hive architecture policy so Codex repair agents are trusted
operators. GitHub credentials may be provided directly to an agent, and Hive
must not add a publication broker, mailbox protocol, or similar security layer
solely to protect credentials from that agent.

## Requirements

- Make the trusted-agent decision explicit in the authoritative Cortex
  architecture guidance.
- Replace requirements that keep GitHub credentials outside Codex with a
  direct, repository-scoped credential model.
- State that standard Git and GitHub tooling is preferred over a custom
  publication protocol.
- Keep infrastructure isolation used for operational reliability and workload
  containment distinct from distrust of the Codex agent.

## Constraints and exclusions

- This task changes Cortex policy and architecture documentation only.
- The existing Hive publication implementation and deployment are not removed
  in this documentation PR.
- Credentials must not be written to repository or Workbench content.
- Ordinary GitHub repository permissions remain the authorization boundary.

## Initial plan

1. Audit Cortex for statements that require brokered Hive publication.
2. Update the agent entry point, architecture overview, and Hive design
   specification to describe the trusted-agent model consistently.
3. Format the documentation, publish it through the normal pull-request
   workflow, and validate it with repository-owned GitHub Actions.

## Completion evidence

- Cortex consistently states that Hive Codex agents may receive a scoped GitHub
  token and use standard Git and GitHub tooling.
- Obsolete architecture requirements for a publication mailbox and
  credential-isolating broker are removed.
- The documentation pull request passes applicable repository checks and is
  squash-merged.

## Safety review

This record contains no raw prompt, chat transcript, secrets, private data, raw
logs, local paths, or unnecessary infrastructure details.
