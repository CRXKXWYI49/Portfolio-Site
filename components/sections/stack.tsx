import Image from "next/image";

import { Marquee } from "@/components/ui/marquee";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionMarker } from "@/components/site/instrument";
import { skills, skillIcons } from "@/constants/main/technologies-section";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative mx-auto w-full max-w-[88rem] scroll-mt-16 px-6 py-28 sm:px-8 md:py-36"
    >
      <SectionMarker
        index="03"
        label="Stack"
        annotation="Languages · Tools · Software"
      />

      <BlurFade inView delay={0.05}>
        <h2 className="mt-12 max-w-3xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
          Tools and technologies.
        </h2>
      </BlurFade>

      {/* logo marquee band */}
      <BlurFade inView delay={0.12}>
        <div className="relative mt-14 overflow-hidden border-y border-border py-8">
          <Marquee pauseOnHover className="[--duration:55s] [--gap:1.25rem]">
            {skillIcons.map((tech) => (
              <div
                key={tech.name}
                className="group flex h-20 w-32 shrink-0 flex-col items-center justify-center gap-2 border border-border/60 transition-colors hover:border-foreground/25"
                title={tech.name}
              >
                <Image
                  src={tech.imgURL}
                  alt={tech.name}
                  className="h-7 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </Marquee>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </BlurFade>

      {/* categorized capabilities */}
      <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
        {skills.map((group, gi) => (
          <BlurFade key={group.type} inView delay={0.1 + gi * 0.08}>
            <div className="h-full bg-background p-6 sm:p-8">
              <div className="mono mb-5 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-foreground/70">0{gi + 1}</span>
                <span>{group.type}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.list.map((item) => (
                  <li
                    key={item}
                    className="mono border border-border/70 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
