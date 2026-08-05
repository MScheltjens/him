import { hero, trustSection } from "@/data/site";

import { Container } from "../ui/container";
import { Metric } from "../ui/metric";
import { SectionHeading } from "../ui/section-heading";

export function Trust() {
    return (
        <section className="bg-foreground py-20 text-background sm:py-24">
            <Container className="space-y-12">
                <div className="grid grid-cols-3 divide-x divide-primary/30">
                    {hero.metrics.map((metric) => (
                        <Metric key={metric.label} label={metric.label} value={metric.value} className="py-2 text-center text-background" />
                    ))}
                </div>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                    <SectionHeading
                        eyebrow={trustSection.eyebrow}
                        title={trustSection.title}
                        text={trustSection.text}
                        inverted
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                        {trustSection.items.map((item) => (
                            <div key={item.title} className="border border-primary/25 bg-primary/10 p-6 backdrop-blur">
                                <item.icon className="mb-4 h-6 w-6 text-primary" />
                                <h3 className="text-lg font-semibold tracking-tight text-background">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
