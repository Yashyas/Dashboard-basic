# CNAPP Dashboard — Quick Install & Run

## What this is

React dashboard using Tailwind + DaisyUI, Zustand store, and ApexCharts.
Categories and widgets are stored in `src/data/categories.json` and managed at runtime by the Zustand store.

## Prerequisites

* Node.js v18+ (or v16 LTS minimum)
* npm (or yarn / pnpm)
* Git

## Quick start (development)

```bash
# clone 
git clone https://github.com/Yashyas/Dashboard-basic.git
cd Dashboard-basic/frontend

# install deps
npm install

# dev server (Vite)
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port Vite prints).

## Build & preview (production)

```bash
# build
npm run build

# preview the production build (Vite)
npm run preview
```

## Scripts (typical)

Add or confirm these in `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx"
}
```

## Project structure (important files)

```
src/
  components/
    AddWidget.jsx      # drawer + category tabs + widget toggles
    Widget.jsx         # card wrapper for widgets
    Chart.jsx          # ApexCharts donut
    RiskGraph.jsx      # horizontal stacked bar
    DashboardNav.jsx
    HistoryButton.jsx
    Navbar.jsx
  pages/
    Categories.jsx     # renders active widgets
  store/
    store.js           # zustand store (categories + activeWidgets)
  data/
    categories.json    # initial library of categories & widgets
```

## How to edit initial data

Edit `src/data/categories.json`. The store loads this at startup.
To change library items at runtime use the Add Widget drawer UI.

## Zustand store notes

* `categories` holds the full library (all widgets always visible in the drawer).
* `activeWidgets` holds currently rendered widgets.
* Use `activateWidget` / `deactivateWidget` to toggle display without deleting library entries.

## Tailwind / DaisyUI

This repo expects Tailwind + DaisyUI configured. If missing, install and configure:

```bash
npm install tailwindcss @tailwindcss/vite
# add tailwind directives to src/index.css and configure tailwind.config.js
npm install daisyui
# add 'daisyui' to tailwind.config.js plugins
```

## ApexCharts

If not installed:

```bash
npm install apexcharts react-apexcharts
```

## Common troubleshooting

* Port taken: set `PORT` env or use Vite CLI option.
* Charts overflow: ensure widget card has `h-[50vh]` or `h-[33vh]` and Chart component uses `height="100%"`.
* Tailwind styles not applied: ensure Tailwind directives are included and `index.css` is imported in `main.jsx`.

## Persistence (optional)

To persist `activeWidgets` across reloads add Zustand `persist` middleware:

```js
import { persist } from "zustand/middleware";
// wrap create with persist options to store in localStorage
```

## Deployment

Build then deploy the `dist/` folder to Netlify, Vercel, or any static host. Vercel and Netlify detect Vite automatically.

## Contributing

1. Fork repo
2. Create branch `feat/xxx`
3. Commit and push
4. Open pull request


---

Need a version of this README tailored to GitHub Pages, Netlify or a CI pipeline?
# Dashboard-basic
Basic dashboard
