# knee1123.github.io

iOS Developer portfolio for [@knee1123](https://github.com/knee1123). Built with Vite + React + Tailwind, deployed to GitHub Pages via GitHub Actions.

## Development

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

First-time setup: in the repo settings, set **Pages → Source → "GitHub Actions"**.
