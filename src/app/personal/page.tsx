import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Mail, Users } from "lucide-react";
import type { StaffMember } from "@/types";

export const metadata: Metadata = {
  title: "Personal Docente",
  description: "Conocé al equipo docente y administrativo de la E.E.S.T. N°6 Chacabuco.",
};

const FALLBACK_STAFF: StaffMember[] = [
  { id: "1", full_name: "Dirección", role: "Director/a", department: "Conducción", email: "tecnica6moron@abc.gob.ar", order_index: 1, created_at: "" },
  { id: "2", full_name: "Vicedirección", role: "Vicedirector/a", department: "Conducción", email: "tecnica6moron@abc.gob.ar", order_index: 2, created_at: "" },
  { id: "3", full_name: "Secretaría Académica", role: "Secretario/a", department: "Secretaría", email: "chacabucot6s@gmail.com", order_index: 3, created_at: "" },
  { id: "4", full_name: "Regencia", role: "Regente", department: "Regencia", email: "chacabucot6@gmail.com", order_index: 4, created_at: "" },
];

const DEPARTMENTS = [
  "Todos",
  "Conducción",
  "Secretaría",
  "Regencia",
  "Automotores",
  "Electromecánica",
  "Informática",
  "Programación",
  "Ciclo Básico",
];

async function getStaff(): Promise<StaffMember[]> {
  try {
    const { data, error } = await supabase
      .from("staff")
      .select("*")
      .order("order_index", { ascending: true });
    if (error) throw error;
    return data?.length ? data : FALLBACK_STAFF;
  } catch {
    return FALLBACK_STAFF;
  }
}

function groupByDepartment(staff: StaffMember[]): Record<string, StaffMember[]> {
  return staff.reduce((acc, member) => {
    const dept = member.department || "General";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(member);
    return acc;
  }, {} as Record<string, StaffMember[]>);
}

export default async function PersonalPage() {
  const staff = await getStaff();
  const grouped = groupByDepartment(staff);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-custom relative z-10 text-center">
          <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">
            Equipo Docente
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Personal de la Institución
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Conocé al equipo de profesionales que forma parte de la comunidad educativa de la E.E.S.T. N°6 Chacabuco.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          {Object.entries(grouped).map(([dept, members]) => (
            <div key={dept} className="mb-12">
              <h2 className="text-xl font-bold text-text-primary mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full" />
                {dept}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-surface rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                      {member.role}
                    </div>
                    <div className="font-bold text-text-primary mb-1 leading-snug">
                      {member.full_name}
                    </div>
                    <div className="text-xs text-text-secondary mb-3">
                      {member.department}
                    </div>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <Mail className="w-3 h-3" />
                        {member.email}
                      </a>
                    )}
                    {member.bio && (
                      <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {staff.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              No hay personal publicado aún.
            </div>
          )}

          {/* Contact note */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
            <p className="text-text-secondary text-sm">
              Para consultas sobre el plantel docente o cuestiones académicas, comunicarse con la Secretaría:{" "}
              <a href="mailto:chacabucot6s@gmail.com" className="text-primary font-semibold hover:underline">
                chacabucot6s@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
