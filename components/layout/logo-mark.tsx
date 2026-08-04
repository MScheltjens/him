import { cn } from "@/lib/utils";
import { Ship } from "lucide-react";

interface LogoMarkProps {
    name: string;
    tagline?: string;
    compact?: boolean;
    className?: string;
}

export function LogoMark({ name, tagline, compact = false, className }: LogoMarkProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-primary bg-primary/10">
                <Ship className="h-5 w-5 text-primary" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 leading-tight">
                <div className={cn("font-semibold tracking-tight text-foreground", compact ? "text-sm" : "text-base")}>
                    {name}
                </div>
                {tagline && !compact && (
                    <div className="truncate text-[11px] text-muted-foreground">{tagline}</div>
                )}
            </div>
        </div>
    );
}
