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
The system MUST allow users to register new participants via a form.

#### Scenario: Successful Registration
- GIVEN the registration form is correctly filled
- WHEN the user submits the form
- THEN it MUST send a `POST /participantes` request
- AND the new participant MUST be added to the local state.

### Requirement: Delete Participant
The system MUST allow users to remove a participant.

#### Scenario: Deleting a Participant
- GIVEN a participant is displayed in the list
- WHEN the user clicks "Eliminar"
- THEN it MUST send a `DELETE /participantes/:id` request
- AND the participant MUST be removed from the list.
