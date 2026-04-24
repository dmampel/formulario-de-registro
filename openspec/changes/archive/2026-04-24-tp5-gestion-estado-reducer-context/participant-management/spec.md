# Participant Management Specification

## Purpose
Manage the lifecycle of participants (registration, listing, and deletion).
## Requirements
### Requirement: List Participants
The system MUST fetch and display a list of registered participants from the backend.

#### Scenario: Initial Load
- GIVEN the application starts
- WHEN the main view is rendered
- THEN it MUST fetch participants from `GET /participantes`
- AND display them as cards.

### Requirement: Register Participant
The system MUST allow users to register new participants or update existing ones via the same form. 
(Previously: The system MUST allow users to register new participants via a form.)

#### Scenario: Successful Registration (Add)
- GIVEN the registration form is correctly filled and NO participant is selected for editing
- WHEN the user clicks "Actualizar" (or "Registrar")
- THEN it MUST send a `POST /participantes` request
- AND the new participant MUST be added to the local state.

#### Scenario: Successful Update (Edit)
- GIVEN the registration form is filled with modified data of an existing participant
- WHEN the user clicks "Actualizar"
- THEN it MUST send a `PUT /participantes/:id` request
- AND the participant MUST be updated in the local state.

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

