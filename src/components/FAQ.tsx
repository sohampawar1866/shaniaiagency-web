"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { easings, durations } from "@/lib/motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: "timeline",
    category: "Timelines",
    question: "What is the typical timeline for a custom software build?",
    answer:
      "Most bespoke builds take between 4 to 12 weeks from initial discovery to production launch. We engineer in rapid 2-week sprints with functional staging builds delivered at the end of every sprint, giving you full visibility throughout.",
  },
  {
    id: "tech-stack",
    category: "Architecture",
    question: "What tech stacks do you work with, and can you integrate with legacy systems?",
    answer:
      "We build modern applications using Next.js, React, Node.js, Python, PostgreSQL, and cloud infrastructure (AWS/GCP). We specialize in building custom AI agent workflows and API middleware layers to safely wrap legacy systems without breaking existing operations.",
  },
  {
    id: "support-terms",
    category: "Ongoing Support",
    question: "What is included in recurring ongoing support and SLAs?",
    answer:
      "Our managed support includes 24/7 automated infrastructure monitoring, 99.98% SLA uptime guarantees, proactive security patching, priority emergency response, and dedicated monthly engineering hours for feature enhancements.",
  },
  {
    id: "project-size",
    category: "Engagement",
    question: "What is your minimum project size or engagement structure?",
    answer:
      "We engage on targeted software builds starting from custom AI workflow tools up to full-scale enterprise operating systems. Every engagement begins with a fixed-scope discovery phase so deliverables, timeline, and costs are 100% transparent before building.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("timeline");
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
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
          className="mb-12 md:mb-16 text-left max-w-[720px]"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
            Frequently Asked Questions
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
            Clear answers to practical questions
          </h2>
        </motion.div>

        {/* FAQ Accordion Container */}
        <div className="max-w-[920px] mx-auto border-t border-hairline divide-y divide-hairline">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-canvas rounded-md transition-colors"
              >
                {/* Accordion Item Header / Button */}
                <motion.button
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-4 sm:py-6 px-3 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none group"
                >
                  <div className="flex items-start sm:items-center gap-2 sm:gap-3 flex-col sm:flex-row">
                    <span className="text-micro font-bold bg-surface text-steel px-2.5 py-1 rounded-full border border-hairline">
                      {faq.category}
                    </span>
                    <h3 className="font-sans text-body-sm sm:text-heading-5 md:text-heading-4 font-medium text-ink group-hover:text-brand-blue transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus / Minus Indicator Icon */}
                  <span className="w-8 h-8 rounded-full bg-surface border border-hairline flex items-center justify-center text-ink flex-shrink-0 text-body-md font-bold transition-transform">
                    {isOpen ? "−" : "+"}
                  </span>
                </motion.button>

                {/* Accordion Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.01 }
                          : {
                              duration: durations.sm,
                              ease: easings.snap,
                            }
                      }
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 pt-2 text-body-md text-slate leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
