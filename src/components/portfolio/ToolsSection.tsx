import type { ReactNode } from "react";
import { Reveal, SectionLabel } from "./shared";

const Tile = ({ bg, children }: { bg: string; children: ReactNode }) => (
  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-md ${bg}`}>{children}</span>
);
const Letters = ({ t, c }: { t: string; c: string }) => <span className={`font-sans text-[28px] font-medium ${c}`}>{t}</span>;

const TOOLS: { name: string; tag: string; desc: string; icon: ReactNode }[] = [
  { name: "Adobe Photoshop", tag: "RASTER & PHOTO", desc: "Posters · Photoshop Manipulation · Compositing · Thumbnails", icon: <Tile bg="bg-ps border-2 border-ps-fg/50"><Letters t="Ps" c="text-ps-fg" /></Tile> },
  { name: "Adobe Illustrator", tag: "VECTOR & BRANDING", desc: "Branding · Logos · Vector Graphics", icon: <Tile bg="bg-ai border-2 border-ai-fg/50"><Letters t="Ai" c="text-ai-fg" /></Tile> },
  { name: "Canva", tag: "SOCIAL & QUICK", desc: "Social Media · Promotional Creatives · Quick Designs", icon: <Tile bg="bg-gradient-to-br from-canva-a to-canva-b"><span className="font-script text-[17px] text-primary-foreground">Canva</span></Tile> },
  {
    name: "Figma", tag: "UI & PROTOTYPING", desc: "UI Designs · Layout · Prototyping",
    icon: (
      <Tile bg="bg-ink">
        <span className="grid grid-cols-2 gap-0">
          <span className="h-3 w-3 rounded-l-full bg-fig-1" /><span className="h-3 w-3 rounded-r-full bg-fig-2" />
          <span className="h-3 w-3 rounded-l-full bg-fig-3" /><span className="h-3 w-3 rounded-full bg-fig-4" />
          <span className="h-3 w-3 rounded-full rounded-tr-none bg-fig-5" />
        </span>
      </Tile>
    ),
  },
  { name: "Adobe Lightroom", tag: "PHOTO & COLOR", desc: "Photo Editing · Color Grading · Visual Enhancement", icon: <Tile bg="bg-lr border-2 border-lr-fg/50"><Letters t="Lr" c="text-lr-fg" /></Tile> },
  { name: "Adobe Premiere Pro", tag: "VIDEO & MOTION", desc: "Video Editing · Motion Graphics · Content Creation", icon: <Tile bg="bg-pr border-2 border-pr-fg/50"><Letters t="Pr" c="text-pr-fg" /></Tile> },
];

export function ToolCard({ tool, n }: { tool: (typeof TOOLS)[number]; n: number }) {
  return (
    <article className="relative h-full border border-border bg-paper px-6 pb-8 pt-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-primary hover:shadow-[var(--shadow-blue)]">
      <span className="absolute left-6 right-6 top-0 h-[3px] bg-gradient-to-r from-primary to-blue-soft" />
      <span className="absolute right-5 top-5 text-[12px] tracking-[0.15em] text-muted-foreground">{String(n).padStart(2, "0")}</span>
      <div className="flex items-center gap-4">
        {tool.icon}
        <div className="min-w-0">
          <h3 className="text-[17px] font-semibold text-ink">{tool.name}</h3>
          <p className="text-[9px] font-medium tracking-[0.2em] text-primary">{tool.tag}</p>
        </div>
      </div>
      <div className="mt-6 h-px bg-border" />
      <p className="mt-6 text-[12.5px] text-ink">{tool.desc}</p>
    </article>
  );
}

export function ToolsSection() {
  return (
    <section id="tools" className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-[52px]">
      <div className="absolute left-[27%] top-[90px] hidden md:block" aria-hidden>
        <span className="absolute left-2 top-0 h-2.5 w-2.5 rounded-full border border-primary" />
        <span className="absolute left-[-8px] top-4 h-5 w-5 rounded-full bg-primary" />
        <span className="absolute left-4 top-3 h-4 w-4 rounded-full border border-primary bg-blue-soft" />
      </div>
      <div className="absolute right-12 top-16 hidden grid-cols-7 gap-1.5 md:grid" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-soft" />)}
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal><SectionLabel>04 - PRACTICE</SectionLabel></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-[clamp(3rem,7vw,6.2rem)] font-black leading-none text-ink">Software &amp; Tools</h2>
            <p className="mt-6 text-[14px] text-ink">The creative tools I use to bring ideas to life.</p>
          </Reveal>
        </div>
        <Reveal delay={200} className="w-[250px] self-end text-right">
          <p className="font-hand text-[26px] leading-tight text-ink">Good Tools<br />Better Designs</p>
          <svg viewBox="0 0 250 14" className="mt-1 w-full text-primary" aria-hidden><path d="M2 10C70 -2 170 14 248 6" fill="none" stroke="currentColor" strokeWidth="2" /></svg>
          <p className="mt-2 font-hand text-[17px] text-primary">⟵ My Stack</p>
        </Reveal>
      </div>
      <div className="mt-20 grid max-w-[1250px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="h-full">
            <ToolCard tool={t} n={i + 1} />
          </Reveal>
        ))}
      </div>
      <div className="mt-16 max-w-[1250px] border-t border-border pt-8">
        <div className="flex items-center gap-6">
          <span className="h-px w-11 shrink-0 bg-primary" />
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground sm:text-[11px]">DESIGN TOOLS ARE ONLY THE MEDIUM. IDEAS CREATE THE IMPACT.</p>
          <span className="hidden h-px flex-1 bg-border sm:block" />
        </div>
      </div>
    </section>
  );
}
