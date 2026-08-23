"use server";

import { getTursoClient, initContactTable } from "@/lib/turso";
import { Resend } from "resend";
import {
  getUserConfirmationEmailHtml,
  getAdminNotificationEmailHtml,
} from "@/lib/emailTemplates";

export interface ContactState {
  success?: boolean;
  error?: string;
}

export async function submitContactForm(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  try {
    const name = (formData.get("name") as string || "").trim();
    const email = (formData.get("email") as string || "").trim();
    const company = (formData.get("company") as string || "").trim();
    const phone = (formData.get("phone") as string || "").trim();
    const project_type = (formData.get("project_type") as string || "").trim();
    const message = (formData.get("message") as string || "").trim();

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill out all required fields (Name, Email, Message).",
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    // 1. Ensure SQLite / Turso DB Table exists & Save Lead
    await initContactTable();
    const db = getTursoClient();
    const createdAt = new Date().toISOString();

    await db.execute({
      sql: `INSERT INTO contact_submissions (name, email, company, phone, project_type, message, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
      args: [name, email, company, phone, project_type, message, createdAt],
    });

    // 2. Trigger Emails via Resend (only if ENABLE_EMAIL_NOTIFICATIONS is set to "true" AND RESEND_API_KEY is present)
    const isEmailEnabled = process.env.ENABLE_EMAIL_NOTIFICATIONS === "true";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (isEmailEnabled && resendApiKey) {
      const resend = new Resend(resendApiKey);
      const fromEmail =
        process.env.RESEND_FROM_EMAIL ||
        "ShaniAI Agency <onboarding@resend.dev>";
      const notificationEmail =
        process.env.RESEND_NOTIFICATION_EMAIL || "soham@shaniaiagency.tech";

      // Send confirmation email to user
      const userHtml = getUserConfirmationEmailHtml({
        name,
        company,
        projectType: project_type,
        message,
      });

      await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "Thank you for contacting ShaniAI Agency",
        html: userHtml,
      });

      // Send lead notification to ShaniAI admin inbox
      const adminHtml = getAdminNotificationEmailHtml({
        name,
        email,
        phone,
        company,
        projectType: project_type,
        message,
        createdAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      });

      await resend.emails.send({
        from: fromEmail,
        to: [notificationEmail],
        subject: `New Project Inquiry: ${name} (${company || "Individual"})`,
        html: adminHtml,
      });
    } else {
      console.log(
        `[Form Submission] Lead saved to Turso DB. Email dispatch is currently ${
          isEmailEnabled ? "pending RESEND_API_KEY" : "OFF (ENABLE_EMAIL_NOTIFICATIONS=false)"
        }.`
      );
    }

    return { success: true };
  } catch (err: unknown) {
    console.error("Error submitting contact form:", err);
    return {
      success: false,
      error:
        "Failed to submit form. Please try again or email us directly at soham@shaniaiagency.tech.",
    };
  }
}
