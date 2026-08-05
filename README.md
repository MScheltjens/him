# HIM — Hamburger Industrie- und Montageservice

Single-page German-language marketing site for HIM, an independent industrial
service provider in Hamburg (technical cleaning, mechanical engineering
support, and transport work on shipyards). Built with Next.js App Router.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config, no `tailwind.config.*`)
- **shadcn/ui** primitives (style `radix-nova`, Radix + `lucide-react` icons)
- **Resend** for the contact form's email delivery
- **pnpm** as the package manager

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in RESEND_API_KEY, see below
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description                       |
| ------------ | ---------------------------------- |
| `pnpm dev`   | Start the dev server (Turbopack)   |
| `pnpm build` | Production build                   |
| `pnpm start` | Run the production build           |
| `pnpm lint`  | ESLint                             |

## Project structure

- **`app/`** — routes only. `app/page.tsx` composes the homepage from section
  components in order (Hero → Intro → Services → Trust → Gallery → Faq → Cta
  → Contact → ImageBanner). `app/layout.tsx` wraps every route with
  `Header`/`Footer`. `app/robots.ts` generates `robots.txt`. Legal pages
  (`impressum`, `datenschutz`) are separate routes.
- **`components/sections/`** — one component per homepage section, matched
  1:1 to a data object in `data/site.ts`. To change homepage copy, edit
  `data/site.ts`, not the section components.
- **`components/layout/`** — header, footer, `image-banner`, `logo-mark`.
- **`components/ui/`** — shadcn/ui primitives, installed via the shadcn CLI
  (see `components.json`).
- **`data/site.ts`** — all copy/content for the homepage sections, nav items,
  and footer links, as typed exported consts.
- **`data/images.ts`** — image content is Unsplash-hosted, not local
  (`unsplashUrl(id, width)` builds the URL). Any new external image host
  must be added to `images.remotePatterns` in `next.config.ts`.
- **`lib/utils.ts`** — `cn()` (clsx + tailwind-merge).
- **`lib/actions.ts`** — Server Actions. Currently just `sendContactMessage`,
  which powers the contact form (see below).

## Styling

Tailwind v4, CSS-first config in `app/globals.css`. Theme tokens
(`--background`, `--primary`, `--secondary`, `--accent`, ...) implement a
"warm concrete + harbor teal + safety orange" palette in `:root`/`.dark`, then
re-exposed via `@theme inline`. Prefer semantic tokens (`bg-primary`,
`text-muted-foreground`, ...) over raw palette colors. `--radius` is `2px`
sitewide (deliberately sharp corners). Reusable utility classes live in
`@layer utilities` in `globals.css`.

## Contact form & email (Resend)

The contact form (`components/sections/contact.tsx`) posts to the
`sendContactMessage` Server Action in `lib/actions.ts`, which validates the
fields and sends the message via [Resend](https://resend.com).

### Setup

1. Create a Resend account and API key at
   [resend.com/api-keys](https://resend.com/api-keys).
2. Copy `.env.example` to `.env.local` and set:
   - `RESEND_API_KEY` — your API key.
   - `RESEND_FROM_EMAIL` — optional. Leave unset to send from Resend's shared
     test sender (`onboarding@resend.dev`), which works without any domain
     setup. Once `him-schneider.de` is verified in
     [resend.com/domains](https://resend.com/domains), set this to an
     address on that domain, e.g.
     `HIM Kontaktformular <kontakt@him-schneider.de>`.
   - `CONTACT_TO_EMAIL` — optional override for the delivery address, useful
     for local testing. Without it, messages go to `site.email` in
     `data/site.ts` (`t.schneider@him-schneider.de`). **Unset this before
     going to production.**

### Sandbox limitation

Until a sending domain is verified in Resend, the API only allows delivery to
the email address the Resend account was created with — any other recipient
is rejected with a 403. This is why `CONTACT_TO_EMAIL` exists for local
testing.

### Validation

Server-side (`lib/actions.ts`): required name/email/message, email format
check, per-field max lengths (name 100, email 254, phone 30, message 5000),
a light phone-format check, and a hidden honeypot field (`company`) to
deter basic bots. Client-side (`contact.tsx`): matching `maxLength`/`required`
attributes plus a pending/success/error UI via `useActionState`.

## Environment variables

See `.env.example` for the full list. `.env.local` is gitignored; only
`.env.example` is committed.

## Boundaries

- Don't add new dependencies without checking they're actually needed and not
  already covered by an existing shadcn/Radix primitive.
- Don't add a test framework or test commands — none exist yet.
- Never modify `.env*` or lockfiles without asking first.
- Never commit without explicit review.
