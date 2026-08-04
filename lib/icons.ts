import {
    Factory,
    Wrench,
    Truck,
    HardHat,
    ShieldCheck,
    Phone,
    MapPin,
    Mail,
    HelpCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Factory,
    Wrench,
    Truck,
    HardHat,
    ShieldCheck,
    Phone,
    MapPin,
    Mail,
};

export function getIcon(name: string | undefined): LucideIcon {
    if (!name) return HelpCircle;
    return iconMap[name] ?? HelpCircle;
}
