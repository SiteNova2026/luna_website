"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "marketing@lunaerpsolution.com";

function openEnquiryEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const company = String(formData.get("company") ?? "");
  const message = String(formData.get("message") ?? "");
  const subject = `Website enquiry from ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Industry: ${company}`,
    "",
    "Requirements:",
    message,
  ].join("\n");

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-intro">
          <p className="contact-eyebrow">Start a conversation</p>
          <h2 id="contact-title">Let’s build it together.</h2>
          <p className="contact-description">
            Tell us where your business is headed. We’ll help you find the right way to get there.
          </p>

          <div className="contact-office">
            <p className="contact-label">Head Office</p>
            <address>1094, CBH Road, Nagercoil-629001,<br />Tamil Nadu, India.</address>
          </div>

          <div className="contact-office">
            <p className="contact-label">Branch Office</p>
            <address>No 6, Victoria Nagar, Nanjikottai Road,<br />Thanjavur-613006, Tamil Nadu, India.</address>
          </div>

          <div className="contact-direct">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href="tel:+918610133882">+91 8610133882</a>
          </div>
        </div>

        <div className="contact-form-panel">
          <p className="contact-label">Enquiry</p>
          <h3>Tell us what you need.</h3>
          <p className="contact-required-note">Required fields are marked with <span aria-hidden="true">*</span></p>

          <form className="contact-form" onSubmit={openEnquiryEmail}>
            <div className="contact-form-grid">
              <label>
                Your Name <span aria-hidden="true">*</span>
                <input autoComplete="name" name="name" placeholder="Name" required />
              </label>
              <label>
                Email <span aria-hidden="true">*</span>
                <input autoComplete="email" name="email" placeholder="you@company.com" required type="email" />
              </label>
              <label className="contact-form-wide">
                Company / Industry <span aria-hidden="true">*</span>
                <input autoComplete="organization" name="company" placeholder="Company name or industry" required />
              </label>
              <label className="contact-form-wide">
                How Can We Help? <span aria-hidden="true">*</span>
                <textarea name="message" placeholder="Tell us a little about your requirements" required rows={4} />
              </label>
            </div>

            <div className="contact-submit-row">
              <button className="contact-submit" type="submit">
                Send Enquiry <ArrowRight aria-hidden="true" size={15} />
              </button>
              <p>Your email app will open with your enquiry ready to send.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}