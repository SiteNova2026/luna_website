import Image from "next/image";

const clients = [
  { src: "/images/crd.jpeg", alt: "CRD Infracon Limited" },
  { src: "/images/stem.jpeg", alt: "STEM Group of Company" },
  { src: "/images/astro.jpeg", alt: "Astro Bridge International" },
  { src: "/images/taste.jpeg", alt: "Taste Pizza" },
];

export default function ProofPointsSection() {
  return (
    <section className="proof-points" aria-label="Luna ERP results and clients">
      <div className="proof-points-inner">
       <h2 className="fs-21px text-center">Trusted by</h2>
         
        <div className="proof-clients">
          <ul aria-label="Luna ERP clients">
            {clients.map((client) => (
              <li key={client.alt}>
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={240}
                  height={100}
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