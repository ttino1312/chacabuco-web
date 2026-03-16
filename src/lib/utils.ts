import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string, locale = "es-AR"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string, locale = "es-AR"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export const categoryColors: Record<string, string> = {
  Institucional: "bg-primary/10 text-primary",
  Académico: "bg-accent/10 text-accent",
  Eventos: "bg-secondary/10 text-secondary",
  Ingresantes: "bg-green-100 text-green-700",
  Comunicados: "bg-yellow-100 text-yellow-700",
  "Mesas de examen": "bg-purple-100 text-purple-700",
  General: "bg-gray-100 text-gray-600",
};

export function getCategoryColor(category: string): string {
  return categoryColors[category] ?? "bg-gray-100 text-gray-600";
}
