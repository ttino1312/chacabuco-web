"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

interface FormData { name:string; email:string; subject:string; message:string; type:string; }

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>({ name:"", email:"", subject:"", message:"", type:"consulta" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true); setError("");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch { setError("Error al enviar. Intentá nuevamente."); }
    finally { setSending(false); }
  };

  const contactItems = [
    { icon:MapPin, title:"Dirección",      content:`${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`,    href:SCHOOL_INFO.mapsLink, external:true },
    { icon:Phone,  title:"Teléfono",       content:SCHOOL_INFO.phone,                                href:`tel:${SCHOOL_INFO.phone}` },
    { icon:Mail,   title:"Email familias", content:SCHOOL_INFO.emailFamilies,                        href:`mailto:${SCHOOL_INFO.emailFamilies}` },
    { icon:Mail,   title:"Email oficial",  content:SCHOOL_INFO.emailOficial,                         href:`mailto:${SCHOOL_INFO.emailOficial}` },
    { icon:Clock,  title:"Horarios",       content:`M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href:null },
  ];

  const inputCls = "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-colors";

  return (
    <div>
      <section className="bg-primary section-padding relative overflow-hidden">
        <div className="absolute inset-0 grid-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary" />
        <div className="container-custom relative z-10 text-center">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
            <div className="text-secondary text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              <span className="w-7 h-px bg-secondary" />Hablemos<span className="w-7 h-px bg-secondary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contacto</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Consultas sobre inscripciones, información académica o cualquier cuestión institucional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-bg">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Información de contacto</h2>
              <div className="space-y-3 mb-8">
                {contactItems.map(item => {
                  const inner = (
                    <div className="flex items-start gap-4 bg-surface rounded-xl p-4 border border-gray-100
                                   hover:border-secondary/30 hover:shadow-sm transition-all group h-full">
                      <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{item.title}</div>
                        <p className="text-text-primary text-sm hover:text-secondary transition-colors">{item.content}</p>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.title} href={item.href} target={item.external?"_blank":undefined} rel="noopener noreferrer">{inner}</a>
                  ) : <div key={item.title}>{inner}</div>;
                })}
              </div>
              <a href={SCHOOL_INFO.instagram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600
                           text-white rounded-xl px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity mb-8">
                <Instagram className="w-4 h-4" />Instagram institucional
              </a>
              <div className="rounded-xl overflow-hidden border border-gray-200 h-56 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279!2d-58.6217!3d-34.6545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Rivadavia+17337+Mor%C3%B3n!5e0!3m2!1ses!2sar!4v1"
                  width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Ubicación escuela" className="block"
                />
              </div>
            </motion.div>

            {/* Right */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:0.1 }}>
              <div className="bg-surface rounded-2xl p-8 border border-gray-100 shadow-sm" id="inscripciones">
                <h2 className="text-2xl font-bold text-text-primary mb-1">Envianos un mensaje</h2>
                <p className="text-text-secondary text-sm mb-6">Te responderemos a la brevedad.</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">¡Mensaje enviado!</h3>
                    <p className="text-text-secondary text-sm">Te responderemos a la brevedad en {form.email}.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Nombre *</label>
                        <input type="text" required value={form.name} onChange={e => setForm({...form,name:e.target.value})} className={inputCls} placeholder="Tu nombre completo" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Email *</label>
                        <input type="email" required value={form.email} onChange={e => setForm({...form,email:e.target.value})} className={inputCls} placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Tipo</label>
                      <select value={form.type} onChange={e => setForm({...form,type:e.target.value})} className={inputCls + " bg-white"}>
                        {["consulta","inscripcion","pase","academico","otro"].map(v => <option key={v} value={v}>{v.charAt(0).toUpperCase()+v.slice(1)}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Asunto *</label>
                      <input type="text" required value={form.subject} onChange={e => setForm({...form,subject:e.target.value})} className={inputCls} placeholder="Asunto del mensaje" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-text-secondary uppercase tracking-wider mb-1.5">Mensaje *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({...form,message:e.target.value})} className={inputCls + " resize-none"} placeholder="Escribí tu consulta..." />
                    </div>
                    {error && <div className="text-secondary text-sm bg-secondary/5 border border-secondary/20 rounded-lg p-3">{error}</div>}
                    <button type="submit" disabled={sending}
                      className="w-full bg-secondary hover:bg-accent disabled:bg-gray-200 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                      style={{ boxShadow: sending ? "none" : "0 4px 16px rgba(229,57,53,0.3)" }}>
                      {sending ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>) : (<><Send className="w-4 h-4" />Enviar mensaje</>)}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
