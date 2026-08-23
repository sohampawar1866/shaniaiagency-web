"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  badge: string;
  badgeColor: string;
  impactStat: string;
  impactLabel: string;
  avatarBg: string;
  avatarText: string;
}

const testimonials: Testimonial[] = [
  {
    id: "finpay",
    quote:
      "Before ShaniAI Agency built our AI reconciliation engine, our accounts team was drowning in 3-day manual invoice matching cycles. They delivered a custom platform in 6 weeks that automated 94% of our volume. Flawless execution and zero vendor lock-in.",
    author: "Vikram Mehta",
    role: "VP of Financial Operations",
    company: "FinPay Solutions",
    badge: "Fintech & AI",
    badgeColor: "bg-surface-pricing-featured text-brand-blue border-brand-blue/20",
    impactStat: "94%",
    impactLabel: "Auto-Matched",
    avatarBg: "bg-brand-blue",
    avatarText: "VM",
  },
  {
    id: "logiq",
    quote:
      "Managing 600 trucks over WhatsApp was a nightmare. ShaniAI Agency engineered a real-time fleet OS and driver app tailored to our exact dispatch logic. Delivery delays dropped 41% within the first month of deployment.",
    author: "Rajesh Sharma",
    role: "Director of Logistics",
    company: "LogiQ Transport",
    badge: "Logistics & Fleet Ops",
    badgeColor: "bg-teal-light text-moss-dark border-teal-600/20",
    impactStat: "↓ 41%",
    impactLabel: "Delay Reduction",
    avatarBg: "bg-teal-600",
    avatarText: "RS",
  },
  {
    id: "zova",
    quote:
      "The inventory forecasting platform ShaniAI Agency built saved us over ₹50L in overstock in our first year alone. Their team works like true senior engineering partners: transparent, fast, and deeply technical.",
    author: "Ananya Roy",
    role: "Head of Supply Chain",
    company: "Zova Fashion Group",
    badge: "Retail & Demand AI",
    badgeColor: "bg-coral-light text-coral-dark border-coral-dark/20",
    impactStat: "₹50L+",
    impactLabel: "Annual Savings",
    avatarBg: "bg-coral-dark",
    avatarText: "AR",
  },
];

const clients = [
  { name: "FinPay Solutions", tag: "Fintech" },
  { name: "LogiQ Transport", tag: "Logistics" },
  { name: "Zova Fashion", tag: "Retail & E-Com" },
  { name: "Apex Operations", tag: "Enterprise" },
  { name: "Kinetix AI", tag: "AI Platforms" },
];

export default function SocialProof() {
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
    <section id="social-proof" className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
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
          className="mb-10 text-left"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-rose" />
            Client Endorsements & Impact
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
              Trusted by leaders who demand results
            </h2>
            <span className="text-caption font-bold text-moss-dark bg-teal-light px-3 py-1.5 rounded-full border border-teal-600/20 w-fit">
              Verified Client Outcomes
            </span>
          </div>
        </motion.div>

        {/* Client Logo / Name Wall */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: durations.md, ease: easings.snap }
          }
          className="mb-12 p-4 sm:p-6 bg-surface rounded-xl border border-hairline-soft"
        >
          <span className="text-micro-uppercase font-bold text-steel block mb-4 text-center">
            Engineered Custom Solutions For
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className="w-full py-3 px-4 bg-canvas rounded-lg border border-hairline flex flex-col items-center justify-center text-center shadow-subtle hover:border-steel transition-colors"
              >
                <span className="text-body-sm font-bold text-ink truncate w-full">
                  {client.name}
                </span>
                <span className="text-micro font-medium text-steel mt-0.5">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className="bg-canvas rounded-2xl p-6 sm:p-7 border border-hairline-soft shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Quote icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-hairline flex items-center justify-center text-ink">
                    <Quote className="w-4 h-4 text-brand-blue fill-brand-blue/10" />
                  </div>
                  <span
                    className={`text-micro font-bold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="font-sans text-body-sm text-slate leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Footer: Author Info & Impact Stat */}
              <div className="pt-4 border-t border-hairline-soft flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-on-primary font-bold text-caption flex items-center justify-center flex-shrink-0 shadow-subtle`}
                  >
                    {item.avatarText}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-body-sm font-bold text-ink truncate">
                      {item.author}
                    </h3>
                    <p className="text-caption text-steel truncate">
                      {item.role}, <span className="font-semibold text-ink">{item.company}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right flex-shrink-0 bg-surface px-2.5 py-1 rounded-lg border border-hairline">
                  <div className="text-body-sm font-bold text-ink leading-tight">
                    {item.impactStat}
                  </div>
                  <div className="text-micro font-medium text-steel leading-none">
                    {item.impactLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
