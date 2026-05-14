## ADDED Requirements

### Requirement: Application Routing Infrastructure
The system MUST implement a routing system that handles client-side navigation.

#### Scenario: Navigating to Home
- **WHEN** the user visits the root URL `/`
- **THEN** the system MUST display the list of registered participants.

#### Scenario: URL Synchronization
- **WHEN** the user navigates between different routes
- **THEN** the browser URL MUST be updated accordingly without a full page reload.
