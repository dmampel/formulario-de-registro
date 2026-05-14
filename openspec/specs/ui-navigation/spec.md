# ui-navigation Specification

## Purpose
TBD - created by archiving change tp6-polish-menu. Update Purpose after archive.
## Requirements
### Requirement: Global Navigation Bar
The system MUST provide a global navigation bar accessible from all pages.

#### Scenario: Mobile View
- **WHEN** the screen width is less than 768px
- **THEN** the navigation links MUST be hidden behind a "burger" menu icon.

#### Scenario: Toggling Menu
- **WHEN** the user clicks the burger icon
- **THEN** the navigation menu MUST toggle its visibility.

### Requirement: Scroll Reset
The system MUST reset the scroll position to the top on every navigation.

#### Scenario: Route Change
- **WHEN** the user navigates to a new route
- **THEN** the window MUST scroll to the top position (y: 0).

