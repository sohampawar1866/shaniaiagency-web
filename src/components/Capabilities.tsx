"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Settings, Sparkles, Zap, ShieldCheck, LucideIcon } from "lucide-react";

interface CapabilityCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  tagColor: string;
  cardStyle: string;
  textColor: string;
  icon: LucideIcon;
}

const capabilities: CapabilityCard[] = [
  {
    id: "custom-software",
    badge: "Bespoke Builds",
    title: "Custom Software",
    description:
      "Bespoke web applications, internal tools, and enterprise operating systems engineered specifically around your workflow.",
    tagColor: "bg-surface-yellow text-yellow-dark",
    cardStyle: "bg-brand-yellow",
    textColor: "text-primary",
    icon: Settings,
  },
  {
    id: "ai-solutions",
    badge: "AI Native",
    title: "AI Solutions",
    description:
      "Custom AI agents, LLM pipelines, and automated intelligence layers integrated directly into your existing data infrastructure.",
    tagColor: "bg-canvas text-moss-dark",
    cardStyle: "bg-teal-light",
    textColor: "text-primary",
    icon: Sparkles,
  },
  {
    id: "full-stack-apps",
    badge: "End-to-End",
    title: "Full-Stack Applications",
    description:
      "High-performance client dashboards, mobile apps, and robust API architectures built for scale and long-term reliability.",
    tagColor: "bg-canvas text-coral-dark",
    cardStyle: "bg-coral-light",
    textColor: "text-primary",
    icon: Zap,
  },
  {
    id: "ongoing-support",
    badge: "Managed Operations",
    title: "Ongoing Support",
    description:
      "Dedicated post-launch engineering, proactive maintenance, SLA-backed uptime, and continuous feature enhancements.",
    tagColor: "bg-canvas text-primary",
    cardStyle: "bg-rose-light",
    textColor: "text-primary",
    icon: ShieldCheck,
  },
];

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

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
    <section id="capabilities" className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: durations.lg, ease: easings.snap }
          }
          className="mb-8 md:mb-12 text-left"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            What We Build
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
            Capabilities tailored to your vision
          </h2>
        </motion.div>

        {/* 4 Pastel Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileTap={{ scale: 0.97 }}
                className={`${item.cardStyle} ${item.textColor} rounded-xxxl p-xxl flex flex-col justify-between shadow-subtle hover:shadow-card transition-all duration-200 cursor-pointer min-h-[280px] border border-black/5`}
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-current stroke-[2.2]" />
                    </div>
                    <span
                      className={`${item.tagColor} text-caption-bold px-3 py-1 rounded-full shadow-subtle whitespace-nowrap`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-sans text-heading-3 font-medium mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-sans text-body-md opacity-90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Link Hint */}
                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-body-sm-medium">
                  <span>Explore capability</span>
                  <span className="text-heading-4 leading-none">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
