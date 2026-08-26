import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clinicInfo, services } from "../data/siteData";

interface BookingPopupProps {
  open: boolean;
  onClose: () => void;
}

interface BookingFormData {
  name: string;
  phone: string;
  age: string;
  service: string;
  concern: string;
  preferredDate: string;
  preferredTime: string;
  visitType: string;
  message: string;
}

const initialFormData: BookingFormData = {
  name: "",
  phone: "",
  age: "",
  service: "",
  concern: "",
  preferredDate: "",
  preferredTime: "",
  visitType: "Clinic appointment",
  message: "",
};

const steps = [
  ["Your details", "Basic contact information"],
  ["Treatment", "Tell us how we can help"],
  ["Schedule", "Choose your preferred time"],
] as const;

const whatsappNumber = clinicInfo.whatsappNumber;
const ease = [0.22, 1, 0.36, 1] as const;
const inputClassName =
  "mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10";

export function BookingPopup({ open, onClose }: BookingPopupProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  const update = (field: keyof BookingFormData, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const canContinue =
    (step === 1 && form.name.trim() !== "" && form.phone.trim().length >= 10) ||
    (step === 2 && form.service !== "" && form.concern.trim() !== "");

  const closeAndReset = () => {
    onClose();
    window.setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setForm(initialFormData);
    }, 300);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `New Physiotherapy Appointment Enquiry\n\nName: ${form.name}\nPhone: ${form.phone}\nAge: ${form.age || "Not provided"}\nService: ${form.service}\nConcern: ${form.concern}\nDate: ${form.preferredDate || "Flexible"}\nTime: ${form.preferredTime || "Flexible"}\nVisit type: ${form.visitType}\nMessage: ${form.message || "No additional message"}`;
    setSubmitted(true);
    window.setTimeout(() => {
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute inset-0 cursor-default bg-emerald-950/65 backdrop-blur-sm" onClick={closeAndReset} aria-label="Close appointment form" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-popup-title"
            className="relative z-10 flex max-h-[94svh] w-full max-w-[920px] flex-col overflow-hidden rounded-t-[2rem] bg-white shadow-[0_35px_100px_rgba(0,0,0,0.28)] sm:max-h-[90svh] sm:rounded-[2rem] lg:grid lg:grid-cols-[300px_1fr]"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
          >
            <button type="button" onClick={closeAndReset} className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm" aria-label="Close popup"><X className="h-4 w-4" /></button>

            <aside className="hidden bg-emerald-950 p-7 text-white lg:block">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-300"><CalendarDays className="h-5 w-5" /></span>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">{clinicInfo.name}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight">Request an appointment</h2>
              <p className="mt-3 text-sm leading-6 text-white/60">Complete the short form and send your request directly through WhatsApp.</p>
              <div className="mt-9 space-y-3">
                {steps.map(([title, description], index) => {
                  const number = index + 1;
                  const active = step === number;
                  const complete = step > number;
                  return <div key={title} className={`flex items-center gap-3 rounded-2xl border p-3 ${active ? "border-white/20 bg-white/10" : "border-transparent"}`}><span className={`grid h-9 w-9 place-items-center rounded-xl text-xs font-semibold ${complete ? "bg-emerald-400 text-emerald-950" : active ? "bg-white text-emerald-950" : "bg-white/10 text-white/45"}`}>{complete ? <Check className="h-4 w-4" /> : number}</span><span><strong className="block text-sm">{title}</strong><small className="mt-0.5 block text-[11px] text-white/45">{description}</small></span></div>;
                })}
              </div>
            </aside>

            <div className="overflow-y-auto">
              <div className="border-b border-slate-100 px-5 pb-5 pt-6 pr-16 lg:hidden"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">Appointment request</p><h2 id="booking-popup-title" className="mt-2 text-2xl font-semibold text-emerald-950">Book your assessment</h2><div className="mt-5 flex gap-2">{steps.map((_, index) => <span key={index} className={`h-1.5 flex-1 rounded-full ${step >= index + 1 ? "bg-emerald-800" : "bg-slate-200"}`} />)}</div></div>
              <form onSubmit={handleSubmit} className="flex min-h-full flex-col p-5 sm:p-7 lg:p-9">
                {!submitted && step === 1 && <Step title="Tell us about yourself" description="Enter the contact details our clinic team should use." icon={<UserRound />}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-slate-700 sm:col-span-2">Full name<input required autoFocus value={form.name} onChange={(event) => update("name", event.target.value)} className={inputClassName} placeholder="Enter your full name" /></label><label className="text-sm font-medium text-slate-700">Phone number<input required type="tel" value={form.phone} onChange={(event) => update("phone", event.target.value)} className={inputClassName} placeholder="+91 93272 22529" /></label><label className="text-sm font-medium text-slate-700">Age<input type="number" min="1" max="120" value={form.age} onChange={(event) => update("age", event.target.value)} className={inputClassName} placeholder="Your age" /></label></div></Step>}
                {!submitted && step === 2 && <Step title="How can we help?" description="Choose a service and briefly explain your concern." icon={<Phone />}><div className="space-y-5"><label className="block text-sm font-medium text-slate-700">Required service<select required value={form.service} onChange={(event) => update("service", event.target.value)} className={`${inputClassName} cursor-pointer`}><option value="" disabled>Select a service</option>{services.map(([, name]) => <option key={name}>{name}</option>)}</select></label><label className="block text-sm font-medium text-slate-700">Main concern<textarea required rows={4} value={form.concern} onChange={(event) => update("concern", event.target.value)} className={`${inputClassName} h-auto resize-none py-3.5`} placeholder="For example: lower back pain for two weeks..." /></label></div></Step>}
                {!submitted && step === 3 && <Step title="Choose your preference" description="Our clinic will confirm availability through WhatsApp." icon={<Clock3 />}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-slate-700">Preferred date<input type="date" value={form.preferredDate} onChange={(event) => update("preferredDate", event.target.value)} className={inputClassName} /></label><label className="text-sm font-medium text-slate-700">Preferred time<select value={form.preferredTime} onChange={(event) => update("preferredTime", event.target.value)} className={`${inputClassName} cursor-pointer`}><option value="">Flexible timing</option><option>Morning · 8:00–11:00</option><option>Midday · 11:00–2:00</option><option>Afternoon · 2:00–5:00</option><option>Evening · 5:00–8:00</option></select></label><fieldset className="sm:col-span-2"><legend className="text-sm font-medium text-slate-700">Appointment type</legend><div className="mt-2 grid gap-3 sm:grid-cols-2">{["Clinic appointment", "Request a callback"].map((type) => <label key={type} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 ${form.visitType === type ? "border-emerald-700 bg-emerald-50" : "border-slate-200"}`}><input type="radio" name="visitType" value={type} checked={form.visitType === type} onChange={(event) => update("visitType", event.target.value)} className="accent-emerald-800" /><span className="text-sm font-medium text-slate-700">{type}</span></label>)}</div></fieldset><label className="text-sm font-medium text-slate-700 sm:col-span-2">Additional message<textarea rows={3} value={form.message} onChange={(event) => update("message", event.target.value)} className={`${inputClassName} h-auto resize-none py-3.5`} placeholder="Any additional information for our team" /></label></div></Step>}
                {submitted && <div className="flex min-h-[390px] flex-col items-center justify-center text-center"><span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 className="h-9 w-9" /></span><h3 className="mt-6 text-3xl font-semibold text-emerald-950">Request is ready</h3><p className="mt-3 max-w-[390px] text-sm leading-6 text-slate-600">WhatsApp will open with your appointment details. Send the prepared message to complete your enquiry.</p><button type="button" onClick={closeAndReset} className="mt-7 rounded-full bg-emerald-950 px-7 py-3 text-sm font-medium text-white">Close</button></div>}
                {!submitted && <div className="mt-9 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">{step > 1 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm text-slate-600"><ArrowLeft className="h-4 w-4" />Back</button> : <span />}{step < 3 ? <button type="button" disabled={!canContinue} onClick={() => setStep((current) => current + 1)} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-emerald-950 px-6 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40">Continue<ArrowRight className="h-4 w-4" /></button> : <button type="submit" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" />Send on WhatsApp<ArrowRight className="h-4 w-4" /></button>}</div>}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Step({ title, description, icon, children }: { title: string; description: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25 }}><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">{icon}</span><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">Step</span></div><h3 className="mt-5 text-2xl font-semibold text-emerald-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p><div className="mt-7">{children}</div></motion.div>;
}
