/** Isometric cube mark used by the central Luna ERP card. */
export function LunaCubeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M24 4.5 41 13.9v19.2L24 42.5 7 33.1V13.9z" />
      <path d="M24 24 7 13.9M24 24l17-10.1M24 24v18.5" />
    </svg>
  );
}
