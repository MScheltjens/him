import { faqs as staticFaqs, faqSection as staticFaqSection } from "@/data/site";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

interface FaqProps {
    heading?: { eyebrow?: string; title?: string; text?: string } | null;
    items?: { _id: string; question: string; answer: string }[] | null;
}

export function Faq({ heading, items }: FaqProps) {
    const section = heading ?? staticFaqSection;
    const faqList = items?.length
        ? items.map((f) => ({ q: f.question, a: f.answer, key: f._id }))
        : staticFaqs.map((f) => ({ q: f.q, a: f.a, key: f.q }));
    return (
        <section id="faq" className="scroll-mt-16 border-y border-border bg-muted py-20 sm:py-24">
            <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                <SectionHeading
                    eyebrow={section.eyebrow}
                    title={section.title}
                    text={section.text}
                />
                <div className="space-y-3 sm:space-y-4">
                    {faqList.map((item) => (
                        <Card key={item.key} className="border-steel-200 bg-background shadow-sm hover:border-primary/40 transition">
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