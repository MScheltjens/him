import { faqs, faqSection } from "@/data/site";

import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
        },
    })),
};

export function Faq() {
    return (
        <section id="faq" className="scroll-mt-16 border-y border-border bg-muted py-20 sm:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <SectionHeading
                    eyebrow={faqSection.eyebrow}
                    title={faqSection.title}
                    text={faqSection.text}
                />
                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((item) => (
                        <Card key={item.q} className="border-concrete-200 bg-background shadow-sm hover:border-primary/40 transition">
                            <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground"><span className="text-primary mr-2">◆</span>{item.q}</h3>
                                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-muted-foreground">{item.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
