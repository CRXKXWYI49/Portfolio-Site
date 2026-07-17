import React from 'react'
import { ContainerTextFlip } from '@/components/ui/container-text-flip'

import { heroTypeAnimationList } from '@/constants/main/hero-section'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, FileText, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { iconBarLinks } from '@/constants/icon-bar-links'

const HeroSection = () => {
  return (
    <section className='flex items-center justify-between w-full h-screen snap-start'>
        <div className='flex flex-col w-full h-full items-center justify-center order-1 md:order-0'>
            <h1 className='text-8xl font-bold'>Trevin Lee</h1>

            <ContainerTextFlip
                words={heroTypeAnimationList}
                className='font-bold text-4xl'
            />

            <div className='mt-6 flex items-center gap-3'>
            
              <Button asChild variant='outline' className='border-2 border-primary'>
                <a 
                  href={iconBarLinks.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                >
                  <Github />
                  GitHub
                </a>
              </Button>
              <Button asChild variant='outline' className='border-2 border-primary'>
                <a
                  href={iconBarLinks.linkedIn}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                >
                  <Linkedin />
                  LinkedIn
                </a>
              </Button>
              <Button asChild>
                <Link href='/portfolio' aria-label='View Portfolio'>
                  <Briefcase />
                  Projects
                </Link>
              </Button>
              <Button asChild>
                <a
                  href={iconBarLinks.cvDownload}
                  download={'Trevin_Lee_CV.pdf'}
                  aria-label='Download CV'
                >
                  <FileText />
                  Download CV
                </a>
              </Button>
            </div>
        </div>

    </section>
  )
}

export default HeroSection