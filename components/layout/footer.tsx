import Link from "next/link";
import { footerLinks as staticFooterLinks, site as staticSite } from "@/data/site";
import { Container } from "../ui/container";

interface FooterProps {
    settings?: {
        name?: string;
        tagline?: string;
        footerLinks?: { label: string; href: string }[];
    } | null;
}

export function Footer({ settings }: FooterProps) {
    const name = settings?.name ?? staticSite.name;
    const tagline = settings?.tagline ?? staticSite.tagline;
    const links = settings?.footerLinks ?? staticFooterLinks;
    return (
        <footer className="border-t border-border bg-muted">
            <Container className="py-10">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <div className="text-base font-semibold tracking-tight text-foreground">{name}</div>
                        <div className="text-sm text-muted-foreground">{tagline}</div>
                    </div>
                    <div className="flex items-center gap-5 text-sm text-muted-foreground">
                        {links.map((link) => (
                            <Link key={link.label} href={link.href}>{link.label}</Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}