"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { useState } from "react";
import { SPECIALTIES } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { Specialty } from "@/types";

const card = { background:"#161616", border:"1px solid rgba(255,255,255,0.07)" };

export function SpecialtyDetail({ specialty }: { specialty: Specialty }) {
  const [activeYear, setActiveYear] = useState<number>(specialty.years[0]?.year ?? 4);
  const currentYear = specialty.years.find(y => y.year === activeYear);

  return (
    <div style={{ background:"#0a0a0a" }}>
      {/* Hero */}
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <Link href="/oferta-academica"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors mb-6"
              style={{ color:"rgba(255,255,255,0.45)" }}>
              <ArrowLeft className="w-4 h-4" /> Volver a Oferta Académica
            </Link>
            <div className="flex items-start gap-5">
              <div className="text-6xl">{specialty.icon}</div>
              <div>
                <div className="text-[#E53935] text-xs font-bold uppercase tracking-widest mb-1">Especialidad Técnica · Ciclo Superior</div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Técnico en {specialty.name}</h1>
                <p className="text-lg max-w-2xl" style={{ color:"rgba(255,255,255,0.55)" }}>{specialty.description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perfil */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3">
                <span className="w-7 h-px bg-[#E53935]" />Perfil Profesional
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">¿Qué puede hacer un Técnico en {specialty.name}?</h2>
              <p className="leading-relaxed" style={{ color:"rgba(255,255,255,0.55)" }}>{specialty.profile}</p>
            </div>
            <div className="rounded-xl p-6 self-start" style={card}>
              <h3 className="font-bold text-white mb-4">Información del plan</h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Nivel",       "Secundario Técnico"           ],
                  ["Ciclo sup.",  "4 años (4° a 7°)"             ],
                  ["Modalidad",   "Presencial"                   ],
                  ["Título",      `Técnico en ${specialty.name}` ],
                  ["Dependencia", "DGCyE — PBA"                  ],
                ].map(([l,v]) => (
                  <div key={l} className="flex justify-between gap-3 pb-2 last:pb-0" style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                    <dt style={{ color:"rgba(255,255,255,0.40)" }} className="flex-shrink-0">{l}</dt>
                    <dd className="font-semibold text-white text-right text-xs">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Plan */}
      <section className="section-padding" style={{ background:"#111" }}>
        <div className="container-custom">
          <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-7 h-px bg-[#E53935]" />Plan de Estudios
          </div>
          <h2 className="text-2xl font-bold text-white mb-8">Materias por año — Ciclo Superior</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {specialty.years.map(y => (
              <button key={y.year} onClick={() => setActiveYear(y.year)}
                className={cn("px-5 py-2 rounded-lg font-semibold text-sm transition-all",
                  activeYear === y.year
                    ? "bg-[#E53935] text-white"
                    : "text-white/50 hover:text-[#E53935] hover:bg-[#E53935]/10"
                )}
                style={activeYear !== y.year ? { background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" } : {}}>
                {y.label}
              </button>
            ))}
          </div>
          {currentYear && (
            <motion.div key={activeYear} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.3 }}>
              <div className="flex items-center justify-between mb-5 pb-3" style={{ borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
                <h3 className="font-bold text-white text-lg">{currentYear.label}</h3>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-[#E53935] rounded-full px-3 py-1"
                  style={{ background:"rgba(229,57,53,0.10)" }}>
                  <Clock className="w-4 h-4" />{currentYear.total_hours} horas anuales
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                {currentYear.subjects.map(group => (
                  <div key={group.group} className="rounded-xl overflow-hidden" style={card}>
                    <div className="px-4 py-3 flex items-center justify-between"
                      style={{ background:"rgba(255,255,255,0.04)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                      <h4 className="font-bold text-white text-sm">{group.group}</h4>
                      <span className="text-xs font-semibold text-[#E53935] rounded px-2 py-0.5"
                        style={{ background:"rgba(229,57,53,0.10)" }}>{group.total_hours} hs</span>
                    </div>
                    <div className="p-4">
                      <table className="w-full text-xs">
                        <thead>
                          <tr style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
                            <th className="text-left pb-2 font-semibold" style={{ color:"rgba(255,255,255,0.30)" }}>Materia</th>
                            <th className="text-right pb-2 font-semibold" style={{ color:"rgba(255,255,255,0.30)" }}>Hs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.subjects.map(sub => (
                            <tr key={sub.name} style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                              <td className="py-1.5 pr-2" style={{ color:"rgba(255,255,255,0.60)" }}>{sub.name}</td>
                              <td className="py-1.5 text-right font-medium" style={{ color:"rgba(255,255,255,0.35)" }}>{sub.hours}</td>
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
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-xl font-bold text-white mb-6">Otras especialidades</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {SPECIALTIES.filter(s => s.id !== specialty.id).map(s => (
              <Link key={s.id} href={`/oferta-academica/${s.slug}`}
                className="group flex items-center gap-3 rounded-xl p-4 transition-all"
                style={card}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(229,57,53,0.35)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)"; }}>
                <span className="text-2xl">{s.icon}</span>
                <div>
                  <div className="font-semibold text-sm text-white group-hover:text-[#E53935] transition-colors">{s.name}</div>
                  <div className="text-xs" style={{ color:"rgba(255,255,255,0.35)" }}>Ver plan →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
