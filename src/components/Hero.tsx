"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Zap } from "lucide-react";

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

  // Reduced motion fallbacks
  const reducedTransition = { duration: 0.01 };


  return (
    <section
      className="relative bg-transparent py-12 sm:py-16 md:py-20 lg:py-hero px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      {/* ── HERO CONTENT ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto text-center flex flex-col items-center">
        
        {/* Step 2: Eyebrow / Badge Pill */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.85, y: -8 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? reducedTransition
              : { ...springs.bouncy, delay: 0.1 }
          }
          className="inline-flex items-center gap-2 bg-surface-yellow text-yellow-dark border border-brand-yellow/30 px-3.5 py-1.5 rounded-full text-caption font-bold tracking-wide uppercase shadow-subtle mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          Custom Software & AI Studio
        </motion.div>

        {/* Step 3: Headline Stagger */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: shouldReduceMotion
                ? reducedTransition
                : { staggerChildren: 0.06, delayChildren: 0.18 },
            },
          }}
          className="font-display font-semibold text-ink text-[36px] sm:text-[48px] md:text-[60px] lg:text-hero-display leading-[1.1] md:leading-[1.08] lg:leading-[1.05] tracking-[-1px] sm:tracking-[-1.5px] lg:tracking-[-2px] max-w-[1000px] mx-auto"
        >
          {/* First part of sentence: "We build the software your business" */}
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
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}

          {/* Second part: "actually needs" phrase — plain text, no yellow blob */}
          <motion.span
            variants={{
              hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion ? reducedTransition : springs.snappy,
              },
            }}
            className="inline-block mr-[0.25em]"
          >
            actually needs
          </motion.span>
        </motion.h1>

        {/* Step 4: Subtitle */}
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
                  delay: 0.4,
                }
          }
          className="font-sans text-subtitle text-slate max-w-[640px] mx-auto mt-6 leading-[1.5]"
        >
          Bespoke software & AI solutions engineered for your business -
          delivered with transparent one-time builds and dedicated ongoing support.
        </motion.p>

        {/* Step 5: CTA Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          {/* Primary CTA */}
          <motion.a
            href="/contact#message"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, y: 8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? reducedTransition
                : { ...springs.bouncy, delay: 0.5 }
            }
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-medium text-button-md rounded-full px-8 py-3.5 shadow-subtle hover:bg-charcoal transition-colors cursor-pointer"
          >
            Book a call
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#work"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9, y: 8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? reducedTransition
                : { ...springs.bouncy, delay: 0.58 }
            }
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-ink border border-hairline-strong font-medium text-button-md rounded-full px-8 py-3.5 hover:border-ink transition-colors cursor-pointer"
          >
            See our work
          </motion.a>
        </div>

        {/* Step 6: Hero Visual (Whiteboard Mockup Framing) */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 32, scale: 0.96 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            shouldReduceMotion
              ? reducedTransition
              : { ...springs.smooth, delay: 0.55 }
          }
          className="mt-8 md:mt-12 w-full max-w-[1080px] bg-canvas rounded-xl border border-hairline-soft shadow-mockup p-2.5 sm:p-4 text-left"
        >
          {/* Top Mockup Title Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline-soft px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-red inline-block" />
              <span className="w-3 h-3 rounded-full bg-brand-yellow inline-block" />
              <span className="w-3 h-3 rounded-full bg-success-accent inline-block" />
              <span className="text-caption font-medium text-steel ml-2 hidden sm:inline">
                Enterprise Dashboard: Custom Software & AI Workflows
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-micro font-medium text-muted bg-surface px-2 py-1 rounded-md border border-hairline">
                Interactive Preview
              </span>
            </div>
          </div>

          {/* Dashboard Canvas Placeholder */}
          <div className="relative bg-surface rounded-lg p-3 sm:p-5 md:p-8 min-h-[260px] sm:min-h-[380px] flex flex-col justify-between overflow-hidden">
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#c7cad5 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            {/* Mockup Content Row 1: Metrics & Sticky Note Tints */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {/* Stat Card */}
              <div className="bg-canvas p-4 rounded-lg border border-hairline shadow-subtle flex flex-col justify-between">
                <span className="text-caption font-bold text-steel">
                  Automated Workflows
                </span>
                <span className="text-heading-2 font-bold text-ink mt-2">
                  840 / day
                </span>
                <span className="text-micro text-success-accent font-semibold mt-1">
                  ↑ 99.97% Uptime
                </span>
              </div>

              {/* Sticky Note Tint Yellow */}
              <div className="bg-brand-yellow p-4 rounded-xl shadow-subtle transform -rotate-1 flex flex-col justify-between text-ink">
                <span className="text-micro uppercase font-bold tracking-wider opacity-75">
                  AI Automation Layer
                </span>
                <p className="text-body-sm font-medium mt-1">
                  Intelligent task routing & document processing pipeline
                </p>
                <span className="text-caption font-bold mt-2 text-primary">
                  Status: Deployed
                </span>
              </div>

              {/* Sticky Note Tint Teal */}
              <div className="bg-teal-light p-4 rounded-xl shadow-subtle transform rotate-1 flex flex-col justify-between text-ink">
                <span className="text-micro uppercase font-bold tracking-wider text-moss-dark">
                  Bespoke Architecture
                </span>
                <p className="text-body-sm font-medium mt-1 text-ink">
                  Zero vendor lock-in with fully owned custom API layer
                </p>
                <span className="text-caption font-bold mt-2 text-moss-dark">
                  Support: 24/7 Managed
                </span>
              </div>
            </div>

            {/* Mockup Content Row 2: Visual Workflow / Case Preview */}
            <div className="relative z-10 bg-canvas rounded-lg p-3 sm:p-4 border border-hairline shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-rose flex items-center justify-center text-ink font-bold text-body-md flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-body-sm sm:text-body-md font-bold text-ink leading-tight">
                    Custom Enterprise OS: Live Demo
                  </h4>
                  <p className="text-caption sm:text-body-sm text-steel mt-0.5">
                    See how bespoke software transforms operations
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-micro sm:text-caption-bold bg-surface-pricing-featured text-brand-blue px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-brand-blue/20 whitespace-nowrap">
                  Full-Stack Build
                </span>
                <span className="text-micro sm:text-caption-bold bg-coral-light text-coral-dark px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap">
                  AI-Powered
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
