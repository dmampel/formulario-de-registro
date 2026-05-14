# Proposal: TP7 - Frontend Auth & Login

## Why

After securing the backend, we need to implement the user interface and state management to handle authentication. This allows users to log in, persist their session, and access protected routes according to their roles.

## What Changes

- Implement `AuthContext` to manage `user`, `token`, `login`, and `logout` states.
- Create `LoginPage` with a premium glassmorphism form.
- Create `PrivateRoute` component to gate access to sensitive pages.
- Integrate `AuthContext` into the app's root (`main.tsx`).
- Adapt `Navbar` to show user info and a "Cerrar sesión" button.
- Adapt `ParticipantCard` and `Navbar` to hide restricted actions for `CONSULTA` users.
- Update API service logic (if any) or fetch calls to include the JWT token in headers.

## Capabilities

### New Capabilities
- `frontend-auth`: Handles login UI, token storage, and session state.
- `route-protection`: Redirects unauthenticated users to the login page.
- `ui-adaptation`: Dynamic UI rendering based on user roles (RBAC).

### Modified Capabilities
- `ui-navigation`: Navbar now includes auth-related links and info.

## Impact

- **Frontend**: Significant changes to state management and routing.
- **UX**: Users must now authenticate to view the list and manage participants.
