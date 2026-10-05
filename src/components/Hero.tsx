"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Zap, CheckCircle2 } from "lucide-react";

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

          {/* ── RIGHT COLUMN: HERO VISUAL MOCKUP ───────────────────────────────── */}
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
              className="w-full bg-white/85 backdrop-blur-md rounded-2xl border border-white/90 shadow-mockup p-3 sm:p-4 text-left hover:shadow-modal transition-shadow duration-300"
            >
              {/* Mockup Title Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline-soft px-1 sm:px-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block flex-shrink-0" />
                  <span className="w-2.5 h-2.5 rounded-full bg-success-accent inline-block flex-shrink-0" />
                  <span className="text-caption font-semibold text-steel ml-1.5 truncate">
                    Enterprise Dashboard — Custom Software &amp; AI
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-micro font-semibold text-steel bg-surface px-2.5 py-0.5 rounded-md border border-hairline">
                    Live Preview
                  </span>
                </div>
              </div>

              {/* Dashboard Canvas */}
              <div className="relative bg-surface rounded-xl p-3.5 sm:p-5 flex flex-col justify-between gap-3 sm:gap-4 overflow-hidden">
                {/* Dot Grid */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#c7cad5 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Row 1: 3 Modular Cards */}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                  {/* Stat Card */}
                  <div className="bg-canvas p-3 sm:p-3.5 rounded-xl border border-hairline shadow-subtle flex flex-col justify-between">
                    <span className="text-micro font-bold text-steel tracking-wide uppercase">
                      Workflows
                    </span>
                    <span className="text-[24px] sm:text-[28px] font-bold text-ink my-1 font-display leading-tight">
                      840 <span className="text-caption font-sans font-normal text-steel">/ day</span>
                    </span>
                    <span className="text-micro text-success-accent font-semibold flex items-center gap-1">
                      <span>↑</span> 99.97% Uptime
                    </span>
                  </div>

                  {/* Sticky Note — Yellow */}
                  <div className="bg-brand-yellow p-3 sm:p-3.5 rounded-xl shadow-subtle transform -rotate-1 flex flex-col justify-between text-ink">
                    <span className="text-micro uppercase font-bold tracking-wider opacity-75">
                      AI Automation
                    </span>
                    <p className="text-caption font-medium my-1 leading-snug">
                      Intelligent task routing &amp; document pipeline
                    </p>
                    <span className="text-micro font-bold text-primary">
                      Status: Deployed ✓
                    </span>
                  </div>

                  {/* Sticky Note — Teal */}
                  <div className="bg-teal-light p-3 sm:p-3.5 rounded-xl shadow-subtle transform rotate-1 flex flex-col justify-between text-ink">
                    <span className="text-micro uppercase font-bold tracking-wider text-moss-dark opacity-80">
                      Bespoke Arch
                    </span>
                    <p className="text-caption font-medium my-1 text-ink leading-snug">
                      Zero vendor lock-in with fully owned API
                    </p>
                    <span className="text-micro font-bold text-moss-dark">
                      Support: 24/7
                    </span>
                  </div>
                </div>

                {/* Row 2: Live Workflow Banner */}
                <div className="relative z-10 bg-canvas rounded-xl p-3 sm:p-3.5 border border-hairline shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-brand-rose flex items-center justify-center flex-shrink-0 shadow-subtle">
                      <Zap className="w-4 h-4 text-primary stroke-[2.2]" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-caption sm:text-body-sm font-bold text-ink leading-tight truncate">
                        Custom Enterprise OS — Live Demo
                      </h4>
                      <p className="text-micro sm:text-caption text-steel mt-0.5 truncate">
                        See how bespoke software transforms operations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap flex-shrink-0">
                    <span className="text-micro font-bold bg-surface-pricing-featured text-brand-blue px-2.5 py-1 rounded-full border border-brand-blue/20 whitespace-nowrap">
                      Full-Stack Build
                    </span>
                    <span className="text-micro font-bold bg-coral-light text-coral-dark px-2.5 py-1 rounded-full whitespace-nowrap">
                      AI-Powered
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
