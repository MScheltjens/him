import { Factory, HardHat, Mail, MapPin, Phone, Truck, Wrench } from "lucide-react";

export const site = {
    name: "HIM",
    tagline: "Hamburger Industrie- und Montageservice",
    phone: "+49 40 12345678",
    email: "t.schneider@him-schneider.de",
    city: "Großraum Hamburg",
};

export const navigation = {
    items: [
        { label: "Leistungen", href: "#leistungen" },
        { label: "Über uns", href: "#ueber-uns" },
        { label: "Galerie", href: "#referenzen" },
        { label: "FAQ", href: "#faq" },
        { label: "Kontakt", href: "#kontakt" },
    ],
    cta: "Anfrage senden",
};

export const footerLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
];

export const hero = {
    badge: "Großraum Hamburg · Vor Ort",
    title: "Industrie- und Montageservice",
    titleHighlight: "für Hamburg & Schiffswerften",
    text: "Technische Reinigung, Zuarbeit im Maschinenbau und Transportarbeiten auf Schiffswerften — zuverlässig, flexibel und direkt vor Ort.",
    primaryCta: "Jetzt Kontakt aufnehmen",
    secondaryCta: "Leistungen ansehen",
    metrics: [
        { label: "Selbstständig seit", value: "2024" },
        { label: "Region", value: "Hamburg" },
        { label: "Einsatz", value: "Vor Ort" },
    ],
};

export const benefits = [
    "Einsätze vor Ort in Hamburg und Umgebung",
    "Erfahrung auf Schiffswerften und in der Industrie",
    "Flexible Zuarbeit im Maschinenbau",
    "Zuverlässige Transport- und Montagearbeiten",
];

export const intro = {
    eyebrow: "Über uns",
    title: "Geschäftsführung mit Industrie-Know-how",
    text: "HIM steht für Hamburger Industrie- und Montageservice — selbstständig geführt seit März 2024. Wir unterstützen Werften, Industriebetriebe und Montageprojekte im Großraum Hamburg mit praxisnahen Dienstleistungen direkt vor Ort.",
    highlights: [
        "Selbstständiger Geschäftsführer seit März 2024",
        "Schwerpunkt Schiffswerften und Industrie",
        "Technische Reinigung und Montagearbeiten",
        "Transport und Zuarbeit im Maschinenbau",
    ],
};

export const servicesSection = {
    eyebrow: "Leistungen",
    title: "Drei Kernbereiche, klar strukturiert",
    text: "Technische Reinigung, Maschinenbau-Zuarbeit und Transportarbeiten auf Schiffswerften — alles aus einer Hand, flexibel und vor Ort im Großraum Hamburg.",
};

export const services = [
    {
        title: "Technische Reinigung",
        text: "Professionelle Reinigung in industriellen und technischen Umgebungen — für Werften, Produktionshallen und Montagebereiche.",
        icon: Factory,
    },
    {
        title: "Zuarbeit Maschinenbau",
        text: "Unterstützung im Maschinenbau — Montage, Zuarbeit und technische Hilfeleistungen für laufende Projekte und Engpass-Situationen.",
        icon: Wrench,
    },
    {
        title: "Transport auf Schiffswerften",
        text: "Transportarbeiten direkt auf Schiffswerften — Material, Bauteile und Ausrüstung sicher und termingerecht bewegen.",
        icon: Truck,
    },
];

export const imageTextSection = {
    eyebrow: "Einsatzgebiet",
    title: "Vor Ort im Großraum Hamburg",
    text: "Ob Werft, Industriehalle oder Montageprojekt — wir arbeiten dort, wo Sie uns brauchen. On-site im Großraum Hamburg, flexibel und zuverlässig.",
    paragraphs: [
        "Schiffswerften stellen besondere Anforderungen: enge Termine, wechselnde Einsatzorte und enge Abstimmung mit anderen Gewerken.",
        "HIM bringt die nötige Erfahrung mit und unterstützt Sie dort, wo Kapazitäten oder Spezialwissen fehlen.",
    ],
    cta: "Mehr erfahren",
};

export const trustSection = {
    eyebrow: "Warum HIM",
    title: "Verlässlich, flexibel, vor Ort",
    text: "Als selbstständiger Geschäftsführer kenne ich die Anforderungen von Werften und Industriebetrieben aus der Praxis — und liefere, wenn es darauf ankommt.",
    items: [
        { title: "Erfahrung auf Schiffswerften", icon: HardHat },
        { title: "Schnelle Erreichbarkeit", icon: Phone },
        { title: "Einsätze im Großraum Hamburg", icon: MapPin },
        { title: "Direkter Ansprechpartner", icon: Mail },
    ],
};

export const gallerySection = {
    eyebrow: "Referenzen",
    title: "Projekte & Einsätze",
    text: "Einblicke in abgeschlossene Arbeiten auf Werften, in der Industrie und bei Montageprojekten im Großraum Hamburg.",
    count: 6,
};

export const faqSection = {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    text: "Antworten auf typische Fragen zu Einsätzen, Leistungen und Anfragen.",
};

export const faqs = [
    {
        q: "In welchem Gebiet sind Sie tätig?",
        a: "Wir arbeiten im Großraum Hamburg und Umgebung — vor Ort auf Schiffswerften, in Industriebetrieben und bei Montageprojekten.",
    },
    {
        q: "Welche Leistungen bieten Sie an?",
        a: "Unser Angebot umfasst technische Reinigung, Zuarbeit im Maschinenbau sowie Transportarbeiten auf Schiffswerften.",
    },
    {
        q: "Kann ich kurzfristig anfragen?",
        a: "Ja, je nach Verfügbarkeit sind auch kurzfristige Einsätze möglich. Kontaktieren Sie uns telefonisch oder über das Formular.",
    },
    {
        q: "Arbeiten Sie direkt vor Ort?",
        a: "Ja, alle Leistungen werden on-site ausgeführt — auf der Werft, in der Halle oder am Montageort.",
    },
];

export const ctaSection = {
    eyebrow: "Anfrage",
    title: "Kapazität oder Unterstützung gesucht?",
    text: "Ob Reinigung, Maschinenbau-Zuarbeit oder Transport auf der Werft — sprechen Sie uns an für ein unverbindliches Gespräch.",
    cta: "Angebot anfragen",
};

export const contactSection = {
    eyebrow: "Kontakt",
    title: "Direkt anfragen",
    text: "Beschreiben Sie kurz Ihr Vorhaben — wir melden uns zeitnah mit einer Rückmeldung.",
    formLabels: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        message: "Nachricht",
        submit: "Nachricht senden",
    },
};
