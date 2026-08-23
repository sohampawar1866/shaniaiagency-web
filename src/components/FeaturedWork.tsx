"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { easings, durations } from "@/lib/motion";
import { CreditCard, Truck, ShoppingBag } from "lucide-react";

interface DataRow {
  col1: string;
  col2: string;
  col3: string;
  badgeText: string;
  badgeStyle: string;
}

interface CaseStudy {
  id: string;
  badge: string;
  tabLabel: string;
  tabSub: string;
  tabIcon: typeof CreditCard;
  title: string;
  client: string;
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  tags: string[];
  mockupTitle: string;
  accentColor: string;
  accentText: string;
  mockup: {
    headerIcon: string;
    headerLabel: string;
    headerStatus: string;
    headerStatusColor: string;
    dataRows: DataRow[];
    callouts: {
      title: string;
      desc: string;
      style: string;
    }[];
    footerLeft: string;
    footerRight: string;
  };
}

const featuredStudies: CaseStudy[] = [
  {
    id: "finpay-reconciliation",
    badge: "Fintech & Payments",
    tabLabel: "FinPay Solutions",
    tabSub: "Invoice AI Engine",
    tabIcon: CreditCard,
    client: "FinPay Solutions",
    title: "Eliminating 3-day invoice reconciliation cycles with an AI-powered payment matching engine",
    problem:
      "Their accounts team manually matched 2,000+ vendor invoices against purchase orders every week: a 3-day process riddled with mismatches, duplicate payments, and audit failures.",
    solution:
      "We built a custom AI reconciliation engine that auto-matches invoices against POs using NLP extraction and fuzzy logic, with a real-time exceptions dashboard for human review.",
    impactMetrics: [
      { label: "Processing Time", value: "94% Faster" },
      { label: "Match Accuracy", value: "99.3%" },
      { label: "Annual Savings", value: "₹18L+" },
    ],
    tags: ["AI Reconciliation Engine", "NLP Extraction", "Full-Stack Build", "Audit Trail"],
    mockupTitle: "FinPay: Invoice Reconciliation Dashboard",
    accentColor: "bg-surface-pricing-featured",
    accentText: "text-brand-blue",
    mockup: {
      headerIcon: "F",
      headerLabel: "Vendor Invoice Matching Queue",
      headerStatus: "Auto-Match Active",
      headerStatusColor: "text-success-accent bg-success-accent/10 border-success-accent/20",
      dataRows: [
        {
          col1: "INV-9042",
          col2: "Acme Supplies Ltd",
          col3: "₹1,42,500",
          badgeText: "✓ Auto-Matched (2.8s)",
          badgeStyle: "text-success-accent bg-success-accent/10",
        },
        {
          col1: "INV-9043",
          col2: "Nexus Logistics",
          col3: "₹84,200",
          badgeText: "✓ Auto-Matched (1.9s)",
          badgeStyle: "text-success-accent bg-success-accent/10",
        },
        {
          col1: "INV-9044",
          col2: "Zenith Tech Solutions",
          col3: "₹3,10,000",
          badgeText: "⚡ Flagged for Review",
          badgeStyle: "text-coral-dark bg-coral-light/60",
        },
      ],
      callouts: [
        {
          title: "PROBLEM SOLVED",
          desc: "Eliminated 3-day manual batching: auto-matches 94% of invoices in < 4s",
          style: "bg-brand-yellow/90 text-primary border-brand-yellow-deep/20",
        },
        {
          title: "AI NLP PIPELINE",
          desc: "Extracts vendor codes, GST numbers & PO refs across 14 invoice formats",
          style: "bg-surface-pricing-featured text-brand-blue border-brand-blue/20",
        },
      ],
      footerLeft: "Live: 2,340 invoices processed this week",
      footerRight: "₹0 Duplicate Payments",
    },
  },
  {
    id: "logiq-dispatch",
    badge: "Logistics & Fleet Ops",
    tabLabel: "LogiQ Transport",
    tabSub: "Fleet OS & Dispatch",
    tabIcon: Truck,
    client: "LogiQ Transport",
    title: "Replacing WhatsApp dispatch chaos with a real-time fleet operating system for 600 trucks",
    problem:
      "Fleet coordination happened entirely over WhatsApp groups: no live tracking, no ETA data, no driver accountability. Delayed deliveries and fuel wastage were costing the business every day.",
    solution:
      "We built a full-stack fleet OS: a web dispatch dashboard for operations managers paired with a lightweight driver PWA, route optimization engine, and automated customer ETA notifications.",
    impactMetrics: [
      { label: "Delivery Delays", value: "↓ 41%" },
      { label: "Fuel Cost Saved", value: "22%" },
      { label: "Trucks Managed", value: "600+" },
    ],
    tags: ["Fleet Management OS", "Driver PWA", "Route Optimization", "Real-Time GPS"],
    mockupTitle: "LogiQ: Live Dispatch & Fleet Tracker",
    accentColor: "bg-teal-light",
    accentText: "text-moss-dark",
    mockup: {
      headerIcon: "L",
      headerLabel: "Live Fleet Dispatch Console",
      headerStatus: "412 Trucks Active",
      headerStatusColor: "text-moss-dark bg-teal-light border-teal-600/20",
      dataRows: [
        {
          col1: "MH-12-PQ-4821",
          col2: "Mumbai → Pune Express",
          col3: "Driver: R. Kumar",
          badgeText: "✓ On Schedule (ETA 45m)",
          badgeStyle: "text-success-accent bg-success-accent/10",
        },
        {
          col1: "MH-14-AZ-9012",
          col2: "Surat → Ahmedabad",
          col3: "Driver: S. Patil",
          badgeText: "⚡ AI Rerouted (+18m)",
          badgeStyle: "text-yellow-dark bg-brand-yellow/40",
        },
        {
          col1: "MH-04-CX-3310",
          col2: "Nagpur → Nashik Hub",
          col3: "Driver: A. Singh",
          badgeText: "✓ Loading Complete",
          badgeStyle: "text-moss-dark bg-teal-light",
        },
      ],
      callouts: [
        {
          title: "BEFORE SHANIAI AGENCY",
          desc: "Unstructured WhatsApp groups & missed calls: 3 ops managers overwhelmed",
          style: "bg-coral-light/70 text-coral-dark border-coral-dark/20",
        },
        {
          title: "AI ROUTE OPTIMIZER",
          desc: "Dynamic rerouting on traffic & weather: saves avg. 38 min per long-haul trip",
          style: "bg-teal-light text-moss-dark border-teal-600/20",
        },
      ],
      footerLeft: "Deployment: 4 Regional Logistics Hubs",
      footerRight: "One-Time Build + Managed SLA",
    },
  },
  {
    id: "zova-inventory",
    badge: "Retail & E-Commerce",
    tabLabel: "Zova Fashion",
    tabSub: "Retail Demand AI",
    tabIcon: ShoppingBag,
    client: "Zova Fashion Group",
    title: "Building a demand forecasting intelligence platform that eliminated ₹50L in annual overstock",
    problem:
      "Manual buying decisions based on last season's data led to chronic overstock on slow SKUs and stockouts on bestsellers: killing margins across 6 warehouse locations.",
    solution:
      "We engineered a custom ML demand forecasting platform that ingests sales velocity, trend signals, and seasonal patterns to generate SKU-level purchase recommendations synced with their ERP.",
    impactMetrics: [
      { label: "Stockout Rate", value: "↓ 67%" },
      { label: "Overstock Saved", value: "₹50L/yr" },
      { label: "SKUs Tracked", value: "12,000+" },
    ],
    tags: ["ML Demand Forecasting", "ERP Integration", "Custom Dashboard", "Inventory AI"],
    mockupTitle: "Zova: Inventory Demand Intelligence",
    accentColor: "bg-coral-light",
    accentText: "text-coral-dark",
    mockup: {
      headerIcon: "Z",
      headerLabel: "SKU Demand & Reorder Forecast",
      headerStatus: "Forecast Synced",
      headerStatusColor: "text-brand-blue bg-surface-pricing-featured border-brand-blue/20",
      dataRows: [
        {
          col1: "SKU-FASH-8821",
          col2: "Cotton Kurta (L)",
          col3: "Stock: 142 units",
          badgeText: "🛒 Reorder Recommended",
          badgeStyle: "text-coral-dark bg-coral-light",
        },
        {
          col1: "SKU-FASH-3341",
          col2: "Denim Jacket (M)",
          col3: "Stock: 820 units",
          badgeText: "✓ Stock Optimal",
          badgeStyle: "text-moss-dark bg-teal-light",
        },
        {
          col1: "SKU-FASH-1092",
          col2: "Linen Shirt (White)",
          col3: "Stock: 48 units",
          badgeText: "⚡ PO Sent to Supplier",
          badgeStyle: "text-brand-blue bg-surface-pricing-featured",
        },
      ],
      callouts: [
        {
          title: "FORECAST INSIGHT",
          desc: "Predicted 3.4x spike on festival line: triggered purchase order 11 days early",
          style: "bg-coral-light/70 text-coral-dark border-coral-dark/20",
        },
        {
          title: "ML MODEL ACCURACY",
          desc: "Trained on 4 years sales data + trend signals: 91% demand prediction accuracy",
          style: "bg-brand-yellow/90 text-primary border-brand-yellow-deep/20",
        },
      ],
      footerLeft: "Connected: 6 Warehouses, 1 ERP Platform",
      footerRight: "Deployed in 8 Weeks",
    },
  },
];

export default function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeStudy = featuredStudies[activeIndex];

  return (
    <section id="work" className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : { duration: durations.md, ease: easings.snap }
          }
          className="mb-8 md:mb-10 text-left"
        >
          <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
            Featured Case Studies
          </div>
          <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
            Real problems. Custom-engineered solutions.
          </h2>
        </motion.div>

        {/* Interactive Case Study Tabs Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 sm:mb-8">
          {featuredStudies.map((study, idx) => {
            const Icon = study.tabIcon;
            const isActive = activeIndex === idx;
            return (
              <button
                key={study.id}
                onClick={() => setActiveIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                  isActive
                    ? "bg-canvas border-primary shadow-card ring-2 ring-primary/10"
                    : "bg-surface border-hairline-soft hover:bg-canvas hover:border-hairline text-steel"
                }`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isActive ? study.accentColor : "bg-canvas border border-hairline"
                  }`}
                >
                  <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${isActive ? study.accentText : "text-steel"}`} />
                </div>
                <div className="min-w-0">
                  <div className={`text-body-sm font-bold truncate ${isActive ? "text-ink" : "text-steel"}`}>
                    {study.tabLabel}
                  </div>
                  <div className="text-micro font-medium text-steel truncate">
                    {study.tabSub}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Single Unified Case Study Showcase Box */}
        <div className="bg-canvas border border-hairline-soft rounded-2xl shadow-mockup overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStudy.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 items-stretch"
            >

              {/* Visual Side: Interactive Software Preview */}
              <div className="lg:col-span-7 bg-surface p-3.5 sm:p-5 lg:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-hairline-soft relative overflow-hidden">
                {/* Mockup Top Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-hairline-soft mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-red inline-block flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow inline-block flex-shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-success-accent inline-block flex-shrink-0" />
                    <span className="text-caption font-bold text-ink ml-1 truncate">
                      {activeStudy.mockupTitle}
                    </span>
                  </div>
                  <span className="text-micro font-bold text-moss-dark bg-teal-light px-2.5 py-1 rounded-full flex-shrink-0 ml-2 whitespace-nowrap">
                    Live Software Build
                  </span>
                </div>

                {/* Dashboard Canvas Container */}
                <div className="relative bg-canvas rounded-xl p-3 sm:p-4 border border-hairline shadow-subtle flex-1 flex flex-col justify-between gap-4">
                  {/* Dot Grid Background */}
                  <div
                    className="absolute inset-0 opacity-25 pointer-events-none rounded-xl"
                    style={{
                      backgroundImage: "radial-gradient(#8e91a0 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />

                  {/* App Header Bar */}
                  <div className="relative z-10 flex items-center justify-between gap-2 bg-surface p-2.5 sm:p-3 rounded-lg border border-hairline-soft">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-md bg-brand-blue text-on-primary font-bold flex items-center justify-center text-caption flex-shrink-0 shadow-subtle">
                        {activeStudy.mockup.headerIcon}
                      </div>
                      <span className="text-body-sm font-bold text-ink truncate">
                        {activeStudy.mockup.headerLabel}
                      </span>
                    </div>
                    <span className={`text-micro font-bold px-2.5 py-1 rounded-md border whitespace-nowrap flex-shrink-0 ${activeStudy.mockup.headerStatusColor}`}>
                      {activeStudy.mockup.headerStatus}
                    </span>
                  </div>

                  {/* Data Table Widget */}
                  <div className="relative z-10 bg-surface rounded-lg p-2.5 sm:p-3 border border-hairline-soft space-y-2">
                    <div className="text-micro-uppercase font-bold text-steel px-1 pb-1 border-b border-hairline-soft flex items-center justify-between">
                      <span>Live Queue Activity</span>
                      <span>Real-Time Stream</span>
                    </div>
                    <div className="space-y-1.5">
                      {activeStudy.mockup.dataRows.map((row, idx) => (
                        <div
                          key={idx}
                          className="bg-canvas p-2 sm:p-2.5 rounded-md border border-hairline flex items-center justify-between gap-2 text-caption"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="font-mono font-bold text-ink text-micro sm:text-caption flex-shrink-0">
                              {row.col1}
                            </span>
                            <span className="text-steel truncate hidden sm:inline">
                              · {row.col2}
                            </span>
                            <span className="font-medium text-ink truncate sm:hidden">
                              {row.col2}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="font-bold text-ink text-micro sm:text-caption">
                              {row.col3}
                            </span>
                            <span className={`text-micro font-bold px-2 py-0.5 rounded ${row.badgeStyle} whitespace-nowrap hidden sm:inline-block`}>
                              {row.badgeText}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Callouts */}
                  <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeStudy.mockup.callouts.map((callout, cIdx) => (
                      <div
                        key={cIdx}
                        className={`p-3 rounded-lg border shadow-subtle ${callout.style}`}
                      >
                        <span className="text-micro font-bold uppercase tracking-wider block opacity-90">
                          {callout.title}
                        </span>
                        <p className="text-caption font-medium mt-1 leading-snug">
                          {callout.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer Status Bar */}
                  <div className="relative z-10 pt-2.5 border-t border-hairline-soft flex items-center justify-between text-caption text-steel">
                    <span className="truncate">{activeStudy.mockup.footerLeft}</span>
                    <span className="font-bold text-ink flex-shrink-0 ml-2 whitespace-nowrap">{activeStudy.mockup.footerRight}</span>
                  </div>
                </div>
              </div>

              {/* Content Side: Case Breakdown & Metrics */}
              <div className="lg:col-span-5 p-5 sm:p-7 lg:p-9 flex flex-col justify-between bg-canvas">
                <div>
                  {/* Badge & Client */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`text-caption-bold ${activeStudy.accentColor} ${activeStudy.accentText} px-3 py-1 rounded-full border border-black/10 whitespace-nowrap`}>
                      {activeStudy.badge}
                    </span>
                    <span className="text-caption font-bold text-steel">
                      · {activeStudy.client}
                    </span>
                  </div>

                  {/* Case Study Title */}
                  <h3 className="font-sans text-heading-3 font-medium text-ink mb-4 leading-snug">
                    {activeStudy.title}
                  </h3>

                  {/* Problem / Solution Breakdown */}
                  <div className="space-y-3 mb-5">
                    <div className="p-3 rounded-lg bg-surface border-l-4 border-brand-red">
                      <h4 className="text-caption-bold text-steel uppercase tracking-wider mb-1">
                        The Challenge
                      </h4>
                      <p className="text-body-sm text-ink leading-relaxed">
                        {activeStudy.problem}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-surface-yellow border-l-4 border-brand-yellow-deep">
                      <h4 className="text-caption-bold text-yellow-dark uppercase tracking-wider mb-1">
                        The Solution
                      </h4>
                      <p className="text-body-sm text-ink leading-relaxed">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-hairline-soft mb-5">
                    {activeStudy.impactMetrics.map((metric, i) => (
                      <div key={i} className="text-left">
                        <div className="text-heading-4 sm:text-heading-3 font-bold text-ink tracking-tight">
                          {metric.value}
                        </div>
                        <div className="text-micro font-medium text-steel leading-tight mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {activeStudy.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-micro font-medium bg-surface text-charcoal px-2.5 py-1 rounded-md border border-hairline whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <motion.a
                  href="/contact#message"
                  whileTap={{ scale: 0.97 }}
                  className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-medium text-button-md rounded-full py-3.5 shadow-subtle hover:bg-charcoal transition-colors cursor-pointer"
                >
                  Discuss a similar project →
                </motion.a>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
