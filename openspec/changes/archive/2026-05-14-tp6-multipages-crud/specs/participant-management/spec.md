## MODIFIED Requirements

### Requirement: Register Participant
The registration and update flow MUST redirect the user back to the list upon success.

#### Scenario: Redirection after Add
- **WHEN** a new participant is successfully registered
- **THEN** the system MUST navigate back to `/`.

#### Scenario: Redirection after Update
- **WHEN** an existing participant is successfully updated
- **THEN** the system MUST navigate back to `/`.
