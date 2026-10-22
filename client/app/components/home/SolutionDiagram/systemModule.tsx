/**
 * Geometry is measured from the 2000×470 reference diagram canvas.
 * Each module is anchored by its top-left corner; `width` is the card width.
 * Coordinates are converted to percentages at render time so the diagram
 * scales without distortion at every viewport width.
 */
export const DIAGRAM_CANVAS = { width: 2000, height: 470 } as const;

export type ModulePlacement = {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  /** Order in which the card joins the constellation. */
  order: number;
};

export const SYSTEM_MODULES: ModulePlacement[] = [
  { id: 'inventory', label: 'Inventory', x: 858, y: 38, width: 126, order: 0 },
  { id: 'asset-utilization', label: 'Asset Utilization', x: 1257, y: 40, width: 164, order: 1 },
  { id: 'predictive-maintenance', label: 'Predictive Maintenance', x: 468, y: 90, width: 203, order: 2 },
  { id: 'production-planning', label: 'Production Planning', x: 1320, y: 91, width: 185, order: 3 },
  { id: 'fleet-gps', label: 'Fleet & GPS Tracking', x: 348, y: 232, width: 193, order: 4 },
  { id: 'supply-chain', label: 'Supply Chain Logistics', x: 1435, y: 226, width: 206, order: 5 },
  { id: 'batching-dispatch', label: 'Batching & Dispatch', x: 489, y: 348, width: 192, order: 6 },
  { id: 'portfolio-leads', label: 'Portfolio & Leads', x: 1252, y: 383, width: 168, order: 7 },
  { id: 'project-contract', label: 'Project & Contract', x: 845, y: 404, width: 182, order: 8 },
];

/** Central Luna ERP card bounds on the same canvas. */
export const CENTER_CARD = { x: 879, y: 143, width: 243, height: 190 } as const;

/** Curved connectors, drawn from the central card toward each module. */
export const CONNECTOR_PATHS: { id: string; d: string; delay: number; highlight?: boolean }[] = [
  { id: 'inventory', d: 'M 962 145 C 950 120 936 99 921 84', delay: 0 },
  { id: 'asset', d: 'M 1082 160 C 1152 121 1212 96 1257 86', delay: 70, highlight: true },
  { id: 'predictive', d: 'M 879 200 C 800 174 731 140 671 114', delay: 140 },
  { id: 'production', d: 'M 1122 200 C 1200 176 1274 150 1328 130', delay: 210 },
  { id: 'fleet', d: 'M 879 250 C 787 238 641 245 541 254', delay: 280, highlight: true },
  { id: 'supply', d: 'M 1122 250 C 1226 250 1341 249 1435 248', delay: 350 },
  { id: 'batching', d: 'M 940 331 C 861 350 761 361 681 370', delay: 420 },
  { id: 'portfolio', d: 'M 1063 335 C 1135 357 1204 376 1252 398', delay: 490 },
  { id: 'project', d: 'M 962 333 C 952 360 944 381 936 404', delay: 560 },
];

/** Decorative orbits that pass behind the central card. */
export const ORBIT_ELLIPSES = [
  { cx: 1000, cy: 240, rx: 648, ry: 214, rotate: -4 },
  { cx: 1000, cy: 236, rx: 500, ry: 168, rotate: 6 },
  { cx: 1000, cy: 238, rx: 352, ry: 236, rotate: -18 },
] as const;
