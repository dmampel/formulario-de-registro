# Design: TP7 - Frontend Auth & Login

## Context

The backend is secured with JWT. The frontend needs to capture credentials, store the token, and provide it in headers for all subsequent requests.

## Goals / Non-Goals

**Goals:**
- Provide a login interface.
- Manage auth state globally.
- Persist sessions across reloads.
- Protect routes and UI elements based on roles.

**Non-Goals:**
- Sophisticated token refresh logic (24h is enough for this TP).
- Password visibility toggle (standard input).

## Decisions

- **AuthContext**:
  - `login(username, password)`: Calls `/login`, sets state, saves to `localStorage`.
  - `logout()`: Clears state and `localStorage`, redirects to `/login`.
- **PrivateRoute**:
  ```tsx
  <PrivateRoute rol="ADMIN">
    <FormularioPage />
  </PrivateRoute>
  ```
- **Global Headers**: All fetch calls in `ParticipantesContext` must include:
  ```js
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
  ```
- **UI RBAC**:
  - `Navbar`: `{user?.rol === 'ADMIN' && <Link ... />}`
  - `ParticipantCard`: Use `useAuth()` to check role before rendering action buttons.

## Risks / Trade-offs

- **Security**: `localStorage` is vulnerable to XSS. For a production app, `httpOnly` cookies would be better, but for this course project, `localStorage` is the standard requested approach.
- **Complexity**: Wrapping with multiple providers in `main.tsx`.
