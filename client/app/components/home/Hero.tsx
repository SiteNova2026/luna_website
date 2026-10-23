import Link from "next/link";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import ErpPreview from "./ErpPreview";

export default function Hero() {
  return (
    <section className="luna-hero">
      <div className="luna-disc" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-eyebrow fs-11px">
            <span aria-hidden="true" />
            Luna IT Solutions — Tamil Nadu, India
          </p>

          <h1 className="hero-title fs-hero-title">
            <span>Next-Generation ERP</span>
            <span> Powered by AI</span>
            <span>Designed for </span>
            <span className="hero-title-accent">Your Future</span>
          </h1>

          <p className="hero-description fs-15px">
            One intelligent platform. Every business operation. Connected
            without limits.
          </p>

          <div className="hero-actions">
            <Link href="#solutions" className="btn btn-primary">
              We Experience In
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href="#product" className="btn btn-secondary">
              See the Product
              <ArrowDownRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-product" id="product">
          <ErpPreview name='fs-8px'/>
        </div>
      </div>
    </section>
  );
}
