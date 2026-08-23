"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  if (state?.success) {
    return (
      <div className="bg-teal-light/50 border border-teal-600/30 rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-teal-600 text-on-primary flex items-center justify-center mx-auto shadow-subtle">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="font-sans text-heading-3 font-medium text-ink">
          Message Received!
        </h3>
        <p className="text-body-md text-slate max-w-[440px] mx-auto leading-relaxed">
          Thank you for reaching out. Founder &amp; CEO Soham Pawar and our senior engineering team will review your project details and get back to you within 24 hours.
        </p>
        <div className="pt-2">
          <a
            href="/contact"
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-1.5 text-body-sm font-medium text-brand-blue hover:underline"
          >
            Send another message →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div className="p-4 rounded-xl bg-coral-light/60 border border-coral-dark/30 text-coral-dark text-body-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <span>{state.error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-caption-bold text-ink mb-1.5">
            Full Name <span className="text-coral-dark">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm placeholder:text-muted focus:outline-none focus:border-brand-blue transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-company" className="block text-caption-bold text-ink mb-1.5">
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm placeholder:text-muted focus:outline-none focus:border-brand-blue transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-caption-bold text-ink mb-1.5">
          Email Address <span className="text-coral-dark">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm placeholder:text-muted focus:outline-none focus:border-brand-blue transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-caption-bold text-ink mb-1.5">
          Phone Number
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm placeholder:text-muted focus:outline-none focus:border-brand-blue transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-project" className="block text-caption-bold text-ink mb-1.5">
          Project Type
        </label>
        <select
          id="contact-project"
          name="project_type"
          className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm focus:outline-none focus:border-brand-blue transition-colors"
        >
          <option value="">Select a category</option>
          <option value="custom-software">Custom Software Build</option>
          <option value="ai-solutions">AI Agent / LLM Solution</option>
          <option value="full-stack-app">Full-Stack Application</option>
          <option value="ongoing-support">Ongoing Support & Maintenance</option>
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-caption-bold text-ink mb-1.5">
          Tell us about your project <span className="text-coral-dark">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="Describe what you're trying to build, the problem you're solving, and your timeline if known..."
          className="w-full px-4 py-3 rounded-lg border border-hairline-soft bg-surface text-ink text-body-sm placeholder:text-muted focus:outline-none focus:border-brand-blue transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full inline-flex items-center justify-center bg-primary text-on-primary font-medium text-button-md rounded-full py-3.5 shadow-subtle hover:bg-charcoal transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed gap-2"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending message...</span>
          </>
        ) : (
          <span>Send message →</span>
        )}
      </button>

      <p className="text-caption text-steel text-center">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</Link>
        {" "}and{" "}
        <Link href="/policy" className="text-brand-blue hover:underline">Terms of Service</Link>.
      </p>
    </form>
  );
}
