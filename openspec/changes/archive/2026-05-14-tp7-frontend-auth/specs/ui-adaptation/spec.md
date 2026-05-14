## ADDED Requirements

### Requirement: Role-Based UI
The system MUST adapt the UI elements based on the current user's role.

#### Scenario: Admin UI
- **WHEN** the user is an `ADMIN`
- **THEN** the system MUST show the "Nuevo Participante", "Editar" and "Eliminar" buttons.

#### Scenario: Consulta UI
- **WHEN** the user is `CONSULTA`
- **THEN** the system MUST hide the "Nuevo Participante", "Editar" and "Eliminar" buttons.
