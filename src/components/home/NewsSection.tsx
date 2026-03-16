"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { NewsCard } from "@/components/shared/NewsCard";
import { supabase } from "@/lib/supabase";
import type { NewsArticle } from "@/types";

const FALLBACK: NewsArticle[] = [
  {
    id: "1",
    title: "Inscripciones abiertas para el ciclo lectivo 2025",
    slug: "inscripciones-2025",
    excerpt: "Se informa a la comunidad educativa que están abiertas las inscripciones para primer año y las solicitudes de pase para el ciclo superior 2025.",
    content: "",
    category: "Ingresantes",
    published_at: "2024-12-01T00:00:00Z",
    featured: true,
    created_at: "2024-12-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Proyecto de Programación obtiene primer lugar en concurso provincial",
    slug: "proyecto-programacion-primer-lugar-2024",
    excerpt: "Alumnos de 7° año de Programación obtuvieron el primer puesto en el concurso provincial de innovación tecnológica educativa.",
    content: "",
    category: "Académico",
    published_at: "2024-11-15T00:00:00Z",
    featured: false,
    created_at: "2024-11-15T00:00:00Z",
  },
  {
    id: "3",
    title: "Acto de colación de grado — Egresados Promoción 2024",
    slug: "colacion-grado-2024",
    excerpt: "La institución celebró el acto de cierre del año lectivo con la entrega de títulos a los egresados de las cuatro especialidades técnicas.",
    content: "",
    category: "Institucional",
    published_at: "2024-12-10T00:00:00Z",
    featured: false,
    created_at: "2024-12-10T00:00:00Z",
  },
];

export function NewsSection() {
  const [news, setNews] = useState<NewsArticle[]>(FALLBACK);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await supabase
          .from("news")
          .select("*")
          .order("published_at", { ascending: false })
          .limit(3);
        if (data && data.length > 0) setNews(data);
      } catch {}
    };
    load();
  }, []);

  return (
    <section className="section-padding" style={{ background: "#0a0a0a" }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="Actualidad"
            title="Noticias y Novedades"
            description="Mantenete informado sobre todo lo que pasa en nuestra institución."
          />
          <Link href="/noticias" className="btn-outline flex-shrink-0 self-start md:self-auto">
            Ver todas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((a) => (
            <NewsCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
