"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useActionState } from "react";

import { contactSection, site } from "@/data/site";
import { sendContactMessage } from "@/lib/actions";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { SectionHeading } from "../ui/section-heading";
import { Textarea } from "../ui/textarea";

export function Contact() {
    const [state, formAction, pending] = useActionState(sendContactMessage, { status: "idle" as const });

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
                    <CardContent className="p-6 sm:p-8">
                        {state.status === "success" ? (
                            <p role="status" className="text-sm font-medium text-foreground">
                                {state.message ?? "Danke! Ihre Nachricht wurde gesendet."}
                            </p>
                        ) : (
                            <form action={formAction} className="space-y-5">
                                {/* Honeypot: hidden from real users, left empty; bots tend to fill every field. */}
                                <input
                                    type="text"
                                    name="company"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    className="hidden"
                                    aria-hidden="true"
                                />
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{contactSection.formLabels.name}</Label>
                                        <Input id="name" name="name" required maxLength={100} aria-invalid={!!state.errors?.name} />
                                        {state.errors?.name && (
                                            <p className="text-xs text-destructive">{state.errors.name}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{contactSection.formLabels.email}</Label>
                                        <Input id="email" name="email" type="email" required maxLength={254} aria-invalid={!!state.errors?.email} />
                                        {state.errors?.email && (
                                            <p className="text-xs text-destructive">{state.errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">{contactSection.formLabels.phone}</Label>
                                    <Input id="phone" name="phone" type="tel" maxLength={30} aria-invalid={!!state.errors?.phone} />
                                    {state.errors?.phone && (
                                        <p className="text-xs text-destructive">{state.errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{contactSection.formLabels.message}</Label>
                                    <Textarea id="message" name="message" required maxLength={5000} aria-invalid={!!state.errors?.message} />
                                    {state.errors?.message && (
                                        <p className="text-xs text-destructive">{state.errors.message}</p>
                                    )}
                                </div>

                                {state.status === "error" && state.message && (
                                    <p role="alert" className="text-sm text-destructive">
                                        {state.message}
                                    </p>
                                )}

                                <Button type="submit" className="px-6" disabled={pending}>
                                    {pending ? "Wird gesendet..." : contactSection.formLabels.submit}
                                </Button>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </section>
    );
}
