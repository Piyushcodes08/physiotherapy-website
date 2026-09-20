import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { coreServices } from "../../data/siteData";

interface CoreServicesProps {
  onBook?: (serviceName?: string) => void;
}

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function CoreServices({ onBook }: CoreServicesProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [popupIdx, setPopupIdx] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const popupService = popupIdx !== null ? coreServices[popupIdx] : null;

  // Lock body scroll while popup is open (works on iOS Safari too)
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

  return (
    <>
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#f7f8f4] py-10 sm:py-14 lg:py-16"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-emerald-100/50 blur-[140px]" />
        <div className="absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-emerald-200/35 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-[760px] text-center mb-10 sm:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/85 px-4 py-1.5 shadow-xs backdrop-blur-md">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-800">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="font-poppins text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-950 sm:text-xs">
              Specialized Clinical Care
            </span>
          </div>

          <h2 className="font-montserrat text-[28px] font-bold leading-tight tracking-[-0.025em] text-emerald-950 sm:text-[36px] lg:text-[42px]">
            Our Services
          </h2>

          <p className="mt-3.5 font-poppins text-sm leading-relaxed text-slate-700 sm:text-base">
            Hands-on therapy for root-cause healing and lasting pain relief.
          </p>
        </div>

        {/* ── MOBILE: 3 compact image+title cards, tap to open popup ── */}
        <div className="block lg:hidden">
          <p className="mb-4 text-center text-xs text-slate-500 font-medium">
            Tap a card to learn more
          </p>
          <div className="flex flex-col gap-4">
            {coreServices.map((service, idx) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setPopupIdx(idx)}
                className="group relative overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-md shadow-emerald-950/8 transition-all duration-300 active:scale-[0.98] cursor-pointer text-left"
              >
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.banner}
                    alt={service.headline}
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
                      Services
                    </p>
                    <h3 className="font-montserrat text-[18px] font-bold leading-tight tracking-tight text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: 3 rich cards side-by-side ── */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-7 xl:gap-8 items-stretch">
          {coreServices.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={service.id}
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
                    src={service.banner}
                    alt={service.headline}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Teal section */}
                <div className="flex flex-1 flex-col bg-[#16a578] text-white">
                  <div className="flex-1 space-y-5 p-6">
                    {service.features.map((feat) => (
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
                      onClick={() => onBook?.(service.title)}
                      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-poppins text-xs font-semibold text-emerald-950 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:shadow-md cursor-pointer"
                    >
                      <span>Book {service.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>

    {/* ── MOBILE FULL-SCREEN POPUP — rendered via portal to escape stacking contexts ── */}
    {createPortal(
      <AnimatePresence>
        {popupService !== null && (
          <motion.div
            key="fullscreen"
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
                  Services
                </p>
                <h3 className="mt-0.5 font-montserrat text-[16px] font-bold leading-tight text-white">
                  {popupService.title}
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
                src={popupService.banner}
                alt={popupService.headline}
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
            </div>

            {/* Scrollable bullets */}
            <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              {popupService.features.map((feat) => (
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
                  onBook?.(popupService.title);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-950 py-3.5 font-poppins text-sm font-semibold text-white shadow-[0_8px_24px_rgba(6,78,59,0.2)] transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Book {popupService.title}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  );
}
