import { ImageResponse } from "next/og";

export const OG_ICON_BACKGROUND = "#0f6e8c"; // --brand-harbor
export const OG_ICON_FOREGROUND = "#f6f4f1"; // --brand-fog

// Shared glyph for the generated app/icon.tsx and app/apple-icon.tsx routes
// (next/og ImageResponse icons). Mirrors lucide-react's "Ship" icon paths,
// duplicated here since ImageResponse/Satori can't render lucide-react's
// SVGR-generated components directly.
const SHIP_PATHS = [
    "M12 10.189V14",
    "M12 2v3",
    "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",
    "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76",
    "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",
];

function OgShipGlyph({ size, strokeWidth = 2 }: { size: number; strokeWidth?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={OG_ICON_FOREGROUND} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            {SHIP_PATHS.map((d) => (
                <path key={d} d={d} />
            ))}
        </svg>
    );
}

export function createAppIcon(size: number, glyphSize: number, strokeWidth = 2) {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: OG_ICON_BACKGROUND,
                }}
            >
                <OgShipGlyph size={glyphSize} strokeWidth={strokeWidth} />
            </div>
        ),
        { width: size, height: size },
    );
}
