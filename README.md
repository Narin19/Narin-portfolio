# Narin Mandrawlia — Portfolio

A responsive personal portfolio built with **React + Vite + MUI (Material UI)**.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
# from inside C:\profolio
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Where to edit things

| What you want to change | File |
| --- | --- |
| Name, role, summary, email, phone, links | `src/data/profile.js` |
| Skills (chips) | `src/data/profile.js` |
| Projects (all 10) | `src/data/projects.js` |
| Colors & fonts | `src/theme.js` |
| Section layout | `src/components/*` |

### Add your resume PDF
1. Drop the PDF into the `public/` folder (e.g. `public/Narin_Resume.pdf`).
2. In `src/data/profile.js`, set `resumeUrl: '/Narin_Resume.pdf'`.
   A "Resume" button will appear in the hero.

## Project order
Projects render in the order defined in `src/data/projects.js`:
1–4 are from the TechStalwarts resume (EVJoints, Inxits, The Radius App, Radius Admin Portal),
5–10 are from the earlier portfolio (Javis, Norminc, Portfolio Health Check, Magic Bus, Fundsup, V5 Global).

## Deploy
The `dist/` folder is static — deploy it free on **Vercel**, **Netlify**, or **GitHub Pages**.
For Vercel/Netlify, just connect the repo; build command `npm run build`, output dir `dist`.
