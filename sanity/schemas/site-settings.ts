import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Seiteneinstellungen",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Firmenname",
            type: "string",
            validation: (r) => r.required(),
        }),
        defineField({
            name: "tagline",
            title: "Slogan",
            type: "string",
        }),
        defineField({
            name: "phone",
            title: "Telefon",
            type: "string",
        }),
        defineField({
            name: "email",
            title: "E-Mail",
            type: "string",
        }),
        defineField({
            name: "city",
            title: "Stadt",
            type: "string",
        }),
        defineField({
            name: "navigation",
            title: "Navigation",
            type: "object",
            fields: [
                defineField({
                    name: "items",
                    title: "Menüpunkte",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "label", title: "Label", type: "string" }),
                                defineField({ name: "href", title: "Link", type: "string" }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "cta",
                    title: "CTA Text",
                    type: "string",
                }),
            ],
        }),
        defineField({
            name: "footerLinks",
            title: "Footer Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "href", title: "Link", type: "string" }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "name" },
    },
});
