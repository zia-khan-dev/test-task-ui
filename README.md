# Auditing System Dashboard

Dashboard UI for an auditing system: progress status, compliance score, KPIs, timeline, and charts. Built with React, Vite, and Tailwind CSS.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS** (custom theme: primary, status colors, Cairo/Inter fonts)
- **React Router** v7
- **Recharts** (Gauge, BarChart)
- **Lucide React** / **React Icons** (optional icons)

## Project structure

```
src/
├── App.jsx              # Routes + lazy-loaded pages, Suspense
├── main.jsx
├── index.css            # Tailwind + base styles
├── components/
│   ├── layout/          # Layout, Sidebar, Topbar
│   ├── dashboard/       # Dashboard sections (Timeline, Progress, Compliance, etc.)
│   ├── ui/              # Reusable UI (Card, Gauge, BarChart, KPICard, etc.)
│   └── PageLoader.jsx   # Suspense fallback
├── pages/               # Lazy-loaded route pages (Dashboard, Perspectives, Tasks, …)
├── hooks/               # useDashboardData
├── data/                # dashboardData.js
└── utils/               # colors.js, icons.jsx
```

## Scripts

| Command   | Description        |
|----------|--------------------|
| `yarn dev` / `npm run dev`     | Start dev server (Vite HMR) |
| `yarn build` / `npm run build` | Production build            |
| `yarn preview` / `npm run preview` | Preview production build |
| `yarn lint` / `npm run lint`  | Run ESLint                  |

## Development

1. Install dependencies: `yarn` or `npm install`
2. Run dev server: `yarn dev` or `npm run dev`
3. Open the URL shown in the terminal (e.g. `http://localhost:5173`)

## Theming

Colors and fonts are defined in `tailwind.config.js`. Use Tailwind color names (e.g. `primary`, `success`, `status-completed`) instead of raw hex in components.