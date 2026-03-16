import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { FloatingNav } from "@/components/layout/FloatingNav";
import { Footer } from "@/components/layout/Footer";
import { SCHOOL_INFO } from "@/lib/data";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: `${SCHOOL_INFO.fullName} | Morón, Buenos Aires`,
    template: `%s | E.E.S.T. N°6 Chacabuco`,
  },
  description: SCHOOL_INFO.description,
  keywords: [
    "escuela técnica","Morón","Buenos Aires","Chacabuco",
    "automotores","electromecánica","informática","programación","EEST",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SCHOOL_INFO.fullName,
    title: SCHOOL_INFO.fullName,
    description: SCHOOL_INFO.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <FloatingNav />
        <main className="flex-1 pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
