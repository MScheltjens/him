import { defineField, defineType } from "sanity";

export const homePage = defineType({
    name: "homePage",
    title: "Startseite",
    type: "document",
    fields: [
        // Hero
        defineField({
            name: "hero",
            title: "Hero",
            type: "object",
            fields: [
                defineField({ name: "badge", title: "Badge", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "titleHighlight", title: "Titel Highlight", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({ name: "primaryCta", title: "Primärer CTA", type: "string" }),
                defineField({ name: "secondaryCta", title: "Sekundärer CTA", type: "string" }),
                defineField({
                    name: "metrics",
                    title: "Kennzahlen",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "label", title: "Label", type: "string" }),
                                defineField({ name: "value", title: "Wert", type: "string" }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "image",
                    title: "Hintergrundbild",
                    type: "image",
                    options: { hotspot: true },
                }),
            ],
        }),

        // Benefits
        defineField({
            name: "benefits",
            title: "Vorteile",
            type: "array",
            of: [{ type: "string" }],
        }),

        // Intro
        defineField({
            name: "intro",
            title: "Über uns",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({
                    name: "highlights",
                    title: "Highlights",
                    type: "array",
                    of: [{ type: "string" }],
                }),
            ],
        }),

        // Services section heading
        defineField({
            name: "servicesSection",
            title: "Leistungen Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
            ],
        }),

        // Image text section
        defineField({
            name: "imageTextSection",
            title: "Bild-Text Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({
                    name: "paragraphs",
                    title: "Absätze",
                    type: "array",
                    of: [{ type: "string" }],
                }),
                defineField({ name: "cta", title: "CTA Text", type: "string" }),
            ],
        }),

        // Trust section
        defineField({
            name: "trustSection",
            title: "Vertrauen Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({
                    name: "items",
                    title: "Trust-Punkte",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "title", title: "Titel", type: "string" }),
                                defineField({ name: "icon", title: "Icon (Lucide Name)", type: "string" }),
                            ],
                        },
                    ],
                }),
            ],
        }),

        // Gallery section heading
        defineField({
            name: "gallerySection",
            title: "Galerie Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
            ],
        }),

        // FAQ section heading
        defineField({
            name: "faqSection",
            title: "FAQ Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
            ],
        }),

        // CTA section
        defineField({
            name: "ctaSection",
            title: "CTA Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({ name: "cta", title: "CTA Text", type: "string" }),
            ],
        }),

        // Contact section
        defineField({
            name: "contactSection",
            title: "Kontakt Abschnitt",
            type: "object",
            fields: [
                defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
                defineField({ name: "title", title: "Titel", type: "string" }),
                defineField({ name: "text", title: "Text", type: "text" }),
                defineField({
                    name: "formLabels",
                    title: "Formular Labels",
                    type: "object",
                    fields: [
                        defineField({ name: "name", title: "Name Label", type: "string" }),
                        defineField({ name: "email", title: "E-Mail Label", type: "string" }),
                        defineField({ name: "phone", title: "Telefon Label", type: "string" }),
                        defineField({ name: "message", title: "Nachricht Label", type: "string" }),
                        defineField({ name: "submit", title: "Senden Label", type: "string" }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: "Startseite" };
        },
    },
});
