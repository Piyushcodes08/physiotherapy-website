import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import { getWhatsAppBookingUrl, images } from "../../data/siteData";

const specializations = [
  {
    icon: Stethoscope,
    title: "Expert Full Body Health Assessment",
    description:
      "Thorough assessment of present and past injuries to determine your current health status.",
  },
  {
    icon: Sparkles,
    title: "Lifestyle Modification & Health Optimisation",
    description:
      "Changes in modern lifestyle practices addressing the root cause of recurring problems.",
  },
  {
    icon: TrendingUp,
    title: "Performance & Functional Enhancement",
    description:
      "Rebuilding and improving recovery speed to feel pain-free, young, and resilient again.",
  },
  {
    icon: ShieldCheck,
    title: "Health Security & Injury Coverage",
    description:
      "Encouraging freedom of movement without worry through security and coverage of rehab costs.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Healthcare & Maintenance",
    description:
      "Improving circadian rhythm, posture, body stiffness, and vitality through regular wellness sessions.",
  },
];

const smoothEase = [0.22, 1, 0.36, 1] as const;

interface AboutProps {
  onBook?: () => void;
}

export function About({ onBook }: AboutProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-emerald-100/45 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-sky-100/45 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-[1170px] items-start gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:px-8 xl:gap-28">
        {/* Left Sticky Image Column */}
        <div className="w-full lg:sticky lg:top-24 lg:self-start">
          <motion.div
            className="relative mx-auto w-full max-w-[450px] lg:mx-0"
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              ease: smoothEase,
            }}
          >
              
            {/* Decorative outline */}
            <div className="absolute -inset-3 rounded-xl border border-emerald-900/10 sm:-inset-4" />

            <div className="relative overflow-hidden rounded-xl bg-slate-100 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6]">
                <motion.img
                  src={images.about}
                  alt="Physiotherapist performing a patient assessment"
                  className="h-full w-full object-cover object-center"
                  initial={{
                    scale: shouldReduceMotion ? 1 : 1.07,
                  }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.2,
                    ease: smoothEase,
                  }}
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-800 via-emerald-800/5 to-transparent" />

              {/* Image caption */}
              <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
                <p className="text-[10px] font-light uppercase tracking-[0.2em] text-white sm:text-xs">
                  Personalised treatment
                </p>

                <p className="mt-1 max-w-[260px] font-montserrat text-xl font-medium leading-tight sm:text-2xl">
                  Care built around your recovery.
                </p>
              </div>
            </div>

            {/* Trust badge */}
            <motion.div
              className="absolute left-4 top-4 hidden items-center gap-2 rounded-md border border-white/60 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur-xl sm:flex sm:left-6 sm:top-6"
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                delay: shouldReduceMotion ? 0 : 0.55,
              }}
            >
              <ShieldCheck className="h-4 w-4 text-emerald-700" />

              <span className="text-xs font-semibold text-slate-800">
                Trusted clinical care
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-2 lg:pt-0">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              ease: smoothEase,
            }}
            className="mb-5 inline-flex items-center gap-3"
          >
            <span className="h-px w-9 bg-emerald-700" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs">
              About our clinic
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: smoothEase,
            }}
            className="max-w-[650px] font-montserrat text-[24px] sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-[-0.03em] text-slate-950"
          >
            Holistic Healthcare and{" "}
            <span className="italic text-emerald-800">Health Preservation.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.16,
              ease: smoothEase,
            }}
            className="mt-6 max-w-[610px] text-base leading-7 text-slate-600 sm:leading-8"
          >
            Our highly skilled techniques bring together their expertise,
            experience, and resources to deliver the best quality integrated
            therapy techniques. As having one of the most comprehensive health
            and wellness packages, we are experts in all major advanced
            therapies, including spinal manual therapy, myofascial therapy,
            sports rehab, chiropractic manipulation therapy, chronic pain
            rehab, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.22,
              ease: smoothEase,
            }}
            className="mt-7 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-xs bg-emerald-700" />
            <p className="text-sm font-semibold tracking-wide text-emerald-950 sm:text-base">
              Here are some of our specializations:
            </p>
          </motion.div>

          {/* Specializations Grid with per-card on-scroll stagger */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {specializations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion
                      ? 0
                      : (index % 2) * 0.1 + Math.floor(index / 2) * 0.07,
                    ease: smoothEase,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                          transition: { duration: 0.25, ease: "easeOut" },
                        }
                  }
                  className={`group flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-[#fafbf9] p-4 transition-colors duration-300 hover:border-emerald-800/25 hover:bg-white hover:shadow-[0_10px_25px_rgba(15,23,42,0.06)] ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-100 text-emerald-800 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-950 group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-emerald-950">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA on-scroll reveal with minimal radius */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease: smoothEase,
            }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <button
              type="button"
              onClick={onBook}
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-lg bg-emerald-950 px-5.5 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(6,78,59,0.17)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              <span>Book consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <span className="text-sm font-medium text-slate-500">
              Professional care in Ahmedabad · +91 63536 27860
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}