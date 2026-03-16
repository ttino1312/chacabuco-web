"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, Download, Users, Mail } from "lucide-react";

const links = [
  { icon: GraduationCap, label: "Inscripciones", desc: "Ingreso 2025",         href: "/contacto#inscripciones", bg: "bg-secondary text-white"    },
  { icon: BookOpen,       label: "Académico",     desc: "4 especialidades",     href: "/oferta-academica",       bg: "bg-primary text-white"      },
  { icon: Calendar,       label: "Noticias",      desc: "Novedades y eventos",  href: "/noticias",               bg: "bg-primary-600 text-white"  },
  { icon: Download,       label: "Descargas",     desc: "Circulares",           href: "/descargas",              bg: "bg-gray-700 text-white"     },
  { icon: Users,          label: "Personal",      desc: "Equipo docente",       href: "/personal",               bg: "bg-primary-700 text-white"  },
  { icon: Mail,           label: "Contacto",      desc: "Escribinos",           href: "/contacto",               bg: "bg-accent text-white"       },
];

export function QuickLinks() {
  return (
    <section className="bg-surface py-8 border-b border-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {links.map((link, i) => (
            <motion.div key={link.href}
              initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.3, delay:i*0.05 }}
            >
              <Link href={link.href} className="group block">
                <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-bg
                               border border-gray-100 hover:border-secondary/30
                               hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)]
                               transition-all duration-200 group-hover:-translate-y-0.5 text-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${link.bg}
                                  group-hover:scale-110 transition-transform duration-200`}>
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-text-primary leading-tight">{link.label}</div>
                    <div className="text-gray-400 text-xs hidden sm:block">{link.desc}</div>
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
