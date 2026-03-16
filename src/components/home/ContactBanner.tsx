"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

const items = [
  { icon:MapPin,  title:"Dirección",     content:`${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`, href:SCHOOL_INFO.mapsLink, ext:true },
  { icon:Phone,   title:"Teléfono",      content:SCHOOL_INFO.phone,                             href:`tel:${SCHOOL_INFO.phone}` },
  { icon:Mail,    title:"Email familias",content:SCHOOL_INFO.emailFamilies,                     href:`mailto:${SCHOOL_INFO.emailFamilies}` },
  { icon:Clock,   title:"Horarios",      content:`M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href:null },
];

export function ContactBanner() {
  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "#111" }}>
      <div className="absolute inset-0 grid-dark" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E53935]" />
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }}>
            <div className="flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-8 h-px bg-[#E53935]" />Contacto
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Querés saber más?<br /><span className="text-[#E53935]">Hablemos.</span>
            </h2>
            <p className="leading-relaxed mb-8 max-w-md" style={{ color: "rgba(255,255,255,0.50)" }}>
              Para consultas sobre inscripciones, requisitos, horarios o cualquier información institucional.
            </p>
            <Link href="/contacto" className="btn-primary">Ir a contacto <ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5, delay:0.15 }} className="grid sm:grid-cols-2 gap-3">
            {items.map(item => {
              const inner = (
                <div className="rounded-xl p-4 flex gap-3 items-start transition-all duration-200 group h-full"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(229,57,53,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.06)"; }}>
                  <item.icon className="w-4 h-4 text-[#E53935] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color:"rgba(255,255,255,0.35)" }}>{item.title}</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors leading-snug">{item.content}</div>
                  </div>
                </div>
              );
              return item.href
                ? <a key={item.title} href={item.href} target={item.ext?"_blank":undefined} rel="noopener noreferrer">{inner}</a>
                : <div key={item.title}>{inner}</div>;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
