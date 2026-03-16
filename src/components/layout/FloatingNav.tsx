"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Home, Building2, BookOpen, Users,
  Mail, Download, Newspaper, Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/",                 icon: Home,      label: "Inicio"        },
  { href: "/institucional",    icon: Building2, label: "Institucional" },
  { href: "/oferta-academica", icon: BookOpen,  label: "Académico"     },
  { href: "/noticias",         icon: Newspaper, label: "Noticias"      },
  { href: "/personal",         icon: Users,     label: "Personal"      },
  { href: "/descargas",        icon: Download,  label: "Descargas"     },
  { href: "/contacto",         icon: Mail,      label: "Contacto"      },
];

function NavItem({
  item, isActive, index,
}: {
  item: (typeof NAV_ITEMS)[0];
  isActive: boolean;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 + index * 0.06, type: "spring", stiffness: 260, damping: 20 }}
      className="relative flex items-center"
    >
      {/* Tooltip — desktop only */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -6, scale: 0.95 }}
            animate={{ opacity: 1, x: 0,  scale: 1    }}
            exit={  { opacity: 0, x: -6, scale: 0.95 }}
            transition={{ duration: 0.13 }}
            className="absolute left-full ml-3 whitespace-nowrap
                       bg-[#111] text-white text-xs font-semibold
                       px-3 py-1.5 rounded-lg shadow-lg
                       pointer-events-none hidden md:block z-50"
          >
            {item.label}
            <span className="absolute right-full top-1/2 -translate-y-1/2
                             border-4 border-transparent border-r-[#111]" />
          </motion.div>
        )}
      </AnimatePresence>

      <Link
        href={item.href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        className={cn(
          "relative flex items-center justify-center w-11 h-11 rounded-full",
          "transition-all duration-200 ease-out select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E53935]",
          isActive
            ? "bg-[#E53935] text-white shadow-[0_4px_16px_rgba(229,57,53,0.45)]"
            : "text-gray-400 hover:text-[#E53935] hover:bg-red-50 hover:scale-110"
        )}
      >
        <item.icon style={{ width: isActive ? 20 : 18, height: isActive ? 20 : 18 }}
          className="transition-all duration-200" />

        {/* Pulse ring on active */}
        {isActive && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#E53935]"
            initial={{ scale: 1, opacity: 0.35 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </Link>
    </motion.div>
  );
}

export function FloatingNav() {
  const pathname  = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* ── DESKTOP — vertical pill on left ── */}
      <motion.nav
        initial={{ opacity: 0, x: -28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Navegación principal"
        className="hidden md:flex fixed left-3 top-1/2 -translate-y-1/2 z-[999]
                   flex-col items-center gap-1
                   bg-white rounded-[2.5rem] py-4 px-2
                   border border-black/[0.06]"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.13), 0 2px 8px rgba(0,0,0,0.07)" }}
      >
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.05, type: "spring", stiffness: 220 }}
          className="mb-2"
        >
          <Link href="/" aria-label="Inicio">
            <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center
                            overflow-hidden hover:scale-105 transition-transform duration-200
                            shadow-[0_3px_10px_rgba(0,0,0,0.25)]">
              <Image
                src="/logo.png"
                alt="Logo E.E.S.T. N°6 Chacabuco"
                width={36}
                height={36}
                className="object-contain scale-[1.15]"
                priority
              />
            </div>
          </Link>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.2 }}
          className="w-5 h-px bg-gray-150 mb-1"
          style={{ background: "linear-gradient(to right, transparent, #e5e7eb, transparent)" }}
        />

        {/* Nav items */}
        {NAV_ITEMS.map((item, i) => (
          <NavItem key={item.href} item={item} isActive={isActive(item.href)} index={i} />
        ))}

        {/* Divider + admin */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.5 }}
          className="w-5 h-px mt-1 mb-1"
          style={{ background: "linear-gradient(to right, transparent, #e5e7eb, transparent)" }}
        />
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/admin" aria-label="Administración"
            className={cn(
              "flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold",
              "text-gray-300 hover:text-[#E53935] hover:bg-red-50 hover:scale-110",
              "transition-all duration-200",
              pathname === "/admin" && "text-[#E53935] bg-red-50"
            )}>
            <Menu className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </motion.nav>

      {/* ── MOBILE — horizontal pill at bottom ── */}
      <motion.nav
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        aria-label="Navegación"
        className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[999]
                   flex flex-row items-center gap-1
                   bg-white rounded-[9999px] py-2 px-3
                   border border-black/[0.06]"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)" }}
      >
        {/* Logo */}
        <Link href="/" aria-label="Inicio"
          className="flex items-center justify-center w-9 h-9 rounded-full
                     bg-[#111] overflow-hidden mr-1">
          <Image src="/logo.png" alt="Logo" width={32} height={32}
            className="object-contain scale-110" />
        </Link>

        {NAV_ITEMS.slice(0, 6).map((item) => (
          <Link key={item.href} href={item.href} aria-label={item.label}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
              isActive(item.href)
                ? "bg-[#E53935] text-white shadow-[0_4px_12px_rgba(229,57,53,0.35)]"
                : "text-gray-400 hover:text-[#E53935] hover:bg-red-50"
            )}>
            <item.icon style={{ width: 18, height: 18 }} />
          </Link>
        ))}
      </motion.nav>
    </>
  );
}
