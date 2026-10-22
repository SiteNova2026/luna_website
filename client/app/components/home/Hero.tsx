import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import ErpPreview from "./ErpPreview";

export default function Hero() {
  return (
    <section className="luna-hero">
      <div className="luna-disc" aria-hidden="true" />

      <div className="hero-inner">

        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span aria-hidden="true" />
            Luna IT Solutions — Nagercoil, Tamil Nadu, India
          </p>

          <h1 className="hero-title">
            <span>Boost Efficiency</span>
            <span>and Productivity</span>
            <span>with Our</span>
            <span className="hero-title-accent">ERP Solutions</span>
          </h1>

          <p className="hero-description">
            Our team of experts is dedicated to delivering ERP solutions for
            every industry – crafted to meet your unique business needs.
          </p>

          <div className="hero-actions">
            <Link
              href="#solutions"
              className="btn btn-primary"
            >
              We Expertise In
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="#product"
              className="btn btn-secondary"
            >
              See the Product
              <ArrowDownRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <p className="hero-footnote">
            <span aria-hidden="true" />
            A connected system built around your operation.
          </p>
        </div>

        <div className="hero-product" id="product">
          <ErpPreview />
        </div>
          <p className="hero-caption">
            <span aria-hidden="true" />
            One clear view of your operations
          </p>
      </div>

      <div className="hero-pagination" aria-hidden="true"><span>01</span><i />06</div>
    </section>
  );
}
