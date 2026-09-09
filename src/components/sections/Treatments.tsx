import {
  Activity,
  ArrowRight,
  Flame,
  ShieldCheck,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface TreatmentsProps {
  onBook?: (treatmentName?: string) => void;
}

const briefTreatments = [
  {
    id: "spine",
    title: "Spinal Manual Therapy",
    subtitle: "Sciatica, Disc Herniation & Cervical Pain",
    icon: Target,
    tags: ["Sciatica", "Slip Disc", "Neck Pain"],
  },
  {
    id: "chiro",
    title: "Chiropractic Alignment",
    subtitle: "Posture Correction & Joint Mobilization",
    icon: Activity,
    tags: ["Posture", "Spine Alignment", "Tech Neck"],
  },
  {
    id: "needling",
    title: "Dry Needling & Cupping",
    subtitle: "Deep Muscle Spasm & Myofascial Release",
    icon: Flame,
    tags: ["Trigger Points", "Muscle Spasms", "Knots"],
  },
  {
    id: "sports",
    title: "Sports Injury Rehab",
    subtitle: "Ligament, Tendon & Athletic Recovery",
    icon: Sparkles,
    tags: ["ACL Rehab", "Sprains", "Tendonitis"],
  },
  {
    id: "electro",
    title: "Electrotherapy & Ultrasound",
    subtitle: "Rapid Swelling, IFT & Pain Relief",
    icon: Zap,
    tags: ["IFT / TENS", "Ultrasound", "Inflammation"],
  },
  {
    id: "post-op",
    title: "Post-Surgical Care",
    subtitle: "Knee (TKR), Hip & Fracture Mobility",
    icon: ShieldCheck,
    tags: ["TKR Rehab", "Joint Replacement", "Fractures"],
  },
] as const;

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function Treatments({ onBook }: TreatmentsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="treatments"
      className="relative isolate overflow-hidden bg-[#fbfcfa] py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Compact Brief Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-900">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              Specific Treatments
            </div>

            <h2 className="mt-2.5 font-montserrat text-[24px] font-semibold tracking-[-0.03em] text-emerald-950 sm:text-3xl">
              Targeted clinical therapies
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
              Evidence-based modalities designed for rapid pain relief and lasting joint recovery.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onBook && onBook("General Assessment")}
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-emerald-950 shadow-2xs transition-colors hover:border-emerald-800 hover:bg-emerald-50 cursor-pointer"
          >
            <span>Book treatment</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Small Brief Grid - 6 Compact Cards */}
        <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {briefTreatments.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => onBook && onBook(item.title)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.04,
                  ease: smoothEase,
                }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200/80 bg-white p-4 text-left shadow-[0_2px_12px_rgba(15,23,42,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-800/40 hover:shadow-[0_8px_24px_rgba(6,78,59,0.08)] cursor-pointer"
              >
                <div className="flex items-start gap-3.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-50 text-emerald-800 transition-colors duration-300 group-hover:bg-emerald-950 group-hover:text-white">
                    <Icon className="h-4.5 w-4.5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="truncate font-montserrat text-sm font-semibold text-slate-900 group-hover:text-emerald-950">
                        {item.title}
                      </h3>
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-emerald-800" />
                    </div>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
