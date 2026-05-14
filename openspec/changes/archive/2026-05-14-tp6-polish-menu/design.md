# Design: TP6 - Navigation Polish & Responsive Menu

## Context

The application is now multi-page, but lacks a global navigation bar and proper scroll management between route transitions. We also need to fulfill the responsive burger menu requirement.

## Goals / Non-Goals

**Goals:**
- Implement automatic scroll-to-top on navigation.
- Create a responsive global navigation bar (Navbar).
- Implement a burger menu for mobile devices.

**Non-Goals:**
- Redesigning the core logic of the registration form.
- Adding new data-related features.

## Decisions

- **ScrollToTop Component**: Create `src/components/ScrollToTop.tsx`. This component will use the `useLocation` hook from `react-router-dom` and trigger `window.scrollTo(0, 0)` in a `useEffect` whenever the pathname changes.
- **Navbar Component**: Create `src/components/Navbar.tsx`. It will be positioned at the very top of the application. On desktop, it will show horizontal links. On mobile, it will show a burger icon that toggles a vertical menu.
- **Glassmorphism Consistency**: The Navbar will use the same glassmorphism styles (blur, transparency, thin borders) as the rest of the application to maintain visual harmony.
- **Layout Structure**: `App.tsx` will serve as the shell, containing `ScrollToTop`, `Navbar`, and then the `Routes` container.

## Risks / Trade-offs

- **Risk**: The burger menu might overlap with page content if not handled with proper padding/margin.
- **Mitigation**: Use a fixed or sticky header with a spacer or sufficient margin-top on the main content area.
- **Trade-off**: Adding a global Navbar takes up some vertical space, but it's essential for a multi-page app UX.
