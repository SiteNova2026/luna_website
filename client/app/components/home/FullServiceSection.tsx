import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Complete ERP Implementation",
    description:
      "We offer end-to-end ERP implementation services, from initial consultation to full-scale deployment. Our experts ensure a smooth transition and provide training to help your team get the most out of your new ERP system.",
  },
  {
    title: "Customization",
    description:
      "Every business is unique, and so are its needs. We provide ERP customization services to tailor the software to your specific requirements, ensuring it aligns perfectly with your business processes.",
  },
  {
    title: "Support & Maintenance",
    description:
      "We believe in long-term partnerships. Our support and maintenance services ensure that your ERP system runs smoothly and efficiently, with minimal downtime.",
  },
  {
    title: "On-site Development",
    description:
      "Need a specific feature or functionality? Our skilled developers can visit your location to develop near you.",
  },
];

export default function FullServiceSection() {
  return (
    <section className="full-service" id="services" aria-labelledby="full-service-title">
      <div className="full-service-inner">
        <div className="full-service-intro">
          <p className="full-service-eyebrow fs-9px">
            From first conversation to what comes next
          </p>
          <h2 id="full-service-title" className="fs-connected-title">Full-Service ERP Agency</h2>
          <p className="full-service-summary fs-13px">
            A practical partner at every stage of your ERP journey.
          </p>
        </div>

        <ol className="full-service-list">
          {services.map((service, index) => (
            <li className="full-service-item" key={service.title}>
              <span className="full-service-number fs-21px" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="full-service-copy">
                {index > 0 ? (
                  <span className="full-service-next fs-8px">
                    Then <ArrowRight size={12} aria-hidden="true" />
                  </span>
                ) : null}
                <h3 className="fs-17px">{service.title}</h3>
                <p className="fs-13px">{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}