import { ArrowUpRight } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { SectionMarker } from "@/components/site/instrument";
import { aboutMe } from "@/constants/main/about-me-section";

function Authors({ authors }: { authors?: string }) {
  if (!authors) return null;
  return (
    <>
      {authors.split(/(Trevin Lee)/).map((part, i) =>
        part === "Trevin Lee" ? (
          <span key={i} className="font-medium text-foreground">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function linkLabel(link: string) {
  if (link.includes("arxiv")) return "arXiv";
  if (link.includes("poster")) return "Poster";
  return "Link";
}

export default function Research() {
  const pubs = aboutMe.publications ?? [];

  return (
    <section
      id="research"
      className="relative mx-auto w-full max-w-[88rem] scroll-mt-16 px-6 py-28 sm:px-8 md:py-36"
    >
      <SectionMarker
        index="04"
        label="Research"
        annotation="Peer-reviewed · Preprint"
      />

      <BlurFade inView delay={0.05}>
        <h2 className="mt-12 max-w-3xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
          Publications.
        </h2>
      </BlurFade>

      <BlurFade inView delay={0.12}>
        <div className="mt-12 border border-border">
          {pubs.map((pub, i) => {
            const Inner = (
              <>
                <div className="mono shrink-0 text-sm text-muted-foreground md:w-12">
                  [{String(i + 1).padStart(2, "0")}]
                </div>
                <div className="flex-1">
                  <h3 className="text-balance text-lg font-medium leading-snug sm:text-xl">
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <Authors authors={pub.authors} />
                  </p>
                </div>
                <div className="mono flex shrink-0 flex-col gap-1.5 text-[0.7rem] uppercase tracking-[0.12em] text-muted-foreground md:w-44 md:text-right">
                  <span>{pub.venue}</span>
                  {pub.link ? (
                    <span className="inline-flex items-center gap-1 text-foreground md:justify-end">
                      {linkLabel(pub.link)}
                      <ArrowUpRight className="size-3" />
                    </span>
                  ) : null}
                </div>
              </>
            );

            const rowClass =
              "group flex flex-col gap-4 p-6 transition-colors sm:p-8 md:flex-row md:items-start md:gap-8";
            const border =
              i !== 0 ? { borderTop: "1px solid var(--border)" } : undefined;

            return pub.link ? (
              <a
                key={pub.title}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${rowClass} hover:bg-accent/60`}
                style={border}
              >
                {Inner}
              </a>
            ) : (
              <div key={pub.title} className={rowClass} style={border}>
                {Inner}
              </div>
            );
          })}
        </div>
      </BlurFade>
    </section>
  );
}
