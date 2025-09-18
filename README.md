# Home Assigment Rémy Sabosch - Eliq Drinks App

Simple two‑screen app:
- Overview: list of drinks drinks with different layouts and pagination 
- Details: image, type, ingredients, and multi‑language instructions

## White‑Label Configuration

What you can control:
- Branding: title, logo
- Colors: primary, background
- Dark mode: on/off, toggle
- Drinks list UI: grid or list, toggle
- Details UI: instruction languages

How it works:
- The app fetches the selected config JSON and exposes it via a global configuration service.
- Each screen reads only the flags it needs and renders conditionally.
- For your convenience, there is a config switcher in the footer, which provides three different example configs.
- The configuration files are found in the public folder.

## General notes

- The app makes heavy use of the **Angular Signals API**, resulting in clean code and simple reactivity. These features could also have been implemented with an RxJs-based approach.
- **Zoneless Change Detection** is applied to avoid unnecessary cycles and improve performance.
- Using `provideAppInitializer()` to load the configuration ensures that the app initializes only once the configuration is available.
- The UI is built with **PrimeNG**, in particular its DataView component. With its design tokens and theming system, the framework adapts well to white-label requirements.
- **Strict typing** is enforced throughout the app to improve reliability and the development experience.
- For the list of ingredients, I used a mapped type with template literal types over a numeric union. This automatically generates the strIngredientX and strMeasureX keys, reduces repetition, and ensures compile-time validation of valid indices.
- **Tailwind** is being used for easy styling and responsive design.

Notes and Limitations
-	Some of the features used (zoneless, httpResource) are still experimental and should be carefully evaluated before production use.
-	Testing is limited due to time and scope constraints; in a production scenario, broader coverage would be required.
