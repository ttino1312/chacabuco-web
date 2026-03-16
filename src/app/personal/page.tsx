"use client";

import { useEffect, useState } from "react";
import { Users, Mail } from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { StaffMember } from "@/types";

const FALLBACK: StaffMember[] = [
  { id:"1",  full_name:"Dirección",             role:"Director/a",           department:"Conducción",    email:"tecnica6moron@abc.gob.ar", order_index:1,  created_at:"" },
  { id:"2",  full_name:"Vicedirección",          role:"Vicedirector/a",       department:"Conducción",    email:"tecnica6moron@abc.gob.ar", order_index:2,  created_at:"" },
  { id:"3",  full_name:"Secretaría Académica",   role:"Secretario/a",         department:"Secretaría",    email:"chacabucot6s@gmail.com",   order_index:3,  created_at:"" },
  { id:"4",  full_name:"Regencia",               role:"Regente",              department:"Regencia",      email:"chacabucot6@gmail.com",    order_index:4,  created_at:"" },
  { id:"5",  full_name:"Jefe de Talleres",        role:"Jefe/a de Talleres",   department:"Talleres",      email:"tecnica6moron@abc.gob.ar", order_index:5,  created_at:"" },
  { id:"6",  full_name:"Coord. Automotores",      role:"Coordinador/a",        department:"Automotores",   email:"tecnica6moron@abc.gob.ar", order_index:6,  created_at:"" },
  { id:"7",  full_name:"Coord. Electromecánica",  role:"Coordinador/a",        department:"Electromecánica",email:"tecnica6moron@abc.gob.ar",order_index:7,  created_at:"" },
  { id:"8",  full_name:"Coord. Informática",      role:"Coordinador/a",        department:"Informática",   email:"tecnica6moron@abc.gob.ar", order_index:8,  created_at:"" },
  { id:"9",  full_name:"Coord. Programación",     role:"Coordinador/a",        department:"Programación",  email:"tecnica6moron@abc.gob.ar", order_index:9,  created_at:"" },
  { id:"10", full_name:"Biblioteca",              role:"Bibliotecario/a",      department:"Biblioteca",    email:"chacabucot6@gmail.com",    order_index:10, created_at:"" },
];

const card = { background: "#161616", border: "1px solid rgba(255,255,255,0.07)" };

function group(staff: StaffMember[]) {
  return staff.reduce((acc, m) => {
    const d = m.department || "General";
    if (!acc[d]) acc[d] = [];
    acc[d].push(m);
    return acc;
  }, {} as Record<string, StaffMember[]>);
}

export default function PersonalPage() {
  const [staff, setStaff] = useState<StaffMember[]>(FALLBACK);

  useEffect(() => {
    const load = async () => {
      try {
        const { data } = await supabase
          .from("staff")
          .select("*")
          .order("order_index");
        if (data?.length) setStaff(data);
      } catch {}
    };
    load();
  }, []);

  const grouped = group(staff);

  return (
    <div style={{ background: "#0a0a0a" }}>
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag justify-center">
            <span className="w-7 h-px bg-[#E53935]" />Equipo Docente<span className="w-7 h-px bg-[#E53935]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Personal de la Institución</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.50)" }}>
            Conocé al equipo de profesionales que forma parte de la comunidad educativa de la E.E.S.T. N°6.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {Object.entries(grouped).map(([dept, members]) => (
            <div key={dept} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#E53935] rounded-full" />{dept}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {members.map((m) => (
                  <div key={m.id}
                    className="rounded-xl p-5 transition-all hover:-translate-y-0.5 cursor-default"
                    style={card}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(229,57,53,0.35)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
                  >
                    <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-6 h-6 text-[#E53935]" />
                    </div>
                    <div className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-1">{m.role}</div>
                    <div className="font-bold text-white mb-1 leading-snug">{m.full_name}</div>
                    <div className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.40)" }}>{m.department}</div>
                    {m.email && (
                      <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-xs text-[#E53935] hover:underline">
                        <Mail className="w-3 h-3" />{m.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 rounded-xl p-5 text-center"
            style={{ background: "rgba(229,57,53,0.05)", border: "1px solid rgba(229,57,53,0.15)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              Consultas:{" "}
              <a href="mailto:chacabucot6s@gmail.com" className="text-[#E53935] font-semibold hover:underline">
                chacabucot6s@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
