"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, ExternalLink, Clock } from "lucide-react";
import { SCHOOL_INFO, SPECIALTIES } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background:"#080808" }}>
      <div className="h-[3px]" style={{ background:"linear-gradient(to right, transparent, #E53935, transparent)" }} />
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                style={{ background:"#111", border:"1px solid rgba(255,255,255,0.08)" }}>
                <Image src="/logo.png" alt="E.E.S.T. N°6" width={56} height={68} className="object-contain" />
              </div>
              <div>
                <div className="font-bold text-lg text-white leading-tight">E.E.S.T. N°6</div>
                <div className="text-sm" style={{ color:"rgba(255,255,255,0.35)" }}>&ldquo;Chacabuco&rdquo; · Morón</div>
                <div className="text-xs font-semibold text-[#E53935] mt-0.5">DGCyE · Pcia. de Buenos Aires</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5" style={{ color:"rgba(255,255,255,0.32)" }}>
              Formamos técnicos comprometidos con el aprendizaje práctico y profesional para el mundo laboral.
            </p>
            <div className="space-y-2 text-sm">
              {[
                { icon:MapPin,  text:`${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`, href:SCHOOL_INFO.mapsLink },
                { icon:Phone,   text:SCHOOL_INFO.phone,                             href:`tel:${SCHOOL_INFO.phone}` },
                { icon:Mail,    text:SCHOOL_INFO.emailFamilies,                     href:`mailto:${SCHOOL_INFO.emailFamilies}` },
                { icon:Clock,   text:`M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href:null },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2.5" style={{ color:"rgba(255,255,255,0.32)" }}>
                  <item.icon className="w-3.5 h-3.5 text-[#E53935] flex-shrink-0" />
                  {item.href ? <a href={item.href} className="hover:text-white/60 transition-colors">{item.text}</a> : <span>{item.text}</span>}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4" style={{ color:"rgba(255,255,255,0.28)" }}>Especialidades</h3>
            <ul className="space-y-2.5">
              {SPECIALTIES.map(s => (
                <li key={s.id}>
                  <Link href={`/oferta-academica/${s.slug}`}
                    className="text-sm flex items-center gap-2 transition-colors hover:-translate-x-0 group"
                    style={{ color:"rgba(255,255,255,0.38)" }}>
                    <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                    <span className="group-hover:text-white transition-colors">{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider mb-4" style={{ color:"rgba(255,255,255,0.28)" }}>Accesos</h3>
            <ul className="space-y-2.5">
              {[
                {label:"Oferta Académica", href:"/oferta-academica"},
                {label:"Noticias",         href:"/noticias"},
                {label:"Descargas",        href:"/descargas"},
                {label:"Personal",         href:"/personal"},
                {label:"Contacto",         href:"/contacto"},
                {label:"Inscripciones",    href:"/contacto#inscripciones"},
              ].map(i => (
                <li key={i.href}>
                  <Link href={i.href} className="text-sm hover:text-white transition-colors" style={{ color:"rgba(255,255,255,0.38)" }}>{i.label}</Link>
                </li>
              ))}
              <li>
                <a href="https://abc.gob.ar" target="_blank" rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 hover:text-white transition-colors" style={{ color:"rgba(255,255,255,0.38)" }}>
                  Portal ABC <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ borderTop:"1px solid rgba(255,255,255,0.05)" }}>
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-center sm:text-left" style={{ color:"rgba(255,255,255,0.22)" }}>
            © {year} E.E.S.T. N°6 &ldquo;Chacabuco&rdquo; · Morón, Buenos Aires · DGCyE PBA
          </p>
          <div className="flex items-center gap-2">
            <a href={SCHOOL_INFO.instagram} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#E53935] transition-colors text-white"
              style={{ background:"rgba(255,255,255,0.06)" }}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href={`mailto:${SCHOOL_INFO.emailFamilies}`}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[#E53935] transition-colors text-white"
              style={{ background:"rgba(255,255,255,0.06)" }}>
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
