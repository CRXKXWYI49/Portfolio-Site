"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

import {
  Carousel as AppleCarousel,
  Card as CarouselCard,
} from "@/components/ui/apple-cards-carousel";
import {
  type CarouselApi,
  Carousel as ShadCarousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { SectionMarker } from "@/components/site/instrument";
import { highlights } from "@/constants/main/project-highlights-section";

function ModalCarousel({
  images,
  alt,
}: {
  images: (string | StaticImageData)[];
  alt: string;
}) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(images?.length ?? 0);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setCount(api.scrollSnapList().length);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full">
      <ShadCarousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-video w-full overflow-hidden border border-border">
                <Image
                  src={img}
                  alt={`${alt} ${i + 1}`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 rounded-none border-none bg-black/60 text-white hover:bg-black/80" />
        <CarouselNext className="right-3 top-1/2 -translate-y-1/2 rounded-none border-none bg-black/60 text-white hover:bg-black/80" />
      </ShadCarousel>
      <div className="mono mt-3 flex items-center justify-center gap-2 text-[0.65rem] tracking-[0.2em] text-muted-foreground">
        <span>
          {String(current + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <span className="flex gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                i === current ? "bg-foreground" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

export default function Work() {
  const items = highlights.map((project: any, index: number) => {
    const src = project.images?.[0] as string | undefined;
    return (
      <CarouselCard
        key={index}
        index={index}
        card={{
          src: src || "",
          title: project.title,
          category: project.date || "Project",
          content: (
            <div className="space-y-6">
              <ModalCarousel images={project.images || []} alt={project.title} />
              {project.description && (
                <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-200">
                  {project.description.replace(/\s+/g, " ").trim()}
                </p>
              )}
              {Array.isArray(project.experiences) &&
                project.experiences.length > 0 && (
                  <ul className="space-y-2 border-t border-border pt-5">
                    {project.experiences.map((exp: string, i: number) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-neutral-700 dark:text-neutral-300"
                      >
                        <span className="mono mt-0.5 shrink-0 text-xs text-neutral-400 dark:text-neutral-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{exp.replace(/\s+/g, " ").trim()}</span>
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ),
        }}
      />
    );
  });

  return (
    <section
      id="work"
      className="relative w-full scroll-mt-16 py-28 md:py-36"
    >
      <div className="mx-auto w-full max-w-[88rem] px-6 sm:px-8">
        <SectionMarker
          index="02"
          label="Selected Work"
          annotation="Tap a card for details"
        />
        <h2 className="mt-12 max-w-3xl text-balance text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
          Selected projects.
        </h2>
      </div>
      <AppleCarousel items={items} />
    </section>
  );
}
