# CLAUDE.md

This file gives Claude Code guidance when working in this repository.

## Project Overview
- **Name:** my-project
- **Purpose:** A simple vanilla HTML/CSS/JS web app used to demo an AI-assisted workflow.

## Tech Stack
- Language: HTML, CSS, JavaScript (vanilla, no framework)
- Package Manager: none
- Build tool: none
- Browser: opens directly via file:// or a local server

## Project Structure
- `src/index.html` — main HTML entry point
- `src/style.css` — global styles
- `src/app.js` — JavaScript entry point
- `skills/` — custom AI skills
- `knowledge.md`, `AGENTS.md` — AI context files

## Commands
- Open app: `open src/index.html`
- No build step. No tests yet.

## Coding Conventions
- Use semantic HTML5 elements
- CSS: kebab-case class names (e.g., `.login-form`)
- JS: camelCase for variables/functions
- Use `const` by default, `let` only when needed
- Keep functions small and focused
- No external libraries unless explicitly approved

## Rules for Claude
- Always read `knowledge.md` and `AGENTS.md` before starting work
- Never commit directly to `main` — use feature branches
- Ask before installing dependencies
- Keep changes scoped to the task
- After changes, refresh the browser to verify visually