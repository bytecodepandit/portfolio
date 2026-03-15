# Prakash Kumar — Portfolio


A personal portfolio website built with React and Vite, featuring smooth scroll animations, an interactive 3D hero scene, and a responsive layout.


## Live Sections


- **Hero** — Interactive 3D background (Spline) with rotating greeting and role text
- **About** — Brief intro and background
- **Skills** — Scrolling marquee of tech stack logos
- **Education** — Academic background
- **Projects** — Showcase of 6 featured projects with video previews and live links
- **Contact** — Contact form
- **Social** — Magnetic social links


## Tech Stack


**Frontend**
- React 19, Vite 7
- Tailwind CSS v4, Radix UI, shadcn/ui


**Animations**
- GSAP + ScrollTrigger
- Framer Motion
- Lenis (smooth scroll)
- Spline (3D hero scene)


**Tooling**
- ESLint, Docker


## Projects Featured


| Project | Tags |
|---|---|
| Optum | React, Node.js, MySQL, Docker, Kubernetes |
| Marriott Resort & Spa | React, Node.js, PostgreSQL |
| The Children's Place | React Native, Node.js, GraphQL |
| Langtons | JavaScript, AEM |
| OurCo | React Native, GraphQL |
| Apparrant | React, Vue, Tailwind CSS |


## Getting Started


```bash
# Install dependencies
npm install


# Start dev server
npm run dev


# Build for production
npm run build


# Preview production build
npm run preview
```


## Docker


```bash
# Build image
docker build -t portfolio .


# Run locally
docker run -p 3000:80 portfolio
```


Open [https://prakash.up.railway.app/](https://prakash.up.railway.app/)


## Deploy on Railway


1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub repo
3. Select the repo — Railway auto-detects the Dockerfile and deploys


No extra configuration needed. Railway injects the `PORT` environment variable automatically.



