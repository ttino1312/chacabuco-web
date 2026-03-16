"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Home, Building2, BookOpen, Users, Mail, Download, Newspaper } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/",                 icon: Home,      label: "Inicio"       },
  { href: "/institucional",    icon: Building2, label: "Institución"  },
  { href: "/oferta-academica", icon: BookOpen,  label: "Académico"    },
  { href: "/noticias",         icon: Newspaper, label: "Noticias"     },
  { href: "/personal",         icon: Users,     label: "Personal"     },
  { href: "/descargas",        icon: Download,  label: "Descargas"    },
  { href: "/contacto",         icon: Mail,      label: "Contacto"     },
];

// Solo 5 ítems en la barra mobile (los más importantes)
const NAV_MOBILE = [
  { href: "/",                 icon: Home,      label: "Inicio"    },
  { href: "/oferta-academica", icon: BookOpen,  label: "Académico" },
  { href: "/noticias",         icon: Newspaper, label: "Noticias"  },
  { href: "/descargas",        icon: Download,  label: "Descargas" },
  { href: "/contacto",         icon: Mail,      label: "Contacto"  },
];

function DesktopNavItem({
  item,
  active,
  index,
}: {
  item: typeof NAV[0];
  active: boolean;
  index: number;
}) {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center"
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hov && (
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.12 }}
            className="absolute left-full ml-3 whitespace-nowrap hidden md:block
                       text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg
                       pointer-events-none z-50"
            style={{ background: "#1c1c1c", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            {item.label}
            <span className="absolute right-full top-1/2 -translate-y-1/2
                             border-4 border-transparent border-r-[#1c1c1c]" />
          </motion.span>
        )}
      </AnimatePresence>

      <Link
        href={item.href}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        aria-label={item.label}
        className={cn(
          "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
          active
            ? "bg-[#E53935] text-white scale-110"
            : "text-white/25 hover:text-[#E53935] hover:bg-white/6 hover:scale-110"
        )}
        style={active ? { boxShadow: "0 0 20px rgba(229,57,53,0.5)" } : {}}
      >
        {active && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#E53935]"
            initial={{ opacity: 0.3, scale: 1 }}
            animate={{ opacity: 0, scale: 1.8 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <item.icon size={active ? 19 : 17} />
      </Link>
    </motion.div>
  );
}

export function FloatingNav() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* ─────────────────────────────────────────
          DESKTOP — pill vertical izquierda
      ───────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="hidden md:flex fixed left-3 top-1/2 -translate-y-1/2 z-[999]
                   flex-col items-center gap-1 py-3 px-2 rounded-[2rem]"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="block mb-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05 }}
            className="w-9 h-9 rounded-full overflow-hidden flex items-center justify-center
                       hover:scale-105 transition-transform duration-200"
            style={{ background: "#111", border: "1px solid rgba(255,255,255,0.09)" }}
          >
            <Image src="/logo.png" alt="Logo" width={34} height={34}
              className="object-contain scale-110" priority />
          </motion.div>
        </Link>

        <div className="w-4 h-px mb-1 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />

        {NAV.map((item, i) => (
          <DesktopNavItem key={item.href} item={item} active={isActive(item.href)} index={i} />
        ))}
      </motion.nav>

      {/* ─────────────────────────────────────────
          MOBILE — barra inferior estilo app
          5 ítems con ícono + etiqueta de texto
      ───────────────────────────────────────── */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        aria-label="Navegación"
        className="md:hidden fixed bottom-0 left-0 right-0 z-[999]
                   flex flex-row items-stretch"
        style={{
          background: "rgba(8,8,8,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {NAV_MOBILE.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5
                         transition-all duration-200 relative group"
            >
              {/* Active top indicator */}
              {active && (
                <motion.div
                  layoutId="mobile-active-bar"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-[#E53935]"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}

              {/* Icon */}
              <div
                className={cn(
                  "flex items-center justify-center w-7 h-7 rounded-xl transition-all duration-200",
                  active
                    ? "bg-[#E53935]/15 text-[#E53935]"
                    : "text-white/35 group-hover:text-white/60"
                )}
              >
                <item.icon size={18} strokeWidth={active ? 2.5 : 1.8} />
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-[10px] font-semibold leading-none tracking-wide transition-colors duration-200",
                  active ? "text-[#E53935]" : "text-white/30 group-hover:text-white/50"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </motion.nav>
    </>
  );
}
