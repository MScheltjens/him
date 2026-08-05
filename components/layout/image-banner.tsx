import { bannerImage } from "@/data/images";

import { ThemeImage } from "../ui/theme-image";

export function ImageBanner() {
    return (
        <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
            <ThemeImage
                image={bannerImage}
                fill
                width={1920}
                sizes="100vw"
            />
        </div>
    );
}
