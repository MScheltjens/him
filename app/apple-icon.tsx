import { createAppIcon } from "@/lib/og-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return createAppIcon(180, 110, 1.6);
}
