import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export const metadata: Metadata = {
    title: `Impressum | ${site.name}`,
};

export default function ImpressumPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container className="max-w-3xl space-y-10">
                <h1 className="text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">Impressum</h1>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">Angaben gemäß § 5 TMG</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Vollständiger Name des Anbieters]
                        <br />
                        [PLACEHOLDER: Straße und Hausnummer]
                        <br />
                        [PLACEHOLDER: PLZ und Ort]
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">Kontakt</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Telefon: {site.phone}
                        <br />
                        E-Mail: {site.email}
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">Umsatzsteuer-ID</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG, falls vorhanden]
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">Handelsregister</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Registergericht und Registernummer, falls im Handelsregister eingetragen]
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Vollständiger Name]
                        <br />
                        [PLACEHOLDER: Anschrift wie oben]
                    </p>
                </section>

                <p className="text-xs text-muted-foreground/70">
                    Diese Seite ist ein Platzhalter und ersetzt keine rechtliche Prüfung. Bitte die markierten Angaben vor Veröffentlichung vervollständigen.
                </p>
            </Container>
        </main>
    );
}
