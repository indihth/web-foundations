# IADT Computing: Taster Session

A workshop site for building a meme creation app in the p5.js editor with HTML and a little JavaScript. The home page introduces the session; the guide walks through guided steps with optional under-the-hood sections, a step sidebar, and links to the finished example.

The finished Memeo example lives in [`public/example/`](public/example/) as plain HTML, CSS, and JavaScript so students can view the source.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit later

- **Helpers** guide steps: [`content/steps.ts`](content/steps.ts) at `/guide/helpers` and `/guide/helpers/[slug]`.
- **The DOM** guide steps: [`content/dom-steps.ts`](content/dom-steps.ts) at `/guide/dom`. Starter files: [`public/example/dom-p5-files/`](public/example/dom-p5-files/).
- Students choose a version at `/guide`. Old `/guide/[slug]` links redirect to `/guide/helpers/[slug]`.
- Site look: [`app/globals.css`](app/globals.css) and fonts in [`app/layout.tsx`](app/layout.tsx).
- Example app: [`public/example/index.html`](public/example/index.html) and related files in that folder.

## Deploy on Vercel

Connect this Git repository in Vercel and leave the framework preset as Next.js. No `vercel.json` is required.

Guide pages are statically generated and the example is served from `public/`, which fits the free Hobby plan for a personal, non-commercial project.
