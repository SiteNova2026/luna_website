"use client";

import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const CONTACT_EMAIL = "lunaerpsolutions@gmail.com";

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
          <p className="contact-eyebrow fs-12px">Start a conversation</p>
          <h2 id="contact-title" className="fs-contact-title">Let’s build it together.</h2>
          <p className="contact-description fs-12px">
            Tell us where your business is headed. We’ll help you find the right way to get there.
          </p>

          <div className="contact-office">
            <p className="contact-label fs-12px">Head Office</p>
            <address className="fs-12px">No 6, Victoria Nagar, Nanjikottai Road,<br />Thanjavur-613006, Tamil Nadu, India.</address>
              <p>
              <strong>GSTIN:</strong> 33AANFL3214C1ZT
            </p>
          </div>

          <div className="contact-direct">
            <a className="fs-12px lowercase" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a className="fs-12px" href="tel:+917708926698">+91 7708926698</a>
             <a className="fs-12px" href="tel:+918428280089">+91 8428280089</a>
          </div>
        </div>

        <div className="contact-form-panel">
          <p className="contact-label fs-12px">Enquiry</p>
          <h3 className="fs-18px">Tell us what you need.</h3>
          <p className="contact-required-note fs-10px">Required fields are marked with <span aria-hidden="true">*</span></p>

          <form className="contact-form" onSubmit={openEnquiryEmail}>
            <div className="contact-form-grid">
              <label className="fs-12px">
                Your Name <span aria-hidden="true">*</span>
                <input autoComplete="name" name="name" placeholder="Name" required />
              </label>
              <label className="fs-12px">
                Email <span aria-hidden="true">*</span>
                <input autoComplete="email" name="email" placeholder="you@company.com" required type="email" />
              </label>
              <label className="contact-form-wide fs-12px">
                Company / Industry <span aria-hidden="true">*</span>
                <input autoComplete="organization" name="company" placeholder="Company name or industry" required />
              </label>
              <label className="contact-form-wide fs-12px">
                How Can We Help? <span aria-hidden="true">*</span>
                <textarea name="message" placeholder="Tell us a little about your requirements" required rows={4} />
              </label>
            </div>

            <div className="contact-submit-row">
              <button className="contact-submit fs-11px" type="submit">
                Send Enquiry <ArrowRight aria-hidden="true" size={15} />
              </button>
              <p className="fs-10px mt-2">Your email app will open with your enquiry ready to send.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}