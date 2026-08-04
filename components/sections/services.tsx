'use client';

import { services as staticServices, servicesSection as staticServicesSection } from "@/data/site";
import { getIcon } from "@/lib/icons";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

interface ServicesProps {
    heading?: { eyebrow?: string; title?: string; text?: string } | null;
    items?: { _id: string; title: string; text: string; icon: string }[] | null;
}

export function Services({ heading, items }: ServicesProps) {
    const section = heading ?? staticServicesSection;
    const serviceList = items?.length ? items : staticServices;
    return (
        <section id="leistungen" className="scroll-mt-16 border-y border-border bg-muted py-20 sm:py-24">
            <Container className="space-y-10">
                <SectionHeading
                    eyebrow={section.eyebrow}
                    title={section.title}
                    text={section.text}
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {serviceList.map((service) => {
                        const Icon = 'icon' in service && typeof service.icon === 'string'
                            ? getIcon(service.icon)
                            : (service as { icon: React.ComponentType<{ className?: string }> }).icon;
                        return (
                            <Card key={'_id' in service ? (service as { _id: string })._id : service.title} className="group border-steel-200 bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
                                <CardContent className="space-y-5 p-6">
                                    <div className="inline-flex border-2 border-steel-200 bg-steel-50 p-3">
                                        <Icon className="h-6 w-6 text-steel-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-semibold tracking-tight text-foreground"><span className="text-primary mr-2">◆</span>{service.title}</h3>
                                        <p className="text-sm leading-7 text-muted-foreground">{service.text}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}