# Proposal: TP6 - Navigation Polish & Responsive Menu

## Why

This is the final phase of TP6. We need to polish the user experience by ensuring the page scrolls to the top on navigation, which is a common issue in React Router apps. Additionally, we'll implement the responsive "burger" menu requirement to make the app mobile-friendly and professional.

## What Changes

- Implement a `ScrollToTop` component to reset window scroll on every route change.
- Create a `Navbar` component with a responsive "burger" menu for mobile views.
- Refactor the global layout to include the `Navbar` and `ScrollToTop` consistently across all pages.
- Ensure the navigation links are accessible from any page.

## Capabilities

### New Capabilities
- `ui-navigation`: Improved global navigation with responsive support.

### Modified Capabilities
- `routing`: Added scroll management to the routing lifecycle.

## Impact

- **UI/UX**: Significant improvement in mobile accessibility and general navigation flow.
- **Components**: New `Navbar`, `ScrollToTop`, and modifications to `App`.
- **Styling**: New CSS for the burger menu and responsive layout adjustments.
