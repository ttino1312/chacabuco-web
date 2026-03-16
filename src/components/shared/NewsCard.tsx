import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { formatDateShort, truncate } from "@/lib/utils";
import type { NewsArticle } from "@/types";
import { cn } from "@/lib/utils";

const CAT_COLORS: Record<string,string> = {
  Institucional:    "bg-gray-100 text-gray-700",
  Académico:        "bg-primary/8 text-primary",
  Eventos:          "bg-secondary/10 text-secondary",
  Ingresantes:      "bg-green-50 text-green-700",
  Comunicados:      "bg-amber-50 text-amber-700",
  "Mesas de examen":"bg-purple-50 text-purple-700",
  General:          "bg-gray-100 text-gray-600",
};

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ article, featured=false }: NewsCardProps) {
  const catColor = CAT_COLORS[article.category] ?? "bg-gray-100 text-gray-600";

  return (
    <Link href={`/noticias/${article.slug}`} className="group block h-full">
      <article className={cn(
        "bg-surface rounded-xl overflow-hidden border border-gray-100 h-full flex flex-col",
        "transition-all duration-300 group-hover:-translate-y-1",
        "group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] group-hover:border-secondary/20",
        featured && "md:flex-row"
      )}>
        {/* Thumb */}
        <div className={cn(
          "bg-primary flex items-center justify-center relative overflow-hidden flex-shrink-0",
          featured ? "md:w-2/5 h-48 md:h-auto" : "h-44"
        )}>
          <div className="absolute inset-0 grid-dark" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary" />
          <span className="relative z-10 text-4xl">
            {article.category === "Ingresantes" ? "🎓"
              : article.category === "Académico" ? "📚"
              : article.category === "Eventos"   ? "🎉"
              : article.category === "Comunicados" ? "📋"
              : "📢"}
          </span>
          {article.featured && (
            <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded">
              Destacado
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={cn("inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full", catColor)}>
              <Tag className="w-3 h-3" />{article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />{formatDateShort(article.published_at)}
            </span>
          </div>
          <h3 className={cn(
            "font-bold text-text-primary group-hover:text-secondary transition-colors leading-snug mb-2",
            featured ? "text-xl" : "text-base"
          )}>
            {article.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1">
            {truncate(article.excerpt, featured ? 180 : 110)}
          </p>
          <div className="mt-4 flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
            Leer más <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}
