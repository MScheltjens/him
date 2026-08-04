import { unsplashUrl, type SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ThemeImageProps {
    image: SiteImage;
    width?: number;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
    className?: string;
    overlayClassName?: string;
}

export function ThemeImage({
    image,
    width = 1920,
    fill = false,
    priority = false,
    sizes,
    className,
    overlayClassName,
}: ThemeImageProps) {
    const src = unsplashUrl(image.id, width);

    return (
        <div className={cn("relative overflow-hidden", fill && "h-full w-full", className)}>
            <Image
                src={src}
                alt={image.alt}
                fill={fill}
                width={fill ? undefined : width}
                height={fill ? undefined : Math.round(width * 0.625)}
                sizes={sizes}
                priority={priority}
                className={cn("object-cover", fill && "h-full w-full")}
            />
            {overlayClassName && <div className={cn("absolute inset-0", overlayClassName)} />}
        </div>
    );
}
