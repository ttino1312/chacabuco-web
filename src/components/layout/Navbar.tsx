"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[998]"
      style={{ background:"rgba(10,10,10,0.95)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-center justify-between h-12 px-4 sm:px-6" style={{ paddingLeft:"calc(72px + 1rem)" }}>
        <Link href="/" className="flex items-center gap-3 group" aria-label="Inicio">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
            style={{ background:"#111", border:"1px solid rgba(255,255,255,0.08)" }}>
            <Image src="/logo.png" alt="E.E.S.T. N°6" width={30} height={30} className="object-contain scale-110" priority />
          </div>
          <div className="text-white leading-none">
            <span className="font-bold text-sm tracking-wide">E.E.S.T. N°6</span>
            <span className="mx-1.5 hidden sm:inline" style={{ color:"rgba(255,255,255,0.25)" }}>·</span>
            <span className="text-xs hidden sm:inline" style={{ color:"rgba(255,255,255,0.40)" }}>&ldquo;Chacabuco&rdquo; — Morón</span>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-5 text-xs" style={{ color:"rgba(255,255,255,0.35)" }}>
          <a href={`tel:${SCHOOL_INFO.phone}`} className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
            <Phone className="w-3 h-3" />{SCHOOL_INFO.phone}
          </a>
          <a href={`mailto:${SCHOOL_INFO.emailFamilies}`} className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
            <Mail className="w-3 h-3" />{SCHOOL_INFO.emailFamilies}
          </a>
          <Link href="/contacto"
            className="bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-semibold px-3 py-1 rounded-md transition-colors"
            style={{ boxShadow:"0 2px 10px rgba(229,57,53,0.3)" }}>
            Inscripciones
          </Link>
        </div>
      </div>
      <div className="h-px" style={{ background:"linear-gradient(to right, transparent, rgba(229,57,53,0.5), transparent)" }} />
    </header>
  );
}
