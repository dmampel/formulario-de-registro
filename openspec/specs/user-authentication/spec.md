# user-authentication Specification

## Purpose
TBD - created by archiving change tp7-auth-infra. Update Purpose after archive.
## Requirements
### Requirement: User Login
The system MUST allow users to authenticate with a username and password.

#### Scenario: Successful Login
- **WHEN** the user provides correct credentials
- **THEN** the system MUST return a JWT token and user info (id, username, rol).

#### Scenario: Failed Login
- **WHEN** the user provides incorrect credentials
- **THEN** the system MUST return a 401 Unauthorized status.

