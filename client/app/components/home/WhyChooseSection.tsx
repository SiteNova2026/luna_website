import Link from "next/link";
import { ArrowRight } from "lucide-react";

const reasons = [
  {
    title: "Customized Solutions",
    description: "We tailor our ERP solutions to meet your specific business needs.",
  },
  {
    title: "Local Presence",
    description:
      "As a company based in India, we offer solutions that are relevant to the local market.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize our clients' needs and work closely with them to ensure their success.",
  },
  {
    title: "Continuous Support",
    description:
      "Our relationship with clients extends beyond implementation, with ongoing support and maintenance services.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="why-luna" id="why-luna" aria-labelledby="why-luna-title">
      <div className="why-luna-inner">
        <div className="why-luna-intro">
          <p className="why-luna-eyebrow">Why choose Luna ERP?</p>
          <h2 id="why-luna-title">
            Expertise in ERP, Customization and Development
          </h2>
          <p className="why-luna-summary">
            Our team consists of certified experts with years of experience.
          </p>
          <Link className="why-luna-cta btn btn-primary" href="#contact">
            Talk to our team
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ol className="why-luna-list">
          {reasons.map((reason, index) => (
            <li className="why-luna-item" key={reason.title}>
              <span className="why-luna-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="why-luna-copy">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
              <ArrowRight className="why-luna-arrow" size={17} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}