# HTML & CSS Workshop 

A small site for a student workshop on basic HTML and CSS. The homepage starts the step-by-step guide and links to a finished example page as a reference. Each guide step is its own page, with a progress bar, previous and next links, and an optional advanced approach.

The lesson text is placeholder copy. Replace it in [`content/steps.ts`](content/steps.ts). The example page lives in [`public/example/`](public/example/) as plain HTML and CSS so students can view the source.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit later

- Guide steps: [`content/steps.ts`](content/steps.ts). Slugs become the page URLs (`/guide/page-structure`).
- Guide look: the `--workshop-*` tokens in [`app/globals.css`](app/globals.css).
- Example page: [`public/example/index.html`](public/example/index.html) and [`public/example/styles.css`](public/example/styles.css). It uses its own look, separate from the guide theme in `app/globals.css`.

## Deploy on Vercel

Connect this Git repository in Vercel and leave the framework preset as Next.js. No `vercel.json` is required.

The guide pages are statically generated and the example is a file in `public/`, so the site fits the free Hobby plan for a personal, non-commercial project. Hobby includes 100 GB of data transfer and 1,000,000 CDN requests per 30 days. If someone is paid to build or host the workshop, use a Pro plan instead.
