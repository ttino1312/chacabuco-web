"use client";

import { useEffect, useState } from "react";
import { NewsCard } from "@/components/shared/NewsCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { supabase } from "@/lib/supabase";
import type { NewsArticle } from "@/types";

const FALLBACK: NewsArticle[] = [
  { id:"1", title:"Inscripciones abiertas para el ciclo lectivo 2025",              slug:"inscripciones-2025",                   excerpt:"Están abiertas las inscripciones para primer año y solicitudes de pase para el ciclo superior 2025.",        content:"", category:"Ingresantes",     published_at:"2024-12-01T00:00:00Z", featured:true,  created_at:"" },
  { id:"2", title:"Proyecto de Programación obtiene primer lugar en concurso",      slug:"proyecto-programacion-primer-lugar-2024", excerpt:"Alumnos de 7° año de Programación obtuvieron el primer puesto en el concurso provincial de innovación tecnológica.", content:"", category:"Académico",        published_at:"2024-11-15T00:00:00Z", featured:false, created_at:"" },
  { id:"3", title:"Acto de colación de grado — Egresados Promoción 2024",           slug:"colacion-grado-2024",                  excerpt:"La institución celebró el acto de cierre con la entrega de títulos a los egresados de las cuatro especialidades.", content:"", category:"Institucional",   published_at:"2024-12-10T00:00:00Z", featured:false, created_at:"" },
  { id:"4", title:"Mesas de examen — Diciembre 2024",                               slug:"mesas-examen-diciembre-2024",          excerpt:"Se publican las fechas de mesas de examen para el período diciembre 2024.",                                        content:"", category:"Mesas de examen", published_at:"2024-11-20T00:00:00Z", featured:false, created_at:"" },
  { id:"5", title:"Jornada de puertas abiertas para ingresantes 2025",              slug:"puertas-abiertas-2025",                excerpt:"Invitamos a los futuros alumnos y sus familias a conocer las instalaciones y talleres de la institución.",           content:"", category:"Eventos",          published_at:"2024-10-30T00:00:00Z", featured:false, created_at:"" },
  { id:"6", title:"Inicio del segundo semestre 2024",                               slug:"inicio-segundo-semestre-2024",         excerpt:"Se informa a toda la comunidad educativa las novedades para el comienzo del segundo período del año lectivo.",       content:"", category:"Comunicados",      published_at:"2024-07-31T00:00:00Z", featured:false, created_at:"" },
];

export default function NoticiasPage() {
  const [news, setNews] = useState<NewsArticle[]>(FALLBACK);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await supabase
          .from("news")
          .select("*")
          .order("published_at", { ascending: false });
        if (data?.length) setNews(data);
      } catch {}
    };
    load();
  }, []);

  const featured = news.find((n) => n.featured);
  const rest = news.filter((n) => !n.featured || n.id !== featured?.id);

  return (
    <div style={{ background: "#0a0a0a" }}>
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag justify-center">
            <span className="w-7 h-px bg-[#E53935]" />Actualidad<span className="w-7 h-px bg-[#E53935]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Noticias y Novedades</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Toda la información institucional, académica y eventos de la E.E.S.T. N°6 Chacabuco.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {featured && (
            <div className="mb-12">
              <div className="section-tag mb-6">
                <span className="w-7 h-px bg-[#E53935]" />Destacado
              </div>
              <NewsCard article={featured} featured />
            </div>
          )}
          <h2 className="text-xl font-bold text-white mb-6">Todas las noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((a) => <NewsCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
