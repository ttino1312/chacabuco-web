"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Instagram } from "lucide-react";
import { SCHOOL_INFO } from "@/lib/data";

interface Form { name:string; email:string; subject:string; message:string; type:string; }

const card = { background:"#161616", border:"1px solid rgba(255,255,255,0.07)" };

export default function ContactoPage() {
  const [form, setForm] = useState<Form>({ name:"", email:"", subject:"", message:"", type:"consulta" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true); setError("");
    try {
      const res = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch { setError("Error al enviar. Por favor intentá nuevamente."); }
    finally { setSending(false); }
  };

  const contacts = [
    { icon:MapPin, title:"Dirección",      v:`${SCHOOL_INFO.address}, ${SCHOOL_INFO.city}`, href:SCHOOL_INFO.mapsLink, ext:true },
    { icon:Phone,  title:"Teléfono",       v:SCHOOL_INFO.phone,                             href:`tel:${SCHOOL_INFO.phone}` },
    { icon:Mail,   title:"Email familias", v:SCHOOL_INFO.emailFamilies,                     href:`mailto:${SCHOOL_INFO.emailFamilies}` },
    { icon:Mail,   title:"Email oficial",  v:SCHOOL_INFO.emailOficial,                      href:`mailto:${SCHOOL_INFO.emailOficial}` },
    { icon:Clock,  title:"Horarios",       v:`M: ${SCHOOL_INFO.schedules.morning} · T: ${SCHOOL_INFO.schedules.afternoon}`, href:null },
  ];

  return (
    <div style={{ background:"#0a0a0a" }}>
      <section className="page-hero section-padding">
        <div className="absolute inset-0 grid-dark" />
        <div className="container-custom relative z-10 text-center">
          <div className="section-tag justify-center"><span className="w-7 h-px bg-[#E53935]" />Hablemos<span className="w-7 h-px bg-[#E53935]" /></div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contacto</h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color:"rgba(255,255,255,0.50)" }}>
            Consultas sobre inscripciones, información académica o cualquier cuestión institucional.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <motion.div initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5 }}>
              <h2 className="text-2xl font-bold text-white mb-6">Información de contacto</h2>
              <div className="space-y-3 mb-8">
                {contacts.map(c => {
                  const inner = (
                    <div className="flex items-start gap-4 rounded-xl p-4 transition-all group"
                      style={card}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(229,57,53,0.35)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.07)"; }}>
                      <div className="w-9 h-9 bg-[#E53935]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <c.icon className="w-4 h-4 text-[#E53935] group-hover:scale-110 transition-transform" />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color:"rgba(255,255,255,0.35)" }}>{c.title}</div>
                        <p className="text-sm text-white/70 group-hover:text-white transition-colors">{c.v}</p>
                      </div>
                    </div>
                  );
                  return c.href
                    ? <a key={c.title} href={c.href} target={c.ext?"_blank":undefined} rel="noopener noreferrer">{inner}</a>
                    : <div key={c.title}>{inner}</div>;
                })}
              </div>
              <a href={SCHOOL_INFO.instagram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-8 text-sm font-semibold rounded-xl px-4 py-2.5 hover:opacity-90 transition-opacity text-white"
                style={{ background:"linear-gradient(to right, #ec4899, #8b5cf6)" }}>
                <Instagram className="w-4 h-4" />Instagram institucional
              </a>
              <div className="rounded-xl overflow-hidden h-56"
                style={{ border:"1px solid rgba(255,255,255,0.07)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279!2d-58.6217!3d-34.6545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Rivadavia+17337+Mor%C3%B3n!5e0!3m2!1ses!2sar!4v1"
                  width="100%" height="100%" style={{ border:0, display:"block", filter:"invert(0.9) hue-rotate(180deg)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación escuela"
                />
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.5, delay:0.1 }}>
              <div className="rounded-2xl p-8" style={{ ...card, border:"1px solid rgba(255,255,255,0.09)" }} id="inscripciones">
                <h2 className="text-2xl font-bold text-white mb-1">Envianos un mensaje</h2>
                <p className="text-sm mb-6" style={{ color:"rgba(255,255,255,0.45)" }}>Te responderemos a la brevedad.</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                    <p className="text-sm" style={{ color:"rgba(255,255,255,0.50)" }}>Te responderemos a la brevedad en {form.email}.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="label-sm">Nombre *</label>
                        <input type="text" required value={form.name} onChange={e => setForm({...form,name:e.target.value})}
                          className="input-dark" placeholder="Tu nombre completo" />
                      </div>
                      <div>
                        <label className="label-sm">Email *</label>
                        <input type="email" required value={form.email} onChange={e => setForm({...form,email:e.target.value})}
                          className="input-dark" placeholder="tu@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="label-sm">Tipo de consulta</label>
                      <select value={form.type} onChange={e => setForm({...form,type:e.target.value})} className="input-dark">
                        {["consulta","inscripcion","pase","academico","otro"].map(v =>
                          <option key={v} value={v} style={{ background:"#1a1a1a" }}>{v.charAt(0).toUpperCase()+v.slice(1)}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="label-sm">Asunto *</label>
                      <input type="text" required value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}
                        className="input-dark" placeholder="Asunto del mensaje" />
                    </div>
                    <div>
                      <label className="label-sm">Mensaje *</label>
                      <textarea required rows={5} value={form.message} onChange={e => setForm({...form,message:e.target.value})}
                        className="input-dark resize-none" placeholder="Escribí tu consulta aquí..." />
                    </div>
                    {error && <div className="text-[#E53935] text-sm rounded-lg p-3" style={{ background:"rgba(229,57,53,0.08)", border:"1px solid rgba(229,57,53,0.2)" }}>{error}</div>}
                    <button type="submit" disabled={sending} className="btn-primary w-full justify-center py-3 disabled:opacity-50">
                      {sending
                        ? <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Enviando...</>
                        : <><Send className="w-4 h-4" />Enviar mensaje</>}
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
