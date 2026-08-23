import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - ShaniAI Agency",
  description:
    "Read ShaniAI Agency's terms of service. Understand the terms governing our software development, AI engineering, and managed support engagements.",
};

export default function PolicyPage() {
  const lastUpdated = "23 August 2026";

  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Nav />
      <main className="flex-grow py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mx-auto">

          {/* Header */}
          <div className="mb-10 pb-8 border-b border-hairline-soft">
            <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Legal
            </div>
            <h1 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-body-sm text-steel">Last updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="bg-surface-yellow rounded-xl p-5 border border-brand-yellow/20 mb-10">
            <p className="text-body-sm text-ink leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the ShaniAI Agency website and your engagement with our services. By accessing our website or entering into a service agreement with us, you agree to be bound by these Terms. Please read them carefully.
            </p>
          </div>

          <div className="space-y-10">

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">1. Services</h2>
              <p className="text-body-md text-slate leading-relaxed">
                ShaniAI Agency provides bespoke software development, AI solution engineering, full-stack application development, and ongoing managed support services (&quot;Services&quot;). The specific scope, deliverables, timelines, and pricing for each engagement are defined in a separate written Statement of Work (&quot;SOW&quot;) or project agreement mutually agreed upon by both parties.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">2. Acceptance of Terms</h2>
              <p className="text-body-md text-slate leading-relaxed">
                By using our website or engaging our services, you confirm that you are at least 18 years of age, have the legal authority to enter into agreements on behalf of yourself or your organization, and have read and agree to these Terms. If you do not agree, please discontinue use of our website and services immediately.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">3. Intellectual Property</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">
                Upon receipt of full payment for a project:
              </p>
              <ul className="space-y-3 text-body-md text-slate">
                {[
                  "All custom source code, database schemas, AI model configurations, and deliverables created specifically for your project are transferred to you in full.",
                  "You retain 100% intellectual property ownership of all bespoke work product developed under your project agreement.",
                  "ShaniAI Agency retains ownership of any pre-existing proprietary tools, frameworks, or libraries that were used to build your solution, but grants you a perpetual, royalty-free license to use them as integrated into your product.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-blue font-bold flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">4. Payment Terms</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">
                Payment terms are specified in each project&apos;s SOW. Standard terms include:
              </p>
              <ul className="space-y-2 text-body-md text-slate">
                {[
                  "A deposit (typically 30–50%) is required before project commencement",
                  "Milestone-based payments are due as outlined in the SOW",
                  "Final payment is due upon delivery and acceptance of final deliverables",
                  "Late payments may incur a 1.5% monthly interest charge after a 14-day grace period",
                  "All fees are in Indian Rupees (INR) unless otherwise specified in the SOW",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">5. Project Changes & Scope</h2>
              <p className="text-body-md text-slate leading-relaxed">
                Any changes to the agreed project scope, timeline, or deliverables must be documented in a written Change Order and agreed upon by both parties before work begins. Changes may result in adjustments to project cost and timeline. We work hard to define scope clearly upfront during the discovery phase to minimize change orders during development.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">6. Confidentiality</h2>
              <p className="text-body-md text-slate leading-relaxed">
                Both parties agree to keep confidential all non-public business information, technical specifications, and proprietary data shared during the course of the engagement. This confidentiality obligation survives the termination of any project agreement for a period of three (3) years. We take client confidentiality extremely seriously and operate under strict non-disclosure practices.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">7. Warranties & Limitation of Liability</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">
                We warrant that our services will be performed with reasonable skill and care in accordance with the agreed specifications. However:
              </p>
              <ul className="space-y-2 text-body-md text-slate">
                {[
                  "We do not warrant that software will be entirely error-free, as all complex systems may contain bugs that are discovered post-launch",
                  "Our liability is limited to the total fees paid for the specific project engagement",
                  "We are not liable for indirect, incidental, or consequential damages arising from your use of our deliverables",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral-light mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">8. Termination</h2>
              <p className="text-body-md text-slate leading-relaxed">
                Either party may terminate a project engagement with 30 days written notice. In the event of termination, you are responsible for payment of all work completed to date at the agreed rate. ShaniAI Agency will deliver all completed work product upon receipt of outstanding payments.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">9. Governing Law</h2>
              <p className="text-body-md text-slate leading-relaxed">
                These Terms are governed by the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts of Pune, Maharashtra, India.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">10. Contact</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">
                For any questions regarding these Terms, please contact us:
              </p>
              <div className="bg-surface rounded-xl p-5 border border-hairline-soft space-y-2">
                <p className="text-body-sm text-ink font-medium">ShaniAI Agency</p>
                <p className="text-body-sm text-slate">
                  Email:{" "}
                  <a href="mailto:soham@shaniaiagency.tech" className="text-brand-blue hover:underline">
                    soham@shaniaiagency.tech
                  </a>
                </p>
                <p className="text-body-sm text-slate">Phone: +91 80871 67841</p>
              </div>
            </section>

          </div>

          {/* Footer nav */}
          <div className="mt-12 pt-8 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-body-sm text-brand-blue hover:underline">← Back to home</Link>
            <Link href="/privacy" className="text-body-sm text-brand-blue hover:underline">View Privacy Policy →</Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
