"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SCHOOL_INFO, AUTHORITIES } from "@/lib/data";
import { Mail, Award, Users, BookOpen, Target } from "lucide-react";

const timeline = [
  { y:"Fundación",    t:"Creación de la E.E.S.T. N°6",              d:"Se funda la Escuela Técnica N°6 Chacabuco en Morón, respondiendo a la demanda de formación técnica industrial de la región.", i:"🏫" },
  { y:"Consolidación",t:"Expansión de talleres y laboratorios",      d:"Incorporación de talleres de tornería, soldadura, ajuste y carpintería. Crecimiento del cuerpo docente y ampliación edilicia.", i:"🔧" },
  { y:"Era Digital",  t:"Apertura de la especialidad Informática",    d:"La institución se adapta a los cambios tecnológicos sumando la especialidad en Informática Profesional y Personal.", i:"💻" },
  { y:"Modernización",t:"Incorporación de Programación",              d:"Se crea la especialidad Programación, preparando egresados para la industria del software y el desarrollo tecnológico.", i:"⌨️" },
  { y:"Presente",     t:"Transformación digital educativa",           d:"Aulas digitales, conectividad, plataformas virtuales y nuevas metodologías de enseñanza técnica para el siglo XXI.", i:"🚀" },
];

const valores = [
  { icon: Award,    label: "Excelencia académica" },
  { icon: Users,    label: "Inclusión y respeto"  },
  { icon: Target,   label: "Innovación constante" },
  { icon: BookOpen, label: "Aprendizaje práctico" },
];

const card = {
  background: "#161616",
  border: "1px solid rgba(255,255,255,0.07)",
};

export default function InstitucionalPage() {
  return (
    <div style={{ background: "#0a0a0a" }}>
      {/* Header */}
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <div className="section-tag justify-center">
              <span className="w-7 h-px bg-[#E53935]" />Quiénes somos<span className="w-7 h-px bg-[#E53935]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Información Institucional</h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color:"rgba(255,255,255,0.50)" }}>
              Conocé nuestra historia, misión, visión y las autoridades de la {SCHOOL_INFO.fullName}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding" id="historia" style={{ background:"#0a0a0a" }}>
        <div className="container-custom">
          <SectionHeader tag="Historia" title='El espíritu "Chacabuco"'
            description="Nuestra institución lleva el nombre de la histórica batalla como símbolo de superación y compromiso con un futuro mejor."
            className="mb-14" />
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px hidden md:block"
              style={{ background:"linear-gradient(to bottom, #E53935, rgba(229,57,53,0.1))" }} />
            <div className="space-y-8">
              {timeline.map((ev, i) => (
                <motion.div key={ev.t}
                  initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                  className="md:pl-16 relative">
                  <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-[#E53935]
                                 flex items-center justify-center text-lg hidden md:flex"
                    style={{ background:"#111" }}>{ev.i}</div>
                  <div className="rounded-xl p-5 border border-white/[0.07] hover:border-[#E53935]/30 transition-colors"
                    style={{ background:"#161616" }}>
                    <div className="text-[#E53935] text-xs font-bold uppercase tracking-widest mb-1">{ev.y}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{ev.t}</h3>
                    <p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.50)" }}>{ev.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding" id="mision-vision" style={{ background:"#111" }}>
        <div className="container-custom">
          <SectionHeader tag="Identidad" title="Misión y Visión" centered className="mb-12" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[
              { icon:Target,   title:"Misión",  color:"#E53935",
                text:"Brindar una formación técnica integral de calidad que combine conocimientos teóricos sólidos con habilidades prácticas aplicadas, preparando a nuestros egresados para el mercado laboral y/o la educación superior." },
              { icon:BookOpen, title:"Visión",  color:"#3b82f6",
                text:"Ser reconocida como una institución educativa técnica de referencia en Morón, destacada por la excelencia académica, la innovación pedagógica y la formación de ciudadanos técnicamente competentes." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                className="rounded-xl p-8" style={{ ...card, borderTop:`3px solid ${item.color}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background:`${item.color}18` }}>
                  <item.icon className="w-6 h-6" style={{ color:item.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.55)" }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {valores.map((v, i) => (
              <motion.div key={v.label}
                initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.3, delay:i*0.08 }}
                className="rounded-xl p-5 text-center" style={card}>
                <div className="w-10 h-10 bg-[#E53935]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-5 h-5 text-[#E53935]" />
                </div>
                <div className="text-sm font-semibold text-white">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="section-padding" id="autoridades" style={{ background:"#0a0a0a" }}>
        <div className="container-custom">
          <SectionHeader tag="Conducción" title="Autoridades"
            description="Equipo directivo y de conducción de la institución." centered className="mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {AUTHORITIES.map((a, i) => (
              <motion.div key={a.role}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.4, delay:i*0.1 }}
                className="rounded-xl p-6 text-center hover:border-[#E53935]/30 transition-all hover:-translate-y-0.5"
                style={card}>
                <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-[#E53935]" />
                </div>
                <div className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-1">{a.role}</div>
                <div className="font-bold text-white mb-1">{a.name}</div>
                <div className="text-xs mb-3" style={{ color:"rgba(255,255,255,0.40)" }}>{a.department}</div>
                {a.email && (
                  <a href={`mailto:${a.email}`} className="inline-flex items-center gap-1 text-xs text-[#E53935] hover:underline">
                    <Mail className="w-3 h-3" />{a.email}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info card */}
      <section className="section-padding" style={{ background:"#111" }}>
        <div className="container-custom">
          <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{ background:"#0a0a0a", border:"1px solid rgba(229,57,53,0.2)" }}>
            <div className="absolute inset-0 grid-dark" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#E53935]" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contacto institucional</h3>
                <div className="space-y-2 text-sm" style={{ color:"rgba(255,255,255,0.55)" }}>
                  {[
                    ["Dirección", `${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}, ${SCHOOL_INFO.province}`],
                    ["Teléfono",  SCHOOL_INFO.phone],
                    ["Email familias", SCHOOL_INFO.emailFamilies],
                    ["Email secretaría", SCHOOL_INFO.emailSecretaria],
                    ["Email oficial", SCHOOL_INFO.emailOficial],
                  ].map(([k,v]) => (
                    <div key={k}><span className="font-bold text-white">{k}: </span>{v}</div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Horarios</h3>
                <div className="space-y-3 text-sm">
                  {[
                    ["Turno Mañana", SCHOOL_INFO.schedules.morning],
                    ["Turno Tarde", SCHOOL_INFO.schedules.afternoon],
                    ["Dependencia", "DGCyE · Pcia. de Buenos Aires"],
                  ].map(([k,v]) => (
                    <div key={k} className="flex justify-between border-b border-white/[0.06] pb-2 last:border-0">
                      <span style={{ color:"rgba(255,255,255,0.50)" }}>{k}</span>
                      <span className="font-bold text-white text-right text-xs">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
