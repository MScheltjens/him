import { cn } from "@/lib/utils";

export function SectionHeading({
    eyebrow,
    title,
    text,
    inverted = false,
}: {
    eyebrow?: string;
    title?: string;
    text?: string;
    inverted?: boolean;
}) {
    return (
        <div className="max-w-2xl space-y-3">
            {eyebrow ? (
                <p
                    className={cn(
                        "text-sm font-semibold uppercase tracking-[0.18em]",
                        inverted ? "text-primary" : "text-secondary",
                    )}
                >
                    ◆ {eyebrow}
                </p>
            ) : null}
            <h2
                className={cn(
                    "text-2xl font-semibold tracking-tight sm:text-4xl",
                    inverted ? "text-background" : "text-secondary",
                )}
            >
                {title}
                <span className="text-primary">&nbsp;.</span>
            </h2>
            {text ? (
                <p
                    className={cn(
                        "text-base leading-7 sm:text-lg",
                        inverted ? "text-background/70" : "text-muted-foreground",
                    )}
                >
                    {text}
                </p>
            ) : null}
        </div>
    );
}
