import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { NewsCard } from "@/components/shared/NewsCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { NewsArticle } from "@/types";

export const metadata: Metadata = {
  title: "Noticias y Novedades",
  description: "Mantenete informado con las últimas noticias de la E.E.S.T. N°6 Chacabuco.",
};

const FALLBACK_NEWS: NewsArticle[] = [
  {
    id: "1",
    title: "Inscripciones abiertas para el ciclo lectivo 2025",
    slug: "inscripciones-2025",
    excerpt: "Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025. Los interesados deben presentarse con la documentación requerida.",
    content: "<p>Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025.</p><p>Para inscribirse a primer año, el alumno debe contar con el certificado de finalización de estudios primarios, DNI y dos fotos carnet.</p>",
    category: "Ingresantes",
    published_at: "2024-12-01T00:00:00Z",
    featured: true,
    created_at: "2024-12-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Proyecto de Programación obtiene primer lugar en concurso provincial",
    slug: "proyecto-programacion-primer-lugar",
    excerpt: "Alumnos de 7° año de la especialidad Programación representaron a la institución en el concurso de innovación tecnológica educativa, obteniendo el primer lugar con su aplicación web para gestión escolar.",
    content: "<p>Con gran orgullo anunciamos que un grupo de alumnos de 7° año de la especialidad Programación obtuvo el primer puesto en el concurso provincial de innovación tecnológica educativa.</p>",
    category: "Académico",
    published_at: "2024-11-15T00:00:00Z",
    featured: false,
    created_at: "2024-11-15T00:00:00Z",
  },
  {
    id: "3",
    title: "Acto de colación de grado — Egresados Promoción 2024",
    slug: "colacion-grado-2024",
    excerpt: "La institución celebró el acto de cierre del año lectivo con la entrega de títulos a los egresados de las cuatro especialidades técnicas. Una tarde de emoción y reconocimiento.",
    content: "<p>El pasado viernes se llevó a cabo el acto de colación de grado para los egresados de la Promoción 2024.</p>",
    category: "Institucional",
    published_at: "2024-12-10T00:00:00Z",
    featured: false,
    created_at: "2024-12-10T00:00:00Z",
  },
  {
    id: "4",
    title: "Mesas de examen — Diciembre 2024",
    slug: "mesas-examen-diciembre-2024",
    excerpt: "Se publican las fechas de mesas de examen para el período diciembre 2024. Los alumnos pueden consultar el cronograma completo con las materias y aulas asignadas.",
    content: "<p>Se informa a los alumnos las fechas de mesas de examen para diciembre 2024.</p>",
    category: "Mesas de examen",
    published_at: "2024-11-20T00:00:00Z",
    featured: false,
    created_at: "2024-11-20T00:00:00Z",
  },
  {
    id: "5",
    title: "Jornada de puertas abiertas para ingresantes 2025",
    slug: "puertas-abiertas-2025",
    excerpt: "Invitamos a los futuros alumnos y sus familias a conocer las instalaciones, talleres y laboratorios de nuestra institución. Habrá actividades de demostración en todas las especialidades.",
    content: "<p>La institución organiza una jornada de puertas abiertas para los futuros ingresantes y sus familias.</p>",
    category: "Eventos",
    published_at: "2024-10-30T00:00:00Z",
    featured: false,
    created_at: "2024-10-30T00:00:00Z",
  },
  {
    id: "6",
    title: "Comunicado: inicio del segundo semestre 2024",
    slug: "inicio-segundo-semestre-2024",
    excerpt: "Se informa a toda la comunidad educativa las novedades institucionales para el comienzo del segundo período del año lectivo, incluyendo cambios de horarios y nuevas reglamentaciones.",
    content: "<p>Comunicado institucional sobre el inicio del segundo semestre.</p>",
    category: "Comunicados",
    published_at: "2024-07-31T00:00:00Z",
    featured: false,
    created_at: "2024-07-31T00:00:00Z",
  },
];

const CATEGORIES = [
  "Todos",
  "Institucional",
  "Académico",
  "Eventos",
  "Ingresantes",
  "Comunicados",
  "Mesas de examen",
];

async function getNews(): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("published_at", { ascending: false });
    if (error) throw error;
    return data?.length ? data : FALLBACK_NEWS;
  } catch {
    return FALLBACK_NEWS;
  }
}

export default async function NoticiasPage() {
  const news = await getNews();
  const featured = news.find((n) => n.featured);
  const rest = news.filter((n) => !n.featured || n.id !== featured?.id);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
            Actualidad
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Noticias y Novedades
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Toda la información institucional, académica y eventos de la E.E.S.T. N°6 Chacabuco.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          {/* Featured */}
          {featured && (
            <div className="mb-12">
              <SectionHeader tag="Destacado" title="" className="mb-6" />
              <NewsCard article={featured} featured />
            </div>
          )}

          {/* Grid */}
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Todas las noticias
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {news.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              No hay noticias publicadas aún.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
