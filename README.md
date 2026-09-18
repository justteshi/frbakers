# FrBakers

A complete multi-page bakery website with responsive layouts, accessible navigation, menu filtering, an image lightbox, newsletter confirmations, and a validated custom-order demo form.

## Preview locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal. Run `npm run build` for a production build.

## Project structure

- `app/page.tsx` — home page
- `app/menu.html/` — menu page and filtering
- `app/about.html/` — story page
- `app/gallery.html/` — gallery and accessible lightbox
- `app/contact.html/` — contact page and custom-order form
- `app/SiteShell.tsx` — shared header, footer and newsletter behavior
- `app/data.ts` — product and gallery content
- `app/globals.css` — design tokens, shared components and responsive styles
- `public/assets/images/` — locally stored photography
- `IMAGE_CREDITS.md` — image source references

## Customize the site

- Colors and typography: edit the custom properties at the top of `app/globals.css`. Fonts are configured in `app/layout.tsx`.
- Contact details and hours: update `app/SiteShell.tsx`, `app/contact.html/page.tsx`, and the JSON-LD data in `app/page.tsx`.
- Menu products: edit the `products` array in `app/data.ts`.
- Images: replace files in `public/assets/images/`, keep the filenames, or update image references in `app/data.ts` and the page components. Preserve useful alt text and update `IMAGE_CREDITS.md`.
- Canonical URL: replace `https://frbakers.example.com` in `app/layout.tsx` and `app/page.tsx`.

## Demo and fictional content

FrBakers, its story, testimonials, prices, team member, address, phone number and email address are fictional. The contact information is deliberately reserved-style sample information and must be replaced before real use. Forms do not send or store data; they demonstrate client-side validation and confirmation states only. Social links lead to each network’s public homepage.

The visual map is an illustrative, non-geographic placeholder and does not use an API key.
