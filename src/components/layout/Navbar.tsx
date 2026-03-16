"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[998] bg-[#111] border-b border-white/[0.06]"
      style={{ paddingLeft: 0 }}
    >
      <div
        className="flex items-center justify-between h-12 px-4 sm:px-6"
        style={{ paddingLeft: "calc(72px + 1rem)" }}
      >
        {/* Brand with actual logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Inicio">
          <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center
                          justify-center overflow-hidden group-hover:border-[#E53935]/50
                          transition-all duration-200 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Escudo E.E.S.T. N°6 Chacabuco"
              width={30}
              height={30}
              className="object-contain scale-110"
              priority
            />
          </div>
          <div className="text-white leading-none">
            <span className="font-bold text-sm tracking-wide">E.E.S.T. N°6</span>
            <span className="text-white/35 mx-1.5 hidden sm:inline">·</span>
            <span className="text-white/50 text-xs hidden sm:inline">
              &ldquo;Chacabuco&rdquo; — Morón
            </span>
          </div>
        </Link>

        {/* Contact strip */}
        <div className="hidden lg:flex items-center gap-5 text-white/40 text-xs">
          <a href={`tel:${SCHOOL_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
            <Phone className="w-3 h-3" />{SCHOOL_INFO.phone}
          </a>
          <a href={`mailto:${SCHOOL_INFO.emailFamilies}`}
            className="flex items-center gap-1.5 hover:text-white/70 transition-colors">
            <Mail className="w-3 h-3" />{SCHOOL_INFO.emailFamilies}
          </a>
          <Link href="/contacto"
            className="bg-[#E53935] hover:bg-[#B71C1C] text-white text-xs font-semibold
                       px-3 py-1 rounded-md transition-colors"
            style={{ boxShadow: "0 2px 8px rgba(229,57,53,0.3)" }}>
            Inscripciones
          </Link>
        </div>
      </div>

      {/* Red hairline at bottom */}
      <div className="h-px bg-gradient-to-r from-[#E53935]/0 via-[#E53935]/60 to-[#E53935]/0" />
    </header>
  );
}
