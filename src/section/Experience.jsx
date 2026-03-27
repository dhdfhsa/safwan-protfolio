import React from 'react'
import { BriefcaseBusiness, Code2, Layers3, Sparkles, Zap } from 'lucide-react'

const timeline = [
  {
    year: '2025 - Present',
    title: 'Full Stack Developer',
    company: 'MSMS IT Ltd.',
    description:
      'Leading frontend architecture for a suite of fintech products, improving scalability, performance, and team delivery.',
    tags: ['React', 'Node.js', "Express.js","MongoDB",'Next.js',"Tailwind"],
    side: 'left',
  },
  {
    year: '2023 - 2025',
    title: 'Frontened-backened/2 Developer',
    description:
      'Built and maintained multiple React applications for enterprise clients with a focus on accessibility and reliability.',
    tags: ['React', 'Redux', 'Js', 'Tailwind',"Node.js","Express.js"],
    side: 'right',
  },
  {
    year: '2020 - 2023',
    title: 'UI Developer',
    description:
      'Created Some normal and some animated moredern static websites',
    tags: ['UI Systems',  'HTML', "CSS", "JS",'Accessibility', 'Responsible' ,],
    side: 'left',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(32,178,166,0.05),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mb-16 max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90">
            <Sparkles className="h-3.5 w-3.5" />
            Career Journey
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Experience that <span className="font-serif italic font-normal text-white/95">speaks volumes.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/42 sm:text-base">
            A timeline of my professional growth, from curious beginner to building products and leading teams.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(32,178,166,0.65),rgba(32,178,166,0.35),transparent)] lg:block" />

          <div className="space-y-10 lg:space-y-14">
            {timeline.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative grid gap-6 lg:grid-cols-2 lg:items-center ${
                  item.side === 'right' ? 'lg:translate-y-10' : ''
                }`}
              >
                <div className={`${item.side === 'right' ? 'lg:col-start-2' : ''} lg:pr-10`}>
                  <article className="group rounded-[1.6rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.34)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[0.72rem] font-medium tracking-[0.18em] text-primary/90">
                          <BriefcaseBusiness className="h-3.5 w-3.5" />
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-primary">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/45">{item.company}</p>
                      </div>

                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5 text-primary">
                        {index % 2 === 0 ? <Code2 className="h-5 w-5" /> : <Layers3 className="h-5 w-5" />}
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/50">{item.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-white/8 pt-5 text-sm text-primary/90">
                      <Zap className="h-4 w-4" />
                      Delivered measurable impact through faster releases and stronger systems.
                    </div>
                  </article>
                </div>

                <div className={`${item.side === 'left' ? 'lg:col-start-2' : 'lg:col-start-1'} hidden lg:block`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
