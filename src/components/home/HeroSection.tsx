"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, BookOpen, Wrench } from "lucide-react";
import { SPECIALTIES } from "@/lib/data";

const stats = [
  { icon: GraduationCap, label: "Especialidades",      value: "4"   },
  { icon: BookOpen,       label: "Años de cursada",     value: "7"   },
  { icon: Users,          label: "Años de trayectoria", value: "50+" },
  { icon: Wrench,         label: "Talleres equipados",  value: "6"   },
];

const ease = [0.22, 1, 0.36, 1] as const;
const up = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease },
});

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pb-12"
      style={{ background: "#0a0a0a" }}>

      {/* Grid */}
      <div className="absolute inset-0 grid-dark" />

      {/* Red corner glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: "linear-gradient(225deg, rgba(183,28,28,0.10) 0%, transparent 55%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(229,57,53,0.07), transparent 70%)" }} />

      {/* Bottom red stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(to right, transparent, #E53935, transparent)" }} />

      <div className="container-custom relative z-10 w-full pt-6">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT ── */}
          <div>
            {/* Location badge */}
            <motion.div {...up(0)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 text-xs font-semibold uppercase tracking-widest"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }}>
              <span className="w-1.5 h-1.5 bg-[#E53935] rounded-full animate-pulse" />
              Morón, Buenos Aires
            </motion.div>

            <motion.h1 {...up(0.07)}
              className="font-extrabold text-white leading-[0.9] mb-5 tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}>
              E.E.S.T.
              <br />
              <span style={{ color: "rgba(255,255,255,0.65)" }}>N°6</span>
              <br />
              <span style={{ color: "#E53935" }}>Chacabuco</span>
            </motion.h1>

            <motion.p {...up(0.14)}
              className="text-lg leading-relaxed mb-9 max-w-md"
              style={{ color: "rgba(255,255,255,0.50)" }}>
              Formamos técnicos con sólida preparación práctica y teórica,
              listos para el mundo laboral y la educación superior.
            </motion.p>

            <motion.div {...up(0.2)} className="flex flex-wrap gap-3 mb-12">
              <Link href="/oferta-academica" className="btn-primary">
                Ver especialidades <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="btn-ghost">
                Inscripciones
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...up(0.26)} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label}
                  className="rounded-xl p-4 text-center group cursor-default
                             transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.4)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                  <Icon className="w-4 h-4 text-[#E53935] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-extrabold text-white leading-none">{value}</div>
                  <div className="text-xs mt-1 leading-tight" style={{ color: "rgba(255,255,255,0.38)" }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: shield + specialty cards ── */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            {/* Animated shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="relative flex items-center justify-center"
            >
              {/* Orbiting rings */}
              <motion.div className="absolute rounded-full border border-[#E53935]/10"
                style={{ inset: -40 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute rounded-full border border-white/[0.04]"
                style={{ inset: -68 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />

              {/* Red glow */}
              <div className="absolute rounded-full pointer-events-none"
                style={{ inset: -24, background: "radial-gradient(ellipse, rgba(229,57,53,0.18) 0%, transparent 70%)" }} />

              {/* Shield */}
              <motion.div
                animate={{ y: [0, -9, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/logo.png"
                  alt="Escudo E.E.S.T. N°6 Chacabuco"
                  width={230}
                  height={280}
                  className="drop-shadow-[0_20px_60px_rgba(229,57,53,0.35)] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Specialty mini cards */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {SPECIALTIES.map((s, i) => (
                <motion.div key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.52 + i * 0.09, ease }}
                >
                  <Link href={`/oferta-academica/${s.slug}`}
                    className="group block rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(229,57,53,0.4)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; }}
                  >
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <h3 className="text-white font-semibold text-xs mb-0.5 leading-tight">
                      Técnico en {s.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs transition-colors"
                      style={{ color: "rgba(229,57,53,0.55)" }}>
                      Ver plan <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
