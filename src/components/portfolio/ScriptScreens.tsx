import { useEffect, useRef } from "react";
import { Arrow, CurveArrow, Star, Underline, d, scrollToId, usePlayOnView } from "./shared";

function Tagline({ delay }: { delay: number }) {
  return (
    <p className="fade flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.45em] text-ink sm:gap-5 sm:text-[17px]" style={d(delay)}>
      DESIGN <span className="h-2 w-2 rounded-full bg-primary" /> CREATE <span className="h-2 w-2 rounded-full bg-primary" /> IMPACT
    </p>
  );
}

export function IntroSection() {
  const { ref, cls } = usePlayOnView<HTMLElement>();
  const hasScrolled = useRef(false);

  useEffect(() => {
    // Start the timer after the page has loaded.
    const startTimer = () => {
      const timer = window.setTimeout(() => {
        if (hasScrolled.current) return;

        hasScrolled.current = true;
        scrollToId("home");
      }, 6000); // 6 seconds

      return timer;
    };

    let timer: number | undefined;

    if (document.readyState === "complete") {
      timer = startTimer();
    } else {
      const handleLoad = () => {
        timer = startTimer();
      };

      window.addEventListener("load", handleLoad, { once: true });

      return () => {
        window.removeEventListener("load", handleLoad);
        if (timer !== undefined) window.clearTimeout(timer);
      };
    }

    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);
  
  return (
    <section id="intro" ref={ref} className={`${cls} relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-16 text-center`}>
      <h1 className="draw pr-[0.08em] font-script text-[clamp(7rem,28vw,24rem)] leading-[0.95] text-primary" style={d(200)}>
        Hello
      </h1>
      <p className="fade mt-[1vw] pl-[0.5em] text-[clamp(0.9rem,2vw,1.75rem)] font-bold tracking-[0.5em] text-ink" style={d(2500)}>
        WELCOME TO MY
      </p>
      <p className="fade font-serif text-[clamp(2.4rem,6.4vw,5.8rem)] font-black leading-none tracking-[0.12em] text-ink" style={d(2900)}>
        PORTFOLIO
      </p>  
      <Underline className="mt-2 w-[min(70vw,500px)] text-primary" style={d(3300)} />
      <Star className="pop absolute left-[9%] top-[60%] h-10 w-10 text-primary" style={d(3400)} />
      <Star className="pop absolute right-[4%] top-[45%] h-16 w-16 text-primary" style={d(3550)} />
      <div className="mt-[6vh]"><Tagline delay={3900} /></div>
    </section>
  );
}

export function ThankYouSection() {
  const { ref, cls } = usePlayOnView<HTMLElement>();
  return (
    <section id="thanks" ref={ref} className={`${cls} relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 text-center`}>
      <Star className="pop absolute right-[8%] top-[12%] h-16 w-16 text-primary" style={d(2600)} />
      <Star className="pop absolute left-[6%] top-[64%] h-10 w-10 text-primary" style={d(2700)} />
      <h2 className="draw pr-[0.08em] font-script text-[clamp(4.5rem,18vw,16rem)] leading-[1] text-primary" style={d(100)}>
        Thank You
      </h2>
      <p className="fade font-serif text-[clamp(1.6rem,4.4vw,4rem)] font-black leading-tight tracking-[0.25em] text-ink" style={d(2200)}>
        LET’S CREATE
      </p>
      <p className="fade font-serif text-[clamp(1.9rem,5.4vw,4.9rem)] font-black leading-tight tracking-[0.18em] text-ink" style={d(2500)}>
        SOMETHING GREAT.
      </p>
      <Underline className="mt-3 w-[min(70vw,500px)] text-primary" style={d(2800)} />
      <div className="fade absolute right-[5%] top-[58%] hidden w-40 md:block" style={d(3100)}>
        <p className="-rotate-12 font-marker text-[17px] leading-tight text-primary">GOOD THINGS STARTS WITH A HELLO</p>
        <CurveArrow className="ml-6 mt-1 h-16 w-16 rotate-[60deg] text-primary" />
      </div>
      <p className="fade mt-4 -rotate-6 font-marker text-sm text-primary md:hidden" style={d(3100)}>GOOD THINGS STARTS WITH A HELLO</p>
      <button onClick={() => scrollToId("home")} className="fade btn-base btn-blue mt-14 w-[min(90vw,450px)]" style={d(3400)}>
        BACK TO HOME <Arrow />
      </button>
      <div className="mt-24"><Tagline delay={3700} /></div>
    </section>
  );
}
