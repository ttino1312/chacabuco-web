"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SPECIALTIES } from "@/lib/data";

export function SpecialtiesSection() {
  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader tag="Ciclo Superior" title="Nuestras Especialidades"
            description="Desde 3° año, los estudiantes eligen su orientación técnica. 4 años de formación especializada con talleres, laboratorios y proyecto integrador." />
          <Link href="/oferta-academica" className="btn-outline flex-shrink-0 self-start md:self-auto">
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPECIALTIES.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.1 }}>
              <Link href={`/oferta-academica/${s.slug}`} className="group block h-full">
                <div className="rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(229,57,53,0.45)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(229,57,53,0.08)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{s.icon}</span>
                    <span className="w-7 h-7 rounded-full border border-white/10 group-hover:border-[#E53935] group-hover:bg-[#E53935]
                                     flex items-center justify-center transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-1">Especialidad</div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#E53935] transition-colors">{s.name}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.45)" }}>{s.description}</p>
                  <div className="mt-5 pt-4 border-t border-white/[0.06] text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                    4° a 7° año · 4 años
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
