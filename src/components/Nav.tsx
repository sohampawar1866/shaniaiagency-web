"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { durations } from "@/lib/motion";

const navLinks = [
  { name: "Work", href: "/#work", id: "work" },
  { name: "Industries", href: "/#industries", id: "industries" },
  { name: "Process", href: "/#process", id: "process" },
  { name: "Pricing", href: "/#pricing", id: "pricing" },
  { name: "About", href: "/about", id: "about" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const shouldReduceMotion = useReducedMotion();

  // Scroll observer for floating sticky state and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section check based on scroll position
      const sections = ["work", "industries", "process", "pricing"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : durations.sm, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-hairline/70 shadow-subtle"
          : "bg-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-[64px] flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0 min-w-0" aria-label="ShaniAI Agency Home">
          <div className="w-8 h-8 rounded-lg bg-brand-yellow flex items-center justify-center font-bold text-ink text-body-sm shadow-subtle group-hover:scale-105 group-hover:rotate-1 transition-all duration-200 flex-shrink-0">
            S
          </div>
          {/* Full name on md+, abbreviated on small mobile */}
          <span className="hidden sm:block font-display font-semibold text-ink tracking-tight truncate text-heading-4">
            ShaniAI Agency
          </span>
          <span className="sm:hidden font-display font-semibold text-ink tracking-tight text-body-sm">
            ShaniAI
          </span>
        </Link>

        {/* Desktop Nav Links (Visible >= 1024px / lg) */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/40 p-1.5 rounded-full border border-black/5 backdrop-blur-sm shadow-subtle">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-body-sm font-semibold rounded-full transition-all duration-150 whitespace-nowrap ${
                  isActive
                    ? "text-ink bg-white shadow-subtle font-bold"
                    : "text-ink/80 hover:text-ink hover:bg-white/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Desktop CTA */}
          <motion.a
            href="/contact#message"
            aria-label="Book a discovery call with ShaniAI Agency"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="hidden lg:inline-flex items-center justify-center bg-primary text-on-primary font-semibold text-button-md rounded-full px-6 py-2.5 shadow-subtle hover:bg-charcoal transition-all cursor-pointer whitespace-nowrap"
          >
            Book a call
          </motion.a>

          {/* Mobile: hamburger toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
            className="lg:hidden w-10 h-10 rounded-full bg-white/80 border border-hairline flex items-center justify-center text-ink shadow-subtle focus:outline-none"
          >
            <svg
              className="w-5 h-5 transition-transform duration-200"
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
            className="lg:hidden border-t border-hairline/60 bg-white/95 backdrop-blur-xl px-4 pt-4 pb-6 shadow-modal overflow-hidden"
          >
            <nav className="flex flex-col gap-1 mb-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-body-md font-semibold py-2.5 px-3.5 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? "text-primary bg-surface font-bold"
                      : "text-ink hover:text-brand-blue hover:bg-surface"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            {/* Contact info in drawer */}
            <div className="pt-3 border-t border-hairline-soft mb-4 space-y-1.5">
              <a href="tel:+918087167841" className="block text-body-sm font-medium text-steel py-1 px-3">
                📞 +91 80871 67841
              </a>
              <a href="mailto:soham@shaniaiagency.tech" className="block text-body-sm font-medium text-steel py-1 px-3 break-all">
                ✉️ soham@shaniaiagency.tech
              </a>
            </div>
            <div className="pt-2 border-t border-hairline-soft">
              <motion.a
                href="/contact#message"
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-semibold text-button-md rounded-full py-3.5 shadow-subtle text-center"
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
