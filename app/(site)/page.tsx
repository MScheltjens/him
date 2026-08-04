import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { ImageBanner } from "@/components/layout/image-banner";
import { Intro } from "@/components/sections/intro";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";
import {
  getSiteSettings,
  getHomePage,
  getServices,
  getFaqs,
} from "@/lib/sanity/queries";

export default async function Home() {
  const [settings, page, services, faqs] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getServices(),
    getFaqs(),
  ]);

  return (
    <main>
      <Hero data={page?.hero} benefits={page?.benefits} />
      <Intro data={page?.intro} />
      <Services heading={page?.servicesSection} items={services} />
      <Trust heading={page?.trustSection} metrics={page?.hero?.metrics} />
      <Gallery heading={page?.gallerySection} />
      <Faq heading={page?.faqSection} items={faqs} />
      <Cta data={page?.ctaSection} />
      <Contact data={page?.contactSection} settings={settings} />
      <ImageBanner />
    </main>
  );
}
