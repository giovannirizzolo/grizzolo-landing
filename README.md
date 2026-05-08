# grizzolo.it

Personal portfolio of **Giovanni Rizzolo** (aka grizzolo) software engineer from Palermo, Sicily.

→ [grizzolo.it](https://www.grizzolo.it)

---

## Stack

| Layer | Tech |
|---|---|
| Framework | [Nuxt 3](https://nuxt.com) + Vue 3 |
| Styling | Tailwind CSS + SCSS |
| Animations | GSAP (TextPlugin, EasePack, CSSPlugin) |
| Images | @nuxt/image (WebP, lazy loading, skeletons) |
| Fonts | Jost via @nuxtjs/google-fonts (self-hosted) |
| Deploy | Vercel (edge runtime) |

---

## Features

- **Dark mode** — midnight indie palette with a turquoise accent, View Transitions API ripple effect expanding from the click origin, theme-aware ambient bubbles
- **Responsive** — mobile-first, tablet breakpoints at `lg:` (1024px), desktop at `xl:` (1280px)
- **Animations** — floating GSAP bubbles, typing animation, hover skew on experience rows, project card reveals
- **Skeleton loaders** — shimmer placeholders for portrait, Palermo photos, and Spotify embed
- **Phone number protection** — served via a server-side API route, never exposed in the client bundle
- **SEO** — Open Graph + Twitter Card meta, canonical URL, self-hosted fonts

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run lint      # type check (vue-tsc)
```

**Environment variables** — copy `.env.example` and fill in:

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `PHONE_NUMBER` | Phone number served by `/api/phone` |

---

## Project structure

```
pages/          # index (home)
components/     # About, Projects, Social, Header, Footer, ProjectCard,
                # DecorativeElement, SkeletonBlock, ThemeToggle, Loader
layouts/        # default (bubbles, theme init)
composables/    # useTheme (dark mode + View Transitions)
server/api/     # phone.ts (protected phone number endpoint)
utils/          # bubbles.ts, debounce.ts
assets/css/     # global.css (CSS tokens, View Transitions), tailwind.custom.css
public/         # static assets (photos, SVGs, fonts)
```

---

<p align="center">
  Designed and coded with passion by <strong>grizzolo</strong> 🌊
</p>
