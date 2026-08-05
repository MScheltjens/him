import { services, servicesSection } from "@/data/site";

import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

export function Services() {
    return (
        <section id="leistungen" className="scroll-mt-16 border-y border-border bg-muted py-20 sm:py-24">
            <Container className="space-y-10">
                <SectionHeading
                    eyebrow={servicesSection.eyebrow}
                    title={servicesSection.title}
                    text={servicesSection.text}
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service) => (
                        <Card key={service.title} className="group border-concrete-200 bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                            <CardContent className="space-y-5 p-6">
                                <div className="inline-flex border-2 border-concrete-200 bg-concrete-50 p-3">
                                    <service.icon className="h-6 w-6 text-concrete-700" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-semibold tracking-tight text-foreground"><span className="text-primary mr-2">◆</span>{service.title}</h3>
                                    <p className="text-sm leading-7 text-muted-foreground">{service.text}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
