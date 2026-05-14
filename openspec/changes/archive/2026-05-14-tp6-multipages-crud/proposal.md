# Proposal: TP6 - Multipages CRUD Implementation

## Why

This is the second phase of TP6. We need to complete the transition to a multi-page architecture by moving the registration and editing forms to their own dedicated routes. This allows for a cleaner separation of concerns, where the user can share a direct link to a specific participant's edit page or the registration form.

## What Changes

- Create `src/pages/FormularioPage.tsx` and `src/pages/EditarPage.tsx`.
- Refactor `RegistrationForm.tsx` to handle `onSuccess` navigation (e.g., redirecting back to the list after a successful action).
- Update `App.tsx` to mount these pages on the `/nuevo` and `/editar/:id` routes.
- Update `ParticipantCard.tsx` and `ListaPage.tsx` to use `Link` or `useNavigate` for navigation.
- Implement `useParams` in `EditarPage.tsx` to fetch/select the correct participant for editing.

## Capabilities

### New Capabilities
- None (refinement of existing ones).

### Modified Capabilities
- `routing`: Added concrete routes for creation and edition.
- `participant-management`: Creation and edition now happen in dedicated URLs.

## Impact

- **UI/UX**: Improved user flow with dedicated URLs for distinct tasks.
- **Components**: `RegistrationForm`, `ParticipantCard`, and `App` will be modified.
- **State Management**: The `selectedParticipant` logic in the context will be used in conjunction with `useParams` for the edit flow.
