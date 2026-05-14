## ADDED Requirements

### Requirement: Global Auth State
The system MUST provide a global context to access authentication state.

#### Scenario: Login Persistence
- **WHEN** the app initializes
- **THEN** it MUST check `localStorage` for a saved token and user info to restore the session.

#### Scenario: Logout
- **WHEN** the user logs out
- **THEN** all auth state MUST be cleared and `localStorage` MUST be wiped.
