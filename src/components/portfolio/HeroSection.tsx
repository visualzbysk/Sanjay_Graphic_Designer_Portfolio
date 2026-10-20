import { img } from "@/data/portfolio";
import { Arrow, CurveArrow, Reveal, scrollToId } from "./shared";

const ART = [
  { src: "poster-music-poster", label: "MUSIC POSTER", cls: "left-[1%] top-[17%] w-[33%] -rotate-[9deg] z-10" },
  { src: "poster-manipulation", label: "PHOTO MANIPULATION", cls: "left-[34%] top-[1%] w-[38%] rotate-[10deg] z-20" },
  { src: "poster-live-concert", label: "LIVE CONCERT POSTER", cls: "left-[31%] top-[47%] w-[36%] -rotate-[8deg] z-30" },
  { src: "poster-branding-poster", label: "BRANDING POSTER", cls: "left-[61%] top-[42%] w-[32%] rotate-[14deg] z-20" },
];

function Collage() {
  return (
    <div className="relative mx-auto aspect-[620/600] w-full max-w-[620px]">
      {/* royal-blue geometric backing */}
      <svg className="float-shape absolute inset-0 h-full w-full text-primary" viewBox="0 0 620 600" aria-hidden>
        <path d="M200 120 L400 40 L470 40 L430 160 L300 300 L240 590 L160 510 L140 400 Z" fill="currentColor" />
      </svg>
      <svg className="absolute left-[1%] top-[5%] w-[9%] text-primary" viewBox="0 0 50 24" aria-hidden>
        <path d="M2 4l22 6-6 6 30 6" fill="none" stroke="currentColor" strokeWidth="5" />
      </svg>
      <span className="absolute left-[12%] top-[86%] font-sans text-4xl font-light text-primary">+</span>
      <span className="absolute left-[59%] top-[96%] font-sans text-2xl font-light text-primary">+</span>
      {ART.map((a) => (
        <figure
          key={a.src}
          className={`group absolute bg-paper p-[2%] pb-0 shadow-[var(--shadow-art)] transition-all duration-500 ease-out hover:z-40 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_28px_40px_-16px_oklch(0_0_0/0.5)] ${a.cls}`}
        >
          <img src={img(a.src)} alt={a.label} className="block aspect-[150/214] w-full object-cover" loading="eager" />
          <figcaption className="bg-ink py-[4%] text-center text-[clamp(6px,0.7vw,9px)] font-bold tracking-[0.25em] text-paper">{a.label}</figcaption>
        </figure>
      ))}
      <div className="absolute -right-[2%] -top-[2%] z-40 w-[28%]">
        <p className="-rotate-[10deg] font-marker text-[clamp(12px,1.5vw,20px)] leading-tight text-primary">DESIGN A BETTER TOMORROW.</p>
        <CurveArrow className="ml-[20%] mt-1 h-16 w-16 text-primary" />
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="mx-auto flex min-h-[calc(100vh-64px)] max-w-[1440px] flex-col justify-center px-5 pb-12 pt-16 lg:px-[52px]">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <div className="min-w-0">
          <Reveal>
            <p className="flex items-center gap-3 text-[13px] font-bold tracking-[0.2em] sm:text-[14px]">
              <span className="text-primary">IDEAS</span> <span>⟶</span> VISUALS <span>⟶</span> IMPACT
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 font-brush text-[clamp(4.5rem,13vw,11rem)] leading-[0.9] text-ink">SANJAY</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-2 text-[clamp(1.25rem,2vw,1.6rem)] font-semibold tracking-[0.15em] text-primary">GRAPHIC DESIGNER</p>
            <p className="mt-8 max-w-[460px] text-[16px] leading-relaxed text-muted-foreground">
              Creating bold visuals, meaningful compositions, and engaging designs for brands, entertainment, and digital media.
            </p>
          </Reveal>
          <Reveal delay={360} className="mt-12 flex flex-wrap gap-7">
            <button onClick={() => scrollToId("works")} className="btn-base btn-blue h-[45px] w-[150px] px-0">
              VIEW MY WORK <Arrow />
            </button>
            <button onClick={() => scrollToId("contact")} className="btn-base btn-outline h-[45px] w-[150px] px-0">
              CONTACT ME
            </button>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <Collage />
        </Reveal>
      </div>
      <div className="mt-14 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <p className="max-w-[400px] text-[11px] font-medium leading-6 tracking-[0.22em] text-ink">
          POSTERS <span className="text-primary">/</span> THUMBNAILS <span className="text-primary">/</span> BRANDING <span className="text-primary">/</span> SOCIAL MEDIA <span className="text-primary">/</span> DIGITAL DESIGN
        </p>
        <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-ink">
          <span className="h-2 w-2 rounded-full bg-primary ring-2 ring-blue-soft" /> AVAILABLE FOR CREATIVE OPPORTUNITIES
        </p>
      </div>
    </section>
  );
}
