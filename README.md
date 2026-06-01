# Golden Goose

Static artist website built with [Astro](https://astro.build) and Bootstrap 5.

## Project structure

```
src/
  layouts/Base.astro   # Shared nav, theme toggle, page shell
  pages/               # One file per route (index.astro → /)
  styles/              # Bootstrap SCSS + custom styles
public/
  images/              # Logos (lightmode.svg + darkmode.svg) and static assets
  js/                  # Client scripts
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). The dev server reloads when you edit files.

## Production build

```bash
npm run build
npm run preview   # optional — preview the built site locally
```

Output goes to `dist/` — upload that folder to any static host (Cloudflare Pages, Netlify, Vercel, GitHub Pages).

## Deploying to Cloudflare Pages (example)

1. Push this repo to GitHub
2. In Cloudflare Pages → Create project → Connect to Git
3. Build command: `npm run build`
4. Output directory: `dist`

## Customizing Bootstrap

Edit `src/styles/_variables.scss` for theme tokens (colors, fonts, etc.), then add your own rules in `src/styles/custom.scss`.

## Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/countdown` | `src/pages/countdown.astro` |
| `/mischief` | `src/pages/mischief.astro` |
| `/captivated` | `src/pages/captivated.astro` |
| `/singles` | `src/pages/singles.astro` |
