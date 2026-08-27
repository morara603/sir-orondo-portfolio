# Abednego Portfolio

A responsive React portfolio for mechanical engineering, fabrication, CNC, production systems and web design.

## What was refreshed

- Removed the old numbered cards and decorative orange photo frames.
- Rebuilt the CSS into one clean stylesheet instead of stacked/overwritten rules.
- Reduced image heights and added restrained image treatment so photos feel lighter and more professional.
- Added Web Design & Development near the top of the skills section.
- Added a production-flow tracker case study showing the logic from job creation through release.
- Added smoother rounded cards, consistent spacing, hover states and responsive layouts.
- Improved navigation with active-page states and a mobile menu.
- Connected calls-to-action and service cards to the booking page.
- Added a simple global footer.
- Kept the existing booking form and FormSubmit integration.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Render routing

This project uses React Router. Render must rewrite all client-side routes to `index.html` so direct desktop visits to `/about`, `/projects`, `/services`, `/contact`, and `/booking` are handled by React Router. The repository includes `render.yaml` with this rewrite rule. If the Render service was created manually, add the same rule in **Redirects/Rewrites**:

- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`

## Payments

The booking page includes integration-ready UI for PayPal, credit/debit card, Binance Pay, and PesaPal. Connect the provider SDKs and merchant credentials later. Do not place secret API credentials in the Vite frontend.

## Render routing

This project uses React Router. Render must rewrite all client-side routes to `index.html` so direct desktop visits to `/about`, `/projects`, `/services`, `/contact`, and `/booking` are handled by React Router. The repository includes `render.yaml` with this rewrite rule. If the Render service was created manually, add the same rule in **Redirects/Rewrites**:

- Source: `/*`
- Destination: `/index.html`
- Action: `Rewrite`

## Payments

The booking page includes integration-ready UI for PayPal, credit/debit card, Binance Pay, and PesaPal. Connect the provider SDKs and merchant credentials later. Do not place secret API credentials in the Vite frontend.
## SEO

The portfolio includes a route-aware SEO layer for the main pages. It sets page-specific titles, meta descriptions, canonical URLs, Open Graph metadata, X/Twitter cards and Schema.org structured data.

The public folder also contains `robots.txt` and `sitemap.xml` for search-engine discovery. The sitemap uses the production domain `https://abednegomorara.co.ke`.

For best indexing results, add the production site to Google Search Console and submit `/sitemap.xml` after deployment. Keep the Render SPA rewrite in place for React Router.
