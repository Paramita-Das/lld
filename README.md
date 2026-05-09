# LLD Practice Workspace

This repository is a hands-on workspace for practicing low-level design and machine coding questions, primarily in React.

## Current Layout

- `ReactJs/my-react-app`: main React + TypeScript practice app
- `JS/autocomplete`: plain JavaScript implementation for comparison and quick DOM practice

## How To Run

From the repo root:

```bash
npm install
npm run dev
```

The root scripts delegate to the React practice app, so you can work from one consistent entry point.

## What This Repo Is Optimized For

- Building one problem at a time with a clean problem catalog
- Comparing React and plain JavaScript implementations
- Practicing interview-style component design, state handling, and UI behavior
- Expanding the repo over time without turning `App.tsx` into a long list of ad hoc imports

## Suggested Workflow

1. Pick one problem from the home screen.
2. Build the MVP first.
3. Add edge cases and keyboard/accessibility behavior.
4. Refactor shared logic only after the problem works.
5. Document tradeoffs and possible follow-up improvements.

## Current React Problems

- Autocomplete
- Voting Poll
- OTP Input
- Multi Select Dropdown
- Memory Game (planned)
- Snake and Ladder (planned)

## Suggested Next Cleanup

- Rename `ReactJs/my-react-app` to a shorter app folder such as `apps/react-lld` when you're ready for a larger move.
- Add one markdown brief per problem with requirements, edge cases, and follow-up rounds.
- Introduce a `shared/` area only when duplication starts showing up across problems.
