import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { getWhatsAppBookingUrl, membershipPillars, services } from "../../data/siteData";

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

interface ServicesProps {
  onBook?: (serviceName?: string) => void;
}

export function Services({ onBook }: ServicesProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f7f8f4] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-emerald-100/50 blur-[150px]" />
        <div className="absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-white/90 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-[760px] text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-900/10 bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md sm:mb-6 sm:px-4"
          >
            <span className="grid h-5 w-5 place-items-center rounded-sm bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Membership Program Benefits
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-montserrat text-[24px] sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-[-0.03em] text-emerald-950 capitalize"
          >
            Our Services
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[640px] text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Designed for continuous health maintenance, active injury prevention,
            and tailored rehabilitation sessions to keep you functioning at your best.
          </motion.p>
        </motion.div>

        {/* Top 2 Membership Pillars with minimal radius */}
        <motion.div
          className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {membershipPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-emerald-500/20 bg-gradient-to-br from-[#07382d] via-[#052b22] to-[#031d17] p-6.5 !text-white shadow-[0_12px_30px_rgba(6,78,59,0.18)] transition-transform duration-300 hover:-translate-y-1 sm:p-7.5"
            >
              {/* Subtle ambient glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-1 text-xs font-semibold !text-emerald-200 backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                    {pillar.badge}
                  </span>

                  <span className="font-mono text-xs font-bold tracking-[0.2em] !text-emerald-400/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="!mt-5 text-xl tracking-tight !text-white sm:text-2xl sm:leading-snug">
                  {pillar.title}
                </h3>

                <p className="mt-3.5 text-sm leading-relaxed !text-emerald-100/90 sm:text-[15px]">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-xs font-semibold !text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Included in membership plan</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Visual Connector / Bridge matching the brochure diagram */}
        <motion.div
          className="relative my-10 flex flex-col items-center justify-center sm:my-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: smoothEase }}
        >
          <div className="h-7 w-px bg-gradient-to-b from-emerald-900/40 to-emerald-600/70" />

          <div className="flex items-center gap-2.5 rounded-md border border-emerald-900/15 bg-white px-4 py-1.5 shadow-xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rotate-45 rounded-xs bg-emerald-700" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-950">
              Membership Program Benefits
            </span>
            <span className="h-1.5 w-1.5 rotate-45 rounded-xs bg-emerald-700" />
          </div>

          <div className="h-7 w-px bg-gradient-to-b from-emerald-600/70 to-emerald-900/40" />
        </motion.div>

        {/* The 3 Core Program Tracks with perfect cards and minimal radius */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {services.map(([Icon, title, points, image, badge], index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-[0_6px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/30 hover:shadow-[0_16px_36px_rgba(6,78,59,0.1)]"
            >
              {/* Image Container with edge-to-edge photography */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Gradient scrim for contrast */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

                {/* Category Badge on top-left */}
                <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-emerald-950 shadow-xs backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  {badge}
                </span>

                {/* Counter badge on top-right */}
                <span className="absolute top-3.5 right-3.5 rounded-md bg-slate-950/60 px-2 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                  0{index + 1}
                </span>

                {/* Integrated Action Icon inside bottom-right corner of image */}
                <div className="absolute bottom-3 right-3 grid h-9.5 w-9.5 place-items-center rounded-lg border border-white/25 bg-emerald-950/90 text-white shadow-md backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-700">
                  <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Title */}
                <h3 className="text-[1.05rem] font-bold leading-snug tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-emerald-900 sm:text-[1.12rem]">
                  {title}
                </h3>

                {/* Bullet Points */}
                <ul className="mt-4 space-y-2.5 border-t border-slate-100 pt-4">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Link */}
                <button
                  type="button"
                  onClick={() => onBook && onBook(title)}
                  className="group/link mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold uppercase tracking-wider text-emerald-950 transition-colors duration-300"
                  aria-label={`Book ${title}`}
                >
                  <span className="relative font-semibold text-slate-900 group-hover/link:text-emerald-800">
                    Book this service
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-emerald-700 transition-all duration-300 group-hover/link:w-full" />
                  </span>

                  <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-50 text-emerald-800 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:bg-emerald-950 group-hover/link:text-white">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              </div>

              {/* Bottom accent indicator */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-emerald-600 to-emerald-900 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom Assessment CTA with minimal radius */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-xl border border-emerald-900/10 bg-emerald-950 px-6 py-6.5 text-center shadow-[0_14px_35px_rgba(6,78,59,0.15)] sm:flex-row sm:px-8 sm:py-7 sm:text-left lg:px-9"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: smoothEase,
          }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10 text-emerald-100">
              <HeartPulse className="h-5 w-5" />
            </span>

            <div>
              <h3 className="text-xl font-medium tracking-[-0.025em] !text-white sm:text-2xl">
                Ready to start your membership?
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/65">
                Join our membership program to secure regular recovery sessions and complete injury prevention.
              </p>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => onBook && onBook("Health Maintenance+ Membership")}
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2.5 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-emerald-950 transition-colors duration-300 hover:bg-emerald-100"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Join the membership
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}