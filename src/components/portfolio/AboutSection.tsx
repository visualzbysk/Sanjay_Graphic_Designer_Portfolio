import { Monitor, Star as StarIcon, Sun } from "lucide-react";
import { img } from "@/data/portfolio";
import { CurveArrow, Reveal, SectionLabel, Star } from "./shared";

const CARDS = [
  { icon: StarIcon, label: "SPECIALIZATION", title: "Graphic Design", sub: "Brand Identity · Print · Digital" },
  { icon: Monitor, label: "INTEREST", title: "Media & Entertainment", sub: "Media · Entertainment · Digital Content" },
  { icon: Sun, label: "DESIGN APPROACH", title: "Creative & Clean", sub: "Creative · Clean · Impactful" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-[1440px] px-5 py-24 lg:px-[52px]">
      <div className="grid items-center gap-16 lg:grid-cols-[520px_1fr] lg:gap-[90px]">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-2 -top-16 w-40 sm:-left-6">
              <p className="-rotate-[14deg] font-marker text-[17px] leading-[1.05] text-primary">SAME PERSON DIFFERENT IDEAS</p>
              <CurveArrow flip className="-mt-6 ml-24 h-14 w-14 rotate-[100deg] text-primary" />
            </div>
            <div className="relative mx-auto mt-20 aspect-[436/470] w-full">
              <svg className="float-shape absolute inset-0 h-full w-full" viewBox="0 0 436 470" aria-hidden>
                <path d="M0 90 L350 0 L436 107 L380 290 L170 470 L60 280 Z" className="fill-primary" />
                <path d="M240 30 L340 2 L345 40 L240 45 Z" className="fill-blue-soft" />
              </svg>
              <img src={img("portrait")} alt="Portrait of Sanjay Kumar" className="absolute left-[13%] top-[9%] w-[73%] object-cover" />
              <div className="absolute right-0 top-[64%] bg-label px-4 py-3 text-[13px] font-bold leading-[1.9] tracking-[0.2em] text-paper sm:text-[14px]">
                DESIGN<br />CREATE<br />INSPIRE
              </div>
              <Star className="absolute right-[0%] top-[12%] h-3 w-3 text-primary" />
            </div>
            <div className="mt-6 pl-6">
              <span className="block pl-10 text-xl text-primary">↗</span>
              <p className="-rotate-3 font-marker text-[18px] text-primary">SANJAY</p>
            </div>
          </div>
        </Reveal>

        <div className="relative min-w-0">
          <Reveal><SectionLabel>02 - ABOUT</SectionLabel></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-serif text-[clamp(3.5rem,7vw,6.2rem)] font-black leading-none text-ink">About Me</h2>
            <p className="mt-6 text-[19px] font-medium text-ink">Designer. Visual Thinker. Creative Problem Solver.</p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-[560px] text-[14px] leading-[2] text-ink/85">
              I'm a Graphic Designer passionate about creating visually engaging designs that communicate ideas clearly and leave a strong impression. I enjoy working across entertainment graphics, promotional designs, social media creatives, branding, thumbnails, and digital content.
            </p>
            <p className="mt-6 max-w-[560px] text-[14px] leading-[2] text-ink/85">
              My focus is not just on making a design look good, but on creating visuals with strong hierarchy, typography, composition, color, and purpose.
            </p>
          </Reveal>
          <Star filled className="absolute right-[18%] top-[70px] h-3.5 w-3.5 text-primary" />
          <Star className="absolute -right-2 top-[270px] hidden h-6 w-6 text-primary xl:block" />
          <Star filled className="absolute left-[16%] -bottom-24 hidden h-5 w-5 text-primary lg:block" />
          <p className="mt-12 ml-auto w-fit -rotate-[14deg] font-marker text-[19px] leading-tight text-primary">
            GOOD DESIGN<br />GOOD STORIES ↘
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1150px] gap-5 md:grid-cols-3">
        {CARDS.map((c, i) => (
          <Reveal key={c.label} delay={i * 140}>
            <article className="h-full border border-border bg-paper px-7 pb-6 pt-5 transition-all duration-300 hover:scale-[1.03] hover:border-primary hover:shadow-[var(--shadow-blue)]">
              <span className="grid h-11 w-11 place-items-center rounded-md border-2 border-primary text-primary">
                <c.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <p className="mt-8 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">{c.label}</p>
              <h3 className="mt-1 font-hand text-[24px] text-ink">{c.title}</h3>
              <p className="mt-1 text-[12px] text-muted-foreground">{c.sub}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
