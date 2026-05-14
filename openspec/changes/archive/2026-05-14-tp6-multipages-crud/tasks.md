## 1. Refactor Components

- [x] 1.1 Update `RegistrationForm.tsx` to accept and call `onSuccess` prop.
- [x] 1.2 Update `ParticipantCard.tsx` to use `useNavigate` for the "Editar" button.

## 2. Create Page Components

- [x] 2.1 Create `src/pages/FormularioPage.tsx`.
- [x] 2.2 Create `src/pages/EditarPage.tsx` with `useParams` and `useEffect` logic.

## 3. Update Routing

- [x] 3.1 Update `src/App.tsx` to remove `RegistrationForm` from the main layout.
- [x] 3.2 Add `/nuevo` and `/editar/:id` routes in `App.tsx` pointing to the new pages.

## 4. Verification

- [ ] 4.1 Verify that clicking "Nuevo Participante" in `ListaPage` redirects to `/nuevo`.
- [ ] 4.2 Verify that clicking "Editar" in `ParticipantCard` redirects to `/editar/:id` with the correct data.
- [ ] 4.3 Confirm that submitting the form (add or edit) redirects back to `/`.
