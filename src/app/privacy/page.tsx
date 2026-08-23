import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - ShaniAI Agency",
  description:
    "Read ShaniAI Agency's privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-body-sm text-steel">Last updated: {lastUpdated}</p>
          </div>

          {/* Intro */}
          <div className="bg-surface-yellow rounded-xl p-5 border border-brand-yellow/20 mb-10">
            <p className="text-body-sm text-ink leading-relaxed">
              ShaniAI Agency is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read it carefully.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10 prose-custom">

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">1. Information We Collect</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">We may collect the following categories of information:</p>
              <ul className="space-y-3">
                {[
                  { title: "Contact Information", desc: "Name, email address, phone number, and company name when you fill out a contact form or reach out to us directly." },
                  { title: "Project Information", desc: "Details about your software project, business requirements, or technical challenges that you share with us voluntarily." },
                  { title: "Usage Data", desc: "Basic website usage information such as pages visited, time on site, and referring URLs, collected via standard server logs or analytics tools." },
                  { title: "Communication Records", desc: "Records of emails, messages, or calls when you correspond with us." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-ink">{item.title}:</span>{" "}
                      <span className="text-slate">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">2. How We Use Your Information</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 text-body-md text-slate">
                {[
                  "Respond to your enquiries and project requests",
                  "Provide quotes, project proposals, and technical recommendations",
                  "Deliver our services and communicate project updates",
                  "Improve our website and service quality",
                  "Send relevant updates or follow-ups (which you can opt out of at any time)",
                  "Comply with legal obligations",
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
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">3. Sharing of Information</h2>
              <p className="text-body-md text-slate leading-relaxed">
                We do <strong className="text-ink">not</strong> sell, rent, or trade your personal information to any third parties. We may share information only in the following limited circumstances:
              </p>
              <ul className="space-y-2 text-body-md text-slate mt-4">
                {[
                  "With trusted service providers (e.g., email hosting) who process data solely on our behalf and under strict confidentiality obligations",
                  "When required by law, court order, or governmental authority",
                  "To protect the rights, property, or safety of ShaniAI Agency or others",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">4. Data Security</h2>
              <p className="text-body-md text-slate leading-relaxed">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction. This includes encrypted communications (HTTPS), access controls, and periodic security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">5. Cookies & Tracking</h2>
              <p className="text-body-md text-slate leading-relaxed">
                Our website may use minimal cookies or similar tracking technologies for essential site functionality and basic analytics. We do not use invasive advertising trackers or third-party retargeting pixels. You can disable cookies in your browser settings, though this may affect site functionality.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">6. Your Rights</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 text-body-md text-slate">
                {[
                  "Request access to the personal data we hold about you",
                  "Request correction of inaccurate or incomplete data",
                  "Request deletion of your personal data (subject to legal obligations)",
                  "Withdraw consent for marketing communications at any time",
                  "Lodge a complaint with a relevant data protection authority",
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
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">7. Data Retention</h2>
              <p className="text-body-md text-slate leading-relaxed">
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Contact enquiries are typically retained for up to 2 years. Client project data is retained for the duration of our engagement and up to 5 years thereafter.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">8. Changes to This Policy</h2>
              <p className="text-body-md text-slate leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the &quot;Last updated&quot; date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <div className="border-t border-hairline-soft" />

            <section>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-4">9. Contact Us</h2>
              <p className="text-body-md text-slate leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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
            <Link href="/policy" className="text-body-sm text-brand-blue hover:underline">View Terms of Service →</Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
