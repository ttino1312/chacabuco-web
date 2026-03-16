"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SCHOOL_INFO, AUTHORITIES } from "@/lib/data";
import { Mail, Award, Users, BookOpen, Target } from "lucide-react";

const timelineEvents = [
  {
    year: "Fundación",
    title: "Creación de la E.E.S.T. N°6",
    desc: 'Se funda la Escuela de Educación Secundaria Técnica N°6 "Chacabuco" en Morón, respondiendo a la demanda de formación técnica industrial de la región.',
    icon: "🏫",
  },
  {
    year: "Consolidación",
    title: "Expansión de talleres y laboratorios",
    desc: "Incorporación de talleres de tornería, soldadura, ajuste y carpintería. Crecimiento del cuerpo docente y ampliación de la infraestructura edilicia.",
    icon: "🔧",
  },
  {
    year: "Era Digital",
    title: "Apertura de la especialidad Informática",
    desc: "La institución se adapta a los cambios tecnológicos sumando la especialidad en Informática Profesional y Personal.",
    icon: "💻",
  },
  {
    year: "Modernización",
    title: "Incorporación de Programación",
    desc: "Se crea la especialidad Programación, preparando egresados para la industria del software y el desarrollo tecnológico.",
    icon: "⌨️",
  },
  {
    year: "Presente",
    title: "Transformación digital educativa",
    desc: "Aulas digitales, conectividad, plataformas virtuales y nuevas metodologías de enseñanza técnica para el siglo XXI.",
    icon: "🚀",
  },
];

export default function InstitucionalPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
              Quiénes somos
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Información Institucional
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Conocé nuestra historia, misión, visión y las autoridades de la{" "}
              {SCHOOL_INFO.fullName}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding bg-bg" id="historia">
        <div className="container-custom">
          <SectionHeader
            tag="Historia"
            title="El espíritu Chacabuco"
            description={`La ${SCHOOL_INFO.fullName} lleva el nombre de la histórica batalla que contribuyó a la Independencia americana, como símbolo de superación, esfuerzo y compromiso con un futuro mejor.`}
            className="mb-14"
          />

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/30 to-transparent hidden md:block" />

            <div className="space-y-10">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="md:pl-16 relative"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 bg-surface border-2 border-secondary rounded-full flex items-center justify-center text-xl hidden md:flex">
                    {event.icon}
                  </div>
                  <div className="bg-surface rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">
                      {event.year}
                    </div>
                    <h3 className="text-lg font-bold text-text-secondary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-surface" id="mision-vision">
        <div className="container-custom">
          <SectionHeader
            tag="Identidad"
            title="Misión y Visión"
            centered
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-bg rounded-xl p-8 border-t-4 border-secondary"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-secondary mb-3">
                Misión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Brindar una formación técnica integral de calidad que combine
                conocimientos teóricos sólidos con habilidades prácticas
                aplicadas, preparando a nuestros egresados para insertarse
                exitosamente en el mercado laboral y/o continuar estudios
                superiores, con valores de responsabilidad, creatividad y
                compromiso social.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-bg rounded-xl p-8 border-t-4 border-secondary"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-text-secondary mb-3">
                Visión
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Ser reconocida como una institución educativa técnica de
                referencia en el partido de Morón y la región, destacada por la
                excelencia académica, la innovación pedagógica y la formación de
                ciudadanos técnicamente competentes y éticamente comprometidos
                con el desarrollo de Argentina.
              </p>
            </motion.div>
          </div>

          {/* Valores */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Award, label: "Excelencia académica", color: "primary" },
              { icon: Users, label: "Inclusión y respeto", color: "accent" },
              { icon: Target, label: "Innovación constante", color: "secondary" },
              { icon: BookOpen, label: "Aprendizaje práctico", color: "primary" },
            ].map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="bg-bg rounded-xl p-5 text-center border border-gray-100"
              >
                <div
                  className={`w-10 h-10 bg-${v.color}/10 rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <v.icon className={`w-5 h-5 text-${v.color}`} />
                </div>
                <div className="text-sm font-semibold text-text-secondary">
                  {v.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="section-padding bg-bg" id="autoridades">
        <div className="container-custom">
          <SectionHeader
            tag="Conducción"
            title="Autoridades"
            description="Equipo directivo y de conducción de la institución."
            centered
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {AUTHORITIES.map((a, i) => (
              <motion.div
                key={a.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-surface rounded-xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">
                  {a.role}
                </div>
                <div className="font-bold text-text-secondary mb-1">{a.name}</div>
                <div className="text-xs text-text-secondary mb-3">
                  {a.department}
                </div>
                {a.email && (
                  <a
                    href={`mailto:${a.email}`}
                    className="inline-flex items-center gap-1 text-xs text-secondary hover:underline"
                  >
                    <Mail className="w-3 h-3" />
                    {a.email}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info institucional */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Información de contacto institucional
                </h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>
                    <span className="font-bold text-white">Dirección: </span>
                    {SCHOOL_INFO.address}, {SCHOOL_INFO.city},{" "}
                    {SCHOOL_INFO.province}
                  </div>
                  <div>
                    <span className="font-bold text-white">Teléfono: </span>
                    {SCHOOL_INFO.phone}
                  </div>
                  <div>
                    <span className="font-bold text-white">Email familias: </span>
                    {SCHOOL_INFO.emailFamilies}
                  </div>
                  <div>
                    <span className="font-bold text-white">Email secretaría: </span>
                    {SCHOOL_INFO.emailSecretaria}
                  </div>
                  <div>
                    <span className="font-bold text-white">Email oficial: </span>
                    {SCHOOL_INFO.emailOficial}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Horarios de atención</h3>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex justify-between border-b border-white/15 pb-2">
                    <span>Turno Mañana</span>
                    <span className="font-bold text-white">
                      {SCHOOL_INFO.schedules.morning}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-white/15 pb-2">
                    <span>Turno Tarde</span>
                    <span className="font-bold text-white">
                      {SCHOOL_INFO.schedules.afternoon}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dependencia</span>
                    <span className="font-bold text-white text-right text-xs">
                      DGCyE · Pcia. de Buenos Aires
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
