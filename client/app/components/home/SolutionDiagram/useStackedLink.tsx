'use client';

import { useLayoutEffect, useState } from 'react';
import type { RefObject } from 'react';

export type StackedGeometry = {
  width: number;
  height: number;
  /** Connector that leaves the hub and becomes the spine. */
  trunk: string;
  /** One tick per module, each joining the spine to its card. */
  branches: { id: string; d: string }[];
};

type Box = { x: number; y: number; width: number; height: number };

function offsetWithin(el: HTMLElement, container: HTMLElement): Box {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;

  while (node && node !== container) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  return { x, y, width: el.offsetWidth, height: el.offsetHeight };
}

/**
 * Connector geometry for the stacked layouts, where cards sit in a grid instead
 * of the desktop constellation.
 *
 * A single spine leaves the hub: in the one-column layout it hugs the left lane,
 * in the two-column layout it runs down the gutter between both columns. Every
 * tick is derived from the live DOM, so it lands exactly on its card edge at any
 * width and never crosses another card's text.
 */
export function useStackedLinks({
  diagramRef,
  hubRef,
  itemRefs,
  ids,
}: {
  diagramRef: RefObject<HTMLDivElement | null>;
  hubRef: RefObject<HTMLDivElement | null>;
  itemRefs: RefObject<(HTMLLIElement | null)[]>;
  ids: string[];
}) {
  const [stacked, setStacked] = useState(false);
  const [geometry, setGeometry] = useState<StackedGeometry | null>(null);

  useLayoutEffect(() => {
    const query = window.matchMedia('(max-width: 1023px)');
    setStacked(query.matches);

    const onChange = (event: MediaQueryListEvent) => setStacked(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useLayoutEffect(() => {
    if (!stacked) {
      setGeometry(null);
      return;
    }

    const diagram = diagramRef.current;
    const hub = hubRef.current;
    if (!diagram || !hub) return;

    const measure = () => {
      const width = diagram.clientWidth;
      const height = diagram.clientHeight;
      const hubBox = offsetWithin(hub, diagram);
      const cards = itemRefs.current
        .slice(0, ids.length)
        .map((el) => (el ? offsetWithin(el, diagram) : null))
        .filter((box): box is Box => box !== null);

      if (!cards.length || width === 0) return;

      const hubCx = hubBox.x + hubBox.width / 2;
      const hubBottom = hubBox.y + hubBox.height;
      const rowCenters = cards.map((card) => card.y + card.height / 2);
      const firstCenter = rowCenters[0];
      const lastCenter = rowCenters[rowCenters.length - 1];
      const singleColumn = width < 560;

      // One column: the spine sits in the left lane. Two columns: it occupies
      // the gutter, so it can never overlap a card.
      const spineX = singleColumn ? cards[0].x - 17 : hubCx;

      setGeometry({
        width,
        height,
        trunk: `M ${hubCx} ${hubBottom} C ${hubCx} ${hubBottom + 22}, ${spineX} ${firstCenter - 30}, ${spineX} ${firstCenter} L ${spineX} ${lastCenter}`,
        branches: cards.map((card, index) => {
          const centerY = card.y + card.height / 2;
          // End on the card edge nearest the spine so the tick stays visible.
          const targetX =
            singleColumn || card.x + card.width / 2 < spineX
              ? card.x + card.width
              : card.x;
          return {
            id: ids[index],
            d: `M ${spineX} ${centerY} L ${targetX} ${centerY}`,
          };
        }),
      });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(diagram);

    // Re-measure once webfonts settle so every tick stays on its card edge.
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [stacked, diagramRef, hubRef, itemRefs, ids]);

  return { stacked, geometry };
}
