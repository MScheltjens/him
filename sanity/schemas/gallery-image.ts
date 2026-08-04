import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
    name: "galleryImage",
    title: "Galerie Bild",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Bild",
            type: "image",
            options: { hotspot: true },
            validation: (r) => r.required(),
        }),
        defineField({
            name: "alt",
            title: "Alt-Text",
            type: "string",
        }),
        defineField({
            name: "order",
            title: "Reihenfolge",
            type: "number",
        }),
    ],
    orderings: [
        {
            title: "Reihenfolge",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }],
        },
    ],
    preview: {
        select: {
            title: "alt",
            media: "image",
        },
    },
});
