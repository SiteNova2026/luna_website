import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const PREFERS_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

type RevealState = { armed: boolean; revealed: boolean };

export function useInViewReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  const [state, setState] = useState<RevealState>({ armed: false, revealed: false });

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia?.(PREFERS_REDUCED_MOTION).matches ?? false;
    if (reducedMotion || typeof IntersectionObserver === 'undefined') {
      setState({ armed: false, revealed: true });
      return;
    }

    const rect = node.getBoundingClientRect();
    const startsInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

    setState({ armed: true, revealed: false });

    if (startsInView) {
      const frame = requestAnimationFrame(() => setState({ armed: true, revealed: true }));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState({ armed: true, revealed: true });
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, armed: state.armed, revealed: state.revealed };
}

/** True when the visitor asked the OS to reduce motion. */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia?.(PREFERS_REDUCED_MOTION);
    if (!query) return;

    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
