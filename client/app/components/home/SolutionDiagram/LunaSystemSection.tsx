"use client";

import type { CSSProperties } from "react";
import { LunaDiagram } from "./LunaDiagram";
import { useInViewReveal } from "./useInViewReveal";
import "../../../styles/components/home/lunaDiagram.scss";

const HEADING_LINES = [
  "One integrated system,",
  "connected across",
  "every process",
];

export function LunaSystemSection() {
  const { ref, armed, revealed } = useInViewReveal<HTMLElement>(0.12);

  return (
    <section
      ref={ref}
      className={`luna-section${armed ? " is-armed" : ""}${revealed ? " is-revealed" : ""}`}
      aria-labelledby="luna-system-heading"
    >
      <section
        className="industries-section"
        id="industries"
        aria-labelledby="industries-title"
      >
        <div className="industries-heading">
          <div>
            <p className="luna-eyebrow fs-luna-eyebrow">Industry-ready. Business-specific.</p>
            <h2 id="industries-title" className="luna-heading fs-luna-title">One integrated system,<br/>
               connected across every process</h2>
          </div>
        </div>
      </section>
      <div className="luna-inner">
        <LunaDiagram />
      </div>
    </section>
  );
}
