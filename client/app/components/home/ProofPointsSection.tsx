import Image from "next/image";

const metrics = [
  { value: "90%", label: "Satisfaction" },
  { value: "85%", label: "User Experience" },
  { value: "46%", label: "Growth" },
];

const clients = [
  { src: "/images/Image (TCP Limited).png", alt: "TCP Limited" },
  { src: "/images/astro.png", alt: "Astro Bridge International" },
  { src: "/images/taste.png", alt: "Taste Pizza" },
];

export default function ProofPointsSection() {
  return (
    <section className="proof-points" aria-label="Luna ERP results and clients">
      <div className="proof-points-inner">
        <ul className="proof-metrics">
          {metrics.map((metric) => (
            <li className="proof-metric" key={metric.label}>
              <strong className="fs-proof-stat">{metric.value}</strong>
              <span className="fs-11px">{metric.label}</span>
            </li>
          ))}
        </ul>

        <div className="proof-clients">
          <p className="fs-9px">Trusted by</p>
          <ul aria-label="Luna ERP clients">
            {clients.map((client) => (
              <li key={client.alt}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={220}
                  height={80}
                  sizes="(max-width: 600px) 28vw, 220px"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}