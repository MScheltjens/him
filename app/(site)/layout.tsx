import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Inter } from "next/font/google";
import { getSiteSettings } from "@/lib/sanity/queries";

import "../globals.css";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIM Schneider | Hamburger Industrie- und Montageservice",
  description: "Technische Reinigung, Zuarbeit im Maschinenbau und Transportarbeiten auf Schiffswerften im Großraum Hamburg.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <html
      lang="de"
      className="h-full antialiased"
      suppressHydrationWarning
    >

      <body className={`${inter.className} min-h-full flex flex-col`}>

        <Header settings={settings} />
        {children}
        <Footer settings={settings} />
      </body>
    </html>
  );
}
