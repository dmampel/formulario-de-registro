## 1. Backend Setup

- [x] 1.1 Install `mercadopago` package in the `backend` directory.
- [x] 1.2 Import and configure Mercado Pago client in `backend/index.js` with an Access Token (using an environment variable or a constant if required).

## 2. Backend Implementation

- [x] 2.1 Create a POST endpoint `/create_preference` in `backend/index.js`.
- [x] 2.2 In the endpoint, construct the preference payload (items array, back_urls, auto_return).
- [x] 2.3 Call the Mercado Pago API to create the preference and return the `id` and `init_point` to the client.

## 3. Frontend Setup

- [x] 3.1 Create a new component `CursosPage.tsx` in `src/pages`.
- [x] 3.2 Define an array of 6 courses with distinct titles, descriptions, and prices.
- [x] 3.3 Add the `/cursos` route in `App.tsx` and a link in `Navbar.tsx`.

## 4. Frontend Implementation

- [x] 4.1 In `CursosPage.tsx`, map over the courses to render a card for each one, including the "QUIERO ESTE CURSO" button.
- [x] 4.2 Create an onClick handler for the button that sends a POST request to the backend's `/create_preference` with the selected course details.
- [x] 4.3 Handle the backend response: extract the `init_point` and redirect the user using `window.location.href = response.init_point`.

## 5. Testing and Refinement

- [x] 5.1 Start backend and frontend to verify the `/cursos` page renders correctly.
- [x] 5.2 Test the checkout flow by clicking a course and verifying redirection to Mercado Pago sandbox/checkout.
- [x] 5.3 Configure Ngrok locally and test that `back_urls` correctly return to the frontend application.
