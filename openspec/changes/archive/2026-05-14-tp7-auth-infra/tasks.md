## 1. Backend Setup

- [x] 1.1 Install `jsonwebtoken` in the backend directory.
- [x] 1.2 Update `db.js` to create the `usuarios` table and seed initial data.

## 2. Authentication Logic

- [x] 2.1 Implement the `/login` endpoint in `index.js`.
- [x] 2.2 Implement `authenticateToken` middleware.
- [x] 2.3 Implement `authorizeRole(role)` middleware for RBAC.

## 3. Protect Endpoints

- [x] 3.1 Apply `authenticateToken` to all participant endpoints.
- [x] 3.2 Apply `authorizeRole('ADMIN')` to POST, PUT, and DELETE endpoints.

## 4. Verification

- [x] 4.1 Verify `/login` returns a valid JWT for correct credentials.
- [x] 4.2 Verify protected endpoints return 401 when no token is provided.
- [x] 4.3 Verify mutation endpoints return 403 for `CONSULTA` role.
