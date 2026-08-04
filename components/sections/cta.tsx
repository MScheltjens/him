import { ctaSection } from "@/data/site";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function Cta() {
    return (
        <section className="py-20 sm:py-24">
            <Container>
                <div className="brand-gradient border-2 border-steel-700 px-8 py-12 text-background shadow-2xl sm:px-12 sm:py-16">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div className="space-y-4">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                                {ctaSection.eyebrow}
                            </p>
                            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-background sm:text-4xl">
                                {ctaSection.title}
                            </h2>
                            <p className="max-w-2xl text-base leading-8 text-background/70">
                                {ctaSection.text}
                            </p>
                        </div>
                        <Button size="lg" className="px-6 text-base">
                            {ctaSection.cta}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
