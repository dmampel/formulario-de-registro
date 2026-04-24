# Proposal: TP5 - Gestión de Estado con useReducer + Context

## Intent

Refactor the application's state management to use the `useReducer` hook integrated with the `Context API`. This change centralizes logic, improves scalability, and introduces the "Edit" functionality as required by the university TP5.

## Scope

### In Scope
- Create `src/reducers/participantesReducer.ts` to centralize all participant-related actions.
- Refactor `src/context/ParticipantesContext.tsx` to replace `useState` with `useReducer`.
- Implement "Edit" functionality:
  - Add "Editar" button to `ParticipantCard.tsx`.
  - Update `RegistrationForm.tsx` to populate fields when editing and toggle between "Agregar" and "Actualizar".
- Update Backend (`backend/index.js`) to support `PUT /participantes/:id`.
- Ensure data persistence with the existing SQLite database.

### Out of Scope
- Redesigning the UI (maintaining existing Glassmorphism theme).
- Implementing authentication or multi-user support.

## Capabilities

### New Capabilities
- `state-management`: Centralized state management using the Reducer pattern.

### Modified Capabilities
- `participant-management`: Added support for editing existing participants.

## Approach

1. **Backend**: Add the `PUT` route to handle updates in the database.
2. **Reducer**: Define `Action` types and the `participantesReducer` function.
3. **Context**: Integrate the reducer into `ParticipantesProvider` and expose the `dispatch` and `state`.
4. **UI**: Update components to use the new context and handle the editing flow (selecting a participant -> loading form -> submitting update).

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `backend/index.js` | Modified | Add `PUT /participantes/:id` route. |
| `src/context/ParticipantesContext.tsx` | Modified | Replace `useState` with `useReducer`, add `selectedParticipant` state. |
| `src/reducers/participantesReducer.ts` | New | All state transition logic. |
| `src/components/RegistrationForm.tsx` | Modified | Logic for Add vs Update, field population. |
| `src/components/ParticipantCard.tsx` | Modified | Add "Editar" button and trigger selection. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Breaking existing Add/Delete functionality | Low | Verify with existing backend endpoints before and after refactor. |
| Data sync issues between form and context | Medium | Use a single source of truth (`selectedParticipant`) in the context. |

## Rollback Plan

Revert to the previous Git commit (TP4 state) or the `tp4` branch created earlier.

## Success Criteria

- [ ] "Editar" button loads participant data into the form.
- [ ] Submitting the form updates the participant in the database and the UI.
- [ ] Existing "Agregar", "Eliminar", and "Resetear" functions still work.
- [ ] State management is fully handled by `useReducer`.
