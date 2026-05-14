# Proposal: TP6 - Router Setup & Home Page

## Why

This is the first phase of the TP6 assignment. We need to transition the application from a single-page view to a multi-page architecture using `react-router-dom`. This improves professional structure, allows for bookmarkable URLs, and prepares the app for complex multi-screen flows.

## What Changes

- Install `react-router-dom` as a new dependency.
- Configure `BrowserRouter` in the application entry point (`main.tsx`).
- Define the initial routing structure in `App.tsx`.
- Refactor the main dashboard into a dedicated page component: `src/pages/ListaPage.tsx`.
- Update navigation links to use React Router's `<Link>` or `useNavigate`.

## Capabilities

### New Capabilities
- `routing`: Implementation of client-side navigation using React Router.

### Modified Capabilities
- `participant-management`: The participant list is now served under the root path `/` in its own dedicated page.

## Impact

- **Dependencies**: New dependency `react-router-dom`.
- **Architecture**: Move from a conditional rendering logic in `App.tsx` to a declarative routing system.
- **File Structure**: Introduce `src/pages/` directory.
