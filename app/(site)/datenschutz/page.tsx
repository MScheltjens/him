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
                <h1 className="wrap-break-word hyphens-auto text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">Datenschutzerklärung</h1>

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
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">2. Hosting und Server-Logdateien</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Diese Website wird bei Vercel Inc., USA, gehostet. Beim Aufruf der Seiten verarbeitet Vercel technisch notwendige Daten, insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene Seite sowie Browsertyp. Das dient der sicheren und stabilen Bereitstellung der Website und beruht auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden nur so lange gespeichert, wie es für diese Zwecke erforderlich ist.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Vercel ist unter dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO). Weitere Informationen: <a href="https://vercel.com/legal/privacy-notice" className="underline hover:text-foreground">Datenschutzhinweise von Vercel</a>.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Schriftarten und Bilder werden über unseren Hoster ausgeliefert. Ihr Browser baut dafür keine Verbindung zu weiteren Anbietern auf.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">3. Kontaktformular</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Wenn Sie uns über das Kontaktformular schreiben, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Nachricht und, falls angegeben, Ihre Telefonnummer, um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit Ihre Anfrage auf einen Vertrag oder dessen Anbahnung gerichtet ist, im Übrigen unser berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Ihre Angaben werden per E-Mail an uns übermittelt. Außerdem erhalten Sie an die angegebene Adresse eine automatische Eingangsbestätigung. Für den Versand nutzen wir den Dienst Resend der Plus Five Five, Inc., USA, als Auftragsverarbeiter. Die Übermittlung in die USA stützt sich auf das EU-US Data Privacy Framework (Art. 45 DSGVO) und die EU-Standardvertragsklauseln (Art. 46 DSGVO). Weitere Informationen: <a href="https://resend.com/legal/privacy-policy" className="underline hover:text-foreground">Datenschutzhinweise von Resend</a>.
                    </p>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Wir löschen Ihre Angaben, sobald Ihre Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">4. Reichweitenmessung</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Wir nutzen Vercel Web Analytics, um zu verstehen, wie unsere Website genutzt wird. Dabei werden keine Cookies gesetzt. Besucher werden nur über einen aus der Anfrage gebildeten Hash-Wert unterschieden, der nach einem Tag verfällt, sodass keine Verfolgung über mehrere Tage oder Websites möglich ist. Rechtsgrundlage ist unser berechtigtes Interesse an der Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">5. Ihre Rechte</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer bei uns gespeicherten personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung und ein Recht auf Datenübertragbarkeit. Bei Fragen wenden Sie sich bitte an die oben genannte Kontaktadresse.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">6. Beschwerderecht bei der Aufsichtsbehörde</h2>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Sie können sich bei einer Datenschutz-Aufsichtsbehörde beschweren. Für uns zuständig ist:<br />
                        Der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit<br />
                        Ludwig-Erhard-Straße 22<br />
                        20459 Hamburg
                    </p>
                </section>

                <p className="text-xs text-muted-foreground/70">
                    Diese Seite ist ein Platzhalter und ersetzt keine rechtliche Prüfung. Bitte die markierten Angaben vor Veröffentlichung vervollständigen, idealerweise mit rechtlicher Beratung.
                </p>
            </Container>
        </main>
    );
}
