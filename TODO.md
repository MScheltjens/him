# Next steps

Running list of what's still needed before/around launch. Add to this as new
open items come up — it's not meant to be a static document.

## Waiting on client (info requested by email)

- [ ] Full legal name, street address, and city/postal code for
      **Impressum** (`app/impressum/page.tsx`) — currently `[PLACEHOLDER]`.
- [ ] Umsatzsteuer-ID (if any) and Handelsregister details (if registered)
      for Impressum.
- [ ] Confirm the responsible data-protection supervisory authority for
      **Datenschutzerklärung** (`app/datenschutz/page.tsx`) — likely the
      Hamburgische Beauftragte für Datenschutz und Informationsfreiheit,
      needs confirming.
- [ ] Confirm final domain (`him-schneider.de`) and contact email
      (`t.schneider@him-schneider.de`) — both currently best-guess in
      `data/site.ts`, not yet verified by the client.
- [ ] Confirm display name "HIM - Schneider" is correct/final.
- [ ] Real project/business photos to replace the Unsplash stock imagery in
      `data/images.ts`, if the client has any.

## Launch checklist (technical)

- [ ] Verify `him-schneider.de` as a sending domain in
      [resend.com/domains](https://resend.com/domains) (add the DNS records
      Resend provides).
- [ ] Once verified, set `RESEND_FROM_EMAIL` (e.g.
      `HIM - Schneider Kontaktformular <kontakt@him-schneider.de>`) in
      Vercel production env vars.
- [ ] Add `RESEND_API_KEY` to Vercel (Production, and Preview if previews
      should send real emails).
- [ ] Remove/unset `CONTACT_TO_EMAIL` in both `.env.local` and Vercel
      before go-live, so real submissions go to
      `t.schneider@him-schneider.de` instead of the personal test inbox.
- [ ] Fill in Impressum/Datenschutz placeholders once client data arrives
      (see above).
- [ ] Add a `Sitemap` directive to `app/robots.ts` and generate
      `app/sitemap.ts` once the production domain is finalized.

## Nice-to-haves / not blocking

- [ ] Consider a CAPTCHA (e.g. Cloudflare Turnstile) on the contact form if
      spam becomes an issue — the current honeypot field is a lightweight
      first line of defense only.
