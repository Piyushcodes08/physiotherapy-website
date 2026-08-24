import {
  ArrowRight,
  Check,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import {
  motion,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { images } from "../../data/siteData";

const benefits = [
  "Detailed physical assessment",
  "One-to-one treatment sessions",
  "Evidence-informed approach",
  "Recovery and prevention guidance",
];

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

export function About() {
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
      id="about"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-emerald-100/45 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-sky-100/45 blur-[150px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-[1170px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:px-8 xl:gap-28">
        {/* Image area */}
        <motion.div
          className="relative mx-auto w-full max-w-[450px] lg:mx-0"
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            ease: smoothEase,
          }}
        >
            
          {/* Decorative outline */}
          <div className="absolute -inset-3 rounded-2xl border border-emerald-900/10 sm:-inset-4 " />

          <div className="relative overflow-hidden rounded-2xl bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] xl:aspect-[5/6]">
              <motion.img
                src={images.about}
                alt="Physiotherapist performing a patient assessment"
                className="h-full w-full object-cover object-center"
                initial={{
                  scale: shouldReduceMotion ? 1 : 1.07,
                }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 1.2,
                  ease: smoothEase,
                }}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-800 via-emerald-800/5 to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">
              <p className="text-[10px] font-light uppercase tracking-[0.2em] text-white sm:text-xs">
                Personalised treatment
              </p>

              <p className="mt-1 max-w-[260px] font-serif text-xl font-medium leading-tight sm:text-2xl">
                Care built around your recovery.
              </p>
            </div>
          </div>



          {/* Trust badge */}
          <motion.div
            className="absolute left-4 top-4 hidden items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2.5 shadow-lg backdrop-blur-xl sm:flex sm:left-6 sm:top-6"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
              delay: shouldReduceMotion ? 0 : 0.55,
            }}
          >
            <ShieldCheck className="h-4 w-4 text-emerald-700" />

            <span className="text-xs font-semibold text-slate-800">
              Trusted clinical care
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="pt-5 lg:pt-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            className="mb-5 inline-flex items-center gap-3"
          >
            <span className="h-px w-9 bg-emerald-700" />

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-800 sm:text-xs">
              About our clinic
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="max-w-[650px] font-serif text-[clamp(2.5rem,5vw,4.65rem)] font-medium leading-[1.02] tracking-[-0.045em] text-slate-950"
          >
            Thoughtful physiotherapy focused on{" "}
            <span className="italic text-emerald-800">your recovery.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[610px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
          >
            We believe recovery begins by listening. Every treatment plan starts
            with a careful assessment and is shaped around your needs, lifestyle
            and personal goals.
          </motion.p>

          {/* Benefits */}
          <motion.div
            variants={fadeUp}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit}
                className="group flex min-h-[72px] items-center gap-3 rounded-2xl border border-slate-200/80 bg-[#fafbf9] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-800/20 hover:bg-white hover:shadow-[0_12px_30px_rgba(15,23,42,0.07)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-800 group-hover:text-white">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>

                <span className="text-sm font-semibold leading-5 text-slate-700">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-5"
          >
            <motion.a
              href="#team"
              className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-emerald-950 px-4 py-3 text-sm font-medium text-white shadow-[0_14px_30px_rgba(6,78,59,0.17)] transition-colors duration-300 hover:bg-emerald-800 sm:px-6"
              whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              Meet your physiotherapist

              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            <span className="text-sm font-medium text-slate-500">
              Professional care in Ahmedabad
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}