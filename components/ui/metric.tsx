import { cn } from "@/lib/utils";

export function Metric({ label, value, className }: { label: string; value: string; className?: string }) {
    return (
        <div className={cn(className)}>
            <div className="text-2xl font-semibold tracking-tight">{value}</div>
            <div className="text-sm opacity-70">{label}</div>
        </div>
    );
}