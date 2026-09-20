import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Star,
  Clock,
  Users,
  Award,
} from "lucide-react";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { team } from "../../data/siteData";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: smoothEase },
  },
};

// Extended team data with stats and specialties
const teamExtended = [
  {
    ...team[0],
    experience: "8+ yrs",
    patients: "1,200+",
    rating: "4.9",
    specialties: ["Orthopaedic Rehab", "Pain Management", "Spinal Care"],
    qualification: "BPT, MPT (Orthopaedics)",
  },
  {
    ...team[1],
    experience: "6+ yrs",
    patients: "950+",
    rating: "5.0",
    specialties: ["Sports Injury", "Mobility", "Performance Recovery"],
    qualification: "BPT, MPT (Sports Science)",
  },
];

interface TeamProps {
  onBook?: () => void;
}

function TeamCard({
  member,
  index,
  onBook,
}: {
  member: (typeof teamExtended)[number];
  index: number;
  onBook?: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-emerald-950/8 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.07)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(6,78,59,0.13)] hover:border-emerald-900/20">
      {/* Top image strip */}
      <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden bg-emerald-100">
        <motion.img
          src={member.photo}
          alt={`${member.name}, ${member.role} at Health Hunter Ahmedabad`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
          initial={{ scale: shouldReduceMotion ? 1 : 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.1,
            ease: smoothEase,
          }}
        />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/10 to-transparent" />

        {/* Top-left index badge */}
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white shadow-sm backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Top-right rating badge */}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/30 bg-white/20 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
          <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
          {member.rating}
        </span>

        {/* Bottom: name + role overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
            {member.role}
          </p>
          <h3 className="mt-1 font-montserrat text-[22px] font-semibold leading-tight tracking-[-0.03em] text-white">
            {member.name}
          </h3>
          <p className="mt-0.5 text-[11px] font-light text-white/70">
            {member.qualification}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-4 px-5 py-5">
        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-emerald-900/10 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 py-3">
          {[
            { icon: Clock, label: "Experience", value: member.experience },
            { icon: Users, label: "Patients", value: member.patients },
            { icon: Award, label: "Rating", value: `${member.rating} ★` },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-2">
              <span className="text-[13px] font-bold text-emerald-950">
                {value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.14em] text-slate-500">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Bio */}
        <p className="text-[13px] leading-[1.7] text-slate-600">{member.bio}</p>

        {/* Specialty chips */}
        <div className="flex flex-wrap gap-1.5">
          {member.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full border border-emerald-800/15 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-800"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Verified + CTA row */}
        <div className="flex items-center justify-between pt-1">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700">
            <BadgeCheck className="h-4 w-4" />
            Qualified Specialist
          </span>

          <button
            type="button"
            onClick={onBook}
            className="group/btn inline-flex items-center gap-2 rounded-full bg-emerald-950 px-4 py-2 text-[12px] font-semibold text-white shadow-[0_4px_16px_rgba(6,78,59,0.18)] transition-all duration-300 hover:bg-emerald-800 hover:shadow-[0_6px_20px_rgba(6,78,59,0.28)] active:scale-95 cursor-pointer"
          >
            Book Assessment
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Team({ onBook }: TeamProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeTeamIdx, setActiveTeamIdx] = useState(0);

  const handlePrevTeam = () =>
    setActiveTeamIdx((prev) =>
      prev === 0 ? teamExtended.length - 1 : prev - 1
    );
  const handleNextTeam = () =>
    setActiveTeamIdx((prev) =>
      prev === teamExtended.length - 1 ? 0 : prev + 1
    );

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="team"
      className="relative isolate overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-52 top-16 h-[500px] w-[500px] rounded-full bg-emerald-100/40 blur-[160px]" />
        <div className="absolute -right-52 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-50/60 blur-[160px]" />
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50/80 px-3.5 py-1.5 shadow-xs sm:mb-6"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3 w-3" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Our Team
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-montserrat text-[24px] font-semibold leading-snug tracking-[-0.03em] text-emerald-950 sm:text-3xl lg:text-4xl"
          >
            Meet Our Expert Physiotherapists
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[560px] text-[15px] leading-7 text-slate-500 sm:text-base sm:leading-8"
          >
            Qualified specialists delivering evidence-based clinical care with a
            personal, compassionate touch.
          </motion.p>
        </motion.div>

        {/* ── MOBILE slider (< lg) ── */}
        <div className="mt-12 block lg:hidden">
          {/* Pill tabs */}
          <div className="flex items-center justify-center gap-2 pb-4">
            {teamExtended.map((member, idx) => (
              <button
                key={member.name}
                type="button"
                onClick={() => setActiveTeamIdx(idx)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTeamIdx === idx
                    ? "bg-emerald-950 text-white shadow-md shadow-emerald-950/20 scale-[1.03]"
                    : "border border-emerald-900/15 bg-white text-emerald-950 hover:bg-emerald-50"
                }`}
              >
                {member.name.split(" ").slice(1).join(" ")}
              </button>
            ))}
          </div>

          {/* Animated card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTeamIdx}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.38, ease: smoothEase }}
              >
                <TeamCard
                  member={teamExtended[activeTeamIdx]}
                  index={activeTeamIdx}
                  onBook={onBook}
                />
              </motion.div>
            </AnimatePresence>

            {/* Slider controls */}
            <div className="mt-5 flex items-center justify-between px-1">
              <button
                type="button"
                onClick={handlePrevTeam}
                aria-label="Previous Doctor"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-950 shadow-xs hover:bg-emerald-50 active:scale-95 cursor-pointer transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {teamExtended.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setActiveTeamIdx(dotIdx)}
                    aria-label={`Go to doctor ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTeamIdx === dotIdx
                        ? "w-8 bg-emerald-900"
                        : "w-2.5 bg-emerald-900/20"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextTeam}
                aria-label="Next Doctor"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-900/15 bg-white text-emerald-950 shadow-xs hover:bg-emerald-50 active:scale-95 cursor-pointer transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP 2-col grid (≥ lg) ── */}
        <motion.div
          className="hidden lg:grid mt-14 grid-cols-2 gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamExtended.map((member, index) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.3, ease: smoothEase } }
              }
            >
              <TeamCard member={member} index={index} onBook={onBook} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Appointment CTA banner ── */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-emerald-900/10 bg-emerald-50/60 px-6 py-6 text-center sm:flex-row sm:px-8 sm:text-left"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease: smoothEase,
          }}
        >
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
              <CalendarDays className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-montserrat text-lg font-semibold tracking-[-0.025em] text-emerald-950 sm:text-xl">
                Ready to begin your recovery?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Schedule a personal assessment with our physiotherapy team.
              </p>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={onBook}
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2.5 rounded-full bg-emerald-950 px-7 py-2.5 text-sm font-medium text-white shadow-[0_12px_25px_rgba(6,78,59,0.16)] transition-colors duration-300 hover:bg-emerald-800 cursor-pointer"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Book Appointment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}