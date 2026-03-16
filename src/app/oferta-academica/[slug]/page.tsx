"use client";

import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { useState, use } from "react";
import { SPECIALTIES } from "@/lib/data";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function SpecialtyPage({ params }: PageProps) {
  const { slug } = use(params);
  const specialty = SPECIALTIES.find((s) => s.slug === slug);
  if (!specialty) notFound();

  const [activeYear, setActiveYear] = useState<number>(
    specialty.years[0]?.year ?? 4
  );
  const currentYear = specialty.years.find((y) => y.year === activeYear);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#111] section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E53935]/0 via-[#E53935] to-[#E53935]/0" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/oferta-academica"
              className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Volver a Oferta Académica
            </Link>
            <div className="flex items-start gap-5">
              <div className="text-6xl">{specialty.icon}</div>
              <div>
                <div className="text-[#E53935] text-xs font-bold uppercase tracking-widest mb-1">
                  Especialidad Técnica · Ciclo Superior
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  Técnico en {specialty.name}
                </h1>
                <p className="text-white/60 text-lg max-w-2xl">{specialty.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perfil */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3">
                <span className="w-7 h-px bg-[#E53935]" /> Perfil Profesional
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                ¿Qué puede hacer un Técnico en {specialty.name}?
              </h2>
              <p className="text-text-secondary leading-relaxed">{specialty.profile}</p>
            </div>
            <div className="bg-surface rounded-xl p-6 border border-gray-100 self-start">
              <h3 className="font-bold text-text-primary mb-4">Información del plan</h3>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Nivel",                  value: "Secundario Técnico"           },
                  { label: "Duración ciclo superior", value: "4 años (4° a 7°)"            },
                  { label: "Modalidad",              value: "Presencial"                   },
                  { label: "Título",                 value: `Técnico en ${specialty.name}` },
                  { label: "Dependencia",            value: "DGCyE — PBA"                 },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-3 border-b border-gray-100 pb-2 last:border-0">
                    <dt className="text-gray-500 flex-shrink-0">{label}</dt>
                    <dd className="font-semibold text-text-primary text-right text-xs">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de estudios */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-7 h-px bg-[#E53935]" /> Plan de Estudios
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-8">
            Materias por año — Ciclo Superior
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {specialty.years.map((y) => (
              <button key={y.year} onClick={() => setActiveYear(y.year)}
                className={cn(
                  "px-5 py-2 rounded-lg font-semibold text-sm transition-all",
                  activeYear === y.year
                    ? "bg-[#111] text-white"
                    : "bg-bg text-text-secondary hover:bg-[#E53935]/10 hover:text-[#E53935]"
                )}>
                {y.label}
              </button>
            ))}
          </div>

          {currentYear && (
            <motion.div key={activeYear} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-200">
                <h3 className="font-bold text-text-primary text-lg">{currentYear.label}</h3>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#E53935] bg-[#E53935]/10 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4" />{currentYear.total_hours} horas anuales
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {currentYear.subjects.map((group) => (
                  <div key={group.group} className="bg-bg rounded-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center justify-between">
                      <h4 className="font-bold text-text-primary text-sm">{group.group}</h4>
                      <span className="text-xs font-semibold text-[#E53935] bg-[#E53935]/10 px-2 py-0.5 rounded">
                        {group.total_hours} hs
                      </span>
                    </div>
                    <div className="p-4">
                      <table className="w-full text-xs">
                        <thead>
                          <tr className="text-gray-400 border-b border-gray-100">
                            <th className="text-left pb-2 font-semibold">Materia</th>
                            <th className="text-right pb-2 font-semibold">Hs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.subjects.map((sub) => (
                            <tr key={sub.name} className="border-b border-gray-50 last:border-0">
                              <td className="py-1.5 text-text-secondary pr-2">{sub.name}</td>
                              <td className="py-1.5 text-right text-gray-400 font-medium">{sub.hours}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Other specialties */}
      <section className="section-padding bg-bg">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-text-primary mb-6">Otras especialidades</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {SPECIALTIES.filter((s) => s.id !== specialty.id).map((s) => (
              <Link key={s.id} href={`/oferta-academica/${s.slug}`}
                className="group flex items-center gap-3 bg-surface rounded-xl p-4
                           border border-gray-100 hover:border-[#E53935]/30
                           hover:shadow-sm transition-all">
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-semibold text-sm text-text-primary group-hover:text-[#E53935] transition-colors">
                    {s.name}
                  </div>
                  <div className="text-xs text-gray-400">Ver plan →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ slug: s.slug }));
}
