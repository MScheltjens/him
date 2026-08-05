import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function NotFound() {
    return (
        <main className="flex flex-1 items-center py-24">
            <Container className="max-w-2xl space-y-6 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">404</p>
                <h1 className="text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
                    Seite nicht gefunden
                </h1>
                <p className="text-base leading-7 text-muted-foreground">
                    Die aufgerufene Seite existiert nicht oder wurde verschoben.
                </p>
                <Link href="/" className={cn(buttonVariants({ size: "lg" }), "px-6 text-base")}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Startseite
                </Link>
            </Container>
        </main>
    );
}
