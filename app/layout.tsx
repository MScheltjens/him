import "../styles/globals.css";

import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { heroImage, unsplashUrl } from "@/data/images";
import { site, siteDescription, siteTitle, siteUrl } from "@/data/site";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        siteName: site.name,
        locale: "de_DE",
        type: "website",
        images: [
            {
                url: unsplashUrl(heroImage.id, 1200),
                width: 1200,
                height: 630,
                alt: heroImage.alt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: [unsplashUrl(heroImage.id, 1200)],
    },
};

const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: siteDescription,
    telephone: site.phone,
    email: site.email,
    areaServed: site.city,
    url: siteUrl,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="de" className="h-full antialiased" suppressHydrationWarning>
            <body className={`${inter.className} min-h-full flex flex-col`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
                    }}
                />
                <Header />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
