"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

const specialties = [
  { icon: "🚗", name: "Automotores",     slug: "automotores"    },
  { icon: "⚡", name: "Electromecánica", slug: "electromecanica"},
  { icon: "💻", name: "Informática",     slug: "informatica"    },
  { icon: "⌨️", name: "Programación",    slug: "programacion"   },
];

export default function HomePage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section className="relative flex items-center min-h-screen overflow-hidden">
        <div className="absolute inset-0 grid-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ background: "linear-gradient(to right, transparent, #E53935, transparent)" }} />

        <div className="container-custom relative z-10 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                Morón, Buenos Aires
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="font-extrabold text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.8rem, 5vw, 5rem)" }}
              >
                Secundaria técnica
                <br />
                con <span style={{ color: "#E53935" }}>título oficial</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-lg leading-relaxed mb-10 max-w-md"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                Tu hijo termina con un título técnico habilitante
                para trabajar o seguir en la universidad.
                Educación pública y gratuita.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.22 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link href="/contacto#inscripciones" className="btn-primary text-base px-8 py-4">
                  Inscribir a mi hijo <ArrowRight className="w-5 h-5" />
                </Link>
                <a href={`tel:${SCHOOL_INFO.phone}`} className="btn-ghost text-base px-8 py-4">
                  <Phone className="w-4 h-4" /> {SCHOOL_INFO.phone}
                </a>
              </motion.div>

              {/* Contact strip */}
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-5 text-sm"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#E53935]" />
                  Av. Rivadavia 17337
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E53935]" />
                  Mañana y tarde
                </span>
              </motion.div>
            </div>

            {/* Shield */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute rounded-full pointer-events-none"
                  style={{ inset: -20, background: "radial-gradient(ellipse, rgba(229,57,53,0.18) 0%, transparent 70%)" }} />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src="/logo.png" alt="E.E.S.T. N°6 Chacabuco"
                    width={260} height={320} priority
                    className="drop-shadow-[0_20px_60px_rgba(229,57,53,0.30)]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="py-16" style={{ background: "#111" }}>
        <div className="container-custom">
          <p className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "rgba(255,255,255,0.30)" }}>
            ¿Qué va a estudiar?
          </p>
          <h2 className="text-2xl font-bold text-white mb-8">
            4 especialidades, todas con salida laboral
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
              >
                <Link href={`/oferta-academica/${s.slug}`}
                  className="group flex items-center gap-3 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="font-semibold text-sm text-white group-hover:text-[#E53935] transition-colors">
                    {s.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-16" style={{ background: "#0a0a0a" }}>
        <div className="container-custom">
          <div className="rounded-2xl p-10 text-center relative overflow-hidden"
            style={{ background: "#161616", border: "1px solid rgba(229,57,53,0.2)" }}>
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E53935]" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              ¿Querés anotarlo?
            </h3>
            <p className="mb-8 max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
              Las inscripciones están abiertas. Completá el formulario o llamanos.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contacto#inscripciones" className="btn-primary text-base px-8 py-3.5">
                Inscribir a mi hijo <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={`tel:${SCHOOL_INFO.phone}`} className="btn-ghost text-base px-8 py-3.5">
                <Phone className="w-4 h-4" /> {SCHOOL_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
