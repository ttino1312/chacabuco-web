"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ tag, title, description, centered=false, light=false, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ duration:0.5 }}
      className={cn(centered && "text-center", className)}
    >
      {tag && (
        <div className={cn(
          "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3",
          light ? "text-white/60" : "text-secondary",
          centered && "justify-center"
        )}>
          <span className="w-7 h-px bg-current" />{tag}<span className="w-7 h-px bg-current" />
        </div>
      )}
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold leading-tight",
        light ? "text-white" : "text-text-primary"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-lg leading-relaxed",
          light ? "text-white/60" : "text-text-secondary",
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        )}>
          {description}
        </p>
      )}
      <div className={cn("mt-4 h-1 w-14 bg-secondary rounded-full", centered && "mx-auto")} />
    </motion.div>
  );
}
