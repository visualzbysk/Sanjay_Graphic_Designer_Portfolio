import { useState } from "react";
import { FILTERS, filterProjects, type Category, type Project, type Shape } from "@/data/portfolio";
import { CurveArrow, Reveal, SectionLabel } from "./shared";

// Card widths + aspect ratios taken from the reference grids.
const SHAPE: Record<Shape, { w: string; aspect: string }> = {
  poster: { w: "w-[calc(50%-0.75rem)] sm:w-[150px]", aspect: "aspect-[150/214]" },
  thumb: { w: "w-full sm:w-[250px]", aspect: "aspect-[250/140]" },
  brand: { w: "w-full sm:w-[250px]", aspect: "aspect-[250/166]" },
  social: { w: "w-full sm:w-[300px]", aspect: "aspect-[300/124]" },
  print: { w: "w-full sm:w-[299px]", aspect: "aspect-[299/199]" },
};
const GAP: Record<Category | "all", string> = {
  all: "gap-x-6 gap-y-8",
  posters: "gap-x-6 gap-y-10 lg:gap-x-[55px]",
  flyers: "gap-x-6 gap-y-10 lg:gap-x-[55px]",
  thumbnails: "gap-x-6 gap-y-10 lg:gap-x-[55px]",
  branding: "gap-x-6 gap-y-10 lg:gap-x-[55px]",
  social: "gap-x-6 gap-y-10 lg:gap-x-[45px]",
  print: "gap-x-6 gap-y-10 lg:gap-x-[55px]",
};

export function PortfolioFilters({ value, onChange }: { value: Category | "all"; onChange: (v: Category | "all") => void }) {
  return (
    <div role="tablist" aria-label="Portfolio categories" className="flex flex-wrap gap-3 lg:gap-[30px]">
      {FILTERS.map((f) => {
        const on = f.value === value;
        return (
          <button
            key={f.value}
            role="tab"
            aria-selected={on}
            onClick={() => onChange(f.value)}
            className={`h-11 rounded-full px-5 text-[15px] font-medium transition-colors duration-300 lg:h-[50px] lg:px-[33px] lg:text-[19px] ${on ? "bg-primary text-primary-foreground" : "bg-pill text-ink hover:bg-blue-soft"}`}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}

export function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const s = SHAPE[project.shape];
  return (
    <figure className={`group ${s.w}`} style={{ "--i": index } as React.CSSProperties}>
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className={`block w-full object-cover transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.04] ${s.aspect}`}
        />
      </div>
      <figcaption className="mt-3 text-[14px] font-semibold leading-snug text-ink">
        {String(index + 1).padStart(2, "0")} – {project.title}
      </figcaption>
    </figure>
  );
}

export function PortfolioSection() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const items = filterProjects(filter);
  return (
    <section id="works" className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-[52px]">
      <div className="absolute right-6 top-24 hidden w-40 md:block lg:right-16">
        <p className="rotate-[10deg] font-marker text-[18px] leading-[1.1] text-primary">IDEAS DESIGNED DIFFERENTLY</p>
        <CurveArrow className="ml-6 mt-2 h-16 w-16 rotate-[15deg] text-primary" />
      </div>
      <Reveal><SectionLabel>03 - PORTFOLIO</SectionLabel></Reveal>
      <Reveal delay={100}>
        <h2 className="mt-4 font-brush text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95] text-ink">SELECTED WORKS</h2>
        <p className="mt-6 max-w-[520px] text-[14px] leading-[1.75] text-ink">
          A collection of designs created for digital media, entertainment, branding, and promotional content.
        </p>
      </Reveal>
      <Reveal delay={200} className="mt-8">
        <PortfolioFilters value={filter} onChange={setFilter} />
      </Reveal>
      <div key={filter} className={`grid-in mt-12 flex min-h-[500px] flex-wrap items-start ${GAP[filter]}`}>
        {items.map((p, i) => (
          <PortfolioCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
