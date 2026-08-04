import { galleryImages } from "@/data/images";
import { gallerySection } from "@/data/site";
import { Container } from "../ui/container";
import { SectionHeading } from "../ui/section-heading";
import { ThemeImage } from "../ui/theme-image";

export function Gallery() {
    return (
        <section id="referenzen" className="scroll-mt-16 py-20 sm:py-24">
            <Container className="space-y-10">
                <SectionHeading
                    eyebrow={gallerySection.eyebrow}
                    title={gallerySection.title}
                    text={gallerySection.text}
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
