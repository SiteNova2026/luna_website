import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const industries = [
  {
    title: " Manufacturing Industry",
    image: "/images/manufacturing_industry.png",
    alt: "Automated manufacturing line welding a metal component",
    description: "We provide customized Manufacturing ERP solutions to manage the complete production lifecycle, from raw material procurement to finished goods delivery.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: "Construction Industry",
    image: "/images/construction_industry.png",
    alt: "Ready mix concrete plant and delivery truck at sunset",
    description: "Our Construction ERP software helps contractors, builders, and infrastructure companies manage projects, resources, costs, and site activities from one centralized platform.",
    features: ["Batching", "Delivery Schedules", "Fleet Management", "GPS Tracking", "Automated Reporting"],
  },
  {
    title: "Machinery & Equipment Management",
    image: "/images/machinery_equipment_management.png",
    alt: "Crusher plant conveyor belts moving aggregate through a quarry",
    description: "Manage machinery sales, rentals, servicing, spare parts, and equipment utilization through customized software built around your business model.",
    features: ["Raw Materials", "Equipment Performance", "Workforce Schedules", "Predictive Maintenance"],
  },
  {
    title: " Fleet & Transport Management",
    image: "/images/fleet_transport_management.jpg",
    alt: "Close-up of precision industrial machinery gears",
    description: "Our Fleet Management ERP helps businesses monitor vehicles, transportation expenses, trips, maintenance, and fleet performance.",
    features: ["Asset Utilization", "Maintenance Schedules", "Spare Parts Inventory", "Procurement Cycles"],
  },
  {
    title: "Ready-Mix Concrete (RMC) Industry",
    image: "/images/ready_mix_concrete.png",
    alt: "Large construction site with cranes building an elevated structure",
    description: "We develop specialized RMC software to coordinate concrete production, batching, delivery, fleet operations, and customer billing.",
    features: ["Project Tracking", "Budgeting Tools", "Labor Management", "Material Procurement", "Contract Management"],
  },
  {
    title: "Crusher, Quarry & Mining Industry",
    image: "/images/crusher_quarry_mining_industry.png",
    alt: "Automated manufacturing line welding a metal component",
    description: "Our industry-specific ERP solutions help quarry operators and mining businesses control production, material movement, machinery, and sales.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: "Wholesale & Distribution",
    image: "/images/wholesale_distribution.jpg",
    alt: "Automated manufacturing line welding a metal component",
    description: "Simplify bulk purchasing, inventory control, distribution, and financial operations with a customized Wholesale ERP system.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: "Retail Shop & POS Management",
    image: "/images/retail_shop_pos_management.jpg",
    alt: "Automated manufacturing line welding a metal component",
    description: "Our Retail ERP and Point of Sale solutions help retailers manage daily sales, stock levels, billing, and customer relationships efficiently.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: " Hotel & Residency Management",
    image: "/images/hotel_residency_management.jpg",
    alt: "Automated manufacturing line welding a metal component",
    description: "We offer customized Hotel Management Software to streamline reservations, room operations, guest services, and billing.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
  },
  {
    title: "Restaurant & Food Service Industry",
    image: "/images/restaurant_management.jpg",
    alt: "Automated manufacturing line welding a metal component",
    description: "Our Restaurant Management Software helps food businesses manage orders, kitchen operations, billing, inventory, and business performance.",
    features: ["Inventory", "Production Planning", "Supply Chain Logistics", "Procurement", "Quality Control"],
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
              <span className="industry-index fs-10px">{String(index + 1).padStart(2, "0")} / 10</span>
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