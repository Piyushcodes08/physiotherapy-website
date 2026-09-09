import { ArrowRight, Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getWhatsAppBookingUrl, images } from "../../data/siteData";

interface HeroProps {
  onBook?: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ onBook }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex h-svh items-center overflow-hidden bg-[#f7f8f4] pt-19 lg:pt-21"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.img
          src={images.hero}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[72%_center]"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#f7f8f4]/95 via-[#f7f8f4]/78 via-65% to-transparent sm:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-[#f7f8f4]/95 via-transparent via-48% to-transparent sm:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#f7f8f4]/65 via-transparent to-transparent sm:hidden" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-292.5 items-center gap-4 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          className="w-full max-w-170 text-left"
          initial={false}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-900/10 bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-xs bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Move well. Live well.
            </span>
          </motion.div>

          <motion.h1
            className="font-montserrat text-[24px] sm:text-4xl md:text-5xl  font-semibold leading-[1.15] sm:leading-[0.92] tracking-[-0.04em] text-emerald-950"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            <span className="block">Health Hunter </span>
            <span className="block">physiotherapy clinic and</span>
            <span className="relative !mt-2.5 inline-block text-slate-950">
              wellness center
              <span className="absolute -bottom-2 left-1 h-1.25 w-full rounded-xs bg-emerald-950" />
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-147.5 text-[15px] leading-7 !text-slate-800 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            Professional, compassionate physiotherapy care in Ahmedabad,
            focused on restoring movement, easing pain and helping you return to
            what matters.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <button
              type="button"
              onClick={onBook}
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-emerald-950 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(6,78,59,0.18)] transition-all hover:bg-emerald-800 sm:px-7"
            >
              Book an assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white/75 px-6 py-3 text-sm font-medium text-slate-800 backdrop-blur-md transition-colors hover:border-emerald-800 hover:bg-white sm:px-7"
            >
              Explore services
            </a>
          </motion.div>

        
        </motion.div>
      </div>
    </section>
  );
}
