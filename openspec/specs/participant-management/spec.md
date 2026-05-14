# Participant Management Specification

## Purpose
Manage the lifecycle of participants (registration, listing, and deletion).
## Requirements
### Requirement: List Participants
The participant list MUST be accessible via the `/` route.

#### Scenario: Accessing the Participant List
- **WHEN** the user navigates to `/`
- **THEN** the list of all registered participants MUST be displayed.
- **AND** the state MUST be retrieved from the `ParticipantesContext`.

### Requirement: Register Participant
The registration and update flow MUST redirect the user back to the list upon success.

#### Scenario: Redirection after Add
- **WHEN** a new participant is successfully registered
- **THEN** the system MUST navigate back to `/`.

#### Scenario: Redirection after Update
- **WHEN** an existing participant is successfully updated
- **THEN** the system MUST navigate back to `/`.

### Requirement: Delete Participant
The system MUST allow users to remove a participant.

#### Scenario: Deleting a Participant
- GIVEN a participant is displayed in the list
- WHEN the user clicks "Eliminar"
- THEN it MUST send a `DELETE /participantes/:id` request
- AND the participant MUST be removed from the list.

### Requirement: Edit Mode Trigger
The system MUST allow triggering an edit mode that populates the form with a participant's data.

#### Scenario: Selecting a Participant to Edit
- GIVEN a participant card is displayed
- WHEN the user clicks "Editar"
- THEN the form MUST be populated with all the participant's current data
- AND the form button text MUST change to indicate an update operation (e.g., "Actualizar").

