"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Zap } from "lucide-react";

const WebThreads = dynamic(() => import("./WebThreads"), {
  ssr: false,
});

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
      className="relative bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ── AMBIENT WEBTHREADS WEBGL BACKGROUND ─────────────────────────────── */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
        <WebThreads
          color1="#5227FF"
          color2="#FF9FFC"
          color3="#FFFFFF"
          speed={0.2}
          threadCount={6}
          frequency={5.0}
          spread={0.18}
          taper={1.0}
          position={0.45}
          fanMode="center"
          glow={0.02}
          falloff={0.6}
          thickness={1.1}
          brightness={0.7}
          opacity={0.75}
          mirror={true}
          shimmer={false}
          grain={true}
          grainIntensity={0.05}
          mouseInteraction={true}
          mouseStrength={0.3}
          backgroundColor="#FFFFFF"
          lightMode={false}
        />
      </div>

      {/* ── HERO CONTENT ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto text-center flex flex-col items-center">

        {/* Eyebrow / Badge Pill */}
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
          className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-charcoal border border-white/80 px-4 py-1.5 rounded-full text-caption font-bold tracking-widest uppercase shadow-subtle mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
          Custom Software &amp; AI Studio
        </motion.div>

        {/* Headline */}
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
          className="font-display font-semibold text-ink text-[38px] sm:text-[52px] md:text-[64px] lg:text-hero-display leading-[1.06] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.5px] max-w-[820px] mx-auto"
        >
          {baseHeadlineWords.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 24 },
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

          {/* "actually needs" — restored original headline color */}
          <motion.span
            variants={{
              hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 },
              show: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion ? reducedTransition : { ...springs.snappy, delay: 0.36 },
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
                  delay: 0.44,
                }
          }
          className="font-sans text-subtitle text-charcoal max-w-[580px] mx-auto mt-7 leading-[1.6]"
        >
          Bespoke software &amp; AI solutions engineered for your business —
          delivered with transparent one-time builds and dedicated ongoing support.
        </motion.p>

        {/* CTA Button Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 w-full sm:w-auto">
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
                : { ...springs.bouncy, delay: 0.52 }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-ink text-on-primary font-semibold text-button-md rounded-full px-9 py-4 shadow-card hover:bg-charcoal transition-all duration-200 cursor-pointer"
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
                : { ...springs.bouncy, delay: 0.60 }
            }
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/70 backdrop-blur-sm text-ink border border-ink/20 font-semibold text-button-md rounded-full px-9 py-4 hover:bg-white hover:border-ink/40 transition-all duration-200 cursor-pointer shadow-subtle"
          >
            See our work
          </motion.a>
        </div>

        {/* Hero Visual — Mockup Framing */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 40, scale: 0.96 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            shouldReduceMotion
              ? reducedTransition
              : { ...springs.smooth, delay: 0.58 }
          }
          className="mt-14 md:mt-16 w-full max-w-[1060px] bg-white/80 backdrop-blur-sm rounded-2xl border border-white/90 shadow-mockup p-2.5 sm:p-4 text-left"
        >
          {/* Mockup Title Bar */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-hairline-soft px-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-brand-red inline-block" />
              <span className="w-3 h-3 rounded-full bg-brand-yellow inline-block" />
              <span className="w-3 h-3 rounded-full bg-success-accent inline-block" />
              <span className="text-caption font-semibold text-steel ml-2 hidden sm:inline">
                Enterprise Dashboard — Custom Software &amp; AI Workflows
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-micro font-semibold text-steel bg-surface px-2.5 py-1 rounded-md border border-hairline">
                Live Preview
              </span>
            </div>
          </div>

          {/* Dashboard Canvas */}
          <div className="relative bg-surface rounded-xl p-3 sm:p-5 md:p-7 min-h-[260px] sm:min-h-[360px] flex flex-col justify-between overflow-hidden">
            {/* Dot Grid */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#c7cad5 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            {/* Row 1 */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              {/* Stat Card */}
              <div className="bg-canvas p-4 rounded-xl border border-hairline shadow-subtle flex flex-col justify-between">
                <span className="text-caption font-bold text-steel tracking-wide uppercase">
                  Automated Workflows
                </span>
                <span className="text-heading-2 font-bold text-ink mt-2 font-display">
                  840 / day
                </span>
                <span className="text-micro text-success-accent font-semibold mt-1 flex items-center gap-1">
                  <span>↑</span> 99.97% Uptime
                </span>
              </div>

              {/* Sticky Note — Yellow */}
              <div className="bg-brand-yellow p-4 rounded-xl shadow-subtle transform -rotate-1 flex flex-col justify-between text-ink">
                <span className="text-micro uppercase font-bold tracking-widest opacity-70">
                  AI Automation
                </span>
                <p className="text-body-sm font-medium mt-2 leading-snug">
                  Intelligent task routing &amp; document processing pipeline
                </p>
                <span className="text-caption font-bold mt-2 text-primary">
                  Status: Deployed ✓
                </span>
              </div>

              {/* Sticky Note — Teal */}
              <div className="bg-teal-light p-4 rounded-xl shadow-subtle transform rotate-1 flex flex-col justify-between text-ink">
                <span className="text-micro uppercase font-bold tracking-widest text-moss-dark opacity-80">
                  Bespoke Architecture
                </span>
                <p className="text-body-sm font-medium mt-2 text-ink leading-snug">
                  Zero vendor lock-in with fully owned custom API layer
                </p>
                <span className="text-caption font-bold mt-2 text-moss-dark">
                  Support: 24/7 Managed
                </span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative z-10 bg-canvas rounded-xl p-3 sm:p-4 border border-hairline shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-rose flex items-center justify-center flex-shrink-0 shadow-subtle">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-body-sm sm:text-body-md font-bold text-ink leading-tight">
                    Custom Enterprise OS — Live Demo
                  </h4>
                  <p className="text-caption sm:text-body-sm text-steel mt-0.5">
                    See how bespoke software transforms operations
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-caption-bold bg-surface-pricing-featured text-brand-blue px-3 py-1.5 rounded-full border border-brand-blue/20 whitespace-nowrap">
                  Full-Stack Build
                </span>
                <span className="text-caption-bold bg-coral-light text-coral-dark px-3 py-1.5 rounded-full whitespace-nowrap">
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
