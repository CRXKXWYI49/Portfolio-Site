import { ArrowRight, ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";

import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/instrument";
import { iconBarLinks } from "@/constants/icon-bar-links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh w-full items-center px-6 pt-14 sm:px-8"
    >
      <div className="mx-auto w-full max-w-[88rem]">
        <BlurFade delay={0.05} inView={false}>
          <Eyebrow>B.S. Physics — UC San Diego</Eyebrow>
        </BlurFade>

        <BlurFade delay={0.12} inView={false}>
          <h1 className="mt-6 text-balance text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            Trevin Lee
          </h1>
        </BlurFade>

        <BlurFade delay={0.22} inView={false}>
          <p className="mono mt-7 text-sm tracking-tight text-muted-foreground sm:text-base">
            Physics Research · Machine Learning · Mechanical Engineering ·
            Software
          </p>
        </BlurFade>

        <BlurFade delay={0.32} inView={false}>
          <p className="mt-9 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Physicist and engineer. I work on machine learning for particle
            physics, scientific instrumentation, and the hardware and software
            around experiments.
          </p>
        </BlurFade>

        <BlurFade delay={0.44} inView={false}>
          <div className="mt-11 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="mono rounded-none tracking-wide"
            >
              <a href="#work">
                View Work
                <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mono rounded-none border-border bg-transparent tracking-wide hover:bg-accent"
            >
              <a href={iconBarLinks.github} target="_blank" rel="noopener noreferrer">
                <Github />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mono rounded-none border-border bg-transparent tracking-wide hover:bg-accent"
            >
              <a href={iconBarLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="mono rounded-none tracking-wide text-muted-foreground hover:text-foreground"
            >
              <a
                href={iconBarLinks.cvDownload}
                download="Trevin_Lee_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText />
                Résumé
                <ArrowUpRight className="size-3.5 opacity-60" />
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
