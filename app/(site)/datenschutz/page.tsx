import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export const metadata: Metadata = {
    title: `Datenschutzerklärung | ${site.name}`,
};

export default function DatenschutzPage() {
    return (
        <main className="py-16 sm:py-24">
            <Container className="max-w-3xl space-y-10">
                <h1 className="text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">Datenschutzerklärung</h1>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">1. Verantwortlicher</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Vollständiger Name des Anbieters]
                        <br />
                        [PLACEHOLDER: Straße und Hausnummer]
                        <br />
                        [PLACEHOLDER: PLZ und Ort]
                        <br />
                        Telefon: {site.phone}
                        <br />
                        E-Mail: {site.email}
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">2. Erhebung und Speicherung personenbezogener Daten</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Beschreibung, welche Daten beim Besuch der Website automatisch erfasst werden (z. B. Server-Log-Dateien: IP-Adresse, Datum/Uhrzeit, aufgerufene Seite, Browsertyp).]
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">3. Kontaktformular</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Sobald das Kontaktformular funktionsfähig ist, hier beschreiben, welche Daten bei einer Anfrage übermittelt, wie sie verarbeitet und wie lange sie gespeichert werden, inklusive Rechtsgrundlage (i. d. R. Art. 6 Abs. 1 lit. b DSGVO).]
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">4. Ihre Rechte</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer bei uns gespeicherten personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung und ein Recht auf Datenübertragbarkeit. Bei Fragen wenden Sie sich bitte an die oben genannte Kontaktadresse.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">5. Beschwerderecht bei der Aufsichtsbehörde</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        [PLACEHOLDER: Zuständige Datenschutz-Aufsichtsbehörde nennen, z. B. der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit.]
                    </p>
                </section>

                <p className="text-xs text-muted-foreground/70">
                    Diese Seite ist ein Platzhalter und ersetzt keine rechtliche Prüfung. Bitte die markierten Angaben vor Veröffentlichung vervollständigen, idealerweise mit rechtlicher Beratung.
                </p>
            </Container>
        </main>
    );
}
