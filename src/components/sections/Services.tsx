import { ArrowRight, HeartPulse, Sparkles } from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { services } from "../../data/siteData";

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

export function Services() {
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

      {/* Same container width as Hero and About */}
      <div className="mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-[720px] text-center"
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur-md sm:mb-6 sm:px-4"
          >
            <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 sm:text-xs">
              Our services
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-sans text-[clamp(2.6rem,5vw,4.75rem)] font leading-[0.98] tracking-[-0.05em] text-emerald-950"
          >
            Specialized Care Programs
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[610px] text-[15px] leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            Tailored treatments designed to address your individual needs with
            professional expertise and compassionate support.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {services.map(([Icon, title, text], index) => (
            <motion.article
              key={title}
              variants={fadeUp}
              className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-[1.75rem] border border-emerald-950/8 bg-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-colors duration-300 hover:border-emerald-900/15 sm:p-7"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -7,
                      transition: {
                        duration: 0.3,
                        ease: smoothEase,
                      },
                    }
              }
            >
              {/* Card gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute right-6 top-6 text-xs font-semibold tracking-[0.15em] text-slate-300 transition-colors duration-300 group-hover:text-emerald-700/50">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <motion.span
                className="relative grid h-13 w-13 place-items-center rounded-2xl bg-emerald-100 text-emerald-800 transition-colors duration-300 group-hover:bg-emerald-950 group-hover:text-white"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        rotate: -4,
                        scale: 1.05,
                      }
                }
              >
                <Icon className="h-5.5 w-5.5" strokeWidth={1.8} />
              </motion.span>

              {/* Content */}
              <div className="relative mt-7">
                <h3 className="text-xl font-medium leading-tight tracking-[-0.025em] text-emerald-950 sm:text-[22px]">
                  {title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="relative mt-auto inline-flex w-fit items-center gap-2 pt-7 text-sm font-semibold text-emerald-900"
                aria-label={`Learn more about ${title}`}
              >
                <span className="relative">
                  Learn more

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald-800 transition-all duration-300 group-hover:w-full" />
                </span>

                <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-50 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-emerald-950 group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              {/* Bottom accent */}
              <div className="absolute inset-x-7 bottom-0 h-[3px] origin-left scale-x-0 rounded-full bg-emerald-800 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[1.75rem] border border-emerald-900/10 bg-emerald-950 px-6 py-7 text-center shadow-[0_18px_45px_rgba(6,78,59,0.15)] sm:flex-row sm:px-8 sm:py-8 sm:text-left lg:px-10"
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
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-emerald-100">
              <HeartPulse className="h-5 w-5" />
            </span>

            <div>
              <h3 className="text-xl font-medium tracking-[-0.025em] !text-white sm:text-2xl">
                Not sure which treatment you need?
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/65">
                Book an assessment and we’ll help you choose the right recovery
                plan.
              </p>
            </div>
          </div>

          <motion.a
            href="#contact"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition-colors duration-300 hover:bg-emerald-100"
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            Book an assessment

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}