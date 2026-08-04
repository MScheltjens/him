"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./lib/sanity/env";
import { schemaTypes } from "./sanity/schemas";
export default defineConfig({
    name: "him-schneider",
    title: "HIM Schneider",
    projectId,
    dataset,
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Inhalt")
                    .items([
                        S.listItem()
                            .title("Seiteneinstellungen")
                            .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
                        S.listItem()
                            .title("Startseite")
                            .child(S.document().schemaType("homePage").documentId("homePage")),
                        S.divider(),
                        ...S.documentTypeListItems().filter(
                            (item) => !["siteSettings", "homePage"].includes(item.getId()!)
                        ),
                    ]),
        }),
    ],
    schema: {
        types: schemaTypes,
    },
});
