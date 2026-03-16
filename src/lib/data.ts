import type { Specialty } from "@/types";

export const SCHOOL_INFO = {
  name: "E.E.S.T. N°6",
  fullName: 'Escuela de Educación Secundaria Técnica N°6 "Chacabuco"',
  shortName: "Técnica Chacabuco",
  address: "Av. Rivadavia 17337",
  city: "Morón",
  province: "Buenos Aires",
  country: "Argentina",
  phone: "4629-7744",
  emailFamilies: "chacabucot6@gmail.com",
  emailSecretaria: "chacabucot6s@gmail.com",
  emailOficial: "tecnica6moron@abc.gob.ar",
  instagram: "https://www.instagram.com/",
  whatsapp: "https://wa.me/5491140000000",
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.0!2d-58.6196!3d-34.6545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Rivadavia%2017337%2C%20Mor%C3%B3n!5e0!3m2!1ses!2sar!4v1",
  mapsLink:
    "https://maps.google.com/?q=Av.+Rivadavia+17337+Morón+Buenos+Aires+Argentina",
  schedules: {
    morning: "7:30 — 12:30 hs",
    afternoon: "13:00 — 18:00 hs",
  },
  description:
    "Escuela secundaria de formación técnica para jóvenes comprometidos con el aprendizaje práctico y profesional en Morón, Buenos Aires.",
};

export const BASIC_CYCLE = {
  title: "Ciclo Básico",
  description:
    "Los alumnos finalizarán el ciclo lectivo básico teniendo la capacidad de manipular herramientas de carpintería y hojalatería; desenvolverse en electricidad y soldadura; y valerse en tornería.",
  years: [
    {
      year: 1,
      label: "Primer Año",
      general: [
        { name: "Ciencias Naturales", hours: 144 },
        { name: "Ciencias Sociales", hours: 144 },
        { name: "Inglés", hours: 72 },
        { name: "Matemática", hours: 72 },
        { name: "Prácticas del Lenguaje", hours: 144 },
        { name: "Construcción de la Ciudadanía", hours: 72 },
        { name: "Educación Artística", hours: 72 },
        { name: "Educación Física", hours: 72 },
      ],
      generalTotal: 792,
      technical: [
        { name: "Carpintería", hours: 72 },
        { name: "Hojalatería", hours: 72 },
        { name: "Dibujo Técnico", hours: 72 },
      ],
      technicalTotal: 216,
      annualTotal: 1008,
    },
    {
      year: 2,
      label: "Segundo Año",
      general: [
        { name: "Biología", hours: 72 },
        { name: "Físico Química", hours: 72 },
        { name: "Geografía", hours: 72 },
        { name: "Historia", hours: 72 },
        { name: "Inglés", hours: 72 },
        { name: "Matemática", hours: 72 },
        { name: "Práctica del Lenguaje", hours: 144 },
        { name: "Construcción de la Ciudadanía", hours: 72 },
        { name: "Educación Artística", hours: 72 },
        { name: "Educación Física", hours: 72 },
      ],
      generalTotal: 792,
      technical: [
        { name: "Carpintería", hours: 72 },
        { name: "Ajustes", hours: 72 },
        { name: "Electricidad", hours: 72 },
        { name: "Soldadura", hours: 72 },
      ],
      technicalTotal: 288,
      annualTotal: 1080,
    },
    {
      year: 3,
      label: "Tercer Año",
      general: [
        { name: "Biología", hours: 72 },
        { name: "Físico Química", hours: 72 },
        { name: "Geografía", hours: 72 },
        { name: "Historia", hours: 72 },
        { name: "Inglés", hours: 72 },
        { name: "Matemática", hours: 72 },
        { name: "Práctica del Lenguaje", hours: 144 },
        { name: "Construcción de la Ciudadanía", hours: 72 },
        { name: "Educación Artística", hours: 72 },
        { name: "Educación Física", hours: 72 },
      ],
      generalTotal: 792,
      technical: [
        { name: "Herrería", hours: 72 },
        { name: "Electricidad", hours: 72 },
        { name: "Ajustes", hours: 72 },
        { name: "Tornería", hours: 72 },
      ],
      technicalTotal: 288,
      annualTotal: 1080,
    },
  ],
  workshops: [
    {
      name: "Taller de Carpintería",
      icon: "🪵",
      description: "Trabajo en madera, medición, corte y ensamble de piezas.",
    },
    {
      name: "Taller de Hojalatería",
      icon: "🔨",
      description:
        "Conformado de chapas metálicas, corte y plegado industrial.",
    },
    {
      name: "Taller de Electricidad",
      icon: "⚡",
      description: "Instalaciones eléctricas domiciliarias e industriales.",
    },
    {
      name: "Taller de Soldadura",
      icon: "🔥",
      description: "Soldadura eléctrica, autógena y MIG/MAG.",
    },
    {
      name: "Taller de Ajuste",
      icon: "🔩",
      description: "Metrología, ajuste manual y técnicas de precisión.",
    },
    {
      name: "Taller de Tornería",
      icon: "⚙️",
      description: "Mecanizado en torno y fresadora para piezas de precisión.",
    },
  ],
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "automotores",
    name: "Automotores",
    slug: "automotores",
    icon: "🚗",
    color: "primary",
    description:
      "Formación integral en sistemas mecánicos, eléctricos y electrónicos del automóvil moderno.",
    profile:
      "El egresado será capaz de interpretar las definiciones estratégicas surgidas de los estamentos técnicos, teniendo en cuenta los criterios de seguridad, impacto ambiental, relaciones humanas, calidad y productividad. Las funciones primordiales del técnico en automotores están divididas en: proyectar, diseñar y calcular componentes, sistemas e instalaciones del automotor; montar y desmontar componentes; verificar y evaluar sistemas; operar y mantener instalaciones; realizar e interpretar ensayos de motores; comercializar y asesorar en servicios del área automotriz; y generar emprendimientos.",
    years: [
      {
        year: 4,
        label: "Cuarto Año",
        total_hours: 1476,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Salud y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 396,
            subjects: [
              { name: "Matemática - Ciclo Superior", hours: 144 },
              { name: "Física", hours: 108 },
              { name: "Química", hours: 72 },
              { name: "Conocimiento de los Materiales", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 648,
            subjects: [
              { name: "Dibujo Tecnológico", hours: 72 },
              { name: "Electrotecnia del Automotor", hours: 72 },
              { name: "Motores de Combustión Interna", hours: 144 },
              { name: "Instalaciones y Aplicaciones de la Energía", hours: 144 },
              { name: "Conocimientos de las Estructuras", hours: 108 },
              { name: "Verificación y Mantenimiento Eléctrico del Automóvil", hours: 108 },
            ],
          },
        ],
      },
      {
        year: 5,
        label: "Quinto Año",
        total_hours: 1404,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Política y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 396,
            subjects: [
              { name: "Análisis Matemático", hours: 144 },
              { name: "Resistencia y Ensayos de los Materiales", hours: 108 },
              { name: "Termodinámica", hours: 72 },
              { name: "Mecánica de los Motores Endotérmicos", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 576,
            subjects: [
              { name: "Sistemas de Suspensión, Dirección y Frenos", hours: 144 },
              { name: "Motores de Combustión Interna", hours: 144 },
              { name: "Electrónica y Autotrónica", hours: 144 },
              { name: "Instalaciones y Aplicaciones de la Energía", hours: 144 },
            ],
          },
        ],
      },
      {
        year: 6,
        label: "Sexto Año",
        total_hours: 1476,
        subjects: [
          {
            group: "Formación General",
            total_hours: 360,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Filosofía", hours: 72 },
              { name: "Arte", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 540,
            subjects: [
              { name: "Matemática Aplicada", hours: 72 },
              { name: "Sistemas Hidráulicos y Neumáticos", hours: 108 },
              { name: "Instrumental de Medición", hours: 72 },
              { name: "Combustión de los Motores Endotérmicos", hours: 108 },
              { name: "Instalaciones de GNC y GLP", hours: 72 },
              { name: "Seguridad, Higiene y Protección Ambiental", hours: 72 },
              { name: "Derechos del Trabajo", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 576,
            subjects: [
              { name: "Sistemas de Inyección", hours: 72 },
              { name: "Rectificación de Motores", hours: 72 },
              { name: "Laboratorio de Ensayos de Motores", hours: 144 },
              { name: "Instalaciones y Aplicaciones de la Energía", hours: 144 },
              { name: "Proyecto y Diseño de Instalaciones Eléctricas", hours: 144 },
            ],
          },
        ],
      },
      {
        year: 7,
        label: "Séptimo Año",
        total_hours: 1172,
        subjects: [
          {
            group: "Prácticas Profesionalizantes",
            total_hours: 200,
            subjects: [{ name: "Prácticas del Sector Automotriz", hours: 200 }],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 432,
            subjects: [
              { name: "Emprendimientos Productivos y Desarrollo Local", hours: 72 },
              { name: "Técnicas de Diagnóstico", hours: 108 },
              { name: "Productos y Procesos de Manufactura Automotriz", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 540,
            subjects: [
              { name: "Sistemas Autotrónicos", hours: 108 },
              { name: "Proyecto y Diseño de Carrocerías", hours: 144 },
              { name: "Proyecto y Diseño de Chasis y Sistemas de Suspensión", hours: 144 },
              { name: "Sistemas de Transmisión", hours: 72 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "electromecanica",
    name: "Electromecánica",
    slug: "electromecanica",
    icon: "⚡",
    color: "accent",
    description:
      "Proyección, diseño y mantenimiento de equipos e instalaciones mecánicas y electromecánicas.",
    profile:
      "El Técnico del sector Electromecánico está capacitado para proyectar equipos e instalaciones mecánicas, electromecánicas, de sistemas neumáticos, oleohidráulicos; circuitos eléctricos y de control de automatismos. Puede realizar ensayos de materiales y ensayos eléctricos, mecánicos y electromecánicos; operar equipos e instalaciones; realizar mantenimientos predictivo, preventivo y correctivo; montar dispositivos y componentes; instalar líneas de consumo y distribución de energía eléctrica; y generar emprendimientos.",
    years: [
      {
        year: 4,
        label: "Cuarto Año",
        total_hours: 1476,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Salud y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 396,
            subjects: [
              { name: "Matemática - Ciclo Superior", hours: 144 },
              { name: "Física", hours: 108 },
              { name: "Química", hours: 72 },
              { name: "Conocimiento de los Materiales", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 648,
            subjects: [
              { name: "Dibujo Tecnológico", hours: 72 },
              { name: "Máquinarias Eléctricas y Automatismos", hours: 144 },
              { name: "Diseño y Procesamiento Mecánico", hours: 144 },
              { name: "Sistemas Mecánicos", hours: 108 },
            ],
          },
        ],
      },
      {
        year: 5,
        label: "Quinto Año",
        total_hours: 1368,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Política y Ciudadanía", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 468,
            subjects: [
              { name: "Análisis Matemático", hours: 144 },
              { name: "Física Aplicada", hours: 108 },
              { name: "Electrotecnia I", hours: 108 },
              { name: "Resistencia y Ensayos de los Materiales", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 468,
            subjects: [
              { name: "Laboratorio de Mediciones Eléctricas", hours: 72 },
              { name: "Máquinarias Eléctricas y Automatismos", hours: 144 },
              { name: "Diseño y Procesamiento Mecánico", hours: 144 },
              { name: "Sistemas Mecánicos", hours: 108 },
            ],
          },
        ],
      },
      {
        year: 6,
        label: "Sexto Año",
        total_hours: 1368,
        subjects: [
          {
            group: "Formación General",
            total_hours: 360,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Filosofía", hours: 72 },
              { name: "Arte", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 468,
            subjects: [
              { name: "Matemática Aplicada", hours: 72 },
              { name: "Termodinámica y Máquinas Térmicas", hours: 108 },
              { name: "Electrotécnia II", hours: 108 },
              { name: "Sistemas Mecánicos", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 540,
            subjects: [
              { name: "Laboratorio de Metrología y Control de Calidad", hours: 72 },
              { name: "Mantenimiento y Montaje Electromecánico", hours: 144 },
              { name: "Diseño y Procesamiento Mecánico", hours: 144 },
            ],
          },
        ],
      },
      {
        year: 7,
        label: "Séptimo Año",
        total_hours: 1172,
        subjects: [
          {
            group: "Prácticas Profesionalizantes",
            total_hours: 200,
            subjects: [{ name: "Prácticas Profesionalizantes", hours: 200 }],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 432,
            subjects: [
              { name: "Emprendimientos Productivos y Desarrollo Local", hours: 72 },
              { name: "Electrónica Industrial", hours: 72 },
              { name: "Máquinas Eléctricas", hours: 108 },
              { name: "Seguridad, Higiene y Protección Ambiental", hours: 72 },
              { name: "Derechos del Trabajo", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 540,
            subjects: [
              { name: "Máquinarias Eléctricas y Automatismos", hours: 144 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "informatica",
    name: "Informática Profesional",
    slug: "informatica",
    icon: "💻",
    color: "secondary",
    description:
      "Instalación, mantenimiento y soporte de sistemas informáticos, redes y telecomunicaciones.",
    profile:
      "El técnico en informática profesional y personal está capacitado para asistir al usuario de productos y servicios informáticos brindándole servicios de instalación, capacitación, sistematización, mantenimiento primario, resolución de problemas derivados de la operatoria, y apoyo a la contratación de productos o servicios informáticos. Puede actuar de nexo entre el especialista o experto en el tema, producto o servicio y el usuario final.",
    years: [
      {
        year: 4,
        label: "Cuarto Año",
        total_hours: 1260,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Salud y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 396,
            subjects: [
              { name: "Matemática - Ciclo Superior", hours: 144 },
              { name: "Física", hours: 108 },
              { name: "Química", hours: 72 },
              { name: "Tecnologías Electrónicas", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Lenguajes de Programación", hours: 72 },
              { name: "Hardware Equipo Monousuario", hours: 144 },
              { name: "Introducción a los Sistemas Operativos", hours: 144 },
              { name: "Suite de Aplicaciones", hours: 72 },
            ],
          },
        ],
      },
      {
        year: 5,
        label: "Quinto Año",
        total_hours: 1224,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Política y Ciudadanía", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 360,
            subjects: [
              { name: "Análisis Matemático", hours: 144 },
              { name: "Sistemas Digitales", hours: 108 },
              { name: "Teleinformática", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Lenguajes de Programación II", hours: 72 },
              { name: "Hardware de Red", hours: 144 },
              { name: "Sistemas Operativos Mono y Multiusuario", hours: 144 },
              { name: "Arquitectura de Datos", hours: 72 },
            ],
          },
        ],
      },
      {
        year: 6,
        label: "Sexto Año",
        total_hours: 1260,
        subjects: [
          {
            group: "Formación General",
            total_hours: 360,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Filosofía", hours: 72 },
              { name: "Arte", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 468,
            subjects: [
              { name: "Matemática Aplicada", hours: 72 },
              { name: "Sistemas Digitales", hours: 108 },
              { name: "Investigación Operativa", hours: 108 },
              { name: "Seguridad Informática", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Diseño de Programas", hours: 72 },
              { name: "Diseño y Hardware de Redes Locales y WAN", hours: 144 },
              { name: "Sistemas Operativos Multiplataforma", hours: 144 },
              { name: "Diseño de APP", hours: 72 },
            ],
          },
        ],
      },
      {
        year: 7,
        label: "Séptimo Año",
        total_hours: 1064,
        subjects: [
          {
            group: "Prácticas Profesionalizantes",
            total_hours: 200,
            subjects: [{ name: "Prácticas Profesionalizantes", hours: 200 }],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 432,
            subjects: [
              { name: "Emprendimientos Productivos y Desarrollo Local", hours: 72 },
              { name: "Emprendimiento e Innovación Productiva", hours: 72 },
              { name: "Evaluación de Proyectos", hours: 72 },
              { name: "Modelos y Sistemas", hours: 108 },
              { name: "Base de Datos", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Proyecto Integrador", hours: 144 },
              { name: "Instalación, Mantenimiento y Reparación de Sistemas Computacionales", hours: 144 },
              { name: "Instalación, Mantenimiento y Reparación de Redes Informáticas", hours: 144 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "programacion",
    name: "Programación",
    slug: "programacion",
    icon: "⌨️",
    color: "primary",
    description:
      "Desarrollo de software, aplicaciones web, bases de datos y gestión de proyectos tecnológicos.",
    profile:
      "El técnico en programación estará capacitado para realizar programas o componentes de sistemas de computación: interpretar especificaciones de diseño, buscar causas de mal funcionamiento, corregir los programas o adaptarlos a cambios en las especificaciones, desarrollando las actividades escritas en el perfil profesional y cumpliendo con los criterios de realización establecidos para las mismas en el marco de un equipo de trabajo organizado por proyecto.",
    years: [
      {
        year: 4,
        label: "Cuarto Año",
        total_hours: 1260,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Salud y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 396,
            subjects: [
              { name: "Matemática - Ciclo Superior", hours: 144 },
              { name: "Física", hours: 108 },
              { name: "Química", hours: 72 },
              { name: "Arquitectura de Hardware", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Metodologías de Programación", hours: 72 },
              { name: "Hardware y Componentes", hours: 144 },
              { name: "Sistemas Operativos", hours: 144 },
              { name: "Suite de Aplicaciones", hours: 72 },
            ],
          },
        ],
      },
      {
        year: 5,
        label: "Quinto Año",
        total_hours: 1296,
        subjects: [
          {
            group: "Formación General",
            total_hours: 432,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Política y Adolescencia", hours: 72 },
              { name: "Historia", hours: 72 },
              { name: "Geografía", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 432,
            subjects: [
              { name: "Análisis Matemático", hours: 144 },
              { name: "Sistemas Digitales", hours: 108 },
              { name: "Base de Datos", hours: 72 },
              { name: "Modelos y Sistemas I", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Lenguajes de Programación I", hours: 144 },
              { name: "Redes Informáticas", hours: 144 },
              { name: "Diseño Web", hours: 72 },
              { name: "Arquitectura de Base de Datos", hours: 72 },
            ],
          },
        ],
      },
      {
        year: 6,
        label: "Sexto Año",
        total_hours: 1260,
        subjects: [
          {
            group: "Formación General",
            total_hours: 360,
            subjects: [
              { name: "Literatura", hours: 72 },
              { name: "Inglés", hours: 72 },
              { name: "Educación Física", hours: 72 },
              { name: "Filosofía", hours: 72 },
              { name: "Arte", hours: 72 },
            ],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 468,
            subjects: [
              { name: "Matemática Aplicada", hours: 72 },
              { name: "Sistemas Digitales II", hours: 108 },
              { name: "Sistemas de Gestión y Autogestión", hours: 108 },
              { name: "Seguridad Informática", hours: 108 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Lenguajes de Programación II", hours: 144 },
              { name: "Programación y Controles Automatizados", hours: 72 },
              { name: "Desarrollo de Aplicaciones Web Estáticas", hours: 72 },
              { name: "Desarrollo de Aplicaciones Web Dinámicas", hours: 144 },
            ],
          },
        ],
      },
      {
        year: 7,
        label: "Séptimo Año",
        total_hours: 956,
        subjects: [
          {
            group: "Prácticas Profesionalizantes",
            total_hours: 200,
            subjects: [{ name: "Prácticas Profesionalizantes", hours: 200 }],
          },
          {
            group: "Formación Científico Tecnológica",
            total_hours: 324,
            subjects: [
              { name: "Emprendimiento e Innovación Productiva", hours: 72 },
              { name: "Evaluación de Proyecto", hours: 72 },
              { name: "Modelos y Sistemas II", hours: 108 },
              { name: "Organización y Métodos", hours: 72 },
            ],
          },
          {
            group: "Formación Técnica Específica",
            total_hours: 432,
            subjects: [
              { name: "Proyecto Integrador", hours: 144 },
              { name: "Desarrollo de Software para Plataformas Móviles", hours: 144 },
              { name: "Diseño e Implementación de Sitios Web", hours: 144 },
            ],
          },
        ],
      },
    ],
  },
];

export const AUTHORITIES = [
  {
    role: "Director",
    name: "A confirmar",
    department: "Dirección",
    email: "tecnica6moron@abc.gob.ar",
  },
  {
    role: "Vicedirector",
    name: "A confirmar",
    department: "Dirección",
    email: "tecnica6moron@abc.gob.ar",
  },
  {
    role: "Secretaría Académica",
    name: "A confirmar",
    department: "Secretaría",
    email: "chacabucot6s@gmail.com",
  },
  {
    role: "Regente",
    name: "A confirmar",
    department: "Regencia",
    email: "chacabucot6@gmail.com",
  },
];

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  {
    label: "Institucional",
    href: "/institucional",
    children: [
      { label: "Historia", href: "/institucional#historia" },
      { label: "Misión y Visión", href: "/institucional#mision-vision" },
      { label: "Autoridades", href: "/institucional#autoridades" },
    ],
  },
  {
    label: "Oferta Académica",
    href: "/oferta-academica",
    children: [
      { label: "Ciclo Básico", href: "/oferta-academica#ciclo-basico" },
      { label: "Automotores", href: "/oferta-academica/automotores" },
      { label: "Electromecánica", href: "/oferta-academica/electromecanica" },
      { label: "Informática", href: "/oferta-academica/informatica" },
      { label: "Programación", href: "/oferta-academica/programacion" },
    ],
  },
  { label: "Noticias", href: "/noticias" },
  { label: "Personal", href: "/personal" },
  { label: "Descargas", href: "/descargas" },
  { label: "Contacto", href: "/contacto" },
];
