import { intro as staticIntro } from "@/data/site";
import { Card, CardContent } from "../ui/card";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";

interface IntroProps {
    data?: typeof staticIntro | null;
}

export function Intro({ data }: IntroProps) {
    const intro = data ?? staticIntro;
    return (
        <section id="ueber-uns" className="scroll-mt-16 py-20 sm:py-24">
            <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <SectionHeading
                    eyebrow={intro.eyebrow}
                    title={intro.title}
                    text={intro.text}
                />
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                    {intro.highlights.map((item) => (
                        <Card key={item} className="border-steel-200 shadow-sm hover:border-primary/40 transition">
                            <CardContent className="flex items-start gap-3 p-4 sm:p-6">
                                <span className="mt-1 text-primary text-sm">◆</span>
                                <p className="text-sm sm:text-base leading-7 text-muted-foreground">{item}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}