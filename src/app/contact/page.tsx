import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - ShaniAI Agency",
  description:
    "Get in touch with ShaniAI Agency. Book a discovery call or reach us directly via phone or email to discuss your custom software and AI project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink flex flex-col">
      <Nav />
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-canvas py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-hairline-soft">
          <div className="max-w-[1280px] mx-auto">
            <div className="inline-flex items-center gap-2 text-micro-uppercase font-bold tracking-wider text-steel uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              Let&apos;s Work Together
            </div>
            <h1 className="font-sans text-heading-2 sm:text-heading-1 font-medium text-ink tracking-tight mb-4 max-w-[720px]">
              Start a conversation with our team
            </h1>
            <p className="font-sans text-subtitle text-slate max-w-[580px] leading-relaxed">
              No sales decks, no runaround. Speak directly with Founder &amp; CEO Soham Pawar and our senior engineering team about your project: we&apos;ll tell you exactly what&apos;s possible.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-canvas">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: Contact Details */}
            <div>
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-8">
                Reach us directly
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <div className="bg-surface rounded-xl p-5 border border-hairline-soft flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-micro-uppercase font-bold text-steel tracking-wider uppercase mb-1">Phone</p>
                    <a href="tel:+918087167841" className="block text-body-md font-medium text-ink hover:text-brand-blue transition-colors">
                      +91 80871 67841
                    </a>
                  </div>
                </div>

                <div className="bg-surface rounded-xl p-5 border border-hairline-soft flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-moss-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-micro-uppercase font-bold text-steel tracking-wider uppercase mb-1">Email</p>
                    <a href="mailto:soham@shaniaiagency.tech" className="text-body-md font-medium text-ink hover:text-brand-blue transition-colors break-all">
                      soham@shaniaiagency.tech
                    </a>
                  </div>
                </div>

                <div className="bg-surface rounded-xl p-5 border border-hairline-soft flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral-light flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-coral-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-micro-uppercase font-bold text-steel tracking-wider uppercase mb-1">Response Time</p>
                    <p className="text-body-md font-medium text-ink">Within 24 hours</p>
                    <p className="text-caption text-steel mt-0.5">Monday – Saturday, 9AM – 7PM IST</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="bg-primary rounded-xl p-6 text-on-primary">
                <h3 className="font-sans text-heading-4 font-medium mb-4">What happens after you reach out?</h3>
                <ol className="space-y-3">
                  {[
                    "We schedule a 30-minute technical discovery call at your convenience",
                    "Founder & CEO Soham Pawar and our senior squad map your requirements and propose an architecture",
                    "You receive a transparent fixed-scope quote with guaranteed timeline",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-body-sm text-white/80">
                      <span className="w-6 h-6 rounded-full bg-brand-yellow text-primary font-bold text-micro flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div id="message" className="scroll-mt-24">
              <h2 className="font-sans text-heading-3 font-medium text-ink mb-8">
                Send us a message
              </h2>
              <ContactForm />
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
