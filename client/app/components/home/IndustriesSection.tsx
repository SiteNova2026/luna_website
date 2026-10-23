import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const industries = [
  {
    title: "Manufacturing Sector",
    image: "/images/manufactor.png",
    alt: "Automated manufacturing line welding a metal component",
    description: "The manufacturing industry relies on precision, efficiency, and seamless coordination between different processes. Our ERP solutions help businesses manage inventory, production planning, supply chain logistics, procurement, and quality control, all in one integrated system. With real-time data insights and automation, we help manufacturers reduce waste, minimize downtime, and enhance productivity.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: "Ready Mix Concrete (RMC)",
    image: "/images/concrete.png",
    alt: "Ready mix concrete plant and delivery truck at sunset",
    description: "Managing an RMC plant requires accurate material handling, efficient production processes, and seamless dispatching. Our Luna ERP system ensures that batching, delivery schedules, fleet management, and raw material procurement are all synchronized for optimum efficiency. With GPS tracking and automated reporting, you can monitor batch quality, vehicle movement, and customer deliveries in real time.",
    features: ["Batching", "Delivery Schedules", "Fleet Management", "GPS Tracking", "Automated Reporting"],
  },
  {
    title: "Crusher Plant",
    image: "/images/plant.png",
    alt: "Crusher plant conveyor belts moving aggregate through a quarry",
    description: "The crushing industry depends on robust equipment, proper inventory management, and cost-effective production. Our ERP solutions assist crusher plants in tracking raw materials, monitoring equipment performance, managing workforce schedules, and optimizing output capacity. We also provide predictive maintenance solutions to reduce unexpected breakdowns and keep operations running smoothly.",
    features: ["Raw Materials", "Equipment Performance", "Workforce Schedules", "Predictive Maintenance"],
  },
  {
    title: "Machinery",
    image: "/images/machinery.png",
    alt: "Close-up of precision industrial machinery gears",
    description: "From heavy equipment manufacturers to rental businesses, our ERP software helps machinery companies track asset utilization, maintenance schedules, spare parts inventory, and procurement cycles. With integrated financial and operational data, businesses can optimize their investment, reduce downtime, and increase profitability.",
    features: ["Asset Utilization", "Maintenance Schedules", "Spare Parts Inventory", "Procurement Cycles"],
  },
  {
    title: "Construction",
    image: "/images/construction.png",
    alt: "Large construction site with cranes building an elevated structure",
    description: "Construction projects involve multiple stakeholders, complex workflows, and strict deadlines. Our ERP solutions provide real-time project tracking, budgeting tools, labor management, material procurement, and contract management. Whether you're handling small projects or large infrastructure developments, our technology ensures on-time project completion, cost control, and enhanced collaboration.",
    features: ["Project Tracking", "Budgeting Tools", "Labor Management", "Material Procurement", "Contract Management"],
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section" id="industries" aria-labelledby="industries-title">
      <div className="industries-heading">
        <div>
          <p className="industries-eyebrow fs-9px">Industry-ready. Business-specific.</p>
          <h2 id="industries-title" className="fs-industries-title">Industries we serve</h2>
        </div>
        <p className="industries-sub fs-13px">One flexible platform, built to meet the real demands of your industry.</p>
      </div>

      <div className="industry-list">
        {industries.map((industry, index) => (
          <article className={`industry-row ${index % 2 === 1 ? "industry-row-reverse" : ""}`} key={industry.title}>
            <div className="industry-image">
              <Image src={industry.image} alt={industry.alt} fill sizes="(max-width: 767px) 100vw, 42vw" />
              <span className="industry-index fs-10px">{String(index + 1).padStart(2, "0")} / 06</span>
            </div>
            <div className="industry-copy">
              <p className="industry-number fs-9px">{String(index + 1).padStart(2, "0")}<i /></p>
              <h3 className="fs-industry-title">{industry.title}</h3>
              <p className="industry-description fs-12px">{industry.description}</p>
              <ul className="industry-features">
                {industry.features.map((feature) => (
                  <li key={feature} className="fs-10px"><Check size={10} aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <Link href="#contact" className="industry-link fs-12px">
                Discuss your requirements <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}