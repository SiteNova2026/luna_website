const reasons = [
  {
    title: "WhatsApp Integration",
    description: "Connect with your customers seamlessly through WhatsApp integration.Customer enquiries, notifications, order updates, and business communication.",
  },
  {
    title: "Email Integration",
    description: "Automated emails, quotations, invoices, reminders, and internal notifications.",
  },
  {
    title: "Social Media Integration",
    description: "Lead capture, campaign workflows, and customer engagement where supported.",
  },
  {
    title: "GPS & Fleet Tracking",
    description: "Vehicle locations, trip monitoring, route visibility, and fleet operations.",
  },
  {
    title: "Biometric Systems",
    description: "Attendance, employee time tracking, and workforce management.",
  },
  {
    title: "Payment & Banking Integration",
    description: "Supported payment gateways, transaction workflows, and financial data exchange.",
  },
  {
    title: "Barcode, QR Code & IoT",
    description: "Product identification, stock operations, connected devices, and equipment data.",
  },
  {
    title: "Third-Party APIs",
    description: "Connect external software, websites, customer portals, e-commerce platforms, and cloud applications.",
  },
  {
    title: "Custom Integrations",
    description: "Build connections based on your business processes and technical requirements.",
  }

];

export default function WhyChooseSection() {
  return (
    <section className="why-luna" id="why-luna" aria-labelledby="why-luna-title">
      <div className="why-luna-inner">
        <div className="why-luna-intro">
          <p></p>
          <h2 id="why-luna-title" className="fs-connected-title">
           Seamless Integration. One <span className="hero-title-accent">Connected Ecosystem</span>
          </h2>
          <p className="why-luna-summary fs-13px">
            Our team consists of certified experts with years of experience.
          </p>
        </div>

        <ol className="why-luna-list">
          {reasons.map((reason, index) => (
            <li className="why-luna-item" key={reason.title}>
              <span className="why-luna-number fs-12px" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="why-luna-copy">
                <h3 className="fs-17px">{reason.title}</h3>
                <p className="fs-13px">{reason.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}