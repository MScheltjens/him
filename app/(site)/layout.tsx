import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HIM Schneider | Hamburger Industrie- und Montageservice",
  description: "Technische Reinigung, Zuarbeit im Maschinenbau und Transportarbeiten auf Schiffswerften im Großraum Hamburg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className="h-full antialiased"
      suppressHydrationWarning
    >

      <body className={`${inter.className} min-h-full flex flex-col`}>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
