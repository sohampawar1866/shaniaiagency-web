"use client";

import { useRef, useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { easings, durations } from "@/lib/motion";
import { Activity, CreditCard, ShoppingBag, Package, Building2, LucideIcon } from "lucide-react";

interface IndustryTile {
  id: string;
  number: string;
  name: string;
  badge: string;
  icon: LucideIcon;
  description: string;
  accentBg: string;
}

const industryTiles: IndustryTile[] = [
  {
    id: "healthcare",
    number: "01",
    name: "Healthcare & Clinical",
    badge: "HIPAA Compliant",
    icon: Activity,
    description:
      "Hospital operating systems, EHR integrations, clinical AI triage pipelines, and patient intake portals.",
    accentBg: "bg-surface-yellow text-yellow-dark",
  },
  {
    id: "fintech",
    number: "02",
    name: "Fintech & Finance",
    badge: "High Security",
    icon: CreditCard,
    description:
      "Bespoke transaction processing, automated compliance engines, payment gateways, and real-time ledger tools.",
    accentBg: "bg-surface-pricing-featured text-brand-blue",
  },
  {
    id: "retail",
    number: "03",
    name: "Retail & E-Commerce",
    badge: "High Scale",
    icon: ShoppingBag,
    description:
      "Custom inventory management, omni-channel POS integrations, and predictive demand analytics platforms.",
    accentBg: "bg-coral-light text-coral-dark",
  },
  {
    id: "logistics",
    number: "04",
    name: "Logistics & Supply Chain",
    badge: "Real-Time Tracking",
    icon: Package,
    description:
      "Fleet dispatch systems, warehouse automation software, route optimization, and live telemetry dashboards.",
    accentBg: "bg-teal-light text-moss-dark",
  },
  {
    id: "enterprise",
    number: "05",
    name: "Enterprise Operations",
    badge: "Mission-Critical",
    icon: Building2,
    description:
      "Custom ERP systems, internal ops tooling, cross-department automation, and AI-assisted workflow engines.",
    accentBg: "bg-surface-pricing-featured text-brand-blue",
  },
];

// Desktop layout constants
const VISIBLE_CARDS = 3;
const CARD_WIDTH_PX = 380;
const CARD_GAP_PX = 24;
const CARD_STEP_PX = CARD_WIDTH_PX + CARD_GAP_PX;
const TOTAL_CARDS = industryTiles.length;
const SCROLL_STEPS = TOTAL_CARDS - VISIBLE_CARDS;
const SCROLL_PX_PER_STEP = 500;
const WRAPPER_EXTRA_HEIGHT = SCROLL_STEPS * SCROLL_PX_PER_STEP;

function subscribeDesktopMedia(callback: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getDesktopServerSnapshot() {
  return false;
}

export default function Industries() {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeDesktopMedia,
    getDesktopSnapshot,
    getDesktopServerSnapshot
  );

  return isDesktop ? (
    <DesktopSection shouldReduceMotion={shouldReduceMotion} />
  ) : (
    <MobileSection />
  );
}

function DesktopSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = SCROLL_STEPS * CARD_STEP_PX;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, shouldReduceMotion ? 0 : -maxTranslate]
  );

  const [progressPct, setProgressPct] = useState(0);
  const [cardRange, setCardRange] = useState({ start: 1, end: VISIBLE_CARDS });

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const pct = Math.round(v * 100);
      setProgressPct(pct);
      const step = Math.round(v * SCROLL_STEPS);
      setCardRange({
        start: step + 1,
        end: Math.min(step + VISIBLE_CARDS, TOTAL_CARDS),
      });
    });
  }, [scrollYProgress]);

  return (
    <div
      ref={wrapperRef}
      style={{ height: `calc(100vh + ${WRAPPER_EXTRA_HEIGHT}px)` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-surface-yellow/25 flex flex-col justify-center">
        {/* Section Header */}
        <div className="max-w-[1280px] mx-auto px-8 xl:px-8 w-full pt-12 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: durations.lg, ease: easings.snap }}
            className="flex items-end justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                Industries We Serve
              </div>
              <h2 className="font-sans text-heading-1 font-medium text-ink tracking-tight">
                Enterprise breadth across diverse sectors
              </h2>
            </div>
            <div className="flex items-center gap-2 text-caption font-medium text-steel flex-shrink-0 mb-1">
              <span>Scroll to explore</span>
              <span className="text-body-md">→</span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-5">
            <div className="flex items-center justify-between text-micro font-medium text-steel mb-2">
              <span>
                {cardRange.start}–{cardRange.end} of {TOTAL_CARDS} industries
              </span>
              <span className="font-bold text-ink">{progressPct}%</span>
            </div>
            <div className="h-px bg-hairline rounded-full w-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-blue rounded-full origin-left"
                style={{
                  scaleX: scrollYProgress,
                }}
              />
            </div>
          </div>
        </div>

        {/* Scrolling Card Track */}
        <div
          className="flex-1 flex items-center overflow-hidden"
          style={{ paddingLeft: "max(2rem, calc((100vw - 1280px) / 2 + 2rem))" }}
        >
          <motion.div className="flex gap-6" style={{ x }}>
            {industryTiles.map((tile) => (
              <DesktopCard key={tile.id} tile={tile} />
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="max-w-[1280px] mx-auto px-8 w-full pb-10 pt-4">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: SCROLL_STEPS + 1 }).map((_, i) => {
              const ratio = SCROLL_STEPS > 0 ? i / SCROLL_STEPS : 0;
              const isActive = Math.abs(progressPct / 100 - ratio) < 0.25;
              return (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-brand-blue w-4"
                      : "bg-hairline-strong w-1.5"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileSection() {
  return (
    <section id="industries" className="bg-surface-yellow/25 py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 mb-8">
        <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
          Industries We Serve
        </div>
        <h2 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight">
          Enterprise breadth across diverse sectors
        </h2>
      </div>

      {/* Free-swipe snap carousel */}
      <div
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 sm:px-6"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        {industryTiles.map((tile, i) => {
          const Icon = tile.icon;
          return (
            <div
              key={tile.id}
              className="flex-shrink-0 w-[80vw] sm:w-[56vw] md:w-[40vw] snap-center bg-canvas rounded-xl p-xl border border-hairline-soft shadow-subtle flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-hairline flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-blue stroke-[2.2]" />
                    </div>
                    <span className="text-caption font-bold text-muted">{tile.number}</span>
                  </div>
                  <span className={`${tile.accentBg} text-micro font-bold px-2.5 py-1 rounded-full`}>
                    {tile.badge}
                  </span>
                </div>
                <h3 className="font-sans text-heading-4 font-medium text-ink mb-2">
                  {tile.name}
                </h3>
                <p className="font-sans text-body-sm text-steel leading-relaxed">
                  {tile.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-hairline-soft flex items-center justify-between">
                <span className="text-micro font-bold text-steel">
                  {i + 1} / {TOTAL_CARDS}
                </span>
                <span className="text-caption font-bold text-brand-blue">View solutions →</span>
              </div>
            </div>
          );
        })}
        <div className="flex-shrink-0 w-4 sm:w-6" />
      </div>

      {/* Swipe hint */}
      <div className="px-4 sm:px-6 mt-1 flex items-center gap-1.5">
        <span className="text-micro font-medium text-steel">Swipe to explore all sectors</span>
        <span className="text-caption text-brand-blue">→</span>
      </div>
    </section>
  );
}

function DesktopCard({ tile }: { tile: IndustryTile }) {
  const Icon = tile.icon;
  return (
    <div
      className="flex-shrink-0 bg-canvas rounded-xl border border-hairline-soft shadow-subtle hover:shadow-card hover:border-hairline transition-all duration-200 cursor-pointer flex flex-col justify-between"
      style={{ width: `${CARD_WIDTH_PX}px`, padding: "24px" }}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-surface border border-hairline flex items-center justify-center">
              <Icon className="w-5 h-5 text-brand-blue stroke-[2.2]" />
            </div>
            <span className="text-body-sm font-bold text-muted">{tile.number}</span>
          </div>
          <span className={`${tile.accentBg} text-micro font-bold px-2.5 py-1 rounded-full`}>
            {tile.badge}
          </span>
        </div>
        <h3 className="font-sans text-heading-4 font-medium text-ink mb-2">
          {tile.name}
        </h3>
        <p className="font-sans text-body-sm text-steel leading-relaxed">
          {tile.description}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-hairline-soft flex items-center justify-between group">
        <span className="text-caption text-steel group-hover:text-ink transition-colors">
          View solutions
        </span>
        <span className="text-button-md transition-transform group-hover:translate-x-1">→</span>
      </div>
    </div>
  );
}
