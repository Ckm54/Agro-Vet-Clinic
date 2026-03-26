# Veterinary Clinic (Vet Zone)

Veterinary Clinic is a web app for a veterinary clinic (brand shown in the UI: **Vet Zone**). It showcases the clinic’s services, the types of animals we care for, our service area and operating hours, and ways to contact us.

## Table of Contents

- Project Overview
- Installation
- Basic Usage
- Features Overview
- Configuration Options
- Code Structure Overview
- Customization (content + contact details)
- Troubleshooting
- Contributing
- License

## Project Overview

Key features:

- Home page (`/`)
- Services page (`/services`)
- Contact Us page (`/contact`)

Technology stack:

- React (React Router for navigation)
- Tailwind CSS (utility-first styling)
- Swiper (animal showcase slider)

## Installation

### Prerequisites

- Node.js and npm (any current LTS version should work with this CRA-based project)

### Install dependencies

From the project root:

```bash
npm install
```

### Available Scripts

This project uses Create React App (CRA), so these scripts are available:

- `npm start` - run the dev server
- `npm run build` - create a production build in `build/`
- `npm test` - run tests in watch mode

## Running Tests

This project uses Jest + React Testing Library (bundled with Create React App).

### Run tests in watch mode (recommended while developing)

```bash
npm test
```

### Run tests once (useful for CI)

```bash
npm test -- --watchAll=false
```

### What is covered by the current tests

- App routing smoke tests (`src/App.test.js`)
- Navbar navigation tests (`src/components/navbar.test.jsx`)
- Contact form rendering + required fields/options (`src/components/contactUsForm.test.jsx`)

### Run the app (development)

```bash
npm start
```

Then open:

- [http://localhost:3000](http://localhost:3000)

## Basic Usage

### Navigate pages

The app uses client-side routing:

- Home: `http://localhost:3000/`
- Services: `http://localhost:3000/services`
- Contact Us: `http://localhost:3000/contact`

### Build for production

```bash
npm run build
```

The production build output will be placed in the `build/` folder.

## Deployment

This is a Create React App (CRA) project.

- **Static hosting**: upload the `build/` folder to any static host (Netlify, Vercel static export, GitHub Pages, shared hosting, etc.)
- **SPA routing**: configure your host to serve `index.html` for unknown routes so `/services` and `/contact` work on refresh

## Features Overview

### Home Page

The `Home` page is composed from reusable components:

- Navigation bar (`Navbar`)
- Hero section (`Hero`)
- Core services overview (`OurServices`)
- Animal type slider (`AnimalSlider`) showing: Cattle, Goats & Sheep, Dogs, Cats, Poultry, Horses & Donkeys
- Call-to-action (`Cta`)
- Footer (`Footer`)

### Services Page

The `Services` page highlights service categories and includes a detailed list of offerings such as:

- Preventive & Wellness (routine examinations, vaccinations, de-worming, nutrition counseling)
- Diagnostics (in-house testing, X-ray, ultrasound, blood work)
- Surgery (soft tissue, orthopedic, dental, emergency surgery, post-operative care)
- Additional specialty sections (Treatment & Disease Management, Pet Care Services, Veterinary Consultation, Obstetrics & Gynecology)

### Contact Us Page

The `ContactUs` page includes:

- Contact hero (`ContactUsHero`)
- Message form (`ContactUsForm`) (fields: Full name, Phone number, Email address, Animal type (Cattle, Goats & Sheep, Dogs, Cats, Poultry, Horses & Donkeys), Message)
- Service area and operating hours (`ContactUsLocation`) (Based in Kisii; covers Kisii, Nyamira, and the entire Nyanza region; Operating hours: Monday-Friday 8:00 AM - 6:00 PM, Saturday 9:00 AM - 4:00 PM, Sunday closed with emergency services available; Mobile emergency service: 24/7)
- Emergency CTA (`ContactUsCta`) (call our emergency hotline: `+254 700 000000`)
- Footer (`Footer`)

## Configuration Options

### Routing (pages)

Routes are configured in `src/App.js`:

- `/` -> `src/pages/Home.jsx`
- `/services` -> `src/pages/services.jsx`
- `/contact` -> `src/pages/ContactUs.jsx`

To add or change a route, update `src/App.js` and create the corresponding page component in `src/pages/`.

## Code Structure Overview

At a high level:

- `src/index.js`: mounts the React app into the DOM and imports global styles (`src/index.css`)
- `src/App.js`: defines client-side routes with `react-router-dom` for `Home`, `Services`, and `ContactUs`
- `src/pages/`: page-level composition components (`Home.jsx`, `services.jsx`, `ContactUs.jsx`)
- `src/components/`: reusable UI sections used by the pages (for example `navbar`, `hero`, `ourServices`, `animalSlider`, `servicesList`, `contactUsForm`, `contactUsLocation`, and `footer`)
- `src/*Assets/`: assets organized by page feature area (for example `homeAssets/`, `servicesAssets/`, `contactUsAssets/`)

### Styling (Tailwind)

Tailwind is configured in `tailwind.config.js`. You can customize the theme (for example, colors like `bg-main`, `gold-main`, and other project-specific tokens).

Global Tailwind directives live in `src/index.css`:

- `@tailwind base;`
- `@tailwind components;`
- `@tailwind utilities;`

### UI customization by component

Most UI content can be customized by editing components in:

- `src/components/` (page sections like `ourServices`, `servicesList`, `contactUsLocation`, etc.)

### Assets organization

Page-specific assets are imported from asset folders (for example `src/homeAssets/`, `src/servicesAssets/`, and `src/contactUsAssets/`), keeping visuals close to the UI they support.

## Customization (content + contact details)

Common text/content updates you might want to change:

- **Brand name in the navbar/footer**: `src/components/navbar.jsx`, `src/components/footer.jsx`
- **Emergency hotline number**: `src/components/contactUsCta.jsx` (currently `+254 700 000000`)
- **Service area + operating hours text**: `src/components/contactUsLocation.jsx`
- **Map location**: `src/components/contactUsLocation.jsx` (Google Maps iframe query uses coordinates)
- **Animals shown in the slider**: `src/components/animalSlider.jsx`

## Troubleshooting

### `npm start` fails

- Ensure you are in the project root (where `package.json` is located).
- Re-run dependencies: `npm install`
- If you see issues related to Node.js compatibility, try using a supported Node.js LTS version that works with your `react-scripts` version.

### Port `3000` is already in use

- Stop the process currently using port 3000, then run `npm start` again.

### Tailwind styles are not applying

- Confirm that `src/index.css` includes the Tailwind directives.
- Confirm `src/index.js` imports `./index.css` (it does in this project).
- Confirm the `tailwind.config.js` `content` paths include your source files (they do: `./src/**/*.{js,jsx,ts,tsx}`).

### Swiper slider looks broken or unstyled

- Ensure the Swiper CSS imports are present in the slider component (this project imports `swiper/css` and `swiper/css/navigation` in `src/components/animalSlider.jsx`).

### Contact form doesn’t “send”

- This README reflects the UI structure. The form currently does not show a backend integration in the code we reviewed. To submit messages, you’ll need to connect the form to an API (or add a form handler) and handle submission state.

### Map iframe doesn’t load

- Check your network access and browser permissions for third-party embeds.

## Contributing

Contributions are welcome!

1. Fork the repo
2. Create a feature branch (example: `feature/add-new-service-page`)
3. Implement your changes
4. Run the app locally to verify the UI
5. (Optional) Run tests: `npm test`
6. Submit a Pull Request with a clear description of what you changed and why

## Toolkit Document (React + Tailwind)

1. Title & Objective
  ### **Getting Started with React.js and TailwindCSS**

  **Technology Chosen:**

  * **React.js**
  * **TailwindCSS**

  **Why these technologies?**

  * **React.js** enables component-based architecture, making the UI reusable and maintainable.
  * **TailwindCSS** allows rapid UI development with utility-first styling, reducing the need for custom CSS files.

  **End Goal:**
  To build a **fully responsive veterinary service website** with clean UI components such as:

  * Hero section
  * Services section
  * Contact forms
  * Emergency care section
2. Summary of the Technology
  ### React.js

  React is a **JavaScript library for building user interfaces**, especially single-page applications (SPAs).

  * **What is it?**
    A component-based UI library maintained by Meta.

  * **Where is it used?**
    Web apps, dashboards, SaaS platforms, mobile apps (via React Native).

  * **Real-world example:**
    Platforms like Facebook and Instagram use React.

  ### TailwindCSS

  TailwindCSS is a **utility-first CSS framework** for rapidly building custom designs.

  * **What is it?**
    A framework that provides low-level utility classes (e.g., `flex`, `mt-4`, `text-center`).

  * **Where is it used?**
    Modern frontend apps, landing pages, dashboards.

  * **Real-world example:**
    Used in platforms like Vercel and many startup dashboards.
3. System Requirements
* **Operating System:** Windows / macOS / Linux
* **Editor:** VS Code (recommended)
* **Node.js:** v16+
* **Package Manager:** npm or yarn

**Required Tools:**

* Node.js
* npm
* Browser (Chrome recommended)
4. Installation & Setup Instructions
:
  1. Open a terminal in the project root.
    ```bash
     cd to the project directory
    ```
  2. Install dependencies:
    ```bash
     npm install
    ```
  3. Confirm Tailwind directives exist in `src/index.css`:
    ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
    ```
  4. Confirm `tailwind.config.js` scans your React source:
    - `content` includes `./src/**/*.{js,jsx,ts,tsx}`
  5. Start the app:
    ```bash
     npm start
    ```
  6. Open:
    - [http://localhost:3000](http://localhost:3000)
5. Minimal Working Example
  - What the example does:
    - Renders a styled “service card” using Tailwind utilities (spacing, typography, borders, hover transition).
  - Paste code (with inline comments):
    ```jsx
    import React from "react";

    export default function ServiceCard() {
      return (
        <div
          // Tailwind utilities: theme background + spacing + hover transition
          className="p-6 rounded-2xl bg-bg-main text-text-color-black shadow-sm hover:shadow-lg transition"
        >
          <h2 className="text-xl font-bold">Preventive & Wellness</h2>
          <p className="mt-2 text-gray-600">
            Routine health checks, vaccinations, and de-worming.
          </p>
          <button
            // Primary CTA styling
            className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gold-main font-semibold"
            type="button"
          >
            Book Now
          </button>
        </div>
      );
    }
    ```
  - Expected output:
    - A card with a light theme background, bold title, description text, and a gold “Book Now” button. Hovering should smoothly increase shadow.
6. AI Prompt Journal
  
  - Prompts used:
    - “I am a junior developer looking to remind myself about Tailwind library for stying in a react app.Give me a step-by-step guide on how to initialize TailwindCSS in a React app”
    - “How do I set up routing with react-router-dom in Create React App?I would like to have the routing to be as fast as possible and seemless”
    - “How do I set up routing with react-router-dom in Create React App?I would like to have the routing to be as fast as possible and seemless”
    -"@workspace what please debug and suggest fixes for the contact us file"
    -"@workspace, 
Please create a comprehensive README.md file for my project based on the following information:

Project name: Vertinary Clinic
Description: It is a webste for a vet clinic. Basically highlighting their services, animals they deal with, their area and time of operation and how to contat them.
Key features:
-Home page
-Services page
-Contact Us Page

Technologies used: React js, tailwind
Installation requirements:please check, pakage.json file

The README should include:
1. Clear project title and description
2. Installation instructions
3. Basic usage examples
4. Features overview
5. Configuration options
6. Troubleshooting section
7. Contributing guidelines
8. License information

Code structure overview:
We have the app.js that renders the app, components, here I have the src which has the components used and folders containing assets used for each page."
    - “@workspace, I am not sure what I am supposed to test in my website. Kiny suggest some of the things I should test for”
    - “@workspace write some detailed tests for me”
    - “@workspace Please create comprehensive documentation for my code 

The documentation should include:
1. A clear description of what the code does
2. All parameters with types and descriptions
3. Return value with type and description
4. Any important notes or edge cases developers should be aware of
5. Add  inline comments for complex parts”
  
7. Common Issues & Fixes
  - Tailwind classes not applying
    - What didn’t work initially:
      - Tailwind didn’t apply when `tailwind.config.js` `content` paths didn’t include your React files.
    - Errors and how you resolved them:
      - Verified `content` includes `./src/**/*.{js,jsx,ts,tsx}` and reloaded the dev server.
    - Links:
      - Tailwind `content` docs: [https://tailwindcss.com/docs/content-configuration](https://tailwindcss.com/docs/content-configuration)
      - StackOverflow search: [https://stackoverflow.com/search?q=tailwind+content+configuration+not+working+react](https://stackoverflow.com/search?q=tailwind+content+configuration+not+working+react)
  - React JSX warnings when using `class`
    - What didn’t work initially:
      - React expects `className` in JSX.
    - Errors and how you resolved them:
      - Replaced `class="..."` with `className="..."`.
    - Links:
      - React JSX docs: [https://react.dev/learn/writing-markup-with-jsx](https://react.dev/learn/writing-markup-with-jsx)
  - Routing works locally but breaks on refresh after deployment
    - What didn’t work initially:
      - Deep links like `/services` return 404 on refresh without SPA rewrite rules.
    - Errors and how you resolved them:
      - Configured host/provider to serve `index.html` for unknown routes.
    
8. References
  - Official docs
    - Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
    - React: [https://react.dev/](https://react.dev/)
    - React Router: [https://reactrouter.com/](https://reactrouter.com/)
    - Create React App: [https://create-react-app.dev/docs/getting-started/](https://create-react-app.dev/docs/getting-started/)

## License

MIT License. See `[LICENSE](./LICENSE)` for details.