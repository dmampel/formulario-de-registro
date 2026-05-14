# routing Specification

## Purpose
TBD - created by archiving change tp6-router-setup-home. Update Purpose after archive.
## Requirements
### Requirement: Application Routing Infrastructure
The system MUST support routes for creation and edition.

#### Scenario: Navigating to New Participant Form
- **WHEN** the user visits `/nuevo`
- **THEN** the system MUST display the registration form.

#### Scenario: Navigating to Edit Participant Form
- **WHEN** the user visits `/editar/:id`
- **THEN** the system MUST display the registration form populated with the data of the participant matching the `:id`.

