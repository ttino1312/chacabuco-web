"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

const contactItems = [
  { icon: MapPin,  title: "Dirección",     content: `${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`, href: SCHOOL_INFO.mapsLink, external: true },
  { icon: Phone,   title: "Teléfono",      content: SCHOOL_INFO.phone,           href: `tel:${SCHOOL_INFO.phone}` },
  { icon: Mail,    title: "Email familias",content: SCHOOL_INFO.emailFamilies,   href: `mailto:${SCHOOL_INFO.emailFamilies}` },
  { icon: Clock,   title: "Horarios",      content: `M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href: null },
];

export function ContactBanner() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5 }}
          >
            <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-secondary" />
              Contacto
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Querés saber más?<br /><span className="text-secondary">Hablemos.</span>
            </h2>
            <p className="text-white/55 leading-relaxed mb-8 max-w-md">
              Para consultas sobre inscripciones, requisitos, horarios o cualquier información institucional.
            </p>
            <Link href="/contacto" className="btn-primary">
              Ir a contacto <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {contactItems.map(item => {
              const inner = (
                <div className="bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.07]
                               hover:border-secondary/40 rounded-xl p-4 flex gap-3 items-start
                               transition-all duration-200 group h-full">
                  <item.icon className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-0.5">{item.title}</div>
                    <div className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-snug">{item.content}</div>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.title} href={item.href} target={item.external?"_blank":undefined} rel="noopener noreferrer">{inner}</a>
              ) : (
                <div key={item.title}>{inner}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
