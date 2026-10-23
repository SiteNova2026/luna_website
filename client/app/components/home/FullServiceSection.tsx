const services = [
  {
    title: "Business-Focused Technology",
    description:
      "We start by understanding your processes and challenges before identifying the right digital solution.",
  },
  {
    title: "Connected Operations",
    description:
      "Bring departments, applications, devices, and information together for better coordination.",
  },
  {
    title: "Intelligent Innovation",
    description:
      "Explore AI-assisted insights, automation, analytics, and smarter workflows.",
  },
   {
    title: "Visual Clarity",
    description:
      "Use interactive 2D and 3D visualization to understand complex business environments and processes.",
  },
   {
    title: "Flexible & Scalable Solutions",
    description:
      "Build a technology foundation that can adapt as your business expands and its requirements evolve.",
  },
   {
    title: "Integration Without Unnecessary Complexity",
    description:
      "Connect compatible systems and reduce information gaps between your business tools.",
  }
];

export default function FullServiceSection() {
  return (
    <section
      className="full-service"
      id="services"
      aria-labelledby="full-service-title"
    >
      <div className="full-service-inner">
        <div className="full-service-intro">
          <h2 id="full-service-title" className="fs-connected-title">
            Why <span className="hero-title-accent">Luna</span> ERP Solutions?
          </h2>
          <p className="full-service-summary fs-13px">
            Business-Focused Technology
          </p>
          <p className="full-service-summary fs-13px">
            We start by understanding your processes and challenges before identifying the right digital solution.
          </p>
          <p className="full-service-summary fs-13px">
            Our approach combines industry knowledge with innovative technology to streamline operations, improve productivity, and support better decision-making. From implementation to ongoing support, we focus on delivering practical solutions that grow with your business. With Luna ERP Solutions, you gain more than a technology provider—you gain a trusted partner in your digital transformation journey.
            </p>
        </div>

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
