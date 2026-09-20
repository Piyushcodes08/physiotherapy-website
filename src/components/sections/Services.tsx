import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import {
  AnimatePresence,
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
  const [openPillars, setOpenPillars] = useState<Record<number, boolean>>({});
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [popupIdx, setPopupIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const popupService = popupIdx !== null ? services[popupIdx] : null;

  // Lock body scroll while popup is open
  useEffect(() => {
    if (popupIdx !== null) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    }
    return () => {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    };
  }, [popupIdx]);

  const togglePillar = (idx: number) => {
    setOpenPillars((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handlePrevPillar = () => {
    setActivePillarIdx((prev) => (prev === 0 ? membershipPillars.length - 1 : prev - 1));
  };

  const handleNextPillar = () => {
    setActivePillarIdx((prev) => (prev === membershipPillars.length - 1 ? 0 : prev + 1));
  };

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
    <>
    <section
      id="membership"
      className="relative isolate overflow-hidden bg-[#f7f8f4] py-10 sm:py-14 lg:py-16"
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-1.5 shadow-xs backdrop-blur-md sm:mb-6"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs text-center">
              Membership Program Benefits
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-montserrat text-[24px] sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-[-0.03em] text-emerald-950 capitalize"
          >
             Membership  Benefits
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[640px] text-[15px] leading-relaxed text-slate-600 sm:text-base"
          >
            Continuous health maintenance, injury prevention, and tailored recovery.
          </motion.p>
        </motion.div>

        {/* MOBILE Membership Pillars Slider (< lg) */}
        <div className="block lg:hidden mt-12 sm:mt-14">
          {/* Pill tabs */}
          <div className="flex items-center justify-center gap-2 pb-3">
            {membershipPillars.map((pillar, idx) => (
              <button
                key={pillar.badge}
                type="button"
                onClick={() => setActivePillarIdx(idx)}
                className={`rounded-full px-3.5 py-1.5 font-poppins text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activePillarIdx === idx
                    ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/20 scale-[1.02]"
                    : "border border-emerald-900/15 bg-white/90 text-emerald-950 hover:bg-emerald-50"
                }`}
              >
                {pillar.badge}
              </button>
            ))}
          </div>

          <div className="mt-2 mb-3 text-center text-xs font-medium text-emerald-950">
            Plan {activePillarIdx + 1} of {membershipPillars.length}
          </div>

          {/* Active pillar card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {(() => {
                const pillar = membershipPillars[activePillarIdx];
                const isOpen = !!openPillars[activePillarIdx];
                return (
                  <motion.div
                    key={pillar.badge}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => togglePillar(activePillarIdx)}
                    className="group relative flex flex-col items-center text-center overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#07382d] via-[#052b22] to-[#031d17] p-6 !text-white shadow-[0_12px_30px_rgba(6,78,59,0.18)] cursor-pointer [&_h3]:text-center [&_p]:text-center"
                  >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />

                    <div className="w-full flex flex-col items-center">
                      <div className="flex items-center justify-center gap-3 w-full">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold !text-emerald-200 backdrop-blur-md">
                          <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                          {pillar.badge}
                        </span>
                        <div className="flex items-center gap-2 ml-auto">
                          <span className="font-mono text-xs font-bold tracking-[0.2em] !text-emerald-400/70">
                            {String(activePillarIdx + 1).padStart(2, "0")}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 text-emerald-300/70 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>

                      <h3 className="mt-5 text-xl tracking-tight !text-white text-center">
                        {pillar.title}
                      </h3>

                      <div
                        className={`grid transition-all duration-500 ease-out w-full ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm leading-relaxed !text-emerald-100/90 pt-1 text-center">
                            {pillar.description}
                          </p>
                          <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold !text-emerald-300">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                            <span>Included in membership plan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="mt-5 flex items-center justify-between px-2">
              <button
                type="button"
                onClick={handlePrevPillar}
                aria-label="Previous Plan"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-950 shadow-xs hover:bg-emerald-50 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {membershipPillars.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActivePillarIdx(dotIdx)}
                    aria-label={`Go to plan ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activePillarIdx === dotIdx
                        ? "w-8 bg-emerald-900"
                        : "w-2.5 bg-emerald-900/20"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextPillar}
                aria-label="Next Plan"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-950 shadow-xs hover:bg-emerald-50 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP Membership Pillars 2-col grid (>= lg) */}
        <motion.div
          className="hidden lg:grid mt-12 sm:mt-14 gap-5 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {membershipPillars.map((pillar, index) => {
            const isOpen = !!openPillars[index];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp}
                onClick={() => togglePillar(index)}
                className="group relative flex flex-col items-center text-center justify-between overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-[#07382d] via-[#052b22] to-[#031d17] p-6 !text-white shadow-[0_12px_30px_rgba(6,78,59,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_45px_rgba(6,78,59,0.28)] cursor-pointer sm:p-7 [&_h3]:text-center [&_p]:text-center"
              >
                {/* Subtle ambient glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="w-full">
                  <div className="flex items-center justify-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold !text-emerald-200 backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                      {pillar.badge}
                    </span>

                    <div className="flex items-center gap-2 ml-auto">
                      <span className="font-mono text-xs font-bold tracking-[0.2em] !text-emerald-400/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-emerald-300/70 transition-transform duration-300 group-hover:rotate-180 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <h3 className="!mt-5 text-xl tracking-tight !text-white text-center sm:text-2xl sm:leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description revealed on hover / tap */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-4"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed !text-emerald-100/90 sm:text-[15px] pt-1 text-center">
                        {pillar.description}
                      </p>

                      <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold !text-emerald-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>Included in membership plan</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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

          <div className="flex items-center gap-2.5 rounded-full border border-emerald-900/15 bg-white px-5 py-2 shadow-xs backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rotate-45 rounded-xs bg-emerald-700" />
            <span className="text-xs font-bold uppercase text-center tracking-[0.18em] text-emerald-950">
              Membership Program Benefits
            </span>
            <span className="h-1.5 w-1.5 rotate-45 rounded-xs bg-emerald-700" />
          </div>

          <div className="h-7 w-px bg-gradient-to-b from-emerald-600/70 to-emerald-900/40" />
        </motion.div>

        {/* ── MOBILE: Compact cards matching Our Services style, tap to open popup ── */}
        <div className="block lg:hidden">
          <p className="mb-4 text-center text-xs text-slate-500 font-medium font-poppins">
            Tap a card to learn more
          </p>
          <div className="flex flex-col gap-4">
            {services.map((service, idx) => {
              const [, title, , image, badge] = service;
              return (
                <button
                  key={title}
                  type="button"
                  onClick={() => setPopupIdx(idx)}
                  className="group relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-md shadow-emerald-950/8 transition-all duration-300 active:scale-[0.98] cursor-pointer text-left"
                >
                  {/* Image */}
                  <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                    <img
                      src={image}
                      alt={title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Dark gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/20 to-transparent" />

                    {/* Index badge */}
                    <span className="absolute left-3 top-3 rounded-full border border-white/30 bg-white/15 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                      0{idx + 1}
                    </span>

                    {/* "Tap to explore" hint */}
                    <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-white/30 bg-emerald-950/60 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-emerald-200 backdrop-blur-md">
                      Tap to explore
                    </span>

                    {/* Title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-300 mb-0.5">
                        {badge}
                      </p>
                      <h3 className="font-montserrat text-[18px] font-bold leading-tight tracking-tight text-white">
                        {title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── DESKTOP: 2 rich cards side-by-side matching Our Services section card design ── */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-7 xl:gap-8 max-w-5xl mx-auto items-stretch">
          {services.map((service, idx) => {
            const [, title, , image, , features] = service;
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white transition-all duration-500 ${
                  isHovered
                    ? "-translate-y-2.5 shadow-[0_24px_55px_rgba(22,165,120,0.22)] ring-2 ring-emerald-500/30"
                    : "shadow-lg shadow-emerald-950/5 hover:shadow-xl"
                }`}
              >
                {/* Top Banner */}
                <div className="relative w-full aspect-[394/246] shrink-0 bg-slate-900 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Teal section */}
                <div className="flex flex-1 flex-col bg-[#16a578] text-white">
                  <div className="flex-1 space-y-5 p-6">
                    {features.map((feat) => (
                      <div
                        key={feat.num}
                        className="relative border-l-2 border-white/60 pl-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <div className="flex items-baseline gap-2">
                          <span className="font-poppins text-2xl font-light tracking-tight text-white/90">
                            {feat.num}
                          </span>
                          <h3 className="font-montserrat text-xs font-bold tracking-wider uppercase text-white">
                            {feat.title}
                          </h3>
                        </div>
                        <p className="mt-1 font-poppins text-[12px] leading-relaxed text-white/95">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA pinned at bottom */}
                  <div className="bg-[#14956c] p-4">
                    <button
                      type="button"
                      onClick={() => onBook?.(title)}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-poppins text-xs font-semibold text-emerald-950 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:shadow-md cursor-pointer"
                    >
                      <span>Book {title}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Assessment CTA with minimal radius */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-emerald-900/10 bg-emerald-950 px-6 py-6.5 text-center shadow-[0_14px_35px_rgba(6,78,59,0.15)] sm:flex-row sm:px-8 sm:py-7 sm:text-left lg:px-9"
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
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/10 text-emerald-100">
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
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2.5 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-950 transition-colors duration-300 hover:bg-emerald-100 cursor-pointer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Join the membership
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>

    {/* ── MOBILE FULL-SCREEN POPUP — rendered via portal to escape stacking contexts ── */}
    {createPortal(
      <AnimatePresence>
        {popupService !== null && (() => {
          const [, title, , image, badge, features] = popupService;
          return (
            <motion.div
              key="membership-service-fullscreen"
              className="fixed inset-0 z-[9999] flex flex-col bg-white lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: smoothEase }}
            >
              {/* Header bar */}
              <div className="flex shrink-0 items-center justify-between bg-emerald-950 px-5 py-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                    {badge}
                  </p>
                  <h3 className="mt-0.5 font-montserrat text-[16px] font-bold leading-tight text-white">
                    {title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPopupIdx(null)}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/25 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Image */}
              <div className="relative w-full shrink-0 overflow-hidden bg-slate-900" style={{ height: "35dvh" }}>
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
              </div>

              {/* Scrollable bullets */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
                {features.map((feat) => (
                  <div key={feat.num} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-800">
                        {feat.title}
                      </p>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sticky Book CTA */}
              <div
                className="shrink-0 border-t border-slate-100 bg-white px-5 pt-4"
                style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom, 1.5rem))" }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setPopupIdx(null);
                    onBook?.(title);
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-950 py-3.5 font-poppins text-sm font-semibold text-white shadow-[0_8px_24px_rgba(6,78,59,0.2)] transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Book {title}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}