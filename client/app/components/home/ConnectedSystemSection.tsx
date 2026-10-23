import { LunaSystemSection } from "./SolutionDiagram/LunaSystemSection";

export default function ConnectedSystemSection() {
  return (
    <section className="connected-section" aria-labelledby="connected-title">
      <div className="connected-heading">
        <p className="connected-eyebrow fs-9px">Everything in context</p>
        <h2 id="connected-title" className="fs-connected-title">
          One integrated system,
          <br />
          connected across every process
        </h2>
      </div>

      <div className="connected-footer">
        <div>
          <p className="connected-sector fs-9px">01 / Manufacturing sector</p>
          <h3 className="fs-17px">Operations, in sync.</h3>
        </div>
        <p className="connected-copy fs-13px">
          Our ERP solutions help businesses manage inventory, production
          planning, supply chain logistics, procurement, and quality control,
          all in one integrated system.
        </p>
      </div>
    </section>
  );
}
