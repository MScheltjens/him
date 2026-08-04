import { site as staticSite, contactSection as staticContactSection } from "@/data/site";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { SectionHeading } from "../ui/section-heading";
import { Container } from "../ui/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ContactProps {
    data?: typeof staticContactSection | null;
    settings?: { phone?: string; email?: string; city?: string } | null;
}

export function Contact({ data, settings }: ContactProps) {
    const section = data ?? staticContactSection;
    const phone = settings?.phone ?? staticSite.phone;
    const email = settings?.email ?? staticSite.email;
    const city = settings?.city ?? staticSite.city;
    return (
        <section id="kontakt" className="scroll-mt-16 pb-20 sm:pb-24">
            <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div className="space-y-6">
                    <SectionHeading
                        eyebrow={section.eyebrow}
                        title={section.title}
                        text={section.text}
                    />
                    <div className="space-y-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /> {phone}</div>
                        <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /> {email}</div>
                        <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> {city}</div>
                    </div>
                </div>
                <Card className="border-2 border-steel-200 shadow-sm">
                    <CardContent className="space-y-5 p-6 sm:p-8">
                        <div className="grid gap-5 sm:grid-cols-2">
                            <Label htmlFor="name">{section.formLabels.name}</Label>
                            <Input id="name" />
                            <Label htmlFor="email">{section.formLabels.email}</Label>
                            <Input id="email" />
                        </div>
                        <Label htmlFor="phone">{section.formLabels.phone}</Label>
                        <Input id="phone" />

                        <Label htmlFor="message">{section.formLabels.message}</Label>
                        <Textarea id="message" />
                        <Button className="px-6">{section.formLabels.submit}</Button>
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
}