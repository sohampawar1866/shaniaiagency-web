"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { CheckCircle2 } from "lucide-react";
import WorkflowBeamDemo from "@/components/WorkflowBeamDemo";

const baseHeadlineWords = [
  "We",
  "build",
  "the",
  "software",
  "your",
  "business",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const reducedTransition = { duration: 0.01 };

  return (
    <section
      className="relative bg-transparent pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* ── LEFT COLUMN: HEADLINE, COPY & CTA ──────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            
            {/* Eyebrow / Badge Pill */}
            <motion.div
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, y: -8 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? reducedTransition
                  : { ...springs.bouncy, delay: 0.08 }
              }
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-charcoal border border-white/90 px-3.5 py-1.5 rounded-full text-caption font-bold tracking-widest uppercase shadow-subtle mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
              Custom Software &amp; AI Studio
            </motion.div>

            {/* Split Headline (reduced font size for 2-column layout) */}
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: shouldReduceMotion
                    ? reducedTransition
                    : { staggerChildren: 0.05, delayChildren: 0.15 },
                },
              }}
              className="font-display font-semibold text-ink text-[34px] sm:text-[44px] md:text-[50px] lg:text-[52px] xl:text-[58px] leading-[1.08] sm:leading-[1.06] tracking-[-1.2px] sm:tracking-[-1.8px] lg:tracking-[-2px] max-w-[620px]"
            >
              {baseHeadlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: shouldReduceMotion
                        ? reducedTransition
                        : springs.snappy,
                    },
                  }}
                  className="inline-block mr-[0.22em]"
                >
                  {word}
                </motion.span>
              ))}

              {/* "actually needs" — plain text in original text-ink color */}
              <motion.span
                variants={{
                  hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: shouldReduceMotion ? reducedTransition : { ...springs.snappy, delay: 0.32 },
                  },
                }}
                className="inline-block text-ink"
              >
                actually needs
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? reducedTransition
                  : {
                      duration: durations.md,
                      ease: easings.snap,
                      delay: 0.38,
                    }
              }
              className="font-sans text-body-md sm:text-subtitle text-charcoal max-w-[520px] mt-5 sm:mt-6 leading-[1.6]"
            >
              Bespoke software &amp; AI solutions engineered for your business —
              delivered with transparent one-time builds and dedicated ongoing support.
            </motion.p>

            {/* CTA Button Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 mt-8 sm:mt-9 w-full sm:w-auto">
              {/* Primary CTA */}
              <motion.a
                href="/contact#message"
                aria-label="Book a discovery call with ShaniAI Agency"
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 8 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? reducedTransition
                    : { ...springs.bouncy, delay: 0.46 }
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-ink text-on-primary font-semibold text-button-md rounded-full px-8 py-3.5 sm:px-9 sm:py-4 shadow-card hover:bg-charcoal transition-all duration-150 cursor-pointer text-center"
              >
                Book a call
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href="/#work"
                aria-label="See our featured case studies"
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, y: 8 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? reducedTransition
                    : { ...springs.bouncy, delay: 0.54 }
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-white/75 backdrop-blur-sm text-ink border border-ink/20 font-semibold text-button-md rounded-full px-8 py-3.5 sm:px-9 sm:py-4 hover:bg-white hover:border-ink/40 transition-all duration-150 cursor-pointer shadow-subtle text-center"
              >
                See our work
              </motion.a>
            </div>

            {/* Trust Micro-Bullets */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.62, duration: 0.4 }}
              className="flex items-center gap-4 sm:gap-6 mt-7 pt-6 border-t border-hairline/80 text-micro sm:text-caption font-semibold text-steel"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success-accent" />
                Fixed-Scope Builds
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success-accent" />
                100% Code Ownership
              </span>
              <span className="hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-success-accent" />
                24/7 Managed SLA
              </span>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: WORKFLOW BEAM DEMO ───────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 30, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={
                shouldReduceMotion
                  ? reducedTransition
                  : { ...springs.smooth, delay: 0.3 }
              }
              className="w-full"
            >
              <WorkflowBeamDemo />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
