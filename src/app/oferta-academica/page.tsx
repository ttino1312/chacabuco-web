"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SPECIALTIES, BASIC_CYCLE } from "@/lib/data";

const card = { background:"#161616", border:"1px solid rgba(255,255,255,0.07)" };

export default function OfertaAcademicaPage() {
  return (
    <div style={{ background:"#0a0a0a" }}>
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag justify-center"><span className="w-7 h-px bg-[#E53935]" />Plan de Estudios<span className="w-7 h-px bg-[#E53935]" /></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Oferta Académica</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color:"rgba(255,255,255,0.50)" }}>
            7 años de formación técnica integral. Ciclo Básico (1° a 3°) y Ciclo Superior con 4 especialidades (4° a 7°).
          </p>
        </div>
      </section>

      {/* Ciclo Básico */}
      <section className="section-padding" id="ciclo-basico">
        <div className="container-custom">
          <SectionHeader tag="1° a 3° Año" title="Ciclo Básico" description={BASIC_CYCLE.description} className="mb-12" />
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Years */}
            <div className="space-y-4">
              {BASIC_CYCLE.years.map((y, i) => (
                <motion.div key={y.year}
                  initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                  className="rounded-xl p-5 hover:border-[#E53935]/30 transition-all" style={card}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <span className="w-8 h-8 bg-[#E53935] text-white text-sm font-extrabold rounded-lg flex items-center justify-center">{y.year}°</span>
                      {y.label}
                    </h3>
                    <span className="flex items-center gap-1 text-xs font-semibold text-[#E53935]">
                      <Clock className="w-3.5 h-3.5" />{y.annualTotal} hs
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs font-bold uppercase mb-2" style={{ color:"rgba(255,255,255,0.30)" }}>Form. General</div>
                      <ul className="space-y-1">
                        {y.general.slice(0,5).map(s => (
                          <li key={s.name} className="flex justify-between" style={{ color:"rgba(255,255,255,0.55)" }}>
                            <span>{s.name}</span><span className="text-xs" style={{ color:"rgba(255,255,255,0.30)" }}>{s.hours}h</span>
                          </li>
                        ))}
                        {y.general.length > 5 && <li className="text-xs" style={{ color:"rgba(255,255,255,0.30)" }}>+{y.general.length-5} más...</li>}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase mb-2" style={{ color:"rgba(255,255,255,0.30)" }}>Talleres</div>
                      <ul className="space-y-1">
                        {y.technical.map(s => (
                          <li key={s.name} className="flex justify-between" style={{ color:"rgba(255,255,255,0.55)" }}>
                            <span>{s.name}</span><span className="text-xs" style={{ color:"rgba(255,255,255,0.30)" }}>{s.hours}h</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Workshops */}
            <div>
              <h3 className="text-lg font-bold text-white mb-5">Talleres del Ciclo Básico</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {BASIC_CYCLE.workshops.map((w, i) => (
                  <motion.div key={w.name}
                    initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                    viewport={{ once:true }} transition={{ duration:0.3, delay:i*0.08 }}
                    className="rounded-xl p-4 hover:border-[#E53935]/30 transition-all" style={card}>
                    <span className="text-3xl">{w.icon}</span>
                    <h4 className="font-bold text-white text-sm mt-2 mb-1">{w.name}</h4>
                    <p className="text-xs leading-relaxed" style={{ color:"rgba(255,255,255,0.45)" }}>{w.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-padding" style={{ background:"#111" }}>
        <div className="container-custom">
          <SectionHeader tag="4° a 7° Año" title="Ciclo Superior — Especialidades"
            description="Al finalizar 3° año, los estudiantes eligen su especialidad técnica y comienzan 4 años de formación especializada."
            className="mb-12" />
          <div className="grid md:grid-cols-2 gap-5">
            {SPECIALTIES.map((s, i) => (
              <motion.div key={s.id}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}>
                <Link href={`/oferta-academica/${s.slug}`}
                  className="group block rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={card}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(229,57,53,0.4)"; (e.currentTarget as HTMLElement).style.boxShadow="0 8px 32px rgba(229,57,53,0.07)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.boxShadow="none"; }}>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{s.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-1">Especialidad Técnica</div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E53935] transition-colors">Técnico en {s.name}</h3>
                      <p className="text-sm leading-relaxed mb-4" style={{ color:"rgba(255,255,255,0.50)" }}>{s.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs" style={{ color:"rgba(255,255,255,0.30)" }}>
                          <Clock className="w-3 h-3" />4 años · 4° a 7° año
                        </span>
                        <span className="flex items-center gap-1 text-[#E53935] text-sm font-semibold group-hover:gap-2 transition-all">
                          Ver plan completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
