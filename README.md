# noahdelv.github.io

Personal portfolio — React + Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  data/         all site content — edit here, not in components
    profile.js    name, tagline, spec table, about copy, links
    projects.js   the 7 projects + skills; feeds the index, the pages and the filters
    resume.js     education, experience, resume project entries
  components/   presentational pieces (Nav, ProjectEntry, ProjectFilters, …)
  pages/        Home, Projects, Resume, NotFound
  styles/
    tokens.css    the design system — colors, type, rules, gutters
    global.css    everything else, organised by component
  assets/       optimised images (originals live in source-images/)
```

**Adding a project:** append an entry to `projects` in `src/data/projects.js`.
The home index, the projects page, and both filter rails derive from that array,
so the STACK and FOCUS chips pick up any new tags automatically.

`stack` is what a project was built with; `focus` is the technique or the
problem it solves. Keep them distinct — the filters treat them as separate rails.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes
`dist/` to GitHub Pages.

This requires **Settings → Pages → Build and deployment → Source: GitHub Actions**
(rather than "Deploy from a branch"). That is a one-time change.

Routing is client-side, so the build writes `dist/404.html` as a copy of
`index.html` — GitHub Pages serves it for `/projects` and `/resume`, and the
router takes over with the URL intact.

## Design

The visual system came from a Claude Design canvas; the artboard sources are in
`design/*.dc.html` with the layout in `design/canvas.json`.
