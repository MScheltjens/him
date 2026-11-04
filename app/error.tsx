"use client";

import { ArrowLeft, RotateCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export default function ErrorPage({ error, retry }: { error: unknown; retry: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex flex-1 items-center py-24">
            <Container className="max-w-2xl space-y-6 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">Fehler</p>
                <h1 className="text-3xl font-semibold tracking-tight text-secondary sm:text-4xl">
                    Etwas ist schiefgelaufen
                </h1>
                <p className="text-base leading-7 text-muted-foreground">
                    Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                    <Button size="lg" className="px-6 text-base" onClick={() => retry()}>
                        <RotateCw className="mr-2 h-4 w-4" /> Erneut versuchen
                    </Button>
                    <Link href="/" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "px-6 text-base")}>
                        <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Startseite
                    </Link>
                </div>
            </Container>
        </main>
    );
}
