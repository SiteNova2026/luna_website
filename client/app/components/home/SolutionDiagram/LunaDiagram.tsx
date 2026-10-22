'use client';
import '../../../styles/components/home/lunaDiagram.scss';
import type { CSSProperties } from 'react';
import { useRef } from 'react';
import { LunaCubeIcon } from './LunaCubeIcon';
import { useStackedLinks } from './useStackedLink';
import {
  CENTER_CARD,
  CONNECTOR_PATHS,
  DIAGRAM_CANVAS,
  ORBIT_ELLIPSES,
  SYSTEM_MODULES,
} from './systemModule';

const pct = (value: number, base: number) => `${(value / base) * 100}%`;

const MODULE_IDS = SYSTEM_MODULES.map((module) => module.id);

export function LunaDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { stacked, geometry } = useStackedLinks({
    diagramRef,
    hubRef,
    itemRefs,
    ids: MODULE_IDS,
  });

  return (
    <div className="luna-diagram" ref={diagramRef}>
      <svg
        className="luna-connectors luna-connectors--canvas"
        viewBox={`0 0 ${DIAGRAM_CANVAS.width} ${DIAGRAM_CANVAS.height}`}
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <g className="luna-orbits">
          {ORBIT_ELLIPSES.map((orbit, index) => (
            <ellipse
              key={index}
              cx={orbit.cx}
              cy={orbit.cy}
              rx={orbit.rx}
              ry={orbit.ry}
              transform={`rotate(${orbit.rotate} ${orbit.cx} ${orbit.cy})`}
            />
          ))}
        </g>

        <g className="luna-links">
          {CONNECTOR_PATHS.map((connector, index) => (
            <g key={connector.id}>
              <path
                className="luna-link"
                d={connector.d}
                pathLength={1}
                style={{ '--i': index } as CSSProperties}
              />
              {connector.highlight ? (
                <path
                  className="luna-pulse"
                  d={connector.d}
                  pathLength={1}
                  style={{ '--pulse-delay': `${index * 0.7}s` } as CSSProperties}
                />
              ) : null}
            </g>
          ))}
        </g>
      </svg>

      {stacked && geometry ? (
        <svg
          className="luna-connectors luna-connectors--stacked"
          viewBox={`0 0 ${geometry.width} ${geometry.height}`}
          width={geometry.width}
          height={geometry.height}
          aria-hidden="true"
          focusable="false"
        >
          <g className="luna-links">
            <path
              className="luna-link"
              d={geometry.trunk}
              pathLength={1}
              style={{ '--i': 0 } as CSSProperties}
            />
            <path
              className="luna-pulse"
              d={geometry.trunk}
              pathLength={1}
              style={{ '--pulse-delay': '0s' } as CSSProperties}
            />
            {geometry.branches.map((branch, index) => (
              <path
                key={branch.id}
                className="luna-link"
                d={branch.d}
                pathLength={1}
                style={{ '--i': index + 1 } as CSSProperties}
              />
            ))}
          </g>
        </svg>
      ) : null}

      <div
        ref={hubRef}
        className="luna-center luna-anim luna-anim--scale"
        style={
          {
            '--x': pct(CENTER_CARD.x, DIAGRAM_CANVAS.width),
            '--y': pct(CENTER_CARD.y, DIAGRAM_CANVAS.height),
            '--delay': '520ms',
          } as CSSProperties
        }
      >
        <span className="luna-center-icon">
          <LunaCubeIcon className="luna-cube" />
        </span>
        <span className="luna-center-title">Luna ERP</span>
        <span className="luna-center-subtitle">One connected system</span>
      </div>

      <ul className="luna-modules">
        {SYSTEM_MODULES.map((module, index) => (
          <li
            key={module.id}
            ref={(element) => {
              itemRefs.current[index] = element;
            }}
            className="luna-card-slot"
            style={
              {
                '--x': pct(module.x + module.width / 2, DIAGRAM_CANVAS.width),
                '--y': pct(module.y, DIAGRAM_CANVAS.height),
                order: module.order,
              } as CSSProperties
            }
          >
            <div
              className="luna-card luna-anim"
              style={{ '--delay': `${680 + index * 45}ms` } as CSSProperties}
            >
              <span className="luna-dot" aria-hidden="true" />
              <span className="luna-card-label">{module.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
