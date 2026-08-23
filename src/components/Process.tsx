"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Search, Palette, Code2, ShieldCheck, LucideIcon } from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  badge: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
  accentColor: string;
  accentText: string;
  iconColor: string;
  glowColor: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    badge: "Weeks 1–2",
    icon: Search,
    description:
      "Deep-dive technical discovery, workflow mapping, and data architecture alignment to define your custom solution.",
    deliverables: ["Requirements Spec", "System Architecture", "Fixed Scope Roadmap"],
    accentColor: "bg-brand-yellow",
    accentText: "text-primary",
    iconColor: "text-brand-yellow",
    glowColor: "bg-brand-yellow/20",
  },
  {
    number: "02",
    title: "Design",
    badge: "Weeks 3–4",
    icon: Palette,
    description:
      "Interactive UI/UX prototyping, database schema design, and end-to-end AI agent workflow choreography.",
    deliverables: ["Interactive Prototype", "UI Design System", "API Specs"],
    accentColor: "bg-teal-light",
    accentText: "text-moss-dark",
    iconColor: "text-teal-600",
    glowColor: "bg-teal-light/30",
  },
  {
    number: "03",
    title: "Build",
    badge: "Weeks 5–10",
    icon: Code2,
    description:
      "Agile full-stack engineering sprints, custom AI pipeline integration, automated testing, and security auditing.",
    deliverables: ["Full-Stack Codebase", "AI Integration", "Staging Deployment"],
    accentColor: "bg-coral-light",
    accentText: "text-coral-dark",
    iconColor: "text-coral-dark",
    glowColor: "bg-coral-light/30",
  },
  {
    number: "04",
    title: "Support",
    badge: "Ongoing",
    icon: ShieldCheck,
    description:
      "Production deployment, 24/7 managed monitoring, SLA-backed maintenance, and continuous feature updates.",
    deliverables: ["Production Launch", "24/7 Managed Uptime", "SLA Support"],
    accentColor: "bg-brand-rose",
    accentText: "text-primary",
    iconColor: "text-brand-pink",
    glowColor: "bg-brand-rose/30",
  },
];

export default function Process() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.08, delayChildren: 0.05 },
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
      id="process"
      className="relative bg-primary py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle dark noise texture pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
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
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-brand-yellow/80 uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            How We Work
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-on-primary tracking-tight">
            A structured 4-step engineering process
          </h2>
        </motion.div>

        {/* 4-Step Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 relative"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileTap={{ scale: 0.97 }}
                className="bg-white/[0.06] hover:bg-white/[0.1] rounded-2xl p-5 sm:p-xl border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer flex flex-col justify-between relative group backdrop-blur-sm"
              >
                {/* Step Header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Glowing number chip */}
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full blur-md ${step.glowColor}`} />
                      <span
                        className={`relative w-10 h-10 rounded-full ${step.accentColor} ${step.accentText} font-bold text-body-sm flex items-center justify-center shadow-subtle`}
                      >
                        {step.number}
                      </span>
                    </div>
                    {/* Badge chip */}
                    <span className="text-micro font-bold bg-white/10 text-white/70 px-2.5 py-1 rounded-full border border-white/10 whitespace-nowrap">
                      {step.badge}
                    </span>
                  </div>

                  {/* Step Title & Icon */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${step.glowColor} border border-white/10 flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${step.iconColor} stroke-[2.2]`} />
                    </div>
                    <h3 className="font-sans text-heading-3 font-medium text-on-primary">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-body-sm text-white/60 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-micro-uppercase font-bold text-white/40 block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="text-caption text-white/70 flex items-center gap-2"
                      >
                        <span className={`font-bold ${step.iconColor}`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
