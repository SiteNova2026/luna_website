const services = [
  {
    title: "AI-Powered Intelligence",
    description:
      "Transform business data into actionable insights with intelligent analytics, smart reporting, and AI-assisted decision-making.",
  },
  {
    title: 'Industry-Specific ERP',
    description:
      "Manage finance, purchasing, sales, inventory, manufacturing, projects, HR, and business operations through a unified ERP platform tailored to your workflows.",
  },
  {
    title: "Interactive 2D & 3D Visualization",
    description:
      "Visualize factory layouts, machinery, equipment, production processes, construction projects, and business environments through interactive digital designs",
  },
  {
    title: "Intelligent Automation",
    description:
      "Simplify repetitive tasks, automate approvals and notifications, reduce manual work, and improve operational efficiency.",
  },
  {
    title: "Real-Time Business Visibility",
    description:
      "Connect essential business functions through centralized data, dashboards, reporting, and performance monitoring.",
  },{
    title:'Custom Software & API Integration',
    description:'Connect your ERP with existing business applications, external platforms, smart devices, and third-party systems to create seamless digital workflows.'
  }
];
export default function ConnectedSystemSection() {

  return (
    <section className="connected-section" aria-labelledby="connected-title">
      <div className="connected-heading">
        <h2 id="connected-title" className="fs-connected-title">
          Smart ERP Solutions for a <span className='hero-title-accent'>Smarter Business</span> 
        </h2>
        <p className="mb-2">We deliver flexible, industry-focused digital solutions designed around your business requirements.</p>
      </div>

      <div className="mt-3">
           <ol className="full-service-list">
          {services.map((service, index) => (
            <li className="full-service-item" key={service.title}>
              <span className="full-service-number fs-21px" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="full-service-copy">
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
