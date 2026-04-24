# Tasks: TP5 - Gestión de Estado con useReducer + Context

## Phase 1: Foundation (Backend & Models)

- [x] 1.1 Add `PUT /participantes/:id` route to `backend/index.js` to handle participant updates.
- [x] 1.2 Create `src/models/Participante.ts` and move types/constants from `src/types/types.tsx`.
- [x] 1.3 Fix imports in all components to use the new `src/models/Participante.ts`.

## Phase 2: State Management (Reducer & Context)

- [x] 2.1 Create `src/reducers/participantesReducer.ts` with action types and state logic (GET, ADD, DELETE, UPDATE, SELECT, RESET).
- [x] 2.2 Refactor `src/context/ParticipantesContext.tsx` to use `useReducer` with the new reducer.
- [x] 2.3 Add `selectedParticipant` to context state to track the participant being edited.
- [x] 2.4 Expose `dispatch` and `state` through the context.

## Phase 3: UI Integration (Edit Flow)

- [x] 3.1 Update `src/components/ParticipantCard.tsx` to add the "Editar" button and dispatch `SELECT_PARTICIPANTE`.
- [x] 3.2 Update `src/components/RegistrationForm.tsx` to populate fields when `selectedParticipant` is present.
- [x] 3.3 Update `RegistrationForm.tsx` submit logic to handle both `POST` (new) and `PUT` (edit) based on `selectedParticipant`.
- [x] 3.4 Update `RegistrationForm.tsx` button text to toggle between "Registrar" and "Actualizar".

## Phase 4: Verification & Cleanup

- [x] 4.1 Verify: Selecting a participant loads data into the form and changes button text.
- [x] 4.2 Verify: Editing and saving updates the list and the database.
- [x] 4.3 Verify: Existing Add and Delete functionalities still work.
- [x] 4.4 Delete `src/types/types.tsx` after migration is complete.
- [x] 4.5 Update `README.md` to mention TP5 and the new architecture.
