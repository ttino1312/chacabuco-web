"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Download, Users, Mail } from "lucide-react";

const links = [
  { icon: GraduationCap, label: "Inscripciones", desc: "Ingreso 2025",        href: "/contacto#inscripciones", color: "#E53935" },
  { icon: BookOpen,       label: "Académico",    desc: "4 especialidades",    href: "/oferta-academica",       color: "#3b82f6" },
  { icon: Calendar,       label: "Noticias",     desc: "Novedades",           href: "/noticias",               color: "#8b5cf6" },
  { icon: Download,       label: "Descargas",    desc: "Circulares",          href: "/descargas",              color: "#6b7280" },
  { icon: Users,          label: "Personal",     desc: "Equipo docente",      href: "/personal",               color: "#10b981" },
  { icon: Mail,           label: "Contacto",     desc: "Escribinos",          href: "/contacto",               color: "#f59e0b" },
];

export function QuickLinks() {
  return (
    <section className="py-6 border-b border-white/[0.06]" style={{ background: "#111" }}>
      <div className="container-custom">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2.5">
          {links.map((l, i) => (
            <motion.div key={l.href}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Link href={l.href} className="group block">
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl
                               border border-white/[0.06]
                               hover:border-[#E53935]/30
                               transition-all duration-200 group-hover:-translate-y-0.5 text-center"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                 group-hover:scale-110 transition-transform duration-200"
                    style={{ background: `${l.color}20`, border: `1px solid ${l.color}30` }}>
                    <l.icon className="w-5 h-5" style={{ color: l.color }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">{l.label}</div>
                    <div className="text-xs hidden sm:block" style={{ color: "rgba(255,255,255,0.30)" }}>{l.desc}</div>
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
