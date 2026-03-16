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
  { n:"01", t:"Título oficial habilitante", d:"Reconocido por el Ministerio de Educación de la Nación y la DGCyE PBA." },
  { n:"02", t:"Alta empleabilidad",          d:"Nuestros egresados se insertan rápidamente en el mercado laboral argentino." },
  { n:"03", t:"Aprendizaje práctico",         d:"Talleres y laboratorios para aprender haciendo desde 1° año." },
  { n:"04", t:"Comunidad educativa",          d:"Docentes comprometidos y ambiente de inclusión y respeto." },
];

export function AboutBanner() {
  return (
    <section className="section-padding" style={{ background: "#111" }}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity:0, x:-28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55 }}>
            <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#E53935]" />Sobre la Institución
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Formación técnica de excelencia en el corazón de Morón
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.50)" }}>
              La <strong className="text-white">E.E.S.T. N°6 &ldquo;Chacabuco&rdquo;</strong> es una institución educativa de nivel
              secundario dependiente de la DGCyE PBA, ubicada en {SCHOOL_INFO.address}, {SCHOOL_INFO.city}.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.50)" }}>
              Ofrecemos 7 años de formación integral que combina el ciclo básico general con un sólido ciclo superior
              técnico en cuatro especialidades orientadas al mercado laboral actual.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {features.map(f => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E53935] flex-shrink-0 mt-0.5" />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/institucional" className="btn-primary">
              Conocé la institución <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity:0, x:28 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.55, delay:0.1 }} className="relative">
            <div className="rounded-2xl p-8 relative overflow-hidden"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="absolute inset-0 grid-dark" />
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E53935]" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-6">¿Por qué elegirnos?</h3>
                <div className="space-y-5">
                  {reasons.map(r => (
                    <div key={r.n} className="flex gap-4 pb-5 last:pb-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <span className="text-[#E53935] font-extrabold text-lg w-8 flex-shrink-0">{r.n}</span>
                      <div>
                        <div className="font-bold text-sm text-white mb-0.5">{r.t}</div>
                        <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.40)" }}>{r.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl -z-10 opacity-40 bg-[#E53935]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
