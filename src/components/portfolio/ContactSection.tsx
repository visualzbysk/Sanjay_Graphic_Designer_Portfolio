import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Arrow, CurveArrow, Reveal, SectionLabel, scrollToId } from "./shared";

const EMAIL = "visualsbysk@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/builtbysanjay/";
const INSTAGRAM = "https://www.instagram.com/crazy_heart_b.e.a.t.s/";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().min(1, "Please enter your email").email("Please enter a valid email address").max(255),
  message: z.string().trim().min(1, "Please write a message").max(1000, "Message must be under 1000 characters"),
});
type Fields = z.infer<typeof contactSchema>;

/**
 * EMAIL INTEGRATION POINT
 * No email service is connected yet. Replace this with a real sender
 * (e.g. EmailJS or a server endpoint) and return true on success.
 */
async function sendContactMessage(_data: Fields): Promise<boolean> {
  return false;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<{ ok: boolean; text: string; mailto?: string } | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: typeof errors = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as keyof Fields] ??= i.message));
      setErrors(errs);
      setStatus(null);
      return;
    }
    setErrors({});
    const sent = await sendContactMessage(parsed.data);
    if (sent) {
      setStatus({ ok: true, text: "Thank you — your message has been sent." });
      e.currentTarget.reset();
    } else {
      const { name, email, message } = parsed.data;
      const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(`Project enquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
      setStatus({ ok: false, text: "Online sending isn't set up yet, so your message was not sent. You can send it by email instead:", mailto });
    }
  }

  const field = "mt-3 w-full border-0 border-b border-input bg-transparent pb-3 text-[15px] text-ink outline-none transition-colors focus:border-primary";
  const lbl = "text-[10px] font-bold tracking-[0.25em] text-primary";
  return (
    <form id="contact-form" onSubmit={onSubmit} noValidate className="border border-border bg-panel px-6 pb-14 pt-7 sm:px-[30px]">
      <p className="text-[10px] font-bold tracking-[0.25em] text-primary underline underline-offset-4">START A CONVERSATION</p>
      <div className="mt-9">
        <label htmlFor="cf-name" className={lbl}>NAME</label>
        <input id="cf-name" name="name" autoComplete="name" maxLength={100} aria-invalid={!!errors.name} className={field} />
        {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
      </div>
      <div className="mt-8">
        <label htmlFor="cf-email" className={lbl}>EMAIL</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={!!errors.email} className={field} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div className="mt-8">
        <label htmlFor="cf-message" className={lbl}>MESSAGE</label>
        <textarea id="cf-message" name="message" rows={4} maxLength={1000} aria-invalid={!!errors.message} className="mt-3 h-[100px] w-full resize-none bg-paper p-3 text-[15px] text-ink outline-none ring-primary focus:ring-1" />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <button type="submit" className="btn-base btn-blue mt-7 h-[45px] w-full">
        SEND MESSAGE <Arrow />
      </button>
      {status && (
        <p role="status" className={`mt-4 text-sm ${status.ok ? "text-primary" : "text-ink"}`}>
          {status.text}{" "}
          {status.mailto && <a href={status.mailto} className="font-semibold text-primary underline">Open email</a>}
        </p>
      )}
    </form>
  );
}

const INFO: { label: string; value: string; href?: string; ext?: boolean }[] = [
  { label: "EMAIL", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "PHONE", value: "+91 86670 39411", href: "tel:+918667039411" },
  { label: "LOCATION", value: "Chennai, Tamil Nadu, India" },
  { label: "LINKED IN", value: LINKEDIN, href: LINKEDIN, ext: true },
  { label: "INSTAGRAM", value: "crazy_heart_b.e.a.t.s", href: INSTAGRAM, ext: true },
];

export function ContactSection() {
  const getInTouch = () => {
    scrollToId("contact");
    setTimeout(() => document.getElementById("cf-name")?.focus({ preventScroll: true }), 600);
  };
  return (
    <section id="contact" className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-24 lg:px-[52px]">
      <div className="grid gap-14 lg:grid-cols-[1fr_552px] lg:gap-[80px] xl:mr-[170px]">
        <div className="min-w-0">
          <Reveal><SectionLabel>05 - CONTACT</SectionLabel></Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-brush text-[clamp(3rem,6.2vw,5.4rem)] leading-[0.95] text-ink">
              LETS CREATE<br />SOMETHING<br /><span className="text-primary">VISUAL</span>
            </h2>
            <p className="mt-7 text-[14px] leading-[1.75] text-ink">
              Have a project, campaign, or creative opportunity?<br />I'd love to work together.
            </p>
            <p className="mt-10 text-[20px] font-semibold text-ink">SANJAY KUMAR</p>
            <p className="text-[15px] tracking-wide text-muted-foreground">Graphic Designer</p>
          </Reveal>
          <Reveal delay={200} className="mt-12 max-w-[455px]">
            <div className="flex items-center gap-5">
              <p className="shrink-0 font-mono text-[10px] tracking-[0.15em] text-primary">CONTACT INFORMATION</p>
              <span className="h-px flex-1 bg-ink/70" />
            </div>
            <dl className="mt-4">
              {INFO.map((r) => (
                <div key={r.label} className="grid grid-cols-[100px_minmax(0,1fr)] items-center border-b border-border py-4">
                  <dt className="text-[9px] font-bold tracking-[0.2em] text-primary">{r.label}</dt>
                  <dd className="break-words text-[14px] text-ink">
                    {r.href ? (
                      <a href={r.href} {...(r.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="transition-colors hover:text-primary">{r.value}</a>
                    ) : r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative min-w-0 lg:mt-[72px]">
          <div className="absolute -right-[110px] -top-24 hidden w-32 xl:block">
            <p className="rotate-[12deg] font-marker text-[17px] leading-[1.05] text-primary">IDEAS ALWAYS WELCOME</p>
            <CurveArrow className="-ml-6 h-12 w-12 text-primary" />
          </div>
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={150} className="mt-7 flex flex-wrap gap-7">
            <button onClick={getInTouch} className="btn-base btn-blue h-[45px] w-[150px] px-0">GET IN TOUCH <Arrow /></button>
            <button onClick={() => scrollToId("works")} className="btn-base btn-outline h-[45px] w-[150px] px-0">VIEW MY WORK</button>
          </Reveal>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[9px] font-bold tracking-[0.18em] text-ink">
            <a href={`mailto:${EMAIL}`} className="hover:text-primary">EMAIL</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LINKED IN</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:text-primary">INSTAGRAM</a>
            <span title="Behance link not provided yet">BEHANCE</span>
          </div>
        </div>
      </div>
      <footer className="mt-16 flex max-w-[1250px] flex-wrap items-end justify-between gap-3 border-t border-ink/30 pt-4">
        <div>
          <p className="text-[10px] font-semibold text-ink">SANJAY KUMAR</p>
          <p className="text-[10px] text-muted-foreground">Designed with Creativity and Purpose</p>
        </div>
        <p className="text-[9px] text-muted-foreground">© 2026 Sanjay. All Rights Reserved.</p>
      </footer>
    </section>
  );
}
