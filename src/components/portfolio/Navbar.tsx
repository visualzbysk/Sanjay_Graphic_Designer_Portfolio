// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Arrow, scrollToId } from "./shared";

// const LINKS = [
//   { id: "home", label: "HOME" },
//   { id: "about", label: "ABOUT" },
//   { id: "works", label: "WORKS" },
//   { id: "tools", label: "TOOLS" },
//   { id: "contact", label: "CONTACT" },
// ];

// export function Navbar() {
//   const [active, setActive] = useState("home");
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
//       },
//       { rootMargin: "-45% 0px -50% 0px" },
//     );
//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   const go = (id: string) => {
//     setOpen(false);
//     scrollToId(id);
//   };

//   return (
//     <header className="sticky top-0 z-50 border-y border-border bg-background">
//       <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-[52px]">
//         <button onClick={() => go("home")} className="min-w-0 text-left leading-tight">
//           <span className="block truncate text-sm font-bold tracking-[0.12em] text-ink">SANJAY KUMAR</span>
//           <span className="block truncate text-[10px] font-medium tracking-[0.3em] text-muted-foreground">GRAPHIC DESIGNER</span>
//         </button>

//         <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
//           {LINKS.map((l) => (
//             <button
//               key={l.id}
//               onClick={() => go(l.id)}
//               aria-current={active === l.id ? "true" : undefined}
//               className={`relative py-2 text-[11px] font-bold tracking-[0.25em] transition-colors hover:text-primary ${active === l.id ? "text-primary" : "text-ink"}`}
//             >
//               {l.label}
//               <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-all duration-300 ${active === l.id ? "w-full" : "w-0"}`} />
//             </button>
//           ))}
//         </nav>

//         <div className="flex shrink-0 items-center gap-2">
//           <button onClick={() => go("contact")} className="btn-base btn-blue hidden sm:inline-flex">
//             LET'S TALK <Arrow />
//           </button>
//           <button className="grid h-11 w-11 place-items-center md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
//             {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//           </button>
//         </div>
//       </div>
//       {open && (
//         <nav aria-label="Mobile" className="border-t border-border bg-background px-5 py-3 md:hidden">
//           {LINKS.map((l) => (
//             <button key={l.id} onClick={() => go(l.id)} className={`block w-full py-3 text-left text-xs font-bold tracking-[0.25em] ${active === l.id ? "text-primary" : "text-ink"}`}>
//               {l.label}
//             </button>
//           ))}
//           <button onClick={() => go("contact")} className="btn-base btn-blue mt-2 w-full">
//             LET'S TALK <Arrow />
//           </button>
//         </nav>
//       )}
//     </header>
//   );
// }


import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Arrow, scrollToId } from "./shared";

const LINKS = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "works", label: "WORKS" },
  { id: "tools", label: "TOOLS" },
  { id: "contact", label: "CONTACT" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const els = LINKS
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  // Hide navbar while Intro or Thank You section is visible
  useEffect(() => {
    const intro = document.getElementById("intro");
    const thanks = document.getElementById("thanks");

    if (!intro || !thanks) return;

    const visibility = new Map<Element, boolean>([
      [intro, false],
      [thanks, false],
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target, entry.isIntersecting);
        });

        setIsHidden([...visibility.values()].some(Boolean));
      },
      { threshold: 0 },
    );

    observer.observe(intro);
    observer.observe(thanks);

    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  if (isHidden) return null;

  return (
    <header className="sticky top-0 z-50 border-y border-border bg-background">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-[52px]">
        <button
          onClick={() => go("home")}
          className="min-w-0 text-left leading-tight"
        >
          <span className="block truncate text-sm font-bold tracking-[0.12em] text-ink">
            SANJAY KUMAR
          </span>
          <span className="block truncate text-[10px] font-medium tracking-[0.3em] text-muted-foreground">
            GRAPHIC DESIGNER
          </span>
        </button>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 md:flex"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              aria-current={active === l.id ? "true" : undefined}
              className={`relative py-2 text-[11px] font-bold tracking-[0.25em] transition-colors hover:text-primary ${
                active === l.id ? "text-primary" : "text-ink"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  active === l.id ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => go("contact")}
            className="btn-base btn-blue hidden sm:inline-flex"
          >
            LET'S TALK <Arrow />
          </button>

          <button
            className="grid h-11 w-11 place-items-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-border bg-background px-5 py-3 md:hidden"
        >
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`block w-full py-3 text-left text-xs font-bold tracking-[0.25em] ${
                active === l.id ? "text-primary" : "text-ink"
              }`}
            >
              {l.label}
            </button>
          ))}

          <button
            onClick={() => go("contact")}
            className="btn-base btn-blue mt-2 w-full"
          >
            LET'S TALK <Arrow />
          </button>
        </nav>
      )}
    </header>
  );
}
