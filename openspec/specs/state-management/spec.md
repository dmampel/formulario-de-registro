# State Management Specification

## Purpose
Define how the application state is managed and synchronized across components using the Reducer pattern.

## Requirements

### Requirement: Centralized Reducer
The system MUST manage participant-related state changes through a centralized reducer function that processes actions and returns a new state.

#### Scenario: Updating State via Action
- GIVEN the current state of participants
- WHEN a valid action (e.g., SET, ADD, DELETE, UPDATE) is dispatched
- THEN the reducer MUST return a new state object reflecting the change without mutating the previous state.

### Requirement: Context Integration
The system MUST provide the state and dispatch function to the component tree via React Context.

#### Scenario: Accessing State in Components
- GIVEN a component is a child of the ParticipantesProvider
- WHEN it consumes the ParticipantesContext
- THEN it MUST have access to the current list of participants and the dispatch function.
