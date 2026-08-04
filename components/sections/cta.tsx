import { ctaSection as staticCtaSection } from "@/data/site";
import { Container } from "../ui/container";
import { Button } from "../ui/button";

interface CtaProps {
    data?: { eyebrow?: string; title?: string; text?: string; cta?: string } | null;
}

export function Cta({ data }: CtaProps) {
    const section = data ?? staticCtaSection;
    return (
        <section className="py-20 sm:py-24">
            <Container>
                <div className="brand-gradient border-2 border-steel-700 px-8 py-12 text-background shadow-2xl sm:px-12 sm:py-16">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                {section.eyebrow}
                            </p>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-background sm:text-4xl">
                                {section.title}
                            </h2>
                            <p className="max-w-2xl text-base leading-8 text-background/70">
                                {section.text}
                            </p>
                        </div>
                        <Button size="lg" className="px-6 text-base">
                            {section.cta}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
