## ADDED Requirements

### Requirement: Private Routes
The system MUST prevent unauthenticated access to specific routes.

#### Scenario: Unauthorized Navigation
- **WHEN** a guest user attempts to access `/lista`, `/nuevo` or `/editar/:id`
- **THEN** the system MUST redirect them to `/login`.

#### Scenario: Authorized Navigation
- **WHEN** an authenticated user accesses `/lista`
- **THEN** the system MUST render the page normally.
