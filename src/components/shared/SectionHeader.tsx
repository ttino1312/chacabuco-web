"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  tag?: string; title: string; description?: string;
  centered?: boolean; className?: string;
}
export function SectionHeader({ tag, title, description, centered = false, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      className={cn(centered && "text-center", className)}
    >
      {tag && (
        <div className={cn("inline-flex items-center gap-2 text-[#E53935] text-xs font-bold uppercase tracking-widest mb-3", centered && "justify-center")}>
          <span className="w-7 h-px bg-[#E53935]" />{tag}<span className="w-7 h-px bg-[#E53935]" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", centered ? "mx-auto max-w-2xl" : "max-w-2xl")}
          style={{ color: "rgba(255,255,255,0.5)" }}>
          {description}
        </p>
      )}
      <div className={cn("mt-4 h-[3px] w-14 bg-[#E53935] rounded-full", centered && "mx-auto")} />
    </motion.div>
  );
}
