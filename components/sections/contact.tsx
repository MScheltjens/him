import { Mail, MapPin, Phone } from "lucide-react";

import { contactSection, site } from "@/data/site";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SectionHeading } from "../ui/section-heading";
import { Textarea } from "../ui/textarea";

export function Contact() {
    return (
        <section id="kontakt" className="scroll-mt-16 pb-20 sm:pb-24">
            <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="space-y-6">
                    <SectionHeading
                        eyebrow={contactSection.eyebrow}
                        title={contactSection.title}
                        text={contactSection.text}
                    />
                    <div className="space-y-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> {site.phone}</div>
                        <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> {site.email}</div>
                        <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {site.city}</div>
                    </div>
                </div>
                <Card className="border-2 border-concrete-200 shadow-sm">
                    <CardContent className="space-y-5 p-6 sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Label htmlFor="name">{contactSection.formLabels.name}</Label>
                            <Input id="name" />
                            <Label htmlFor="email">{contactSection.formLabels.email}</Label>
                            <Input id="email" />
                        </div>
                        <Label htmlFor="phone">{contactSection.formLabels.phone}</Label>
                        <Input id="phone" />

                        <Label htmlFor="message">{contactSection.formLabels.message}</Label>
                        <Textarea id="message" />
                        <Button className="px-6">{contactSection.formLabels.submit}</Button>
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
}
