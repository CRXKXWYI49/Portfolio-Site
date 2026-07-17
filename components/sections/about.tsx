import { BlurFade } from "@/components/ui/blur-fade";
import { SectionMarker } from "@/components/site/instrument";
import { aboutMe } from "@/constants/main/about-me-section";

const STATS = [
  { value: "05", label: "Research institutions" },
  { value: "03", label: "Publications" },
  { value: "20+", label: "Built projects" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[88rem] scroll-mt-16 px-6 py-28 sm:px-8 md:py-36"
    >
      <SectionMarker index="01" label="About" annotation="Background" />

      <div className="mt-14 grid gap-14 md:mt-16 md:grid-cols-12 md:gap-16">
        {/* statement + bio */}
        <div className="md:col-span-7">
          <BlurFade inView delay={0.05}>
            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[2.75rem]">
              Physicist and engineer working on machine learning for particle
              physics, instrumentation, and experimental hardware.
            </h2>
          </BlurFade>

          <BlurFade inView delay={0.12}>
            <div className="mt-10 max-w-xl space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                My research covers machine learning for particle physics,
                cryogenic instrumentation, and observational astrophysics.
                I&apos;ve worked at UC San Diego, Fermilab, Berkeley Lab, UH
                M&#257;noa, and UC Riverside.
              </p>
              <p>
                I also design mechanical systems — including a Formula SAE
                drivetrain — and build and maintain lab compute infrastructure.
              </p>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              {STATS.map((s) => (
                <div key={s.label} className="bg-background px-4 py-5">
                  <dt className="font-sans text-3xl font-medium tracking-tight text-foreground">
                    {s.value}
                  </dt>
                  <dd className="mono mt-2 text-[0.65rem] uppercase leading-tight tracking-[0.15em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>

        {/* affiliations ledger */}
        <div className="md:col-span-5">
          <BlurFade inView delay={0.15}>
            <div className="border border-border bg-card p-6 sm:p-8">
              <div className="mono mb-6 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span>Field Log</span>
                <span className="text-foreground/70">2022 — 2025</span>
              </div>

              <ul className="space-y-0">
                {aboutMe.experiences?.map((exp, i) => (
                  <li
                    key={`${exp.organization}-${exp.year}`}
                    className="group flex items-center gap-3 py-3.5"
                    style={
                      i !== 0
                        ? { borderTop: "1px solid var(--border)" }
                        : undefined
                    }
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-foreground/25 transition-colors group-hover:bg-foreground" />
                    <span className="text-sm font-medium sm:text-base">
                      {exp.organization}
                    </span>
                    <span className="mx-1 h-px flex-1 border-b border-dotted border-border" />
                    <span className="mono text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      {exp.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
