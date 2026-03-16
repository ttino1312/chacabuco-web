import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { QuickLinks } from "@/components/home/QuickLinks";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { AboutBanner } from "@/components/home/AboutBanner";
import { NewsSection } from "@/components/home/NewsSection";
import { ContactBanner } from "@/components/home/ContactBanner";
import { SCHOOL_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: `${SCHOOL_INFO.fullName} | Inicio`,
  description: SCHOOL_INFO.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <SpecialtiesSection />
      <AboutBanner />
      <NewsSection />
      <ContactBanner />
    </>
  );
}
