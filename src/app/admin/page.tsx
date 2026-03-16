"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Newspaper,
  Users,
  Download,
  MessageSquare,
  Plus,
  Trash2,
  Edit2,
  LogOut,
  Eye,
  EyeOff,
  Save,
  X,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import type { NewsArticle, StaffMember, Document } from "@/types";
import { formatDateShort } from "@/lib/utils";
import { cn } from "@/lib/utils";

// Simple password protection (in production use Supabase Auth)
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "chacabuco2025";

type Tab = "news" | "staff" | "documents" | "messages";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("news");

  // News state
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [staff, setStaff] = useState<StaffMember[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState("");

  // Forms
  const [newsForm, setNewsForm] = useState<Partial<NewsArticle>>({});
  const [staffForm, setStaffForm] = useState<Partial<StaffMember>>({});
  const [docForm, setDocForm] = useState<Partial<Document>>({});
  const [showNewsForm, setShowNewsForm] = useState(false);
  const [showStaffForm, setShowStaffForm] = useState(false);
  const [showDocForm, setShowDocForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      loadData("news");
    } else {
      setAuthError("Contraseña incorrecta.");
    }
  };

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 3000);
  };

  const loadData = async (tab: Tab) => {
    setLoading(true);
    try {
      if (tab === "news") {
        const { data } = await supabase.from("news").select("*").order("published_at", { ascending: false });
        setNews(data ?? []);
      } else if (tab === "staff") {
        const { data } = await supabase.from("staff").select("*").order("order_index");
        setStaff(data ?? []);
      } else if (tab === "documents") {
        const { data } = await supabase.from("documents").select("*").order("published_at", { ascending: false });
        setDocuments(data ?? []);
      } else if (tab === "messages") {
        const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
        setMessages(data ?? []);
      }
    } catch {
      showToast("Error cargando datos. Verificá la conexión con Supabase.");
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    loadData(tab);
  };

  // News CRUD
  const saveNews = async () => {
    if (!newsForm.title || !newsForm.excerpt || !newsForm.category) return;
    try {
      const payload = {
        ...newsForm,
        slug: newsForm.slug || newsForm.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, ""),
        published_at: newsForm.published_at || new Date().toISOString(),
      };
      if (newsForm.id) {
        await supabase.from("news").update(payload).eq("id", newsForm.id);
      } else {
        await supabase.from("news").insert([payload]);
      }
      setShowNewsForm(false);
      setNewsForm({});
      loadData("news");
      showToast("Noticia guardada correctamente.");
    } catch {
      showToast("Error guardando la noticia.");
    }
  };

  const deleteNews = async (id: string) => {
    if (!confirm("¿Eliminar esta noticia?")) return;
    await supabase.from("news").delete().eq("id", id);
    loadData("news");
    showToast("Noticia eliminada.");
  };

  // Staff CRUD
  const saveStaff = async () => {
    if (!staffForm.full_name || !staffForm.role) return;
    try {
      if (staffForm.id) {
        await supabase.from("staff").update(staffForm).eq("id", staffForm.id);
      } else {
        await supabase.from("staff").insert([staffForm]);
      }
      setShowStaffForm(false);
      setStaffForm({});
      loadData("staff");
      showToast("Personal guardado correctamente.");
    } catch {
      showToast("Error guardando el registro.");
    }
  };

  const deleteStaff = async (id: string) => {
    if (!confirm("¿Eliminar este registro?")) return;
    await supabase.from("staff").delete().eq("id", id);
    loadData("staff");
    showToast("Registro eliminado.");
  };

  // Document CRUD
  const saveDoc = async () => {
    if (!docForm.title || !docForm.file_url || !docForm.category) return;
    try {
      const payload = {
        ...docForm,
        published_at: docForm.published_at || new Date().toISOString(),
      };
      if (docForm.id) {
        await supabase.from("documents").update(payload).eq("id", docForm.id);
      } else {
        await supabase.from("documents").insert([payload]);
      }
      setShowDocForm(false);
      setDocForm({});
      loadData("documents");
      showToast("Documento guardado correctamente.");
    } catch {
      showToast("Error guardando el documento.");
    }
  };

  const deleteDoc = async (id: string) => {
    if (!confirm("¿Eliminar este documento?")) return;
    await supabase.from("documents").delete().eq("id", id);
    loadData("documents");
    showToast("Documento eliminado.");
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center pt-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface w-full max-w-md rounded-2xl p-8 border border-gray-100 shadow-sm"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">
              Panel de Administración
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              E.E.S.T. N°6 "Chacabuco"
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Contraseña de administrador"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {authError && <p className="text-secondary text-xs mt-1">{authError}</p>}
            </div>
            <button type="submit" className="w-full btn-primary justify-center">
              Ingresar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: "news" as Tab, label: "Noticias", icon: Newspaper, count: news.length },
    { id: "staff" as Tab, label: "Personal", icon: Users, count: staff.length },
    { id: "documents" as Tab, label: "Descargas", icon: Download, count: documents.length },
    { id: "messages" as Tab, label: "Mensajes", icon: MessageSquare, count: messages.length },
  ];

  return (
    <div className="pt-16 min-h-screen bg-bg">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 bg-gray-900 text-white text-sm px-4 py-3 rounded-lg shadow-lg flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-primary text-white px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6" />
            <span className="font-bold text-lg">Panel Administrativo</span>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Salir
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-surface border border-gray-200 text-text-secondary hover:border-primary/30 hover:text-primary"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {tab.count > 0 && (
                <span className={cn("text-xs rounded-full px-1.5 py-0.5", activeTab === tab.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500")}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* NOTICIAS */}
        {activeTab === "news" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-text-primary">Gestión de Noticias</h2>
              <button onClick={() => { setNewsForm({}); setShowNewsForm(true); }} className="btn-primary">
                <Plus className="w-4 h-4" /> Nueva noticia
              </button>
            </div>

            {/* Form */}
            <AnimatePresence>
              {showNewsForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-surface border border-gray-200 rounded-xl p-6 mb-6 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-text-primary">{newsForm.id ? "Editar" : "Nueva"} noticia</h3>
                    <button onClick={() => setShowNewsForm(false)}><X className="w-5 h-5 text-gray-400" /></button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="sm:col-span-2">
                      <label className="label-xs">Título *</label>
                      <input value={newsForm.title ?? ""} onChange={e => setNewsForm({ ...newsForm, title: e.target.value })} className="admin-input" placeholder="Título de la noticia" />
                    </div>
                    <div>
                      <label className="label-xs">Categoría *</label>
                      <select value={newsForm.category ?? ""} onChange={e => setNewsForm({ ...newsForm, category: e.target.value })} className="admin-input bg-white">
                        <option value="">Seleccioná...</option>
                        {["Institucional","Académico","Eventos","Ingresantes","Comunicados","Mesas de examen"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label-xs">Fecha</label>
                      <input type="date" value={newsForm.published_at?.slice(0,10) ?? ""} onChange={e => setNewsForm({ ...newsForm, published_at: e.target.value })} className="admin-input" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label-xs">Resumen *</label>
                      <textarea rows={2} value={newsForm.excerpt ?? ""} onChange={e => setNewsForm({ ...newsForm, excerpt: e.target.value })} className="admin-input resize-none" placeholder="Breve descripción..." />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="label-xs">Contenido completo (HTML)</label>
                      <textarea rows={5} value={newsForm.content ?? ""} onChange={e => setNewsForm({ ...newsForm, content: e.target.value })} className="admin-input resize-none font-mono text-xs" placeholder="<p>Contenido HTML...</p>" />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="featured" checked={newsForm.featured ?? false} onChange={e => setNewsForm({ ...newsForm, featured: e.target.checked })} className="rounded" />
                      <label htmlFor="featured" className="text-sm text-text-secondary">Noticia destacada</label>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={saveNews} className="btn-primary"><Save className="w-4 h-4" /> Guardar</button>
                    <button onClick={() => setShowNewsForm(false)} className="btn-outline">Cancelar</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* List */}
            {loading ? <LoadingSpinner /> : (
              <div className="space-y-2">
                {news.length === 0 && <EmptyState label="No hay noticias publicadas." />}
                {news.map(n => (
                  <div key={n.id} className="bg-surface border border-gray-100 rounded-xl p-4 flex items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">{n.category}</span>
                        <span className="text-xs text-gray-400">{formatDateShort(n.published_at)}</span>
                        {n.featured && <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-0.5 rounded">Destacado</span>}
                      </div>
                      <div className="font-semibold text-text-primary text-sm truncate">{n.title}</div>
                      <div className="text-text-secondary text-xs truncate">{n.excerpt}</div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => { setNewsForm(n); setShowNewsForm(true); }} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit2 className="w-4 h-4 text-gray-500" /></button>
                      <button onClick={() => deleteNews(n.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-secondary" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* PERSONAL */}
        {activeTab === "staff" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-text-primary">Gestión de Personal</h2>
              <button onClick={() => { setStaffForm({}); setShowStaffForm(true); }} className="btn-primary">
                <Plus className="w-4 h-4" /> Agregar persona
              </button>
            </div>

            <AnimatePresence>
              {showStaffForm && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-surface border border-gray-200 rounded-xl p-6 mb-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-text-primary">{staffForm.id ? "Editar" : "Nuevo"} registro</h3>
                    <button onClick={() => setShowStaffForm(false)}><X className="w-5 h-5 text-gray-400" /></button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div><label className="label-xs">Nombre completo *</label><input value={staffForm.full_name ?? ""} onChange={e => setStaffForm({ ...staffForm, full_name: e.target.value })} className="admin-input" placeholder="Apellido, Nombre" /></div>
                    <div><label className="label-xs">Rol/Cargo *</label><input value={staffForm.role ?? ""} onChange={e => setStaffForm({ ...staffForm, role: e.target.value })} className="admin-input" placeholder="Ej: Profesor de Matemática" /></div>
                    <div>
                      <label className="label-xs">Departamento</label>
                      <select value={staffForm.department ?? ""} onChange={e => setStaffForm({ ...staffForm, department: e.target.value })} className="admin-input bg-white">
                        <option value="">Seleccioná...</option>
                        {["Conducción","Secretaría","Regencia","Automotores","Electromecánica","Informática","Programación","Ciclo Básico","Administración"].map(d => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div><label className="label-xs">Email</label><input type="email" value={staffForm.email ?? ""} onChange={e => setStaffForm({ ...staffForm, email: e.target.value })} className="admin-input" /></div>
                    <div className="sm:col-span-2"><label className="label-xs">Biografía breve</label><textarea rows={2} value={staffForm.bio ?? ""} onChange={e => setStaffForm({ ...staffForm, bio: e.target.value })} className="admin-input resize-none" /></div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={saveStaff} className="btn-primary"><Save className="w-4 h-4" /> Guardar</button>
                    <button onClick={() => setShowStaffForm(false)} className="btn-outline">Cancelar</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {loading ? <LoadingSpinner /> : (
              <div className="space-y-2">
                {staff.length === 0 && <EmptyState label="No hay personal cargado." />}
                {staff.map(s => (
                  <div key={s.id} className="bg-surface border border-gray-100 rounded-xl p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded">{s.department}</span>
                      </div>
                      <div className="font-semibold text-text-primary text-sm">{s.full_name}</div>
                      <div className="text-text-secondary text-xs">{s.role}</div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => { setStaffForm(s); setShowStaffForm(true); }} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit2 className="w-4 h-4 text-gray-500" /></button>
                      <button onClick={() => deleteStaff(s.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-secondary" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DOCUMENTOS */}
        {activeTab === "documents" && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-text-primary">Gestión de Descargas</h2>
              <button onClick={() => { setDocForm({}); setShowDocForm(true); }} className="btn-primary">
                <Plus className="w-4 h-4" /> Agregar documento
              </button>
            </div>

            <AnimatePresence>
              {showDocForm && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="bg-surface border border-gray-200 rounded-xl p-6 mb-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-text-primary">{docForm.id ? "Editar" : "Nuevo"} documento</h3>
                    <button onClick={() => setShowDocForm(false)}><X className="w-5 h-5 text-gray-400" /></button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="sm:col-span-2"><label className="label-xs">Título *</label><input value={docForm.title ?? ""} onChange={e => setDocForm({ ...docForm, title: e.target.value })} className="admin-input" placeholder="Nombre del documento" /></div>
                    <div>
                      <label className="label-xs">Categoría *</label>
                      <select value={docForm.category ?? ""} onChange={e => setDocForm({ ...docForm, category: e.target.value })} className="admin-input bg-white">
                        <option value="">Seleccioná...</option>
                        {["Circulares","Formularios","Reglamentos","Calendarios","Otros"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div><label className="label-xs">Tamaño del archivo</label><input value={docForm.file_size ?? ""} onChange={e => setDocForm({ ...docForm, file_size: e.target.value })} className="admin-input" placeholder="Ej: 245 KB" /></div>
                    <div className="sm:col-span-2"><label className="label-xs">URL del archivo *</label><input value={docForm.file_url ?? ""} onChange={e => setDocForm({ ...docForm, file_url: e.target.value })} className="admin-input" placeholder="https://..." /></div>
                    <div className="sm:col-span-2"><label className="label-xs">Descripción</label><textarea rows={2} value={docForm.description ?? ""} onChange={e => setDocForm({ ...docForm, description: e.target.value })} className="admin-input resize-none" /></div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={saveDoc} className="btn-primary"><Save className="w-4 h-4" /> Guardar</button>
                    <button onClick={() => setShowDocForm(false)} className="btn-outline">Cancelar</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {loading ? <LoadingSpinner /> : (
              <div className="space-y-2">
                {documents.length === 0 && <EmptyState label="No hay documentos cargados." />}
                {documents.map(d => (
                  <div key={d.id} className="bg-surface border border-gray-100 rounded-xl p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{d.category}</span>
                        <span className="text-xs text-gray-400">{formatDateShort(d.published_at)}</span>
                        {d.file_size && <span className="text-xs text-gray-400">{d.file_size}</span>}
                      </div>
                      <div className="font-semibold text-text-primary text-sm">{d.title}</div>
                      {d.description && <div className="text-text-secondary text-xs truncate">{d.description}</div>}
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button onClick={() => { setDocForm(d); setShowDocForm(true); }} className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Edit2 className="w-4 h-4 text-gray-500" /></button>
                      <button onClick={() => deleteDoc(d.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="w-4 h-4 text-secondary" /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MENSAJES */}
        {activeTab === "messages" && (
          <div>
            <h2 className="text-xl font-bold text-text-primary mb-5">Mensajes de Contacto</h2>
            {loading ? <LoadingSpinner /> : (
              <div className="space-y-3">
                {messages.length === 0 && <EmptyState label="No hay mensajes recibidos." />}
                {messages.map((m: any) => (
                  <div key={m.id} className="bg-surface border border-gray-100 rounded-xl p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <span className="font-bold text-text-primary">{m.name}</span>
                        <span className="text-gray-400 text-sm ml-2">— {m.email}</span>
                      </div>
                      <span className="text-xs text-gray-400 flex-shrink-0">{formatDateShort(m.created_at)}</span>
                    </div>
                    <div className="text-xs font-semibold text-primary mb-2">{m.subject}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{m.message}</p>
                    <a href={`mailto:${m.email}`} className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                      Responder →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Inline styles for admin form elements */}
      <style jsx global>{`
        .admin-input {
          width: 100%;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 13px;
          color: #111;
          transition: border-color 0.15s;
          outline: none;
        }
        .admin-input:focus {
          border-color: #1FA3D6;
          box-shadow: 0 0 0 2px rgba(31,163,214,0.1);
        }
        .label-xs {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #555;
          margin-bottom: 4px;
        }
      `}</style>
    </div>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center py-12">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

function EmptyState({ label }: { label: string }) {
  return (
    <div className="text-center py-12 text-text-secondary text-sm bg-surface rounded-xl border border-gray-100">
      {label}
    </div>
  );
}
