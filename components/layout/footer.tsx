import Link from "next/link";

import { footerLinks, site } from "@/data/site";

import { Container } from "../ui/container";

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted">
            <Container className="py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="text-base font-semibold tracking-tight text-foreground">{site.name}</div>
                        <div className="text-sm text-muted-foreground">{site.tagline}</div>
                    </div>
                    <div className="flex items-center gap-5 text-sm text-muted-foreground">
                        {footerLinks.map((link) => (
                            <Link key={link.label} href={link.href}>{link.label}</Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
