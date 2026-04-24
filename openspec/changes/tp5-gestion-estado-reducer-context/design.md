# Design: TP5 - Gestión de Estado con useReducer + Context

## Technical Approach

We will move from a decentralized state management using `useState` in the context to a centralized "Action-Reducer" pattern. This involves creating a dedicated reducer function that handles all state transitions based on dispatched actions. We will also introduce a `selectedParticipant` state to handle the editing workflow, allowing the form to distinguish between "Create" and "Update" operations.

## Architecture Decisions

### Decision: useReducer for state management

**Choice**: Use `useReducer` inside `ParticipantesContext`.
**Alternatives considered**: Redux, keeping `useState`.
**Rationale**: `useReducer` is the standard tool for complex state logic in React and is explicitly required by the course (TP5). It centralizes the logic and makes it more predictable.

### Decision: Selected Participant in Context

**Choice**: Store `selectedParticipant` in the global `ParticipantesContext`.
**Alternatives considered**: Local state in `App.tsx` or `RegistrationForm.tsx`.
**Rationale**: Storing it in Context allows the `ParticipantCard` to set it (trigger edit) and the `RegistrationForm` to consume it (populate fields) without prop drilling.

## Data Flow

    [ParticipantCard] ── dispatch(EDIT_PARTICIPANT) ──→ [Reducer]
                                                            │
    [RegistrationForm] ←── selectedParticipant ────────── [State]
            │
            └─────── dispatch(UPDATE_PARTICIPANT) ──→ [Backend PUT]
                                                            │
    [List] ←─────────────── updatedState ──────────────── [Reducer]

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `backend/index.js` | Modify | Add `PUT /participantes/:id` route. |
| `src/models/Participante.ts` | New | Move interfaces and constants from `types.tsx`. |
| `src/reducers/participantesReducer.ts` | New | All state transition logic and action types. |
| `src/context/ParticipantesContext.tsx` | Modify | Refactor to use `useReducer` and expose `dispatch`. |
| `src/components/RegistrationForm.tsx` | Modify | Add edit logic and field population. |
| `src/components/ParticipantCard.tsx` | Modify | Add "Editar" button. |
| `src/types/types.tsx` | Delete | Replaced by `src/models/Participante.ts`. |

## Interfaces / Contracts

```typescript
// src/models/Participante.ts
export interface Participant {
  id: number;
  nombre: string;
  // ... rest of the fields
}

// src/reducers/participantesReducer.ts
export type Action =
  | { type: "GET_PARTICIPANTES"; payload: Participant[] }
  | { type: "AGREGAR"; payload: Participant }
  | { type: "ELIMINAR"; payload: number }
  | { type: "SELECT_PARTICIPANTE"; payload: Participant | null }
  | { type: "EDITAR"; payload: Participant }
  | { type: "RESET"; payload: Participant[] };
```

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Unit | Reducer transitions | Test that each action returns the expected state. |
| Integration | Edit Flow | Click "Editar", check if form fills, change data, click "Actualizar", check if list updates. |
| Integration | API | Verify `PUT` request is sent with correct payload. |

## Migration / Rollout

No data migration required as we are using the existing SQLite schema. The refactor will be done in-place, ensuring that "Add" and "Delete" remain functional during the transition to "Edit".

## Open Questions

- [ ] Should the "Reset" action also clear the `selectedParticipant`? (Yes, for consistency).
