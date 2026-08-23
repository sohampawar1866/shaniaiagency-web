"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, easings, durations } from "@/lib/motion";

interface PricingScopeCard {
  id: string;
  badge: string;
  badgeStyle: string;
  title: string;
  subtitle: string;
  cardStyle: string;
  buttonStyle: string;
  buttonText: string;
  scopePoints: string[];
  featured?: boolean;
}

const pricingCards: PricingScopeCard[] = [
  {
    id: "one-time-build",
    badge: "Bespoke Delivery",
    badgeStyle: "bg-surface-yellow text-yellow-dark",
    title: "One-Time Build",
    subtitle:
      "Full lifecycle engineering from initial architecture to final production launch with fixed scope guarantees.",
    cardStyle: "bg-canvas border border-hairline shadow-subtle",
    buttonStyle:
      "bg-transparent text-ink border border-hairline-strong hover:border-ink",
    buttonText: "Request project quote",
    scopePoints: [
      "Custom UI/UX design system & architecture",
      "Full-stack web/mobile application codebase",
      "Proprietary AI agent pipelines & database schemas",
      "Comprehensive security audits & load testing",
      "100% intellectual property & source code ownership",
    ],
  },
  {
    id: "recurring-support",
    badge: "Managed Operations",
    badgeStyle: "bg-surface-pricing-featured text-brand-blue border border-brand-blue/20",
    title: "Recurring Support",
    subtitle:
      "Dedicated ongoing engineering, SLA-backed uptime, and continuous feature updates so your software stays ahead.",
    cardStyle: "bg-surface-pricing-featured border-2 border-brand-blue shadow-card",
    buttonStyle: "bg-brand-blue text-on-primary hover:bg-blue-pressed",
    buttonText: "Explore support terms",
    scopePoints: [
      "24/7 infrastructure monitoring & guaranteed SLA uptime",
      "Proactive security patches, framework & API updates",
      "Dedicated monthly engineering hours for enhancements",
      "Priority bug fixes & emergency technical response",
      "Continuous AI model monitoring & accuracy tuning",
    ],
    featured: true,
  },
];

export default function Pricing() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { duration: 0.01 }
        : { staggerChildren: 0.1, delayChildren: 0.05 },
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
    <section id="pricing" className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
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
          className="mb-10 md:mb-16 text-center max-w-[760px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            Pricing Structure
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight mb-4">
            Simple, transparent engagement model
          </h2>
          <p className="font-sans text-subtitle text-slate leading-relaxed">
            No rigid per-seat fees or hidden tiers. Custom projects are structured as a transparent one-time build cost, paired with optional ongoing maintenance.
          </p>
        </motion.div>

        {/* Two Scope Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-[1080px] mx-auto"
        >
          {pricingCards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileTap={{ scale: 0.98 }}
              className={`${card.cardStyle} rounded-xl p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative`}
            >
              <div>
                {/* Header Badge & Title */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`${card.badgeStyle} text-caption-bold px-3 py-1 rounded-full whitespace-nowrap`}
                  >
                    {card.badge}
                  </span>
                  {card.featured && (
                    <span className="text-micro font-bold bg-brand-yellow text-primary px-2.5 py-1 rounded-sm uppercase tracking-wider whitespace-nowrap">
                      Most Popular
                    </span>
                  )}
                </div>

                <h3 className="font-sans text-heading-2 font-medium text-ink mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-body-sm text-slate mb-8 leading-relaxed">
                  {card.subtitle}
                </p>

                {/* Scope Coverage List */}
                <div className="pt-6 border-t border-hairline-soft mb-8">
                  <span className="text-micro-uppercase font-bold text-steel block mb-4">
                    What This Covers
                  </span>
                  <ul className="space-y-3">
                    {card.scopePoints.map((point, index) => (
                      <li
                        key={index}
                        className="text-body-sm text-ink flex items-start gap-3"
                      >
                        <span className="text-brand-blue font-bold text-body-md leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <motion.a
                  href="/contact#message"
                  whileTap={{ scale: 0.97 }}
                  className={`w-full inline-flex items-center justify-center font-medium text-button-md rounded-full py-3.5 px-6 shadow-subtle transition-colors ${card.buttonStyle}`}
                >
                  {card.buttonText} →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
