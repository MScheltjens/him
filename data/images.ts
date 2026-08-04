export function unsplashUrl(photoId: string, width: number) {
    return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;
}

export type SiteImage = {
    id: string;
    alt: string;
    credit?: string;
};

export const heroImage: SiteImage = {
    id: "1755428822965-ce3d6078abdf",
    alt: "Industrielle Krane an einer Schiffswerft in Hamburg",
    credit: "Julia Taubitz / Unsplash",
};

export const bannerImage: SiteImage = {
    id: "1697281679290-ad7be1b10682",
    alt: "Stahlproduktion in einer Industrieanlage",
    credit: "Unsplash",
};

export const galleryImages: SiteImage[] = [
    {
        id: "1761519609568-23c8076df45b",
        alt: "Baukrane an einer Schiffswerft unter bewölktem Himmel",
        credit: "Sean Thoman / Unsplash",
    },
    {
        id: "1697281679290-ad7be1b10682",
        alt: "Stahlherstellung in einer Fabrik",
        credit: "Unsplash",
    },
    {
        id: "1720036236855-9a1a2e4d3f26",
        alt: "Maschinen und Anlagen in einer Produktionshalle",
        credit: "Unsplash",
    },
    {
        id: "1759826350352-c5b0b77729bd",
        alt: "Transport und Logistik mit Gabelstapler im Hafen",
        credit: "Solømen / Unsplash",
    },
    {
        id: "1504917593497-162098afe35f",
        alt: "Industrielle Werkstatt mit Maschinen und Funken",
        credit: "Unsplash",
    },
    {
        id: "1581091226825-a6a2a5aee158",
        alt: "Ingenieur bei der Arbeit in einer Industrieumgebung",
        credit: "Unsplash",
    },
];
