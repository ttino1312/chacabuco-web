"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, BookOpen, Wrench } from "lucide-react";
import { SCHOOL_INFO, SPECIALTIES } from "@/lib/data";

const stats = [
  { icon: GraduationCap, label: "Especialidades",      value: "4"   },
  { icon: BookOpen,       label: "Años de cursada",     value: "7"   },
  { icon: Users,          label: "Años de trayectoria", value: "50+" },
  { icon: Wrench,         label: "Talleres equipados",  value: "6"   },
];

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 26 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.6, delay, ease },
});

export function HeroSection() {
  return (
    <section className="relative bg-[#111] min-h-[92vh] flex items-center overflow-hidden pb-12">
      {/* Grid texture */}
      <div className="absolute inset-0 grid-dark" />

      {/* Red quadrant accent — mirrors the shield's red sectors */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(225deg, rgba(183,28,28,0.12) 0%, transparent 55%)" }} />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(229,57,53,0.06), transparent 70%)" }} />

      {/* Bottom red stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]
                      bg-gradient-to-r from-[#E53935]/0 via-[#E53935] to-[#E53935]/0" />

      <div className="container-custom relative z-10 w-full pt-4">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: text ── */}
          <div>
            <motion.div {...fadeUp(0)}
              className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10
                         rounded-full px-4 py-1.5 text-white/50 text-xs font-semibold
                         uppercase tracking-widest mb-7">
              <span className="w-1.5 h-1.5 bg-[#E53935] rounded-full animate-pulse" />
              {SCHOOL_INFO.city}, {SCHOOL_INFO.province} · DGCyE PBA
            </motion.div>

            <motion.h1 {...fadeUp(0.07)}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white
                         leading-[0.9] mb-5 tracking-tight">
              E.E.S.T.
              <br />
              <span className="text-white/70">N°6</span>
              <br />
              <span className="text-[#E53935]" style={{ WebkitTextStroke: "0.5px rgba(229,57,53,0.3)" }}>
                Chacabuco
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.14)}
              className="text-white/50 text-lg leading-relaxed mb-9 max-w-md">
              Formamos técnicos con sólida preparación práctica y teórica,
              listos para el mundo laboral y la educación superior.
              Morón, Buenos Aires.
            </motion.p>

            <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-3 mb-12">
              <Link href="/oferta-academica"
                className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#B71C1C]
                           active:scale-95 text-white font-bold px-5 py-2.5 rounded-lg
                           transition-all duration-200 text-sm"
                style={{ boxShadow: "0 4px 18px rgba(229,57,53,0.4)" }}>
                Ver especialidades <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contacto"
                className="inline-flex items-center gap-2 bg-white/[0.07] border border-white/15
                           hover:bg-white/[0.13] hover:border-white/25 active:scale-95
                           text-white font-semibold px-5 py-2.5 rounded-lg
                           transition-all duration-200 text-sm">
                Inscripciones
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.26)} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label}
                  className="bg-white/[0.05] border border-white/[0.07] rounded-xl p-4 text-center
                             hover:border-[#E53935]/40 hover:bg-white/[0.08] transition-all duration-200 group">
                  <Icon className="w-4 h-4 text-[#E53935] mx-auto mb-2
                                   group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-extrabold text-white leading-none">{value}</div>
                  <div className="text-white/40 text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Shield + specialties ── */}
          <div className="hidden lg:flex flex-col items-center gap-8">

            {/* Animated shield */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotate: -4 }}
              animate={{ opacity: 1, scale: 1,    rotate: 0  }}
              transition={{ duration: 0.75, delay: 0.25, ease }}
              className="relative"
            >
              {/* Glow rings */}
              <motion.div
                className="absolute inset-[-30px] rounded-full border border-[#E53935]/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-56px] rounded-full border border-white/[0.04]"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />

              {/* Red glow behind shield */}
              <div className="absolute inset-[-20px] rounded-full"
                style={{ background: "radial-gradient(ellipse, rgba(229,57,53,0.18) 0%, transparent 70%)" }} />

              {/* Actual logo */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/logo.png"
                  alt="Escudo E.E.S.T. N°6 Chacabuco"
                  width={220}
                  height={268}
                  className="drop-shadow-[0_16px_48px_rgba(229,57,53,0.3)]
                             drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* Specialty mini-cards */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {SPECIALTIES.map((s, i) => (
                <motion.div key={s.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ duration: 0.45, delay: 0.5 + i * 0.08, ease }}
                >
                  <Link href={`/oferta-academica/${s.slug}`}
                    className="group block bg-white/[0.04] hover:bg-white/[0.09]
                               border border-white/[0.07] hover:border-[#E53935]/40
                               rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5">
                    <div className="text-2xl mb-2">{s.icon}</div>
                    <h3 className="text-white font-semibold text-xs mb-0.5 leading-tight">
                      Técnico en {s.name}
                    </h3>
                    <div className="flex items-center gap-1 text-[#E53935]/60 text-xs
                                    group-hover:text-[#E53935] transition-colors">
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
