"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Rocket, Brain, Users, Lock, LucideIcon } from "lucide-react";

interface DifferentiatorCard {
  id: string;
  badge: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accentBg: string;
}

const differentiators: DifferentiatorCard[] = [
  {
    id: "speed",
    badge: "Rapid Delivery",
    icon: Rocket,
    title: "Speed & Agility",
    description:
      "Ship custom production-grade software in weeks, not quarters, powered by our modular full-stack engineering framework.",
    accentBg: "bg-surface-yellow text-yellow-dark",
  },
  {
    id: "ai-native",
    badge: "Built for AI",
    icon: Brain,
    title: "AI-Native Architecture",
    description:
      "We don't just bolt on AI: every application is architected ground-up with autonomous agent workflows and custom LLM pipelines.",
    accentBg: "bg-surface-pricing-featured text-brand-blue",
  },
  {
    id: "senior-squads",
    badge: "Direct Access",
    icon: Users,
    title: "Dedicated Senior Squads",
    description:
      "Work directly with Founder & CEO Soham Pawar and senior engineers: no junior bloated teams, complex agency handoffs, or account managers.",
    accentBg: "bg-teal-light text-moss-dark",
  },
  {
    id: "full-ownership",
    badge: "Zero Lock-In",
    icon: Lock,
    title: "Full IP Ownership",
    description:
      "100% source code, database schema, and intellectual property ownership transferred to you from day one with clean documentation.",
    accentBg: "bg-coral-light text-coral-dark",
  },
];

// Rich 40-Tile Palette Grid for Vibrant Background Coverage
const tileColors = [
  "bg-coral-light/65", "bg-teal-light/70", "bg-brand-yellow/60", "bg-brand-rose/65", "bg-surface-pricing-featured/75", "bg-brand-yellow/60", "bg-coral-light/65", "bg-teal-light/70",
  "bg-brand-rose/65", "bg-surface-pricing-featured/70", "bg-teal-light/75", "bg-brand-yellow/60", "bg-coral-light/65", "bg-surface-pricing-featured/75", "bg-brand-rose/65", "bg-brand-yellow/60",
  "bg-coral-light/70", "bg-teal-light/65", "bg-brand-rose/70", "bg-surface-pricing-featured/70", "bg-brand-yellow/60", "bg-coral-light/65", "bg-teal-light/70", "bg-brand-rose/65",
  "bg-surface-pricing-featured/70", "bg-brand-yellow/65", "bg-coral-light/60", "bg-teal-light/75", "bg-brand-rose/65", "bg-surface-pricing-featured/65", "bg-coral-light/65", "bg-brand-yellow/60",
  "bg-teal-light/70", "bg-brand-rose/65", "bg-surface-pricing-featured/75", "bg-brand-yellow/60", "bg-coral-light/70", "bg-teal-light/65", "bg-brand-rose/65", "bg-surface-pricing-featured/70",
];

export default function WhyUs() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Bind scroll progress for continuous tile grid movement from top to bottom of section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Continuous translation vectors across 0->1 scroll progress
  const translateX1 = useTransform(scrollYProgress, [0, 1], ["-120px", "120px"]);
  const translateY1 = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

  const translateX2 = useTransform(scrollYProgress, [0, 1], ["120px", "-120px"]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], ["80px", "-80px"]);

  const translateX3 = useTransform(scrollYProgress, [0, 1], ["-160px", "160px"]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const translateX4 = useTransform(scrollYProgress, [0, 1], ["160px", "-160px"]);
  const translateY4 = useTransform(scrollYProgress, [0, 1], ["-100px", "100px"]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: shouldReduceMotion ? { duration: 0.01 } : springs.snappy,
    },
  };

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex flex-col justify-center"
    >
      {/* ── ROTATED DENSE TILE GRID FULL BACKGROUND COVERAGE ─────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
        <div
          className="absolute w-[220vw] h-[220vh] -left-[60vw] -top-[60vh] grid grid-cols-8 grid-rows-5 gap-2.5 sm:gap-4 origin-center transform rotate-[43deg] scale-[1.2] sm:scale-[1.4]"
        >
          {tileColors.map((colorClass, index) => {
            // Group movement mapping
            const group = (index % 4) + 1;
            let style = {};

            if (!shouldReduceMotion) {
              if (group === 1) style = { x: translateX1, y: translateY1 };
              else if (group === 2) style = { x: translateX2, y: translateY2 };
              else if (group === 3) style = { x: translateX3, y: translateY3 };
              else style = { x: translateX4, y: translateY4 };
            }

            return (
              <motion.div
                key={index}
                style={style}
                className={`w-full h-full rounded-2xl ${colorClass} backdrop-blur-sm shadow-subtle`}
              />
            );
          })}
        </div>
      </div>

      {/* ── FOREGROUND CONTENT ─────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: durations.lg, ease: easings.snap }
          }
          className="mb-12 md:mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            Why Work With Us
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
            Engineered for speed, transparency, and impact
          </h2>
        </motion.div>

        {/* 4 Value Prop Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileTap={{ scale: 0.97 }}
                className="bg-canvas/95 backdrop-blur-md rounded-xl p-xl border border-hairline-soft shadow-subtle hover:shadow-card hover:border-hairline transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Header Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-surface border border-hairline flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue stroke-[2.2]" />
                    </div>
                    <span
                      className={`${item.accentBg} text-micro font-bold px-2.5 py-1 rounded-full`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-heading-3 font-medium text-ink mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-body-sm text-steel leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-8 pt-4 border-t border-hairline-soft flex items-center gap-2 text-caption font-semibold text-brand-blue">
                  <span>Core Differentiator</span>
                  <span>✓</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
