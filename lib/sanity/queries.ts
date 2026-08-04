import { client } from "./client";

// ── Site Settings ──────────────────────────────────────────
export async function getSiteSettings() {
    if (!client) return null;
    return client.fetch(
        `*[_type == "siteSettings"][0]{
      name,
      tagline,
      phone,
      email,
      city,
      navigation {
        items[] { label, href },
        cta
      },
      footerLinks[] { label, href }
    }`
    );
}

// ── Home Page ──────────────────────────────────────────────
export async function getHomePage() {
    if (!client) return null;
    return client.fetch(
        `*[_type == "homePage"][0]{
      hero {
        badge,
        title,
        titleHighlight,
        text,
        primaryCta,
        secondaryCta,
        metrics[] { label, value },
        image { asset->{ _id, url } }
      },
      benefits,
      intro {
        eyebrow,
        title,
        text,
        highlights
      },
      servicesSection {
        eyebrow,
        title,
        text
      },
      imageTextSection {
        eyebrow,
        title,
        text,
        paragraphs,
        cta
      },
      trustSection {
        eyebrow,
        title,
        text,
        items[] { title, icon }
      },
      gallerySection {
        eyebrow,
        title,
        text
      },
      faqSection {
        eyebrow,
        title,
        text
      },
      ctaSection {
        eyebrow,
        title,
        text,
        cta
      },
      contactSection {
        eyebrow,
        title,
        text,
        formLabels {
          name,
          email,
          phone,
          message,
          submit
        }
      }
    }`
    );
}

// ── Services ───────────────────────────────────────────────
export async function getServices() {
    if (!client) return null;
    return client.fetch(
        `*[_type == "service"] | order(order asc) {
      _id,
      title,
      text,
      icon
    }`
    );
}

// ── FAQs ───────────────────────────────────────────────────
export async function getFaqs() {
    if (!client) return null;
    return client.fetch(
        `*[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer
    }`
    );
}

// ── Gallery ────────────────────────────────────────────────
export async function getGalleryImages() {
    if (!client) return null;
    return client.fetch(
        `*[_type == "galleryImage"] | order(order asc) {
      _id,
      alt,
      image { asset->{ _id, url } }
    }`
    );
}
