# Proposal: TP7 - Auth Infrastructure & Backend JWT

## Why

This is the first step for TP7. We need to establish a secure backend foundation by implementing a user database, authentication logic via JWT, and protecting the existing participant endpoints.

## What Changes

- Create `usuarios_db` table in SQLite.
- Seed initial users: `admin` (ADMIN) and `consulta` (CONSULTA).
- Install `jsonwebtoken` for token management.
- Implement `/login` endpoint to authenticate users and return a JWT.
- Implement `authenticateToken` middleware to validate JWT on protected routes.
- Restrict `POST`, `PUT`, and `DELETE` operations to `ADMIN` users only.
- Allow `GET` operations for all authenticated users.

## Capabilities

### New Capabilities
- `user-authentication`: Handles user login, password verification, and JWT generation.
- `access-control`: Restricts API endpoints based on user roles (RBAC).

### Modified Capabilities
- `participant-management`: API endpoints are now protected and require valid tokens/roles.

## Impact

- **Backend**: New dependencies (`jsonwebtoken`), new table, and middleware integration.
- **Security**: Data is no longer publicly accessible without a valid session.
