# Diego Silverio — Portfolio

A Next.js 14 (App Router) portfolio built to mirror the Figma design
[`Diego Silverio Portfolio`](https://www.figma.com/design/m2fNQshLubLXLAbVvShmca/Untitled).

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with design tokens extracted from the Figma file
- **Framer Motion** for scroll + hover animations
- **next/font** for `DM Serif Display`, `DM Sans`, and `Geist Mono`
- **next/image** for optimized assets

## Design tokens

| Token | Value |
|---|---|
| Background | `#f8f7f4` |
| Ink (primary) | `#111111` |
| Muted | `#6b6b66` |
| Accent | `#e8547a` |
| Border / Soft | `#e5e5e1` / `#dcdcdc` |
| Card | `#ffffff` |

Typography is wired in `app/layout.tsx` and surfaced in Tailwind via `font-serif`,
`font-sans`, and `font-display` utility classes (see `tailwind.config.ts`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx        # fonts + metadata
  page.tsx          # composes the sections
  globals.css       # base styles + utilities (label-eyebrow, container-x)
components/
  Header.tsx
  Hero.tsx
  SectionHeader.tsx
  Works.tsx
  ProjectCard.tsx
  ProjectLightbox.tsx
  About.tsx
  Footer.tsx
lib/
  projects.ts       # case-study content
public/
  projects/*.svg    # placeholder hero artwork per case study
  about/diego.svg   # placeholder portrait
```

## Replacing the placeholders

The `/public/projects/*.svg` and `/public/about/diego.svg` files are
hand-crafted placeholders shaped to match the Figma layout. Swap them for
final JPG/PNG assets and update the `image` paths in `lib/projects.ts`
(no other code changes needed — `next/image` handles the rest).

## Deploy

Zero-config on Vercel:

```bash
npx vercel
```
