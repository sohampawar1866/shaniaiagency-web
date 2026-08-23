import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - ShaniAI Agency",
  description:
    "We are a boutique software & AI engineering studio that builds bespoke digital solutions engineered specifically for your business. Learn about our mission, leadership, and engineering values.",
};

const values = [
  {
    title: "Engineered for your reality",
    description:
      "We don't sell templates. Every project begins with deep discovery: mapping your workflows, constraints, and goals before a single line of code is written.",
    accent: "bg-brand-yellow",
  },
  {
    title: "Senior talent, always",
    description:
      "You work directly with the architects and senior engineers building your product. No junior handoffs, no bloated agency layers, no account managers between you and your team.",
    accent: "bg-teal-light",
  },
  {
    title: "Radical transparency",
    description:
      "Fixed-scope quotes, defined timelines, and milestone-based delivery. You always know exactly what you're getting, when you're getting it, and what it costs.",
    accent: "bg-coral-light",
  },
  {
    title: "You own everything",
    description:
      "100% of your source code, database schema, AI pipelines, and intellectual property is transferred to you. No vendor lock-in, no license fees, no dependency on us to run.",
    accent: "bg-brand-rose",
  },
];

const capabilities = [
  "Custom Web & Mobile Applications",
  "AI Agent Pipelines & LLM Integration",
  "Enterprise Operating Systems",
  "API Architecture & System Design",
  "Full-Stack Engineering (React, Next.js, Node, Python)",
  "Database Design & Data Infrastructure",
  "Cloud Infrastructure & DevOps",
  "Ongoing Managed Support & SLA",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Nav />
      <main className="flex-grow">

        {/* Hero */}
        <section className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-hairline-soft">
          <div className="max-w-[1280px] mx-auto">
            <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Who We Are
            </div>
            <h1 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight mb-6 max-w-[760px]">
              A boutique studio building software that{" "}
              <span className="bg-brand-yellow text-primary px-2 rounded-md -rotate-1 inline-block">actually works</span>{" "}
              for your business
            </h1>
            <p className="font-sans text-subtitle text-slate max-w-[640px] leading-relaxed">
              ShaniAI Agency is a custom software and AI engineering studio. We partner with healthcare operators, fintech founders, retail leaders, and enterprise teams to design, build, and maintain bespoke digital systems: engineered entirely around how your business actually operates.
            </p>
          </div>
        </section>

        {/* Founder & Leadership Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface border-b border-hairline-soft">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Leadership & Vision
              </div>
              <h2 className="font-sans text-heading-2 font-medium text-ink tracking-tight">
                Built by engineers, led with purpose
              </h2>
            </div>

            <div className="bg-canvas rounded-2xl p-6 sm:p-10 border border-hairline shadow-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-brand-yellow/30 border-2 border-brand-yellow flex items-center justify-center text-primary font-bold text-heading-1 mb-4 shadow-subtle">
                  SP
                </div>
                <h3 className="font-sans text-heading-3 font-medium text-ink">
                  Soham Pawar
                </h3>
                <p className="text-body-sm font-semibold text-brand-blue mt-0.5">
                  Founder &amp; CEO, ShaniAI Agency
                </p>
                <div className="mt-4 pt-4 border-t border-hairline-soft w-full flex flex-col gap-1 text-caption text-steel">
                  <span>📍 Pune, Maharashtra, India</span>
                  <a href="mailto:soham@shaniaiagency.tech" className="text-brand-blue hover:underline">
                    soham@shaniaiagency.tech
                  </a>
                  <a href="tel:+918087167841" className="text-ink hover:text-brand-blue transition-colors">
                    +91 80871 67841
                  </a>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-slate text-body-md leading-relaxed">
                <p>
                  &ldquo;At ShaniAI Agency, we founded our studio on a straightforward belief: off-the-shelf software and bloated agency models both fail ambitious businesses. Off-the-shelf SaaS forces companies into rigid boxes, while traditional agencies deliver junior-staffed bloat with opaque billing.&rdquo;
                </p>
                <p>
                  &ldquo;We created ShaniAI Agency to provide a modern alternative: senior-led engineering squads that deliver custom-architected software and AI pipelines with 100% intellectual property transfer, fixed-scope certainty, and dedicated post-launch support.&rdquo;
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-3.5 rounded-xl bg-surface-yellow border border-brand-yellow/30 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-dark flex-shrink-0" />
                    <span className="text-body-sm font-semibold text-primary">Rapid Execution</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-teal-light border border-teal-600/20 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-moss-dark flex-shrink-0" />
                    <span className="text-body-sm font-semibold text-moss-dark">AI-Native Systems</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-pricing-featured border border-brand-blue/20 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0" />
                    <span className="text-body-sm font-semibold text-brand-blue">100% Client IP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Our Mission
              </div>
              <h2 className="font-sans text-heading-2 font-medium text-ink tracking-tight mb-5">
                Replace off-the-shelf limitations with software that fits perfectly
              </h2>
              <p className="text-body-md text-slate leading-relaxed mb-6">
                Generic SaaS platforms force businesses to reshape their processes around someone else&apos;s assumptions. We believe every serious business deserves software that&apos;s built around the way they actually work - not the other way around.
              </p>
              <p className="text-body-md text-slate leading-relaxed">
                Our mission is to make bespoke, AI-powered software development transparent, fast, and accessible to the businesses that need it most.
              </p>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-on-primary">
              <h3 className="font-sans text-heading-3 font-medium mb-6">What we&apos;ve built</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Custom builds delivered" },
                  { value: "4.2x", label: "Avg. efficiency gain" },
                  { value: "99.98%", label: "Managed uptime record" },
                  { value: "24/7", label: "Support availability" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-heading-2 font-bold text-brand-yellow">{stat.value}</div>
                    <div className="text-body-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-canvas">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                How We Work
              </div>
              <h2 className="font-sans text-heading-2 font-medium text-ink tracking-tight">
                The principles behind every build
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className={`${v.accent} rounded-2xl p-6 sm:p-8 border border-black/5`}>
                  <h3 className="font-sans text-heading-3 font-medium text-primary mb-3">{v.title}</h3>
                  <p className="text-body-md text-primary/80 leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-surface">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                Technical Scope
              </div>
              <h2 className="font-sans text-heading-2 font-medium text-ink tracking-tight mb-5">
                What we build
              </h2>
              <p className="text-body-md text-slate leading-relaxed mb-8">
                From AI-powered clinical operating systems to custom fintech dashboards: we cover the full stack, from architecture to deployment to long-term management.
              </p>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-center gap-3 text-body-sm text-ink">
                    <span className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-dark font-bold text-micro">✓</span>
                    </span>
                    {cap}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-canvas rounded-2xl p-6 sm:p-8 border border-hairline-soft shadow-subtle">
              <h3 className="font-sans text-heading-3 font-medium text-ink mb-6">Industries we serve</h3>
              {[
                { name: "Healthcare & Clinical", desc: "EHR systems, patient portals, AI triage pipelines" },
                { name: "Fintech & Finance", desc: "Ledger automation, risk dashboards, compliance tools" },
                { name: "Retail & E-Commerce", desc: "Custom storefronts, inventory AI, logistics engines" },
                { name: "Logistics & Supply Chain", desc: "Dispatch automation, fleet management, tracking" },
                { name: "Enterprise Operations", desc: "Internal tooling, workflow automation, data platforms" },
              ].map((ind, i) => (
                <div key={i} className={`py-4 ${i < 4 ? "border-b border-hairline-soft" : ""}`}>
                  <p className="font-medium text-body-sm text-ink">{ind.name}</p>
                  <p className="text-caption text-steel mt-0.5">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary">
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="font-sans text-heading-2 font-medium text-on-primary tracking-tight mb-4">
              Ready to build something that fits your business perfectly?
            </h2>
            <p className="text-subtitle text-white/60 mb-8 leading-relaxed">
              Book a 30-minute discovery call with Founder &amp; CEO Soham Pawar and our senior engineering squad: no sales pressure, just honest architecture alignment.
            </p>
            <a
              href="/contact#message"
              className="inline-flex items-center justify-center bg-brand-yellow text-primary font-medium text-button-md rounded-full px-8 py-3.5 hover:bg-brand-yellow-deep transition-colors"
            >
              Get in touch →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
