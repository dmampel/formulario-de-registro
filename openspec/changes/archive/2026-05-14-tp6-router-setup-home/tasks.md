## 1. Preparation

- [x] 1.1 Install `react-router-dom` using `npm install react-router-dom`.

## 2. Infrastructure Setup

- [x] 2.1 Update `src/main.tsx` to include `BrowserRouter`.
- [x] 2.2 Wrap the `<App />` component (and providers) with `<BrowserRouter>`.

## 3. Page Migration

- [x] 3.1 Create `src/pages` directory.
- [x] 3.2 Create `src/pages/ListaPage.tsx` with the participant list logic.
- [x] 3.3 Refactor `src/App.tsx` to remove the list rendering and implement `<Routes>`.
- [x] 3.4 Define the root route `/` pointing to `ListaPage`.

## 4. Verification

- [x] 4.1 Verify the app loads correctly on `http://localhost:5173/`.
- [x] 4.2 Confirm that participant data is still correctly fetched and displayed.
