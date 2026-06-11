## ADDED Requirements

### Requirement: View Courses Catalog
The system MUST display a catalog page within the "participantes" application showing at least 6 courses, each with a title, description, and price.

#### Scenario: User navigates to courses page
- **WHEN** the user accesses the courses route (e.g. `/cursos`)
- **THEN** the system displays exactly or more than 6 distinct courses with their respective prices

### Requirement: Purchase a Course
The system MUST provide a button labeled "QUIERO ESTE CURSO" for each course that allows the user to initiate a purchase via Mercado Pago Checkout Pro.

#### Scenario: User clicks to purchase a course
- **WHEN** the user clicks the "QUIERO ESTE CURSO" button on a specific course
- **THEN** the frontend calls the backend to generate a preference ID and redirects the user to the Mercado Pago checkout interface

### Requirement: Generate Checkout Preference
The backend MUST provide an endpoint to securely generate a Mercado Pago checkout preference based on the course details (title, unit price).

#### Scenario: Valid preference generation
- **WHEN** the frontend sends a valid POST request with course details to the backend
- **THEN** the backend communicates with the Mercado Pago API, creates a preference, and returns the preference ID and `init_point` to the frontend

### Requirement: Handle Return URLs
The system MUST configure `back_urls` in the Mercado Pago preference to handle the return from the checkout process (success, pending, failure).

#### Scenario: User returns after successful payment
- **WHEN** the user completes the payment in Mercado Pago
- **THEN** Mercado Pago redirects the user back to the application using the configured `success` return URL (which may be proxied via Ngrok)
