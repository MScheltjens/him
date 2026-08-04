import { heroImage } from "@/data/images";
import { benefits, hero } from "@/data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { ThemeImage } from "../ui/theme-image";

export function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] overflow-hidden border-b border-border">
            <ThemeImage
                image={heroImage}
                fill
                priority
                sizes="100vw"
                width={1920}
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-background/80 lg:bg-linear-to-r lg:from-background/40 lg:via-background/5 lg:to-transparent" />
            <Container className="relative z-10 flex h-full flex-col justify-center py-10 sm:py-20 ">
                <div className="space-y-6 sm:space-y-8">
                    <Badge className="bg-primary px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-primary-foreground">
                        {hero.badge}
                    </Badge>
                    <div className="space-y-5">
                        <h1 className="max-w-3xl font-semibold tracking-tight text-secondary text-4xl md:text-5xl lg:text-7xl">
                            {hero.title} <br /> <span className="text-primary lg:whitespace-nowrap">{hero.titleHighlight}</span>
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                            {hero.text}
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a href="#kontakt">
                            <Button size="lg" className="px-6 text-base">
                                {hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </a>
                        <a href="#leistungen">
                            <Button size="lg" variant="outline" className="border-2 border-primary/50 px-6 text-base hover:bg-primary/10">
                                {hero.secondaryCta}
                            </Button>
                        </a>
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row justify-between">
                        {benefits.map((item) => (
                            <div key={item} className="flex items-center gap-3 border-l-2 border-l-primary border border-border bg-background/80 px-4 py-3 shadow-sm backdrop-blur">
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                                <span className="text-sm font-medium text-muted-foreground">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
