## MODIFIED Requirements

### Requirement: List Participants
The participant list MUST be accessible via the `/` route.

#### Scenario: Accessing the Participant List
- **WHEN** the user navigates to `/`
- **THEN** the list of all registered participants MUST be displayed.
- **AND** the state MUST be retrieved from the `ParticipantesContext`.
