import { type SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./site-settings";
import { homePage } from "./home-page";
import { service } from "./service";
import { faq } from "./faq";
import { galleryImage } from "./gallery-image";

export const schemaTypes: SchemaTypeDefinition[] = [
    siteSettings,
    homePage,
    service,
    faq,
    galleryImage,
];
