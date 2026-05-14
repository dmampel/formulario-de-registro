# Design: TP6 - Multipages CRUD Implementation

## Context

We have the basic routing infrastructure in place. Now we need to migrate the "Create" and "Edit" flows to their own pages (`FormularioPage` and `EditarPage`).

## Goals / Non-Goals

**Goals:**
- Separate the registration form from the main list view.
- Support deep-linking to the registration and edition pages.
- Ensure the CRUD cycle completes with a redirection back to the list.

**Non-Goals:**
- Changing the backend API.
- Implementing the responsive burger menu (Phase 3).

## Decisions

- **FormularioPage.tsx**: A new page component that renders `RegistrationForm`. It provides a callback that navigates back to `/` upon successful submission.
- **EditarPage.tsx**: A new page component that uses `useParams` to extract the participant ID. It synchronizes with the `ParticipantesContext` to select the corresponding participant for editing.
- **onSuccess Pattern**: The `RegistrationForm` will be modified to accept an `onSuccess` prop. This allows the parent Page component to decide what happens after a successful registration/update (in this case, navigation).
- **Navigation Trigger**: The `ParticipantCard` "Editar" button will be updated to use `useNavigate` to redirect the user to `/editar/:id`.

## Risks / Trade-offs

- **Risk**: The user might refresh the `EditarPage`, and if the state is not persisted or loaded yet, the form might be empty.
- **Mitigation**: Ensure the context handles initial loading or that `EditarPage` handles the case where the participant is not found in the current state (e.g., by fetching or showing an error).
- **Trade-off**: More components and files, but a much cleaner separation of "Listing", "Creating", and "Editing" logic.
