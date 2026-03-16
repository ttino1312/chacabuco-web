import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Specialty } from "@/types";

interface SpecialtyCardProps {
  specialty: Specialty;
  index?: number;
}

const colorMap: Record<string, string> = {
  primary: "from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 text-primary",
  accent: "from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 text-accent",
  secondary: "from-secondary/10 to-secondary/5 border-secondary/20 hover:border-secondary/40 text-secondary",
};

export function SpecialtyCard({ specialty, index = 0 }: SpecialtyCardProps) {
  const colors = colorMap[specialty.color] ?? colorMap.primary;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/oferta-academica/${specialty.slug}`}
        className="group block h-full"
      >
        <div
          className={`bg-gradient-to-br ${colors} border rounded-xl p-6 h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}
        >
          <div className="text-4xl mb-4">{specialty.icon}</div>
          <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
            Técnico en {specialty.name}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed flex-1">
            {specialty.description}
          </p>
          <div className="mt-5 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
            <span className="text-gray-500">4° a 7° año · 4 años</span>
            <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
              Ver plan <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
