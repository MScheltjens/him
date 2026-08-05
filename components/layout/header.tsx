"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../ui/button";
import { Container } from "../ui/container";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { LogoMark } from "./logo-mark";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/" className="flex h-full items-center py-2">
                    <LogoMark name={site.name} tagline={site.tagline} />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navigation.items.map((item) => (
                        <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground transition hover:text-primary">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu & CTA */}
                <div className="flex items-center gap-2">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-70 px-6" aria-describedby={undefined}>
                            <SheetHeader>
                                <SheetTitle asChild>
                                    <Link href="/" className="flex h-full items-center py-2" onClick={() => setOpen(false)}>
                                        <LogoMark name={site.name} compact />
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-4 py-4">
                                {navigation.items.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-sm font-medium text-foreground transition hover:text-primary"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                            <Link
                                href="#kontakt"
                                className={cn(buttonVariants({ variant: "default" }), "w-full rounded-full")}
                                onClick={() => {
                                    setOpen(false);
                                    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                {navigation.cta}
                            </Link>
                        </SheetContent>
                    </Sheet>
                    <Link href="#kontakt" className={cn(buttonVariants({ variant: "default" }), "rounded-full px-5 hidden md:inline-flex mr-4")}>
                        {navigation.cta}
                    </Link>
                </div>
            </Container>
        </header>
    );
}
