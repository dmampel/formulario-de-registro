# Delta for Participant Management

## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Edit Mode Trigger
The system MUST allow triggering an edit mode that populates the form with a participant's data.

#### Scenario: Selecting a Participant to Edit
- GIVEN a participant card is displayed
- WHEN the user clicks "Editar"
- THEN the form MUST be populated with all the participant's current data
- AND the form button text MUST change to indicate an update operation (e.g., "Actualizar").
