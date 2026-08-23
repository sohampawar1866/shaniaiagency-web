"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { durations } from "@/lib/motion";

const navLinks = [
  { name: "Work", href: "/#work" },
  { name: "Industries", href: "/#industries" },
  { name: "Process", href: "/#process" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/about" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : durations.sm, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-canvas/95 backdrop-blur-md border-b border-hairline-soft"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[60px] sm:h-[64px] flex items-center justify-between gap-3">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-brand-yellow flex items-center justify-center font-bold text-ink text-caption sm:text-heading-4 shadow-subtle group-hover:scale-105 transition-transform flex-shrink-0">
            S
          </div>
          {/* Full name on md+, abbreviated on small mobile */}
          <span className="hidden sm:block font-heading-4 font-bold text-ink tracking-tight truncate">
            ShaniAI Agency
          </span>
          <span className="sm:hidden font-sans font-bold text-ink tracking-tight text-body-sm">
            ShaniAI
          </span>
        </Link>

        {/* Desktop Nav Links (Visible >= 1024px / lg) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-body-sm font-medium text-steel hover:text-ink transition-colors duration-150 whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Desktop CTA */}
          <motion.a
            href="/contact#message"
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex items-center justify-center bg-primary text-on-primary font-medium text-button-md rounded-full px-6 py-2.5 shadow-subtle hover:bg-charcoal transition-colors cursor-pointer whitespace-nowrap"
          >
            Book a call
          </motion.a>

          {/* Mobile: just hamburger, no extra CTA button — "Book a call" lives in drawer */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface border border-hairline flex items-center justify-center text-ink focus:outline-none"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="lg:hidden border-t border-hairline bg-canvas px-4 pt-4 pb-6 shadow-modal overflow-hidden"
          >
            <nav className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-body-md font-medium text-ink hover:text-brand-blue py-2.5 px-3 rounded-md hover:bg-surface transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Contact info in drawer */}
            <div className="pt-3 border-t border-hairline-soft mb-4 space-y-1.5">
              <a href="tel:+918087167841" className="block text-body-sm text-steel py-1 px-3">
                📞 +91 80871 67841
              </a>
              <a href="mailto:soham@shaniaiagency.tech" className="block text-body-sm text-steel py-1 px-3 break-all">
                ✉️ soham@shaniaiagency.tech
              </a>
            </div>
            <div className="pt-2 border-t border-hairline-soft">
              <motion.a
                href="/contact#message"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-medium text-button-md rounded-full py-3 shadow-subtle text-center"
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
