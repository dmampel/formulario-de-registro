# Design: TP7 - Auth Infrastructure & Backend JWT

## Context

The backend currently allows anonymous access to all participant operations. TP7 requires restricting this access based on roles and verifying identity via JWT.

## Goals / Non-Goals

**Goals:**
- Implement a user table with roles.
- Generate and validate JWT tokens.
- Protect participants endpoints based on role (`ADMIN` required for mutation).

**Non-Goals:**
- Password reset functionality.
- User registration (users are seeded).
- MFA or advanced security patterns.

## Decisions

- **Database Schema**: Update `db.js` to include:
  ```sql
  CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      rol TEXT NOT NULL
  )
  ```
- **JWT Strategy**: Use `jsonwebtoken` with a 24-hour expiration.
- **Middleware Integration**:
  - `authenticateToken`: Standard middleware to verify the `Authorization` header.
  - `authorizeRole(role)`: Helper middleware to check if the authenticated user has the required role.
- **Initial Data**: Seed `admin` (pass: `admin123`, rol: `ADMIN`) and `consulta` (pass: `user123`, rol: `CONSULTA`).

## Risks / Trade-offs

- **Security**: For educational purposes, passwords will be stored in plain text or simple hashing to avoid complexity unless the user requests full `bcrypt` integration.
- **State**: Token validation is stateless on the server, relying solely on the JWT signature.
