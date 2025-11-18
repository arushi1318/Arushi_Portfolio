# Arushi Gupta – Portfolio

_Experience the next generation of portfolio presentation with our AI-powered 3D avatar system. This project combines cutting-edge technologies to create an immersive, interactive experience that brings your professional profile to life._



---

## 📌 Quick Glance
- 🚀 Immersive hero moment with layered typography and motion.
- 🖥️ 3D storytelling powered by Three.js canvases (Earth, Computers, Stars).
- 🧭 Living timeline showcasing leadership, research, and projects.
- 🧰 Built for iteration: content centralized in `src/constants/index.js`.
- 📬 Conversation-ready contact form with validation and optimistic UI.
- ⚡ Fast dev loop with Vite + Tailwind + Framer Motion.

> Requirements: `Node.js ≥ 18` and `npm ≥ 9`

---

## 🛠️ Tech Stack
- Frontend: `React 18`, `Vite`, `Tailwind CSS`, `Framer Motion`
- 3D/Motion: `three`, `@react-three/fiber`, `@react-three/drei`, `GSAP`
- Utilities: `React Icons`, `maath`, `@emailjs/browser`

---

## ▶️ Install & Run
```bash
git clone https://github.com/arushi1318/Arushi_Portfolio.git
cd Arushi_Portfolio/Portfolio/Arushi_Portfolio
npm install
npm run dev
```
Open the local preview URL from Vite (default `http://localhost:5173`).

---

## 🔐 Environment Variables
Create a `.env` at project root for production and email features:
```
VITE_APP_OWNER_NAME="Arushi Gupta"
VITE_APP_OWNER_EMAIL="arushi@example.com"
VITE_APP_EMAILJS_SERVICE_ID="service_xxxxxx"
VITE_APP_EMAILJS_TEMPLATE_ID="template_xxxxxx"
VITE_APP_EMAILJS_PUBLIC_KEY="xxxxxxxxxxxxxxxxxxxx"
```

---

## 📜 Scripts
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — optimize and bundle to `dist/`
- `npm run preview` — serve production build locally

---

## 🗂️ Project Structure
```
Arushi_Portfolio/
├── public/                  # glTF scenes, textures, audio
├── src/
│   ├── assets/              # Icons, logos, hero backgrounds
│   ├── components/          # Hero, About, Works, Contact, etc.
│   │   └── canvas/          # Earth, Computers, Stars
│   ├── constants/           # Portfolio data models & nav links
│   ├── hoc/                 # Section wrappers & layout helpers
│   ├── utils/               # Motion variants & animation utilities
│   ├── App.jsx              # Section assembly + routing
│   └── main.jsx             # React root + providers
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── package.json
```

---

## 🎨 Customize the Narrative
- ✍️ Content refresh: edit `src/constants/index.js` (services, techs, projects, experiences, testimonials).
- 🖼️ Brand visuals: swap hero backgrounds/avatars under `src/assets` (PNG/WebP recommended).
- 🌍 3D canvases: replace glTF models under `public/desktop_pc` or `public/planet` and adjust imports in `src/components/canvas/*.jsx` if filenames change.
- 🎛️ Color language: tweak tokens in `src/index.css` and `src/styles.js` to cascade gradients and accents.
- 🧩 New sections: use `SectionWrapper(Component, "id")` to auto-wire spacing and anchors.

---

## 🚀 Deployment Checklist
- ✅ `npm run build` and smoke-test via `npm run preview`.
- ✅ Configure environment variables on your host (Vercel/Netlify/Render/GitHub Pages).
- ✅ Enable gzip/Brotli on the CDN for snappy 3D assets.
- ✅ If using GitHub Pages, set `vite.config.js` `base` to the repository name.
- ✅ Monitor bundle size and lazy-import heavy scenes if Core Web Vitals dip.

---

## 📚 Credits & Resources
- 3D desktop + planet scenes (glTF + textures) under `public/desktop_pc` and `public/planet`.
- Music sample `Tuyo_Narcos_Theme_Song-648780-mobiles24.mp3` ships in `public/`.
- Icons from custom `src/assets` and auto-generated set in `src/constants/autoIcons.js`.
- Inspired by Three.js Journey community and modern RLHF research decks.

> 💡 Have an idea or found a bug? Open an issue or ping me via the contact form — let’s build something ambitious together.


