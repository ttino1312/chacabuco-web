"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SPECIALTIES, BASIC_CYCLE } from "@/lib/data";

export default function OfertaAcademicaPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
              Plan de estudios
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Oferta Académica
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              7 años de formación técnica integral. Ciclo Básico (1° a 3°) y
              Ciclo Superior con 4 especialidades (4° a 7°).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ciclo Básico */}
      <section className="section-padding bg-bg" id="ciclo-basico">
        <div className="container-custom">
          <SectionHeader
            tag="1° a 3° Año"
            title="Ciclo Básico"
            description={BASIC_CYCLE.description}
            className="mb-12"
          />

          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            {/* Years table */}
            <div className="space-y-4">
              {BASIC_CYCLE.years.map((year, i) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-surface rounded-xl p-5 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-text-secondary flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary text-white text-sm font-extrabold rounded-lg flex items-center justify-center">
                        {year.year}°
                      </span>
                      {year.label}
                    </h3>
                    <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {year.annualTotal} hs/año
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase mb-2">
                        Formación General
                      </div>
                      <ul className="space-y-1">
                        {year.general.slice(0, 5).map((s) => (
                          <li
                            key={s.name}
                            className="flex justify-between text-text-secondary"
                          >
                            <span>{s.name}</span>
                            <span className="text-gray-400 text-xs">
                              {s.hours}h
                            </span>
                          </li>
                        ))}
                        {year.general.length > 5 && (
                          <li className="text-gray-400 text-xs">
                            +{year.general.length - 5} más...
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase mb-2">
                        Talleres Técnicos
                      </div>
                      <ul className="space-y-1">
                        {year.technical.map((s) => (
                          <li
                            key={s.name}
                            className="flex justify-between text-text-secondary"
                          >
                            <span>{s.name}</span>
                            <span className="text-gray-400 text-xs">
                              {s.hours}h
                            </span>
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
              <h3 className="text-lg font-bold text-text-secondary mb-5">
                Talleres del Ciclo Básico
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {BASIC_CYCLE.workshops.map((w, i) => (
                  <motion.div
                    key={w.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="bg-surface rounded-xl p-4 border border-gray-100 hover:border-secondary/30 hover:shadow-sm transition-all"
                  >
                    <span className="text-3xl">{w.icon}</span>
                    <h4 className="font-bold text-text-secondary text-sm mt-2 mb-1">
                      {w.name}
                    </h4>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {w.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeader
            tag="4° a 7° Año"
            title="Ciclo Superior — Especialidades"
            description="Al finalizar 3° año, los estudiantes eligen su especialidad técnica y comienzan el ciclo superior de 4 años de formación especializada."
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {SPECIALTIES.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  href={`/oferta-academica/${s.slug}`}
                  className="group block bg-bg rounded-xl p-6 border border-gray-100 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{s.icon}</div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                        Especialidad Técnica
                      </div>
                      <h3 className="text-lg font-bold text-text-secondary mb-2 group-hover:text-secondary transition-colors">
                        Técnico en {s.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {s.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />4 años · 4° a 7° año
                        </span>
                        <span className="flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                          Ver plan completo{" "}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
