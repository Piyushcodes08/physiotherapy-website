import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { images, services } from "../../data/siteData";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: smoothEase,
    },
  },
};

const inputStyles =
  "mt-2 h-13 w-full rounded-xl border border-slate-200 bg-[#f8faf8] px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10";

export function Contact() {
  const [sent, setSent] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-52 top-12 h-[450px] w-[450px] rounded-full bg-emerald-100/40 blur-[150px]" />

        <div className="absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-emerald-50/70 blur-[150px]" />
      </div>

      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50/80 px-3.5 py-2 shadow-sm sm:mb-6 sm:px-4"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Request an appointment
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sans text-[clamp(2.6rem,5vw,4.75rem)]  leading-[0.98] tracking-[-0.05em] text-emerald-950"
          >
            Start Your Recovery Journey
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Share a few details and our clinic team will contact you to confirm
            a suitable appointment time.
          </motion.p>
        </motion.div>

        {/* Form and clinic details */}
        <div className="mt-12 grid items-stretch gap-6 sm:mt-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-7">
          {/* Appointment form */}
          <motion.div
            className="rounded-[2rem] border border-emerald-950/8 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] sm:p-7 lg:p-8"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease: smoothEase,
            }}
          >
            <div className="mb-7 flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                  Appointment form
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-emerald-950 sm:text-[28px]">
                  Tell us how we can help
                </h3>
              </div>

              <span className="hidden rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 sm:block">
                Usually replies quickly
              </span>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    className={inputStyles}
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Phone number
                  <input
                    required
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    className={inputStyles}
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                  Service
                  <select
                    required
                    name="service"
                    defaultValue=""
                    className={`${inputStyles} cursor-pointer appearance-none`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map(([, name]) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-slate-700 sm:col-span-2">
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us briefly about your pain, injury or concern"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8faf8] px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/10"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <motion.button
                  type="submit"
                  className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-emerald-950 px-7 py-3.5 text-sm font-normal text-white shadow-[0_14px_30px_rgba(6,78,59,0.18)] transition-colors duration-300 hover:bg-emerald-800"
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={
                    shouldReduceMotion ? undefined : { scale: 0.98 }
                  }
                >
                  Send appointment request

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                <p className="text-center text-xs leading-5 text-slate-500 sm:text-left">
                  Your information remains private and secure.
                </p>
              </div>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    role="status"
                    aria-live="polite"
                    className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : -8,
                      height: shouldReduceMotion ? "auto" : 0,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.35,
                    }}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />

                    <span>
                      <strong className="block text-sm font-semibold">
                        Request received successfully
                      </strong>

                      <span className="mt-1 block text-xs leading-5 text-emerald-800/75">
                        Thank you. Our clinic team will contact you shortly.
                      </span>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Clinic information */}
          <motion.aside
            className="flex overflow-hidden rounded-[2rem] bg-emerald-950 p-3 text-white shadow-[0_24px_60px_rgba(6,78,59,0.18)]"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: smoothEase,
            }}
          >
            <div className="flex w-full flex-col">
              <div className="px-4 pb-7 pt-5 sm:px-6 sm:pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                  Heritage Health
                </p>

                <h3 className="mt-2 text-2xl  tracking-[-0.035em] !text-white sm:text-[28px]">
                  Clinic Details
                </h3>

                <p className="mt-3 max-w-[390px] text-sm leading-6 text-white/60">
                  Visit our physiotherapy clinic near Thaltej Metro Station in
                  Ahmedabad.
                </p>

                <div className="mt-7 space-y-3">
                  <a
                    href="https://maps.google.com/?q=Thaltej+Metro+Station+Ahmedabad"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>

                    <span>
                      <small className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Address
                      </small>

                      <strong className="mt-1 block text-sm font-medium leading-5 text-white">
                        Near Thaltej Metro Station, Ahmedabad
                      </strong>
                    </span>
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300">
                      <Phone className="h-4.5 w-4.5" />
                    </span>

                    <span>
                      <small className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Call us
                      </small>

                      <strong className="mt-1 block text-sm font-medium text-white">
                        +91 98765 43210
                      </strong>
                    </span>
                  </a>

                  <a
                    href="mailto:care@heritagehealth.in"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-colors duration-300 hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300">
                      <Mail className="h-4.5 w-4.5" />
                    </span>

                    <span className="min-w-0">
                      <small className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Email
                      </small>

                      <strong className="mt-1 block truncate text-sm font-medium text-white">
                        care@heritagehealth.in
                      </strong>
                    </span>
                  </a>

                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-emerald-300">
                      <Clock3 className="h-4.5 w-4.5" />
                    </span>

                    <span>
                      <small className="block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">
                        Clinic hours
                      </small>

                      <strong className="mt-1 block text-sm font-medium text-white">
                        Mon–Sat · 8:00 AM–8:00 PM
                      </strong>
                    </span>
                  </div>
                </div>
              </div>

          
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}