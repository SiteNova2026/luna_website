import {
  Box,
  LayoutGrid,
  Factory,
  ArrowUpRight,
  ArrowRight,
  IndianRupee,
  FileText,
  Gauge,
} from "lucide-react";

const nav = [
  { label: "Dashboard", icon: Gauge },
  { label: "Inventory", icon: LayoutGrid, active: true },
  { label: "Production", icon: Factory },
  { label: "Procurement", icon: ArrowUpRight },
  { label: "Dispatch", icon: ArrowRight },
  { label: "Finance", icon: IndianRupee },
  { label: "Reports", icon: FileText },
];

const records = [
  { item: "Alloy Sheet 4mm", location: "Store A · Rack 12", qty: "1,240 kg", status: "In stock" },
  { item: "Bearing 6205-ZZ", location: "Store B · Bin 07", qty: "660 pcs", status: "Reorder" },
  { item: "Hydraulic Oil 68", location: "Store A · Tank 3", qty: "2,100 L", status: "In stock" },
  { item: "Weld Wire 1.2mm", location: "Store C · Rack 02", qty: "310 kg", status: "Low" },
] as const;

const statusClass = {
  "In stock": "in-stock",
  Reorder: "reorder",
  Low: "low",
} as const;

type ErpPreviewProps = {
  chartGradientId?: string;
  ariaLabel?: string;
};

export default function ErpPreview({
  chartGradientId = "lunaFill",
  ariaLabel = "Luna ERP inventory dashboard preview",
}: ErpPreviewProps) {
  return (
    <div className="erp" role="region" aria-label={ariaLabel}>
      <div className="ghost" aria-hidden="true" />

      <div className="window">

        <header className="topbar">
          <div className="brand">
            <span className="logo">
              <Box size={13} />
            </span>
            <strong>Luna ERP</strong>
            <span className="workspace">• Workspace</span>
          </div>
          <div className="team">
            Operations team <span className="avatar">OT</span>
          </div>
        </header>

        <div className="body">
          <aside className="sidebar">
            <ul>
              {nav.map(({ label, icon: Icon, active }) => (
                <li key={label} className={active ? "active" : undefined}>
                  <Icon size={12} />
                  {label}
                </li>
              ))}
            </ul>
            <div className="side-foot">
              <strong>LUNA ERP</strong>
              <span>BUSINESS SYSTEMS</span>
            </div>
          </aside>

          <div className="main">
            <div className="head">
              <div>
                <span className="overline">INVENTORY OVERVIEW</span>
                <h3>Inventory</h3>
              </div>
              <button type="button" className="select">
                This month ▾
              </button>
            </div>

            <div className="stats">
              <div>
                <span>Stock Value</span>
                <strong>
                  ₹4.82 <small>Cr</small>
                </strong>
                <em className="up">↑ +3.1% this week</em>
              </div>
              <div>
                <span>Reorder Alerts</span>
                <strong>
                  4 <small className="critical">critical</small>
                </strong>
                <em>Review stock levels</em>
              </div>
              <div>
                <span>Waste</span>
                <strong>1.4%</strong>
                <em className="up">↓ -0.6% this month</em>
              </div>
            </div>

            <div className="chart">
              <div className="chart-head">
                <strong>Stock movement</strong>
                <span>INVENTORY VALUE</span>
              </div>
              <svg viewBox="0 0 300 70" preserveAspectRatio="none" role="img" aria-label="Stock movement trend line">
                <defs>
                  <linearGradient id={chartGradientId} x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="currentColor" stopOpacity="0.22" />
                      <stop offset="1" stopColor="currentColor" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 52 C 15 40, 25 56, 45 50 S 75 30, 95 44 S 125 56, 145 38 S 175 22, 195 38 S 225 50, 245 28 S 275 24, 300 12 L300 70 L0 70 Z"
                  fill={`url(#${chartGradientId})`}
                />
                <path
                  d="M0 52 C 15 40, 25 56, 45 50 S 75 30, 95 44 S 125 56, 145 38 S 175 22, 195 38 S 225 50, 245 28 S 275 24, 300 12"
                  fill="none"
                    stroke="currentColor"
                  strokeWidth="1.6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="xaxis">
                <span>01 Jun</span>
                <span>08 Jun</span>
                <span>15 Jun</span>
                <span>22 Jun</span>
                <span>30 Jun</span>
              </div>
            </div>

            <div className="records">
              <div className="chart-head">
                <strong>Stock records</strong>
                <span>INVENTORY RECORDS</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ITEM</th>
                    <th>LOCATION</th>
                    <th>QUANTITY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r) => (
                    <tr key={r.item}>
                      <td>{r.item}</td>
                      <td>{r.location}</td>
                      <td>{r.qty}</td>
                      <td>
                        <span className={`pill ${statusClass[r.status]}`}>{r.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}