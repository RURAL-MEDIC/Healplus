# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Call Ambulance button (component testing)

This project includes `src/components/CallDocNAmbulance.jsx` which provides a "Call an Ambulance" control.

How it behaves

- On mobile browsers the control uses a `tel:` link to open the device dialer with the configured number.
- On desktop browsers the component shows an accessible fallback dialog that displays the number, allows copying it to clipboard, and offers an "Open Dialer" link which may invoke an external handler if installed.

How to change the number

- Edit the `ambulanceNumber` constant at the top of `src/components/CallDocNAmbulance.jsx`.

Manual test steps

1. Start the dev server: `npm run dev` and open `http://localhost:5173/`.
2. On a phone browser, tap "Call an Ambulance" — the dialer should open with the number.
3. On desktop, click "Call an Ambulance" to open the fallback dialog. Test the Copy button and Open Dialer link. Press Escape to close the dialog.

Accessibility notes

- The fallback uses `role="dialog"` and `aria-modal="true"` and provides keyboard support (Escape to close). Focus moves into the dialog when opened and returns to the trigger when closed.

## Styles for ambulance fallback modal

The desktop fallback dialog uses these CSS classes (defined in `src/styles/CallDocNAmbulance.css`):

- `.ambulance-fallback-overlay` — full-screen backdrop (semi-transparent) and flex centering.
- `.ambulance-fallback` — dialog card: white background, padding, rounded corners, and shadow.
- `.ambulance-number` — emphasized number text inside the dialog.
- `.ambulance-actions` — container for action buttons (flex layout, wraps on small screens).
- `.btn` / `.btn.primary` — button styles. `primary` uses a gradient and white text for emphasis.

Customization tips

- Change colors: edit `.btn.primary` background to match your brand.
- Spacing and sizing: adjust `.ambulance-fallback` padding and `max-width` to change dialog density.
- Focus styles: `.btn:focus` currently uses a blue focus ring; change the color to match accessibility contrast rules.

Because the modal is intentionally simple, you can replace the markup with your app's modal or toast component if you prefer.
