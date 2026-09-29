# knowledge.md

Human-readable knowledge base for this project.

## What This Project Is
A tiny vanilla HTML/CSS/JS web app. It's used to demonstrate how AI context files
(`CLAUDE.md`, `AGENTS.md`, this file) and custom skills change the way an AI
assistant works inside a repository. There is no backend, no database, no build step.

## Goals
- Show how AI context engineering works in practice
- Stay small enough to fully understand in a few minutes
- Be a sandbox for adding small features (like a login form)

## Tech Stack
- **Frontend:** HTML5, CSS3, vanilla JavaScript (ES2020+)
- **Backend:** none
- **Database:** none
- **Hosting:** runs locally in the browser
- **Tools:** VS Code, Claude Code, Git

## Architecture
- `src/index.html` loads `src/style.css` and `src/app.js`
- `app.js` is the JavaScript entry point
- No build step — files are served directly from the filesystem
- Future features (like login) will be pure frontend for now

## Folder Structure
- `src/` — application source (HTML, CSS, JS)
- `skills/` — custom AI skills for this project
- `.claude/` — Claude Code project config
- `CLAUDE.md`, `AGENTS.md`, `knowledge.md` — AI context files

## Key Decisions
- **Vanilla over a framework:** keeps the demo focused on the workflow, not setup
- **No build step:** open the HTML file directly — zero friction
- **Feature branches only:** prevents accidental changes to `main`

## Conventions
- **HTML:** semantic tags, accessible forms (labels, input types, required)
- **CSS:** kebab-case class names, single stylesheet
- **JS:** camelCase, `const` by default, small functions
- **Commits:** conventional commits (`feat:`, `fix:`, `chore:`)
- **Branches:** `feature/...`, `fix/...`, `chore/...`

## Gotchas / Notes
- Safari may cache CSS aggressively — hard refresh (`Cmd + Shift + R`) after edits
- No hot reload — manually refresh the browser after changes
- Nothing here talks to a server; "login" will be simulated in-browser

## Useful Links
- MDN HTML forms: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- MDN Fetch API (for future backend work): https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API