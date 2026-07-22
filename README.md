# Greek Street Waltham Cross

Client marketing website for **Greek Street Waltham Cross**, 260 High Street, Waltham Cross, EN8 7EA.

Built with Next.js 16, React 19 and strict TypeScript. The site is a static, multi-page experience with no CMS, database, analytics or native checkout.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

The repository is ready for a standard Vercel deployment. Set `NEXT_PUBLIC_SITE_URL` to the final public origin so canonical URLs, the sitemap and structured data use the production domain.

## Client content updates

| Content | Location |
|---|---|
| Phone, address, hours, links, reviews | `content/site.ts` |
| Menu groups, items and displayed prices | `content/menu.ts` |
| Business and menu TypeScript interfaces | `content/types.ts` |
| Gallery images | `public/images/` and `content/site.ts` |
| Brand colours and layout styling | `app/globals.css` |

The direct Practi menu is the primary ordering destination. Just Eat is retained as a secondary option. Items marked “See live price” intentionally defer to the ordering provider because the public menu can change.

## Routes

- `/` — Home
- `/menu` — Searchable and filterable menu
- `/about` — Food and brand approach
- `/gallery` — Curated food photography
- `/visit` — Hours, address, access and ordering

## Important handoff notes

- Confirm the phone number and opening hours with the client before production launch; public listings conflict.
- Confirm all menu prices and dietary labels against the restaurant’s live ordering system.
- Tell customers to contact the restaurant directly about allergies. Dietary tags are not allergen guarantees.
- Image provenance is recorded in `ASSET_SOURCES.md`.
