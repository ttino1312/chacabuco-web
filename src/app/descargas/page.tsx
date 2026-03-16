"use client";

import { useEffect, useState } from "react";
import { Download, FileText, Calendar, FolderOpen } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { formatDateShort } from "@/lib/utils";
import type { Document } from "@/types";

const FALLBACK: Document[] = [
  { id:"1", title:"Reglamento de convivencia escolar 2025",    description:"Normas de convivencia y disciplina vigentes.",                    category:"Reglamentos", file_url:"#", file_size:"245 KB", published_at:"2025-03-01T00:00:00Z", created_at:"" },
  { id:"2", title:"Solicitud de pase de especialidad",         description:"Formulario para solicitar cambio de especialidad.",               category:"Formularios", file_url:"#", file_size:"120 KB", published_at:"2025-02-15T00:00:00Z", created_at:"" },
  { id:"3", title:"Calendario escolar 2025 — DGCyE PBA",      description:"Calendario oficial del ciclo lectivo 2025.",                      category:"Calendarios", file_url:"#", file_size:"380 KB", published_at:"2025-02-01T00:00:00Z", created_at:"" },
  { id:"4", title:"Circular N°1/2025 — Inicio de clases",     description:"Información importante para el inicio del ciclo 2025.",           category:"Circulares",  file_url:"#", file_size:"210 KB", published_at:"2025-02-28T00:00:00Z", created_at:"" },
  { id:"5", title:"Solicitud de equivalencias curriculares",   description:"Formulario para alumnos que solicitan equivalencias.",            category:"Formularios", file_url:"#", file_size:"98 KB",  published_at:"2025-03-10T00:00:00Z", created_at:"" },
  { id:"6", title:"Protocolo de prácticas profesionalizantes", description:"Lineamientos oficiales para las prácticas de 7° año.",            category:"Reglamentos", file_url:"#", file_size:"560 KB", published_at:"2025-04-01T00:00:00Z", created_at:"" },
];

const CAT_ICONS: Record<string, string> = {
  Circulares: "📋", Formularios: "📝", Reglamentos: "📜", Calendarios: "📅", Otros: "📄",
};

const card = { background: "#161616", border: "1px solid rgba(255,255,255,0.07)" };

function groupBy(docs: Document[]) {
  return docs.reduce((acc, d) => {
    const c = d.category || "Otros";
    if (!acc[c]) acc[c] = [];
    acc[c].push(d);
    return acc;
  }, {} as Record<string, Document[]>);
}

export default function DescargasPage() {
  const [docs, setDocs] = useState<Document[]>(FALLBACK);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await supabase
          .from("documents")
          .select("*")
          .order("published_at", { ascending: false });
        if (data?.length) setDocs(data);
      } catch {}
    };
    load();
  }, []);

  const grouped = groupBy(docs);

  return (
    <div style={{ background: "#0a0a0a" }}>
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag justify-center">
            <span className="w-7 h-px bg-[#E53935]" />Documentos<span className="w-7 h-px bg-[#E53935]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Descargas</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Circulares, formularios, reglamentos y documentos institucionales.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.keys(grouped).map((cat) => (
              <div key={cat}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.60)" }}>
                <span>{CAT_ICONS[cat] ?? "📄"}</span>{cat}
                <span className="text-xs rounded-full px-1.5"
                  style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.40)" }}>
                  {grouped[cat].length}
                </span>
              </div>
            ))}
          </div>

          {Object.entries(grouped).map(([cat, items]) => (
            <div key={cat} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#E53935]" />{cat}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((doc) => (
                  <div key={doc.id}
                    className="rounded-xl p-5 flex items-start gap-4 group transition-all hover:-translate-y-0.5"
                    style={card}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.35)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                  >
                    <div className="w-11 h-11 bg-[#E53935]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#E53935]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-sm mb-1 leading-snug">{doc.title}</h3>
                      {doc.description && (
                        <p className="text-xs leading-relaxed mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                          {doc.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />{formatDateShort(doc.published_at)}
                        </span>
                        {doc.file_size && <span>{doc.file_size}</span>}
                      </div>
                    </div>
                    <a href={doc.file_url} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 w-9 h-9 bg-[#E53935] rounded-lg flex items-center justify-center
                                 text-white hover:bg-[#B71C1C] transition-colors group-hover:scale-105 transform">
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
