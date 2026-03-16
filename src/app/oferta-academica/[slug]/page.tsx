import { notFound } from "next/navigation";
import { SPECIALTIES } from "@/lib/data";
import { SpecialtyDetail } from "@/components/specialty/SpecialtyDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// This runs on the server — no "use client" here
export async function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  if (!specialty) return {};
  return {
    title: `Técnico en ${specialty.name}`,
    description: specialty.description,
  };
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params;
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  if (!specialty) notFound();

  return <SpecialtyDetail specialty={specialty} />;
}
