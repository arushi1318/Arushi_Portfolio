# Arushi Gupta – Portfolio

_A cinematic fusion of RLHF experimentation, AI/ML storytelling, and interactive 3D canvases—built to feel like a conversation with the engineer behind the work._



---

## Table of Contents
1. [Experience Highlights](#experience-highlights)
2. [Tech Stack](#tech-stack)
3. [Quick Start](#quick-start)
4. [Environment Variables](#environment-variables)
5. [Available Scripts](#available-scripts)
6. [Project Structure](#project-structure)
7. [Customize the Narrative](#customize-the-narrative)
8. [Deployment Checklist](#deployment-checklist)
9. [Credits & Resources](#credits--resources)

---

## Experience Highlights

- **Immersive hero moment** – Layered typography, particle gradients, and scroll-triggered motion introduce Arushi’s RLHF + AI/ML focus in seconds.
- **3D storytelling** – Three.js scenes (`ComputersCanvas`, `EarthCanvas`, `StarsCanvas`) render responsive WebGL experiences without tanking FPS.
- **Living timeline** – `Experience.jsx` combines React Vertical Timeline with context-heavy copy to showcase leadership and research work.
- **Project galaxy** – `Works.jsx` highlights five flagship builds with gradient tag chips, GitHub shortcuts, and hover kinetics.
- **Conversation-ready contact** – EmailJS-powered form with optimistic UI, validation, and customizable owner metadata.
- **Built for iteration** – All narrative content centralized inside `src/constants/index.js`, making updates less than a minute job.

---

## Tech Stack

- Frontend foundation: `React 18`, `Vite`, `Tailwind CSS`, `Framer Motion`
- 3D / Motion layer: `three`, `@react-three/fiber`, `@react-three/drei`, `GSAP`
- Productivity boosts: `React Icons`, `React Tilt`, `maath`
- Messaging: `@emailjs/browser`
- Tooling: `ESNext`, `module` type, `postcss`, `autoprefixer`

---

## Quick Start

> Requires **Node.js ≥ 18** and **npm ≥ 9**

```bash
git clone https://github.com/<your-handle>/ai-avatar-portfolio.git
cd ai-avatar-portfolio/Portfolio/Arushi_Portfolio
npm install
npm run dev
```

Vite will print a local preview URL (default `http://localhost:5173`). Open it in a Chromium-based browser for best WebGL performance.

---

## Environment Variables

Create a `.env` file in the project root before building for production. Default values exist, but you’ll want real metadata + EmailJS credentials:

```
VITE_APP_OWNER_NAME="Arushi Gupta"
VITE_APP_OWNER_EMAIL="arushi@example.com"
VITE_APP_EMAILJS_SERVICE_ID="service_xxxxxx"
VITE_APP_EMAILJS_TEMPLATE_ID="template_xxxxxx"
VITE_APP_EMAILJS_PUBLIC_KEY="xxxxxxxxxxxxxxxxxxxx"
```

> Tip: keep a `.env.example` (not committed) for teammates, and store production keys in your hosting provider’s secrets dashboard.

---

## Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot module reload |
| `npm run build` | Produce an optimized, hashed bundle in `dist/` |
| `npm run preview` | Serve the production build locally for smoke tests |

---

## Project Structure

```
Arushi_Portfolio/
├── public/                  # glTF scenes, textures, hero imagery, audio
├── src/
│   ├── assets/              # Icons, logos, hero backgrounds
│   ├── components/          # UI sections (Hero, About, Works, Contact, etc.)
│   │   ├── canvas/          # Three.js canvases (Earth, Computers, Stars)
│   ├── constants/           # Portfolio data models & nav links
│   ├── hoc/                 # Section wrappers & layout helpers
│   ├── utils/               # Motion variants and animation utilities
│   ├── App.jsx              # Section assembly + routing
│   └── main.jsx             # React root + providers
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── package.json
```

---

## Customize the Narrative

- **Content refresh** – Update spotlight services, tech stack, experiences, testimonials, and projects in `src/constants/index.js`. The UI reacts instantly without structural edits.
- **Brand visuals** – Swap hero backgrounds and avatars inside `src/assets`. Use matching resolutions; transparent PNG/WebP keep performance high.
- **3D canvases** – Replace `public/desktop_pc` or `public/planet` glTF models with your own. Keep consistent file names (or adjust imports in `src/components/canvas/*.jsx`).
- **Color language** – Tailwind tokens live in `src/index.css` and `src/styles.js`. A single gradient change cascades across hero dividers, buttons, and cards.
- **New sections** – Each major block uses the `SectionWrapper` HOC for padding + anchor IDs. Drop in new components and wrap them with `SectionWrapper(Component, "id")` to auto-wire nav links.

---

## Deployment Checklist

- ✅ Run `npm run build` locally and open `npm run preview` to validate shader + EmailJS loading.
- ✅ Configure environment variables on your host (Vercel, Netlify, Render, GitHub Pages via Actions, etc.).
- ✅ Enable gzip/Brotli on the CDN to keep the 3D assets snappy.
- ✅ For GitHub Pages, point `vite.config.js` `base` to the repository name (if not hosting at root).
- ✅ Monitor WebGL bundle size; lazy-import heavy scenes if Core Web Vitals dip.

---

## Credits & Resources

- 3D desktop + planet scenes from `public/desktop_pc` and `public/planet` bundles (glTF + textures) – optimized with Blender + Draco.
- Music sample `Tuyo_Narcos_Theme_Song-648780-mobiles24.mp3` ships in `public/`.
- Icons from custom `src/assets` and auto-generated set in `src/constants/autoIcons.js`.
- Built with inspiration from the Three.js Journey community and modern RLHF research decks.

> Have an idea or found a bug? Open an issue or ping me via the contact form—let’s build something ambitious together.


