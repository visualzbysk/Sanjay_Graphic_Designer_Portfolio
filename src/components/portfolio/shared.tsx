import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Adds is-visible once the element enters the viewport (fires once). */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "is-visible" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[13px] font-bold tracking-[0.2em] text-primary sm:text-[15px]">
      <span>{children}</span>
      <span className="h-px w-20 bg-primary" />
    </div>
  );
}

export const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`arrow ${className}`} width="16" height="8" viewBox="0 0 16 8" fill="none" aria-hidden>
      <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Outline 5-point star used across the decorations. */
export function Star({ className = "", style, filled = false }: { className?: string; style?: CSSProperties; filled?: boolean }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" aria-hidden>
      <path
        d="M20 2l4.6 12.2L38 15l-10.4 8.4L31 37 20 29.4 9 37l3.4-13.6L2 15l13.4-.8z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 3.2}
        strokeLinejoin="miter"
      />
      {!filled && <path d="M20 12l2 6h6l-5 3.6 2 6.4-5-3.8-5 3.8 2-6.4-5-3.6h6z" fill="none" stroke="currentColor" strokeWidth="2.2" />}
    </svg>
  );
}

export function CurveArrow({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <path d="M64 4c4 30-16 54-52 58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 54l-9 8 11 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Underline({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={`stroke ${className}`} style={style} viewBox="0 0 500 70" fill="none" aria-hidden>
      <path d="M4 66C150 18 330 2 496 6" pathLength={1} stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Plays CSS keyframes when the section enters view (once). */
export function usePlayOnView<T extends HTMLElement>() {
  const { ref, seen } = useInView<T>(0.3);
  return { ref, cls: seen ? "play" : "idle" };
}
