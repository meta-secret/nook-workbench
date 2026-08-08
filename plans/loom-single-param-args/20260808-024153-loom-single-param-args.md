# Loom single-parameter function arguments

## Goal
Enforce a Loom TypeScript rule: a function or method may take at most one
parameter. Multi-argument APIs must use a named object type.

## Scope
- `agentic-ai/loom` only
- Cortex skill + AGENTS/loom docs
- Real static check via ESLint `max-params: 1` in Loom verify

## Plan
1. Add skill card and register it
2. Add ESLint to Loom with max-params error
3. Refactor all multi-parameter Loom functions/methods to object args
4. Wire lint into `bun run verify` / `task loom:verify`
5. Push PR and run exact-head validation

## Evidence
- Loom lint + typecheck + unit tests green
- ESLint reports max-params violations when a second parameter is reintroduced
