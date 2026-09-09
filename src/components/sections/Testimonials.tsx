import { Quote, Sparkles, Star } from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { stories } from "../../data/siteData";

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

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-[#f7f8f4] py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-52 top-12 h-[450px] w-[450px] rounded-full bg-emerald-100/45 blur-[150px]" />

        <div className="absolute -right-52 bottom-0 h-[480px] w-[480px] rounded-full bg-white blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,78,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(6,78,59,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

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
            className="mb-5 inline-flex items-center gap-2 rounded-md border border-emerald-900/10 bg-white/80 px-3 py-1.5 shadow-xs backdrop-blur-md sm:mb-6 sm:px-3.5"
          >
            <span className="grid h-5 w-5 place-items-center rounded-xs bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3 w-3" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Patient stories
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-montserrat text-[24px] sm:text-3xl lg:text-4xl font-semibold leading-snug tracking-[-0.03em] text-emerald-950"
          >
            Recovery Stories That Inspire
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Real experiences from people who trusted our physiotherapy team with
            their movement, health and recovery.
          </motion.p>
        </motion.div>

        {/* Testimonial cards with minimal radius */}
        <motion.div
          className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {stories.map(([quote, name, department], index) => {
            const initials = name
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <motion.figure
                key={name}
                variants={fadeUp}
                className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-xl border border-emerald-950/8 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.045)] transition-colors duration-300 hover:border-emerald-900/20 sm:p-7"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: {
                          duration: 0.3,
                          ease: smoothEase,
                        },
                      }
                }
              >
                {/* Hover background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top section */}
                <div className="relative flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-emerald-100 text-emerald-800 transition-colors duration-300 group-hover:bg-emerald-950 group-hover:text-white">
                    <Quote
                      className="h-4.5 w-4.5 fill-current"
                      strokeWidth={1.5}
                    />
                  </span>

                  <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-300 transition-colors duration-300 group-hover:text-emerald-700/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Rating */}
                <div
                  className="relative mt-7 flex items-center gap-1"
                  aria-label="5 out of 5 stars"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      strokeWidth={1.5}
                    />
                  ))}

                  <span className="ml-2 text-xs font-semibold text-slate-500">
                    5.0
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="relative mt-5 text-[16px] font-medium leading-7 tracking-[-0.01em] text-slate-700 sm:text-[17px]">
                  “{quote}”
                </blockquote>

                {/* Patient information */}
                <figcaption className="relative mt-auto flex items-center gap-3 border-t border-emerald-950/8 pt-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-emerald-950 text-xs font-semibold tracking-[0.08em] text-white shadow-xs">
                    {initials}
                  </span>

                  <span className="min-w-0">
                    <strong className="block truncate text-sm font-semibold text-emerald-950">
                      {name}
                    </strong>

                    <small className="mt-1 block truncate text-xs font-medium text-slate-500">
                      {department}
                    </small>
                  </span>

                  <span className="ml-auto flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-800">
                    <span className="h-1.5 w-1.5 rounded-xs bg-emerald-500" />
                    Verified
                  </span>
                </figcaption>

                {/* Bottom accent */}
                <div className="absolute inset-x-7 bottom-0 h-[2px] origin-left scale-x-0 bg-emerald-800 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.figure>
            );
          })}
        </motion.div>

        {/* Trust summary with minimal radius */}
        <motion.div
          className="mt-10 grid overflow-hidden rounded-xl border border-emerald-900/10 bg-emerald-950 text-white shadow-[0_16px_40px_rgba(6,78,59,0.15)] sm:grid-cols-3"
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
          {[
            ["10+", "Years of care"],
            ["One-to-one", "Personal treatment"],
            ["5.0", "Patient rating"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`flex items-center justify-center gap-4 px-6 py-6 text-center sm:py-7 ${
                index !== 0
                  ? "border-t border-white/10 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <strong className="text-2xl font-light tracking-[-0.04em] text-white sm:text-3xl">
                {value}
              </strong>

              <span className="max-w-[110px] text-left text-xs font-medium leading-5 text-white/60 sm:text-sm">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}