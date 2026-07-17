import { ArrowUpRight, Github, Linkedin, FileText, Mail } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { SectionMarker } from "@/components/site/instrument";
import { email } from "@/constants/main/contact-section";
import { iconBarLinks } from "@/constants/icon-bar-links";

const LINKS = [
  { href: iconBarLinks.github, label: "GitHub", Icon: Github },
  { href: iconBarLinks.linkedIn, label: "LinkedIn", Icon: Linkedin },
  { href: iconBarLinks.cvDownload, label: "Résumé", Icon: FileText },
];

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-border">
      <div className="mx-auto w-full max-w-[88rem] px-6 py-28 sm:px-8 md:py-40">
        <SectionMarker index="05" label="Contact" annotation="Email · Links" />

        <BlurFade inView delay={0.05}>
          <h2 className="mt-12 max-w-3xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
            Contact.
          </h2>
        </BlurFade>

        <BlurFade inView delay={0.12}>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Open to research and engineering work. Email is the best way to
            reach me.
          </p>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <a
            href={`mailto:${email}`}
            className="group mt-10 inline-flex items-center gap-3 text-2xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            <Mail className="size-6 text-muted-foreground transition-colors group-hover:text-foreground sm:size-8" />
            <span className="border-b border-border pb-1 transition-colors group-hover:border-foreground">
              {email}
            </span>
            <ArrowUpRight className="size-6 -translate-y-1 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground sm:size-8" />
          </a>
        </BlurFade>

        <BlurFade inView delay={0.28}>
          <div className="mt-12 flex flex-wrap gap-3">
            {LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono group flex items-center gap-2 border border-border px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <Icon className="size-3.5" />
                {label}
                <ArrowUpRight className="size-3 opacity-50" />
              </a>
            ))}
          </div>
        </BlurFade>
      </div>

      {/* footer readout */}
      <div className="border-t border-border">
        <div className="mono mx-auto flex w-full max-w-[88rem] flex-col items-center justify-between gap-2 px-6 py-6 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row sm:px-8">
          <span>© 2026 Trevin Lee</span>
          <span>San Diego, California</span>
          <span>Built with Next.js · Geist</span>
        </div>
      </div>
    </section>
  );
}
