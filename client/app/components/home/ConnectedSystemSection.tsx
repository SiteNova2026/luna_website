import { LunaSystemSection } from "./SolutionDiagram/LunaSystemSection";

export default function ConnectedSystemSection() {
  return (
    <section className="connected-section" aria-labelledby="connected-title">
      <div className="connected-heading">
        <p>Everything in context</p>
        <h2 id="connected-title">
          One integrated system,
          <br />
          connected across every process
        </h2>
      </div>

      <div className="connected-footer">
        <div>
          <p>01 / Manufacturing sector</p>
          <h3>Operations, in sync.</h3>
        </div>
        <p>
          Our ERP solutions help businesses manage inventory, production
          planning, supply chain logistics, procurement, and quality control,
          all in one integrated system.
        </p>
      </div>
    </section>
  );
}
