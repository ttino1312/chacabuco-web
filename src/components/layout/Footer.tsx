import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, ExternalLink, Clock } from "lucide-react";
import { SCHOOL_INFO, SPECIALTIES } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111] text-white">
      {/* Red top accent */}
      <div className="h-[3px] bg-gradient-to-r from-[#E53935]/0 via-[#E53935] to-[#E53935]/0" />

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              {/* Shield logo */}
              <div className="w-16 h-16 rounded-xl bg-[#1a1a1a] border border-white/[0.07]
                              flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Escudo E.E.S.T. N°6 Chacabuco"
                  width={56}
                  height={68}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">E.E.S.T. N°6</div>
                <div className="text-white/40 text-sm">&ldquo;Chacabuco&rdquo; · Morón</div>
                <div className="text-[#E53935] text-xs font-semibold mt-0.5">
                  DGCyE · Pcia. de Buenos Aires
                </div>
              </div>
            </div>

            <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-5">
              Escuela de Educación Secundaria Técnica N°6 "Chacabuco" de Morón.
              Formamos técnicos comprometidos con el aprendizaje práctico y profesional.
            </p>

            <div className="space-y-2 text-sm">
              {[
                { icon: MapPin,  text: `${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`, href: SCHOOL_INFO.mapsLink  },
                { icon: Phone,   text: SCHOOL_INFO.phone,                             href: `tel:${SCHOOL_INFO.phone}` },
                { icon: Mail,    text: SCHOOL_INFO.emailFamilies,                     href: `mailto:${SCHOOL_INFO.emailFamilies}` },
                { icon: Clock,   text: `M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href: null },
              ].map(item => (
                <div key={item.text}
                  className="flex items-center gap-2.5 text-white/35">
                  <item.icon className="w-3.5 h-3.5 text-[#E53935] flex-shrink-0" />
                  {item.href
                    ? <a href={item.href} className="hover:text-white/70 transition-colors">{item.text}</a>
                    : <span>{item.text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-white/35 mb-4">
              Especialidades
            </h3>
            <ul className="space-y-2.5">
              {SPECIALTIES.map(s => (
                <li key={s.id}>
                  <Link href={`/oferta-academica/${s.slug}`}
                    className="text-white/45 text-sm hover:text-white transition-colors
                               flex items-center gap-2 group">
                    <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-xs uppercase tracking-wider text-white/35 mb-4">Accesos</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Oferta Académica",  href: "/oferta-academica"          },
                { label: "Noticias",          href: "/noticias"                  },
                { label: "Descargas",         href: "/descargas"                 },
                { label: "Personal",          href: "/personal"                  },
                { label: "Contacto",          href: "/contacto"                  },
                { label: "Inscripciones",     href: "/contacto#inscripciones"    },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-white/45 text-sm hover:text-white transition-colors
                               hover:pl-1 block transition-all duration-150">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://abc.gob.ar" target="_blank" rel="noopener noreferrer"
                  className="text-white/45 text-sm hover:text-white flex items-center gap-1 transition-colors">
                  Portal ABC <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {year} E.E.S.T. N°6 &ldquo;Chacabuco&rdquo; · Morón, Buenos Aires ·
            Dirección General de Cultura y Educación PBA
          </p>
          <div className="flex items-center gap-2">
            <a href={SCHOOL_INFO.instagram} target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 bg-white/[0.06] rounded-lg flex items-center justify-center
                         hover:bg-[#E53935] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={`mailto:${SCHOOL_INFO.emailFamilies}`}
              className="w-8 h-8 bg-white/[0.06] rounded-lg flex items-center justify-center
                         hover:bg-[#E53935] transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
