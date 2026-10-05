"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springs, durations } from "@/lib/motion";

export default function CtaBanner() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-canvas py-10 sm:py-14 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { ...springs.smooth, duration: durations.lg }
          }
          className="bg-primary text-on-primary rounded-feature p-6 sm:p-10 lg:p-section text-center relative overflow-hidden shadow-mockup"
        >
          {/* Subtle Background Accent Gradient */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-on-dark/10 text-brand-yellow px-3.5 py-1.5 rounded-full text-caption font-bold tracking-wider uppercase mb-6 border border-brand-yellow/20">
            <span className="w-2 h-2 rounded-full bg-brand-yellow" />
            Start Your Custom Build
          </div>

          {/* Banner Title */}
          <h2 className="font-display text-heading-3 sm:text-heading-2 lg:text-display-lg font-semibold text-on-primary max-w-[840px] mx-auto leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Ready to build the software your business actually needs?
          </h2>

          {/* Banner Subtitle */}
          <p className="font-sans text-subtitle text-on-dark-muted max-w-[600px] mx-auto mb-8 leading-relaxed">
            Book a 30-minute technical discovery call directly with Founder &amp; CEO Soham Pawar and our senior engineering squad. No sales pressure, just architecture alignment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/contact#message"
              aria-label="Book a technical discovery call with our engineering team"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-ink font-semibold text-button-md rounded-full px-9 py-4 shadow-card hover:bg-surface-yellow transition-all duration-200 cursor-pointer"
            >
              Book a discovery call
            </motion.a>

            <motion.a
              href="mailto:soham@shaniaiagency.tech"
              aria-label="Email ShaniAI Agency directly"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/15 text-white font-semibold text-button-md rounded-full py-4 px-7 border border-white/20 transition-all duration-200"
            >
              Or email us directly →
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
