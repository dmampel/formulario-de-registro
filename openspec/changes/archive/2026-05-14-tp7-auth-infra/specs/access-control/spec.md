## ADDED Requirements

### Requirement: Role-Based Access Control
The system MUST restrict operations based on the authenticated user's role.

#### Scenario: Admin Mutations
- **WHEN** an authenticated user with role `ADMIN` attempts to create, edit, or delete a participant
- **THEN** the system MUST allow the operation.

#### Scenario: Consulta Mutations
- **WHEN** an authenticated user with role `CONSULTA` attempts to create, edit, or delete a participant
- **THEN** the system MUST return a 403 Forbidden status.

#### Scenario: Anonymous Access
- **WHEN** an unauthenticated user attempts to access any participant endpoint
- **THEN** the system MUST return a 401 Unauthorized status.
