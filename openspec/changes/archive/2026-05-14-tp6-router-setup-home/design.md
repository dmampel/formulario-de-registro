# Design: TP6 - Router Setup & Home Page

## Context

The application currently renders everything in a single view in `App.tsx`. We are moving to a multi-page architecture to comply with TP6 requirements. This change focus on the initial setup and the first route.

## Goals / Non-Goals

**Goals:**
- Implement a working routing system using `react-router-dom`.
- Decouple the participant list from `App.tsx` into its own page component.
- Ensure the application remains functional after the infrastructure change.

**Non-Goals:**
- Implementing the `/nuevo` or `/editar/:id` pages (saved for Phase 2).
- Changing the existing state management logic (Reducer + Context).

## Decisions

- **Routing Library**: Use `react-router-dom`. It's the industry standard for React and explicitly requested in the TP.
- **Provider Placement**: Wrap the `App` component with `BrowserRouter` in `main.tsx`. This ensures routing context is available globally.
- **Page Component**: Create `src/pages/ListaPage.tsx`. This component will consume the `ParticipantesContext` to render the list, maintaining the "Glassmorphism" theme.
- **Route Definition**: Define routes in `App.tsx` using the declarative `<Routes>` and `<Route>` components.

## Risks / Trade-offs

- **Risk**: Breaking the layout if CSS classes are not correctly migrated to the new page component.
- **Mitigation**: Ensure all layout wrappers currently in `App.tsx` are either kept in `App.tsx` (as a Layout component) or correctly replicated in `ListaPage.tsx`.
- **Trade-off**: Slightly more boilerplate code initially, but much better scalability for future features.
