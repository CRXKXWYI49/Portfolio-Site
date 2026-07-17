import React from 'react'
import { aboutMe } from '@/constants/main/about-me-section'

export const AboutMe = () => {
  const renderAuthors = (authors?: string) => {
    if (!authors) return null
    const parts = authors.split(/(Trevin Lee)/)
    return parts.map((part, idx) =>
      part === 'Trevin Lee' ? <strong key={idx}>{part}</strong> : <span key={idx}>{part}</span>
    )
  }
  return (
    <section className='flex items-center justify-center w-full h-screen snap-start'>
      <div className='w-fit max-w-prose mx-auto px-6 md:px-8'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>About Me</h2>

        <div className='space-y-8'>
          <div>
            <ul className='space-y-2'>
              {aboutMe.experiences?.map((exp) => (
                <li key={`${exp.organization}-${exp.year}`} className='flex items-center justify-between text-sm md:text-base'>
                  <span className='font-medium'>{exp.organization}</span>
                  <span className='opacity-70'>{exp.year}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className='flex flex-wrap gap-x-2 gap-y-1'>
              {aboutMe.skills?.map((skill) => (
                <span
                  key={skill}
                  className='rounded-md text-xs md:text-sm font-bold'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {aboutMe.publications?.length ? (
            <div>
              <ul className='space-y-2'>
                {aboutMe.publications.map((pub) => {
                  const content = (
                    <>
                      {pub.authors ? (
                        <span>{renderAuthors(pub.authors)}</span>
                      ) : (
                        <span>{pub.title}</span>
                      )}
                      {pub.authors ? (
                        <>
                          {' '}
                          — <span>{pub.title}</span>
                        </>
                      ) : null}
                      {(pub.venue || pub.year) ? (
                        <>
                          {' '}
                          — <em>{pub.venue}</em>
                          {pub.venue && pub.year ? ', ' : ''}
                          {pub.year}
                        </>
                      ) : null}
                    </>
                  )
                  return (
                    <li key={pub.title} className='text-sm md:text-base'>
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target='_blank'
                          rel='noreferrer'
                          className='no-underline hover:underline underline-offset-2'
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
