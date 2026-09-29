---
name: write-tests
description: Write clear, focused tests for new or existing code.
---

# Skill: Write Tests

Use this skill when asked to add, improve, or review tests for a piece of code.

## When to Use
- A new feature or function was added
- A bug was fixed (add a regression test)
- Test coverage is missing for existing behavior
- Refactoring code that has no tests

## Steps
1. **Understand the code under test**
   - Read the source file(s) being tested
   - Read `CLAUDE.md`, `AGENTS.md`, and `knowledge.md` for conventions
   - Identify inputs, outputs, and edge cases

2. **Identify test cases**
   - **Happy path:** normal, expected usage
   - **Edge cases:** empty input, max/min values, boundaries
   - **Error cases:** invalid input, missing data, failures
   - **Regression:** the specific bug being fixed (if applicable)

3. **Write the tests**
   - Follow the existing test structure and naming in the repo
   - One behavior per test
   - Clear test names: `it('returns 0 when list is empty')`
   - Use the Arrange–Act–Assert pattern

4. **Run the tests**
   - Execute the project's test command (see `CLAUDE.md`)
   - Ensure all tests pass
   - Ensure the new test fails if the code is broken (sanity check)

5. **Report results**
   - Number of tests added
   - What each test covers
   - Any edge cases NOT covered (and why)

## Test Checklist
- [ ] Tests are focused on behavior, not implementation details
- [ ] No hardcoded values that will break easily
- [ ] Test names clearly describe what is being tested
- [ ] Mocks/stubs used only when necessary
- [ ] No tests that depend on each other (independent)
- [ ] Tests run fast (no unnecessary waits or network calls)
- [ ] Follows the same framework/style as existing tests

## Rules
- Do NOT modify production code just to make tests pass — fix the code if it's wrong
- Do NOT write tests that always pass (no real assertions)
- Prefer real objects over mocks when practical
- If a test is hard to write, the code may need refactoring — flag it
- Update coverage docs or CI config if needed (ask first)