import { hero as staticHero, trustSection as staticTrustSection } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { Container } from "../ui/container";
import { Metric } from "../ui/metric";
import { SectionHeading } from "../ui/section-heading";

interface TrustProps {
    heading?: { eyebrow?: string; title?: string; text?: string; items?: { title: string; icon: string }[] } | null;
    metrics?: { label: string; value: string }[] | null;
}

export function Trust({ heading, metrics }: TrustProps) {
    const trustSection = heading ?? staticTrustSection;
    const metricsList = metrics ?? staticHero.metrics;
    return (
        <section className="bg-foreground py-20 text-background sm:py-24">
            <Container className="space-y-12">
                <div className="grid grid-cols-3 divide-x divide-primary/30">
                    {metricsList.map((metric) => (
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
                        {(trustSection.items ?? []).map((item) => {
                            const Icon = typeof item.icon === 'string'
                                ? getIcon(item.icon)
                                : item.icon as React.ComponentType<{ className?: string }>;
                            return (
                                <div key={item.title} className="border border-primary/25 bg-primary/10 p-6 backdrop-blur">
                                    <Icon className="mb-4 h-6 w-6 text-primary" />
                                    <h3 className="text-lg font-semibold tracking-tight text-background">{item.title}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}