import { galleryImages } from "@/data/images";
import { gallerySection as staticGallerySection } from "@/data/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { ThemeImage } from "../ui/theme-image";

interface GalleryProps {
    heading?: { eyebrow?: string; title?: string; text?: string } | null;
}

export function Gallery({ heading }: GalleryProps) {
    const section = heading ?? staticGallerySection;
    return (
        <section id="referenzen" className="scroll-mt-16 py-20 sm:py-24">
            <Container className="space-y-10">
                <SectionHeading
                    eyebrow={section.eyebrow}
                    title={section.title}
                    text={section.text}
                />
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryImages.map((image) => (
                        <div key={image.id} className="group relative aspect-4/3 overflow-hidden border border-border shadow-sm transition hover:shadow-md">
                            <ThemeImage
                                image={image}
                                fill
                                width={800}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="transition duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
