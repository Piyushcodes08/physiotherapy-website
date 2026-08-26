import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Quote,
  Sparkles,
} from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { team } from "../../data/siteData";

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

export function Team() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="team"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-52 top-16 h-[450px] w-[450px] rounded-full bg-emerald-100/35 blur-[150px]" />
        <div className="absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-50/60 blur-[150px]" />
      </div>

      {/* Same width as Hero, About and Services */}
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50/80 px-3.5 py-2 shadow-sm sm:mb-6 sm:px-4"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Our team
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sans text-[clamp(2.6rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.05em] text-emerald-950"
          >
            Our Expert Physiotherapists
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Qualified professionals combining clinical expertise with
            compassionate and genuinely personal care.
          </motion.p>
        </motion.div>

        {/* Team cards */}
        <motion.div
          className="mt-12 grid gap-5 sm:mt-14 lg:grid-cols-2 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[2rem] border border-emerald-950/8 bg-[#f7f8f4] p-3 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-colors duration-300 hover:border-emerald-900/15 sm:p-4"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: {
                        duration: 0.3,
                        ease: smoothEase,
                      },
                    }
              }
            >
              <div className="grid gap-5 sm:grid-cols-[205px_1fr] sm:items-stretch">
                {/* Doctor image */}
                <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] bg-emerald-100 sm:min-h-[315px]">
                  <motion.img
                    src={member.photo}
                    alt={`${member.name}, ${member.role}`}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                    initial={{
                      scale: shouldReduceMotion ? 1 : 1.05,
                    }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.9,
                      ease: smoothEase,
                    }}
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent" />

                  {/* Number */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/80 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-emerald-950 shadow-sm backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Verified */}
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-emerald-950/70 px-3 py-1.5 text-[10px] font-light tracking-wide text-white backdrop-blur-md">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" />
                    Qualified specialist
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex min-h-[270px] flex-col px-2 pb-3 pt-1 sm:min-h-0 sm:px-1 sm:py-4 sm:pr-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">
                    {member.role}
                  </p>

                  <h3 className="mt-2 text-[20px] font-medium leading-[1.05] tracking-[-0.04em] text-emerald-950 sm:text-[24px]">
                    {member.name}
                  </h3>

                  <p className="mt-2.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                    {member.bio}
                  </p>

                  {/* Doctor Quote Box */}
                  <div className="my-3.5 rounded-xl border border-emerald-900/10 bg-white/90 p-3 shadow-xs">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-emerald-100 text-emerald-800">
                        <Quote className="h-2.5 w-2.5" />
                      </span>
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-emerald-800">
                          Doctor's Words
                        </p>
                        <p className="mt-0.5 text-[11px] italic leading-relaxed text-slate-700">
                          "{member.quote}"
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-emerald-100 text-emerald-700">
                      <BadgeCheck className="h-3 w-3" />
                    </span>

                    <p className="text-[11px] leading-4 text-slate-500">
                      Personalised assessment and evidence-informed treatment planning.
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="mt-auto inline-flex w-fit items-center gap-2 pt-4 text-xs font-semibold text-emerald-900 sm:text-sm"
                    aria-label={`Book assessment with ${member.name}`}
                  >
                    <span className="relative">
                      Book assessment

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-emerald-950 group-hover:text-white sm:h-7 sm:w-7">
                      <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Appointment CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-emerald-900/10 bg-emerald-50/60 px-6 py-7 text-center sm:flex-row sm:px-8 sm:text-left"
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
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
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-100 text-emerald-800">
              <CalendarDays className="h-5 w-5" />
            </span>

            <div>
              <h3 className="text-lg font-semibold tracking-[-0.025em] text-emerald-950 sm:text-xl">
                Ready to begin your recovery?
              </h3>

              <p className="mt-1 text-sm text-slate-600">
                Schedule a personal assessment with our physiotherapy team.
              </p>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-emerald-950 px-6 py-3 text-sm font-normal text-white shadow-[0_12px_25px_rgba(6,78,59,0.16)] transition-colors duration-300 hover:bg-emerald-800"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Book appointment

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}