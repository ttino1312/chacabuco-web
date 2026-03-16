import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import type { NewsArticle } from "@/types";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const FALLBACK: Record<string, NewsArticle> = {
  "inscripciones-2025": {
    id: "1",
    title: "Inscripciones abiertas para el ciclo lectivo 2025",
    slug: "inscripciones-2025",
    excerpt: "Se informa a la comunidad educativa que están abiertas las inscripciones para primer año.",
    content: `<h2>Inscripciones 2025</h2>
    <p>Se informa a la comunidad educativa que están abiertas las inscripciones para primer año.</p>
    <h3>Documentación requerida para 1° año</h3>
    <ul>
      <li>Certificado analítico de finalización de estudios primarios</li>
      <li>DNI original y fotocopia</li>
      <li>Dos fotos carnet 4x4</li>
      <li>Partida de nacimiento</li>
    </ul>
    <p>Horario de atención: 8:00 a 12:00 hs y 14:00 a 18:00 hs, de lunes a viernes.</p>`,
    category: "Ingresantes",
    published_at: "2024-12-01T00:00:00Z",
    featured: true,
    created_at: "2024-12-01T00:00:00Z",
  },
};

async function getArticle(slug: string): Promise<NewsArticle | null> {
  try {
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  } catch {
    return FALLBACK[slug] ?? null;
  }
}

const CAT_COLORS: Record<string, string> = {
  Ingresantes: "bg-green-50 text-green-700",
  Académico: "bg-gray-100 text-gray-700",
  Institucional: "bg-gray-100 text-gray-700",
  Eventos: "bg-[#E53935]/10 text-[#E53935]",
  Comunicados: "bg-amber-50 text-amber-700",
  "Mesas de examen": "bg-purple-50 text-purple-700",
  General: "bg-gray-100 text-gray-600",
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  return (
    <div>
      <section className="bg-[#111] py-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E53935]/0 via-[#E53935] to-[#E53935]/0" />
        <div className="container-custom relative z-10">
          <Link href="/noticias"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Volver a Noticias
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={cn(
              "inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full",
              CAT_COLORS[article.category] ?? "bg-white/20 text-white"
            )}>
              <Tag className="w-3 h-3" />{article.category}
            </span>
            <span className="flex items-center gap-1 text-white/50 text-sm">
              <Calendar className="w-4 h-4" />{formatDate(article.published_at)}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white max-w-3xl leading-tight">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-surface rounded-2xl p-8 border border-gray-100 shadow-sm">
              <p className="text-lg text-text-secondary leading-relaxed
                            border-l-4 border-[#E53935] pl-4 mb-8">
                {article.excerpt}
              </p>
              <div
                className="prose-school"
                dangerouslySetInnerHTML={{
                  __html: article.content || `<p>${article.excerpt}</p>`,
                }}
              />
            </div>
            <div className="mt-8">
              <Link href="/noticias" className="btn-outline">
                <ArrowLeft className="w-4 h-4" /> Todas las noticias
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
