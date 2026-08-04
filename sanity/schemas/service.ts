import { defineField, defineType } from "sanity";

export const service = defineType({
    name: "service",
    title: "Leistung",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titel",
            type: "string",
            validation: (r) => r.required(),
        }),
        defineField({
            name: "text",
            title: "Beschreibung",
            type: "text",
        }),
        defineField({
            name: "icon",
            title: "Icon (Lucide Name)",
            type: "string",
            description: "z.B. Factory, Wrench, Truck, HardHat, ShieldCheck, Phone, MapPin, Mail",
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
        select: { title: "title", subtitle: "icon" },
    },
});
