# AGENTS.md

This file defines how AI agents (Claude Code, Cursor, Copilot, etc.) should behave in this repository.

## Before Starting Any Task
1. Read `CLAUDE.md` and `knowledge.md` for project context.
2. Check the current branch — never work directly on `main`.
3. Understand the scope before making changes.

## Workflow Rules
- Create a new branch for every task (`feature/...`, `fix/...`, `chore/...`).
- Make small, focused commits with clear messages.
- Run tests and linting before proposing changes.
- Never force-push or rewrite shared history.

## Code Rules
- Match existing code style and patterns.
- Do not introduce new dependencies without asking.
- Do not delete files or code unless explicitly instructed.
- Prefer editing existing files over creating new ones when possible.

## Communication Rules
- Explain *why* a change is made, not just *what*.
- Ask for clarification when requirements are ambiguous.
- Flag any risks, breaking changes, or security concerns.
- Summarize what was changed at the end of a task.

## Things Agents Must NOT Do
- Commit secrets, API keys, or credentials.
- Modify `.env` files or CI/CD configs without permission.
- Push directly to `main` or `develop`.
- Run destructive commands (`rm -rf`, `git reset --hard`) without confirmation.