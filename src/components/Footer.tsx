"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { easings, durations } from "@/lib/motion";

interface FooterColumn {
  id: string;
  title: string;
  links: { name: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    id: "capabilities",
    title: "Capabilities",
    links: [
      { name: "Custom Software", href: "/#capabilities" },
      { name: "AI Solutions", href: "/#capabilities" },
      { name: "Full-Stack Apps", href: "/#capabilities" },
      { name: "Ongoing Support", href: "/#capabilities" },
      { name: "System Architecture", href: "/#capabilities" },
    ],
  },
  {
    id: "industries",
    title: "Industries",
    links: [
      { name: "Healthcare & Clinical", href: "/#industries" },
      { name: "Fintech & Finance", href: "/#industries" },
      { name: "Retail & E-Commerce", href: "/#industries" },
      { name: "Logistics & Supply Chain", href: "/#industries" },
      { name: "Enterprise Operations", href: "/#industries" },
    ],
  },
  {
    id: "process",
    title: "Process",
    links: [
      { name: "Discovery Phase", href: "/#process" },
      { name: "Design Sprints", href: "/#process" },
      { name: "Agile Build", href: "/#process" },
      { name: "Managed Support", href: "/#process" },
      { name: "Security Auditing", href: "/#process" },
    ],
  },
  {
    id: "case-studies",
    title: "Case Studies",
    links: [
      { name: "HMS Clinical OS", href: "/#work" },
      { name: "Financial Ledger AI", href: "/#work" },
      { name: "Supply Chain Dispatch", href: "/#work" },
      { name: "E-Commerce Engine", href: "/#work" },
      { name: "Client Stories", href: "/#work" },
    ],
  },
  {
    id: "company",
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about" },
      { name: "Engineering Squads", href: "/#why-us" },
      { name: "Contact Us", href: "/contact#message" },
      { name: "Book a Call", href: "/contact#message" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/policy" },
      { name: "One-Time Build", href: "/#pricing" },
      { name: "Recurring Support", href: "/#pricing" },
      { name: "Pricing Model", href: "/#pricing" },
    ],
  },
];

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <footer className="bg-footer-bg text-on-dark py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-hairline-strong/20">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Region: 6-Column Grid (Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6 sm:gap-8 pb-10 sm:pb-12 border-b border-hairline-strong/20">
          {footerColumns.map((col) => {
            const isOpen = !!openSections[col.id];
            return (
              <div key={col.id} className="flex flex-col">
                {/* Column Title */}
                <button
                  onClick={() => toggleSection(col.id)}
                  className="sm:pointer-events-none flex items-center justify-between text-left py-2 sm:py-0 mb-2 sm:mb-3 text-body-sm font-semibold text-on-dark border-b sm:border-none border-hairline-strong/20 focus:outline-none"
                >
                  <span>{col.title}</span>
                  <span className="sm:hidden text-caption font-bold text-on-dark-muted">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Desktop: always visible */}
                <div className="hidden sm:block">
                  <ul className="space-y-2">
                    {col.links.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="text-body-sm text-on-dark-muted hover:text-on-dark transition-colors duration-150 block py-0.5"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Accordion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.01 }
                          : { duration: durations.sm, ease: easings.snap }
                      }
                      className="sm:hidden overflow-hidden"
                    >
                      <ul className="space-y-2 py-2">
                        {col.links.map((link, i) => (
                          <li key={i}>
                            <Link
                              href={link.href}
                              className="text-body-sm text-on-dark-muted hover:text-on-dark transition-colors block py-0.5"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Region: Brand + Copyright + Quick Contact */}
        <div className="pt-8 flex flex-col gap-6">
          {/* Top row: Brand + Contact info */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Brand */}
            <div className="flex flex-col gap-2">
              <Link href="/" className="flex items-center gap-2 w-fit">
                <div className="w-7 h-7 rounded bg-brand-yellow flex items-center justify-center font-bold text-ink text-body-sm flex-shrink-0">
                  S
                </div>
                <span className="font-heading-4 font-bold text-on-dark tracking-tight">
                  ShaniAI Agency
                </span>
              </Link>
              <p className="text-caption text-on-dark-muted max-w-[280px] leading-relaxed">
                Bespoke software &amp; AI solutions engineered for businesses that need more than off-the-shelf.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2">
              <p className="text-micro-uppercase font-bold text-on-dark-muted tracking-wider uppercase">Contact</p>
              <a href="tel:+918087167841" className="text-body-sm text-on-dark-muted hover:text-on-dark transition-colors">
                +91 80871 67841
              </a>
              <a href="mailto:soham@shaniaiagency.tech" className="text-body-sm text-on-dark-muted hover:text-on-dark transition-colors break-all">
                soham@shaniaiagency.tech
              </a>
            </div>
          </div>

          {/* Bottom row: copyright + legal links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-hairline-strong/20">
            <span className="text-caption text-on-dark-muted text-center sm:text-left">
              © {new Date().getFullYear()} ShaniAI Agency. All rights reserved.
            </span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-caption text-on-dark-muted hover:text-on-dark transition-colors">
                Privacy Policy
              </Link>
              <span className="text-on-dark-muted/30">·</span>
              <Link href="/policy" className="text-caption text-on-dark-muted hover:text-on-dark transition-colors">
                Terms of Service
              </Link>
              <span className="text-on-dark-muted/30">·</span>
              <Link href="/about" className="text-caption text-on-dark-muted hover:text-on-dark transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
