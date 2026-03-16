import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NewsCard } from "@/components/shared/NewsCard";
import { supabase } from "@/lib/supabase";
import type { NewsArticle } from "@/types";

async function getLatestNews(): Promise<NewsArticle[]> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(3);
    if (error) throw error;
    return data ?? [];
  } catch {
    return FALLBACK_NEWS;
  }
}

// Static fallback if Supabase not configured
const FALLBACK_NEWS: NewsArticle[] = [
  {
    id: "1",
    title: "Inscripciones abiertas para el ciclo lectivo 2025",
    slug: "inscripciones-2025",
    excerpt:
      "Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025.",
    content: "",
    category: "Ingresantes",
    published_at: "2024-12-01T00:00:00Z",
    featured: true,
    created_at: "2024-12-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Proyecto integrador de Programación obtiene primer lugar en concurso provincial",
    slug: "proyecto-programacion-primer-lugar",
    excerpt:
      "Alumnos de 7° año de la especialidad Programación representaron a la institución en el concurso de innovación tecnológica educativa obteniendo el primer lugar.",
    content: "",
    category: "Académico",
    published_at: "2024-11-15T00:00:00Z",
    featured: false,
    created_at: "2024-11-15T00:00:00Z",
  },
  {
    id: "3",
    title: "Acto de colación de grado: egresados promoción 2024",
    slug: "colacion-grado-2024",
    excerpt:
      "La institución celebró el acto de cierre del año lectivo con la entrega de títulos a los egresados de las cuatro especialidades técnicas.",
    content: "",
    category: "Institucional",
    published_at: "2024-12-10T00:00:00Z",
    featured: false,
    created_at: "2024-12-10T00:00:00Z",
  },
];

export async function NewsSection() {
  const news = await getLatestNews();

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Actualidad"
            title="Noticias y Novedades"
            description="Mantenete informado sobre todo lo que pasa en nuestra institución: eventos, comunicados y logros de nuestra comunidad educativa."
          />
          <Link
            href="/noticias"
            className="btn-outline flex-shrink-0 self-start md:self-auto"
          >
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
