---
name: code-review
description: Review code changes for quality, security, and consistency before merging.
---

# Skill: Code Review

Use this skill when asked to review a pull request, a diff, or a set of code changes.

## When to Use
- Before merging any branch into `main`
- When a teammate or agent requests a review
- After completing a feature, to self-review before committing

## Steps
1. **Read context first**
   - Read `CLAUDE.md`, `AGENTS.md`, and `knowledge.md`
   - Understand what the change is supposed to accomplish

2. **Check the diff**
   - Run `git diff main...HEAD` (or the relevant comparison)
   - List every file changed and why

3. **Review each file against the checklist below**

4. **Summarize findings** using this format:

   ### Summary
   (One paragraph describing the change and overall quality.)

   ### ✅ What's Good
   - ...

   ### ⚠️ Issues Found
   - **[File:line]** Description of issue — severity (low / medium / high)

   ### 🔒 Security Concerns
   - ...

   ### 🧪 Test Coverage
   - ...

   ### 📝 Recommendations
   - ...

## Review Checklist
- [ ] Code does what the task/PR describes
- [ ] No obvious bugs or logic errors
- [ ] No hardcoded secrets, API keys, or credentials
- [ ] No `console.log` / debug leftovers
- [ ] Functions are small and focused
- [ ] Naming is clear and consistent
- [ ] Error handling is present where needed
- [ ] No unnecessary dependencies added
- [ ] Tests exist for new behavior
- [ ] Docs/comments updated if behavior changed
- [ ] Follows conventions in `knowledge.md`

## Rules
- Be specific — reference file names and line numbers
- Be constructive — suggest fixes, not just problems
- Prioritize: security > correctness > performance > style
- Do not approve if any **high** severity issue exists