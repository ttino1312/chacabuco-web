import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Download, FileText, Calendar, FolderOpen } from "lucide-react";
import { formatDateShort } from "@/lib/utils";
import type { Document } from "@/types";

export const metadata: Metadata = {
  title: "Descargas",
  description: "Circulares, formularios y documentos de la E.E.S.T. N°6 Chacabuco.",
};

const FALLBACK_DOCS: Document[] = [
  {
    id: "1",
    title: "Reglamento de convivencia escolar",
    description: "Normas de convivencia y disciplina de la institución vigentes.",
    category: "Reglamentos",
    file_url: "#",
    file_size: "245 KB",
    published_at: "2024-03-01T00:00:00Z",
    created_at: "2024-03-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Solicitud de pase de especialidad",
    description: "Formulario para solicitar cambio de especialidad al iniciar el ciclo superior.",
    category: "Formularios",
    file_url: "#",
    file_size: "120 KB",
    published_at: "2024-02-15T00:00:00Z",
    created_at: "2024-02-15T00:00:00Z",
  },
  {
    id: "3",
    title: "Calendario escolar 2024",
    description: "Calendario oficial de actividades del ciclo lectivo 2024.",
    category: "Calendarios",
    file_url: "#",
    file_size: "380 KB",
    published_at: "2024-02-01T00:00:00Z",
    created_at: "2024-02-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Circular N°1 — Inicio de clases",
    description: "Información importante para el inicio del ciclo lectivo 2024.",
    category: "Circulares",
    file_url: "#",
    file_size: "210 KB",
    published_at: "2024-02-28T00:00:00Z",
    created_at: "2024-02-28T00:00:00Z",
  },
  {
    id: "5",
    title: "Solicitud de equivalencias",
    description: "Formulario para alumnos que ingresan desde otras instituciones y solicitan equivalencias.",
    category: "Formularios",
    file_url: "#",
    file_size: "98 KB",
    published_at: "2024-03-10T00:00:00Z",
    created_at: "2024-03-10T00:00:00Z",
  },
  {
    id: "6",
    title: "Protocolo de prácticas profesionalizantes",
    description: "Documento oficial con los lineamientos para las prácticas en empresas de 7° año.",
    category: "Reglamentos",
    file_url: "#",
    file_size: "560 KB",
    published_at: "2024-04-01T00:00:00Z",
    created_at: "2024-04-01T00:00:00Z",
  },
];

const CATEGORY_ICONS: Record<string, string> = {
  Circulares: "📋",
  Formularios: "📝",
  Reglamentos: "📜",
  Calendarios: "📅",
  Otros: "📄",
};

async function getDocuments(): Promise<Document[]> {
  try {
    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("published_at", { ascending: false });
    if (error) throw error;
    return data?.length ? data : FALLBACK_DOCS;
  } catch {
    return FALLBACK_DOCS;
  }
}

function groupByCategory(docs: Document[]): Record<string, Document[]> {
  return docs.reduce((acc, doc) => {
    const cat = doc.category || "Otros";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);
}

export default async function DescargasPage() {
  const docs = await getDocuments();
  const grouped = groupByCategory(docs);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
            Documentos
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Descargas
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Circulares, formularios, reglamentos y documentos institucionales.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {Object.keys(grouped).map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-1.5 bg-surface border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium text-text-secondary"
              >
                <span>{CATEGORY_ICONS[cat] ?? "📄"}</span>
                {cat}
                <span className="bg-gray-100 text-gray-500 text-xs rounded-full px-1.5">
                  {grouped[cat].length}
                </span>
              </div>
            ))}
          </div>

          {/* Documents by category */}
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-primary" />
                {category}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-surface rounded-xl border border-gray-100 p-5 flex items-start gap-4 hover:shadow-md transition-shadow group"
                  >
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-text-primary text-sm mb-1 leading-snug">
                        {doc.title}
                      </h3>
                      {doc.description && (
                        <p className="text-text-secondary text-xs leading-relaxed mb-2">
                          {doc.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDateShort(doc.published_at)}
                        </span>
                        {doc.file_size && <span>{doc.file_size}</span>}
                      </div>
                    </div>
                    <a
                      href={doc.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-9 h-9 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary-500 transition-colors group-hover:scale-105 transform"
                      aria-label={`Descargar ${doc.title}`}
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {docs.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              No hay documentos publicados aún.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
