import {
  ArrowRight,
  Clock3,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { clinicInfo, getWhatsAppBookingUrl, images } from "../../data/siteData";
import { LogoFull } from "../Logo";

const quickLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Our team", "#team"],
  ["Patient stories", "#testimonials"],
  ["Contact", "#contact"],
] as const;

const servicesLinks = [
  "Age-reversing fitness",
  "Relaxation therapy",
  "Complimentary physiotherapy",
] as const;

const smoothEase = [0.22, 1, 0.36, 1] as const;

interface FooterProps {
  onBook?: () => void;
}

export function Footer({ onBook }: FooterProps) {
  const shouldReduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#052f25] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-emerald-700/20 blur-[140px]" />

        <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-emerald-400/10 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      {/* Top appointment bar */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center text-center justify-between gap-5 px-4 py-6 sm:flex-row sm:items-center sm:text-left sm:px-6 lg:px-8 lg:py-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 sm:text-xs">
              Begin your recovery
            </p>

            <h2 className="mt-2 font-montserrat text-[24px] font-semibold tracking-[-0.035em] !text-white sm:text-3xl">
              Ready to move and feel better?
            </h2>
          </div>

          <motion.button
            type="button"
            onClick={onBook}
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold text-emerald-950 transition-colors duration-300 hover:bg-emerald-100 cursor-pointer"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Book an appointment

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto grid w-full max-w-[1170px] gap-10 px-4 py-10 sm:px-6 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.65fr_0.85fr_1.25fr] lg:gap-8 lg:px-8 lg:py-12 text-center sm:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <a
            href="#home"
            className="group inline-flex items-center gap-3"
            aria-label="Health Hunter home"
          >
            <LogoFull
              textColor="#ffffff"
              accentColor="#34d399"
              className="h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <p className="mt-6 max-w-[290px] text-sm leading-6 text-white/60 mx-auto sm:mx-0">
            Professional and compassionate physiotherapy care focused on
            restoring movement, reducing pain and supporting long-term recovery.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.1)]" />

            <span className="text-xs font-medium text-white/70">
              Appointments available
            </span>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-montserrat text-sm font-semibold text-white">Quick links</h3>

          <div className="mt-5 flex flex-col items-center sm:items-start gap-3.5">
            {quickLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-white"
              >
                <span className="h-px w-0 bg-emerald-300 transition-all duration-300 group-hover:w-3" />

                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact information */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="font-montserrat text-sm font-semibold text-white">Contact</h3>

          <div className="mt-5 space-y-3.5 w-full max-w-xs sm:max-w-none">
            {/* Phone rows — always show full text */}
            {clinicInfo.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.tel}`}
                className="group flex items-start gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 group-hover:bg-white/12">
                  <Phone className="h-4 w-4" />
                </span>

                <span>
                  <small className="block text-[10px] uppercase tracking-[0.14em] text-white/35">
                    Call us
                  </small>

                  <strong className="mt-1 block text-sm font-medium">
                    {phone.number}
                  </strong>
                </span>
              </a>
            ))}

            {/* Icon-only row on mobile for the rest; full list on sm+ */}

            {/* Mobile: 2×2 icon grid */}
            <div className="flex flex-wrap gap-3 sm:hidden">
              <a
                href={`mailto:${clinicInfo.email}`}
                title={clinicInfo.email}
                className="group grid h-9 w-9 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 hover:bg-white/12 hover:text-white"
              >
                <Mail className="h-4 w-4" />
              </a>

              <a
                href={clinicInfo.instagram.url}
                target="_blank"
                rel="noreferrer"
                title={`Instagram: @${clinicInfo.instagram.handle}`}
                className="group grid h-9 w-9 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 hover:bg-white/12 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href={clinicInfo.youtube.url}
                target="_blank"
                rel="noreferrer"
                title={`YouTube: ${clinicInfo.youtube.handle}`}
                className="group grid h-9 w-9 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 hover:bg-white/12 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <span
                title={clinicInfo.hours}
                className="grid h-9 w-9 place-items-center rounded-xl bg-white/7 text-emerald-300"
              >
                <Clock3 className="h-4 w-4" />
              </span>
            </div>

            {/* Desktop (sm+): full rows with label + text */}
            <div className="hidden sm:flex sm:flex-col sm:gap-3.5">
              <a
                href={`mailto:${clinicInfo.email}`}
                className="group flex items-start gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 group-hover:bg-white/12">
                  <Mail className="h-4 w-4" />
                </span>

                <span className="min-w-0">
                  <small className="block text-[10px] uppercase tracking-[0.14em] text-white/35">
                    Email
                  </small>

                  <strong className="mt-1 block break-all text-sm font-medium">
                    {clinicInfo.email}
                  </strong>
                </span>
              </a>

              <a
                href={clinicInfo.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 group-hover:bg-white/12">
                  <Instagram className="h-4 w-4" />
                </span>

                <span className="min-w-0">
                  <small className="block text-[10px] uppercase tracking-[0.14em] text-white/35">
                    Instagram
                  </small>

                  <strong className="mt-1 block break-all text-sm font-medium">
                    @{clinicInfo.instagram.handle}
                  </strong>
                </span>
              </a>

              <a
                href={clinicInfo.youtube.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/7 text-emerald-300 transition-colors duration-300 group-hover:bg-white/12">
                  <Youtube className="h-4 w-4" />
                </span>

                <span className="min-w-0">
                  <small className="block text-[10px] uppercase tracking-[0.14em] text-white/35">
                    YouTube
                  </small>

                  <strong className="mt-1 block break-all text-sm font-medium">
                    {clinicInfo.youtube.handle}
                  </strong>
                </span>
              </a>

              <div className="flex items-start gap-3 text-white/60">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/7 text-emerald-300">
                  <Clock3 className="h-4 w-4" />
                </span>

                <span>
                  <small className="block text-[10px] uppercase tracking-[0.14em] text-white/35">
                    Clinic hours
                  </small>

                  <strong className="mt-1 block text-sm font-medium leading-5">
                    {clinicInfo.hours}
                  </strong>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="flex flex-col items-center sm:items-start w-full">
          <h3 className="font-montserrat text-sm font-semibold text-white">Find our clinic</h3>

          <a
            href={clinicInfo.address.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative mt-5 block h-[220px] w-full max-w-sm sm:max-w-none overflow-hidden rounded-2xl border border-white/10 bg-emerald-900 shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            aria-label="View Health Hunter clinic on Google Maps"
          >
            <motion.img
              src={images.map}
              alt="Map showing Health Hunter clinic at Gala Empire Memnagar"
              className="h-full w-full object-cover opacity-90"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: 1.05,
                      transition: {
                        duration: 0.6,
                        ease: smoothEase,
                      },
                    }
              }
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/10 to-transparent" />

            {/* Map marker */}
            <span className="absolute left-1/2 top-[43%] grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-emerald-800 text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:-translate-y-[58%]">
              <MapPin className="h-4.5 w-4.5" fill="currentColor" />
            </span>

            <span className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-lg border border-white/15 bg-emerald-950/80 px-3.5 py-3 backdrop-blur-md">
              <span className="min-w-0">
                <strong className="block truncate text-xs font-semibold text-white">
                  309, Gala Empire, Memnagar
                </strong>

                <small className="mt-0.5 block truncate text-[10px] text-white/55">
                  Opp. Doordarshan Metro, Ahmedabad
                </small>
              </span>

              <ArrowRight className="h-4 w-4 shrink-0 text-emerald-300 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1170px] flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p className="text-xs text-white/40">
            © {currentYear} {clinicInfo.fullName}. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Privacy policy
            </a>

            <a
              href="#terms"
              className="text-xs text-white/40 transition-colors hover:text-white"
            >
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}