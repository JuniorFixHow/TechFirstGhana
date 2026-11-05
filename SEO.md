# SEO setup

| What | Where |
| --- | --- |
| Site URL used everywhere | `NEXT_PUBLIC_SITE_URL` env var (fallback `https://teqxa.com`), read in `lib/seo.ts` |
| Global metadata, title template, robots, verification | `app/layout.tsx` |
| Per page title, description, keywords, canonical, Open Graph | `export const metadata` in each `app/**/page.tsx` |
| Structured data (JSON-LD): Organization, WebSite, WebPage, Breadcrumbs, Services | `lib/seo.ts`, rendered with `app/_components/misc/JsonLd.tsx` |
| `/sitemap.xml` (with image entries) | `app/sitemap.ts` (add new pages to `routes`) |
| `/robots.txt` | `app/robots.ts` |
| `/manifest.webmanifest` | `app/manifest.ts` |
| Social share image (1200x630) | `app/opengraph-image.tsx`, `app/twitter-image.tsx` |
| Favicon / app icons | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `public/icons/` |
| 404 page (noindex) | `app/not-found.tsx` |
| Headings: `<Text as="h1" />`, `as="h2"` etc. One h1 per page. | `app/_components/ui/Text.tsx` |

## After deploying
1. Set `NEXT_PUBLIC_SITE_URL` to the exact live domain (with or without `www`, matching what you redirect to).
2. Add the domain in Google Search Console, put the code in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, then submit `https://<domain>/sitemap.xml`.
3. Do the same in Bing Webmaster Tools (`NEXT_PUBLIC_BING_SITE_VERIFICATION`).
4. Create or claim a Google Business Profile for the Accra office.
5. Test with https://search.google.com/test/rich-results and https://www.opengraph.xyz.
