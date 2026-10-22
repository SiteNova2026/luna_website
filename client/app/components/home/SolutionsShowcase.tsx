import ErpPreview from "./ErpPreview";

const modules = ["Inventory", "Dispatch", "Production", "Finance"];

export default function SolutionsShowcase() {
  return (
    <section className="solutions-showcase" id="solutions" aria-labelledby="solutions-title">
      <div className="solutions-showcase-inner">
        <div className="solutions-showcase-heading">
          <div>
            <p className="solutions-showcase-eyebrow">One product, every module</p>
            <h2 id="solutions-title">Best ERP Solutions for Your Business</h2>
          </div>
          <p className="solutions-showcase-copy">
            All in one integrated system, with real-time data insights and automation.
            Switch modules without leaving Luna.
          </p>
        </div>

        <ul className="solutions-showcase-modules" aria-label="Luna ERP modules">
          {modules.map((module) => (
            <li key={module}>{module}</li>
          ))}
        </ul>

        <div className="solutions-showcase-preview">
          <ErpPreview
            chartGradientId="lunaSolutionsFill"
            ariaLabel="Luna ERP integrated inventory dashboard"
          />
        </div>
      </div>
    </section>
  );
}