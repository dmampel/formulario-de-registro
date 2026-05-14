## 1. Auth Infrastructure

- [x] 1.1 Create `src/context/AuthContext.tsx`.
- [x] 1.2 Wrap `main.tsx` with `AuthProvider`.
- [x] 1.3 Create `src/routes/PrivateRoute.tsx`.

## 2. Login Page

- [x] 2.1 Implement `src/pages/LoginPage.tsx` with form logic.
- [x] 2.2 Update `App.tsx` to include the `/login` route.

## 3. UI Adaptation (RBAC)

- [x] 3.1 Update `Navbar.tsx` to show/hide links and add "Cerrar sesión".
- [x] 3.2 Update `ParticipantCard.tsx` to show/hide "Editar" and "Eliminar" buttons based on role.

## 4. API Integration

- [x] 4.1 Update `ParticipantesContext.tsx` fetch calls to include the JWT token.

## 5. Verification

- [x] 5.1 Verify that refreshing the page maintains the session.
- [x] 5.2 Verify that `CONSULTA` users cannot see administrative buttons.
- [x] 5.3 Verify that logging out redirects to `/login`.
