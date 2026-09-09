import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { clinicInfo, getWhatsAppBookingUrl, images, navigation } from "../../data/siteData";

type NavigationItem = (typeof navigation)[number];

interface HeaderProps {
  onBook?: () => void;
}

const getSectionId = (item: NavigationItem) =>
  item.toLowerCase().trim().replace(/\s+/g, "-");

export function Header({ onBook }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      setScrolled(currentScrollY > 16);
      setHidden(currentScrollY > 80 && scrollingDown && !open);
      if (currentScrollY <= 16) setHidden(false);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-[0_12px_35px_rgba(15,23,42,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-white/75 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex h-19 max-w-292.5 items-center justify-between px-4 sm:px-6 lg:h-21 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Health Hunter home"
        >
          <img
            src={images.logo}
            alt="Health Hunter"
            className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center rounded-lg border border-slate-200/80 bg-white/75 p-1 shadow-xs lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${getSectionId(item)}`}
              className="rounded-md px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-600 transition-colors duration-200 hover:bg-emerald-50 hover:text-emerald-950 xl:px-4.5"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center lg:flex">
          <button
            type="button"
            onClick={onBook}
            className="group inline-flex h-10.5 items-center justify-center gap-2 rounded-lg bg-emerald-950 px-4.5 text-sm font-medium text-white shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-[0_14px_30px_rgba(4,120,87,0.22)]"
          >
            Book appointment
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
            />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-white text-slate-950 shadow-xs transition-colors hover:bg-slate-100 lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
              transition={{ duration: 0.18 }}
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-[74px] z-40 bg-slate-950/25 backdrop-blur-xs lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-label="Mobile navigation"
              className="absolute left-4 right-4 top-[78px] z-50 overflow-hidden rounded-xl border border-slate-200 bg-white p-3.5 shadow-[0_20px_50px_rgba(15,23,42,0.18)] sm:left-6 sm:right-6 lg:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <nav className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${getSectionId(item)}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-950"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </motion.a>
                ))}
              </nav>

              <div className="my-2.5 h-px bg-slate-100" />

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  if (onBook) onBook();
                }}
                className="flex w-full h-11 items-center justify-center gap-2 rounded-lg bg-emerald-950 px-5 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-800 cursor-pointer"
              >
                <span>Book appointment</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}