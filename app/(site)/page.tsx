import { ImageBanner } from "@/components/layout/image-banner";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Intro />
            <Services />
            <Trust />
            <Gallery />
            <Faq />
            <Cta />
            <Contact />
            <ImageBanner />
        </main>
    );
}
