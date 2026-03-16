"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { formatDateShort, truncate } from "@/lib/utils";
import type { NewsArticle } from "@/types";
import { cn } from "@/lib/utils";

const CAT: Record<string,string> = {
  Institucional: "bg-white/10 text-white/70",
  Académico:     "bg-white/10 text-white/70",
  Eventos:       "bg-[#E53935]/15 text-[#E53935]",
  Ingresantes:   "bg-green-500/15 text-green-400",
  Comunicados:   "bg-amber-500/15 text-amber-400",
  "Mesas de examen": "bg-purple-500/15 text-purple-400",
  General:       "bg-white/10 text-white/60",
};

interface Props { article: NewsArticle; featured?: boolean; }

export function NewsCard({ article, featured = false }: Props) {
  const cat = CAT[article.category] ?? "bg-white/10 text-white/60";
  return (
    <Link href={`/noticias/${article.slug}`} className="group block h-full">
      <article
        className={cn(
          "rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300",
          "group-hover:-translate-y-1",
          featured && "md:flex-row"
        )}
        style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.07)" }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.4)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
      >
        {/* Thumb */}
        <div className={cn(
          "bg-[#111] flex items-center justify-center relative overflow-hidden flex-shrink-0",
          featured ? "md:w-2/5 h-48 md:h-auto" : "h-44"
        )}>
          <div className="absolute inset-0 grid-dark" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(to right, transparent, #E53935, transparent)" }} />
          <span className="relative z-10 text-4xl">
            {article.category === "Ingresantes" ? "🎓"
              : article.category === "Académico"  ? "📚"
              : article.category === "Eventos"    ? "🎉"
              : article.category === "Comunicados"? "📋"
              : "📢"}
          </span>
          {article.featured && (
            <span className="absolute top-3 left-3 bg-[#E53935] text-white text-xs font-bold px-2 py-0.5 rounded">
              Destacado
            </span>
          )}
        </div>
        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={cn("inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full", cat)}>
              <Tag className="w-3 h-3" />{article.category}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
              <Calendar className="w-3 h-3" />{formatDateShort(article.published_at)}
            </span>
          </div>
          <h3 className={cn("font-bold text-white group-hover:text-[#E53935] transition-colors leading-snug mb-2", featured ? "text-xl" : "text-base")}>
            {article.title}
          </h3>
          <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.50)" }}>
            {truncate(article.excerpt, featured ? 180 : 110)}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[#E53935] text-sm font-semibold group-hover:gap-2 transition-all">
            Leer más <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
