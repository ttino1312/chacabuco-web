"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

const features = [
  "Título técnico oficial habilitante a nivel nacional",
  "7 años de formación integral: ciclo básico + superior",
  "Talleres equipados con herramientas profesionales",
  "Laboratorios de informática y electrónica",
  "Prácticas profesionalizantes en empresas",
  "Proyecto Integrador Final con tutoría docente",
];

const reasons = [
  { num:"01", title:"Título oficial habilitante", desc:"Reconocido por el Ministerio de Educación de la Nación y la DGCyE PBA." },
  { num:"02", title:"Alta empleabilidad",         desc:"Nuestros egresados se insertan rápidamente en el mercado laboral argentino." },
  { num:"03", title:"Aprendizaje práctico",        desc:"Talleres y laboratorios equipados para aprender haciendo desde 1° año." },
  { num:"04", title:"Comunidad educativa",         desc:"Docentes comprometidos y ambiente institucional de inclusión y respeto." },
];

export function AboutBanner() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.55 }}
          >
            <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-secondary" />
              Sobre la Institución
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight mb-4">
              Formación técnica de excelencia en el corazón de Morón
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              La <strong className="text-text-primary">E.E.S.T. N°6 &ldquo;Chacabuco&rdquo;</strong> es
              una institución educativa de nivel secundario dependiente de la Dirección General de
              Cultura y Educación de la Provincia de Buenos Aires, ubicada en {SCHOOL_INFO.address}, {SCHOOL_INFO.city}.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Ofrecemos una formación integral de 7 años que combina el ciclo básico general con un
              sólido ciclo superior técnico en cuatro especialidades orientadas al mercado laboral actual.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-sm">{f}</span>
                </div>
              ))}
            </div>
            <Link href="/institucional" className="btn-primary">
              Conocé la institución <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.55, delay:0.1 }}
            className="relative"
          >
            <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-dark" />
              {/* Red top stripe */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6">¿Por qué elegirnos?</h3>
                <div className="space-y-5">
                  {reasons.map(r => (
                    <div key={r.num} className="flex gap-4 pb-5 border-b border-white/[0.07] last:border-0 last:pb-0">
                      <span className="text-secondary font-extrabold text-lg w-8 flex-shrink-0">{r.num}</span>
                      <div>
                        <div className="font-bold text-sm mb-0.5">{r.title}</div>
                        <div className="text-white/50 text-xs leading-relaxed">{r.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-secondary rounded-xl -z-10 opacity-60" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
