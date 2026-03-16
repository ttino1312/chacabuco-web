"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SPECIALTIES } from "@/lib/data";

export function SpecialtiesSection() {
  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Ciclo Superior"
            title="Nuestras Especialidades"
            description="Desde 3° año, los estudiantes eligen su orientación técnica. 4 años de formación especializada con talleres, laboratorios y proyecto integrador final."
          />
          <Link href="/oferta-academica" className="btn-outline flex-shrink-0 self-start md:self-auto">
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIALTIES.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link href={`/oferta-academica/${s.slug}`} className="group block h-full">
                <div className="bg-surface h-full rounded-xl border border-gray-100 p-6 flex flex-col
                                transition-all duration-300 hover:-translate-y-1
                                hover:border-secondary/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
                  {/* Icon row */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{s.icon}</span>
                    <span className="w-7 h-7 rounded-full border-2 border-gray-100 group-hover:border-secondary
                                     group-hover:bg-secondary flex items-center justify-center
                                     transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-white
                                            group-hover:translate-x-0.5 transition-all duration-200" />
                    </span>
                  </div>

                  <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                    Especialidad Técnica
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">
                    {s.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-gray-100 text-xs text-gray-400">
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
