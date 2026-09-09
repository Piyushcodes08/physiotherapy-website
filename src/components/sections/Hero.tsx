import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "../../data/siteData";

interface HeroProps {
  onBook?: () => void;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero({ onBook }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate flex overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={images.heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
        {/* Mobile overlay: soft coverage for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f8f4]/95 via-[#f7f8f4]/88 to-[#f7f8f4]/60 sm:hidden" />
        <div className="absolute inset-0 bg-[#f7f8f4]/30 sm:hidden" />

        {/* Desktop overlay: smoothly covers left text area, 100% transparent on the right side */}
        <div className="absolute inset-0 hidden sm:block bg-[linear-gradient(to_right,#f7f8f4_0%,#f7f8f4_30%,rgba(247,248,244,0.85)_40%,rgba(247,248,244,0.35)_48%,transparent_55%)]" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1170px] flex-col justify-center px-5 pt-[100px] pb-10 sm:px-6 lg:min-h-[100dvh] lg:px-8 lg:pt-[80px]">

        {/* Badge */}
        <motion.div
          className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-800/25 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Sparkles className="h-3 w-3 text-emerald-700" />
          <span className="font-poppins text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-900">
            recover & revive your biological age.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mt-4 font-montserrat text-[28px] font-bold leading-[1.18] tracking-[-0.025em] text-emerald-950 sm:text-[36px] lg:mt-5 lg:text-[42px] xl:text-[50px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease }}
        >
          <span className="block">Health Hunter</span>
          <span className="block">physiotherapy clinic and</span>
          <span className="relative inline-block">
            wellness center
            <span className="absolute -bottom-0.5 left-0 h-[3px] w-full rounded-sm bg-emerald-950 lg:h-[3.5px]" />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          className="mt-5 max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease }}
        >
          <p className="rounded-xl border border-emerald-900/10 bg-white/80 p-3.5 font-poppins text-[14px] font-medium leading-[1.75] text-slate-800 shadow-xs backdrop-blur-md sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none sm:text-[15px] sm:font-normal sm:text-slate-700">
            Professional, compassionate physiotherapy care in Ahmedabad,
            focused on restoring movement, easing pain and helping you return to
            what matters.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease }}
        >
          <button
            type="button"
            onClick={onBook}
            className="group inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-emerald-950 px-7 py-3 font-poppins text-sm font-semibold text-white shadow-[0_10px_28px_rgba(6,78,59,0.22)] transition-all duration-300 hover:bg-emerald-800 hover:-translate-y-0.5 cursor-pointer"
          >
            Book an assessment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#services"
            className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-slate-300 bg-white/90 px-7 py-3 font-poppins text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition-all hover:border-emerald-700 hover:bg-white hover:text-emerald-900"
          >
            Explore services
          </a>
        </motion.div>
      </div>
    </section>
  );
}
