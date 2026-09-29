# AGENTS.md

Rules for AI agents working in this repository.

## Project
- Vanilla HTML/CSS/JS web app
- Source files live in `src/`
- No frameworks, no build step, no package manager

## Before Starting Any Task
1. Read `CLAUDE.md` and `knowledge.md` for context.
2. Confirm you are on a feature branch, never on `main`.
3. Understand the task fully before editing files.

## Workflow Rules
- One feature per branch (`feature/login-form`, `fix/header-style`).
- Small, focused commits with clear messages.
- Test manually by opening `src/index.html` in the browser.
- Never force-push or rewrite history.

## Code Rules
- Do NOT add external libraries or frameworks — vanilla only.
- Do NOT add a build tool or bundler.
- Keep HTML semantic and accessible (use `<form>`, `<label>`, `type` attributes).
- CSS goes in `src/style.css`, JS goes in `src/app.js`.
- No inline styles or inline `<script>` unless explicitly asked.
- Keep functions small, readable, and named clearly.

## Communication Rules
- Explain *why* a change was made, not just *what*.
- Ask for clarification if the task is ambiguous.
- Summarize what was changed at the end.

## Things Agents Must NOT Do
- Commit secrets, API keys, or credentials.
- Add `console.log` debug lines that are left behind.
- Break the existing layout on desktop or mobile.
- Push directly to `main`.