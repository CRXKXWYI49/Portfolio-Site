"use client";
import React from 'react'
import { highlights } from '@/constants/main/project-highlights-section'
import { Carousel as AppleCarousel, Card as CarouselCard } from '@/components/ui/apple-cards-carousel'
import { type CarouselApi, Carousel as ShadCarousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'

const ProjectHighlights = () => {
  const ModalShadCarousel = ({ images, alt }: { images: (string | StaticImageData)[]; alt: string }) => {
    if (!images || images.length === 0) return null
    const [api, setApi] = React.useState<CarouselApi | null>(null)
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(images.length)

    React.useEffect(() => {
      if (!api) return
      const update = () => {
        setCurrent(api.selectedScrollSnap())
        setCount(api.scrollSnapList().length)
      }
      update()
      api.on('select', update)
      api.on('reInit', update)
      return () => {
        api.off('select', update)
        api.off('reInit', update)
      }
    }, [api])

    return (
      <div className='w-full'>
        <ShadCarousel className='w-full' setApi={setApi}>
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <div className='relative w-full aspect-video overflow-hidden rounded-xl'>
                  <Image
                    src={img as any}
                    alt={`${alt} ${i + 1}`}
                    fill
                    sizes='(max-width: 1200px) 100vw, 1200px'
                    className='object-cover'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white border-none hover:bg-black/80' />
          <CarouselNext className='right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white border-none hover:bg-black/80' />
        </ShadCarousel>
        <div className='mt-3 flex justify-center gap-2'>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type='button'
              onClick={() => api?.scrollTo(i)}
              className={`h-2 w-2 rounded-full ${i === current ? 'bg-primary' : 'bg-muted-foreground/30'}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }

  const items = highlights.map((project: any, index: number) => {
    const src = project.images?.[0] as string | undefined;
    return (
      <CarouselCard
        key={index}
        index={index}
        card={{
          src: src || '',
          title: project.title,
          category: project.date || 'Project',
          content: (
            <div className='space-y-6'>
              <ModalShadCarousel images={project.images || []} alt={project.title} />
              {project.description && (
                <p className='text-base leading-relaxed text-neutral-700 dark:text-neutral-200'>
                  {project.description}
                </p>
              )}
              {Array.isArray(project.experiences) && project.experiences.length > 0 && (
                <ul className='list-disc pl-5 space-y-1 text-sm text-neutral-700 dark:text-neutral-300'>
                  {project.experiences.map((exp: string, i: number) => (
                    <li key={i}>{exp}</li>
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
    <section className='w-full min-h-screen snap-start flex items-center justify-center'>
      <div className='w-full max-w-7xl px-4 md:px-8'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>Project Highlights</h2>
        <p className='text-center text-muted-foreground mb-6'>Tap a card to learn more</p>
        <AppleCarousel items={items} />
      </div>
    </section>
  )
}

export default ProjectHighlights


