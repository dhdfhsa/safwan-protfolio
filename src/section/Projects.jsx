import React, { useState } from 'react'
import { ArrowUpRight, Braces, ExternalLink, Layers3, Sparkles, Zap } from 'lucide-react'

const projectTabs = ['All', 'Web Apps', 'UI Components', 'Full Stack']

const projects = [
   {
    title: 'Tomato-Restaurant Web  ',
    category: 'Full Stack',
    description:
      ' Tomato, a full-stack food delivery application I built using the MERN stack! 🍅This project features a dynamic React frontend, a robust Node/Express backend, and seamless MongoDB integration for real-time menu management.',

    image: '/Gemini_Generated_Image_kb5xp5kb5xp5kb5x.png',
    demoUrl: 'https://frontened-tomato.vercel.app/',
    sourceUrl: 'https://github.com/dhdfhsa/frontened-tomato',
    tags: ['React', 'Node.js', "Express.js",'MongoDB', 'Stripe'],
    stat: '500+ active users',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description:
      'Full-stack shopping experience with product management, cart flow, and secure checkout interactions.',
    image: '/Gemini_Generated_Image_cg0t36cg0t36cg0t.png',
    demoUrl: 'https://frontened-tomato.vercel.app/',
    sourceUrl: 'https://github.com/dhdfhsa/frontened-tomato',
    tags: ['React', 'Node.js', "Express.js",'MongoDB', 'Stripe',"Tailwind",],
    stat: '40% increase in conversion',
  },
 
  {
    title: 'Component Library',
    category: 'UI Components',
    description:
      'Reusable React component library with accessible patterns, documentation, and modern styling.',
    image: '/Gemini_Generated_Image_ux0wo4ux0wo4ux0w.png',
    demoUrl: 'https://frontened-tomato.vercel.app/',
    sourceUrl: 'https://github.com/dhdfhsa/frontened-tomato',
    tags: ["HTML","CSS","JavaScript"],
    stat: '50+ components shipped',
  },
]

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All')
  const filteredProjects =
    activeTab === 'All' ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(32,178,166,0.05),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90">
            <Sparkles className="h-3.5 w-3.5" />
            My Projects
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Projects & Case Studies
          </h2>
          <p className="mt-4 text-sm text-white/42 sm:text-base">
            A selection of featured builds, product experiments, and component work.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {projectTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
                activeTab === tab
                  ? 'border-primary/25 bg-primary/15 text-primary shadow-[0_0_24px_rgba(32,178,166,0.12)]'
                  : 'border-white/10 bg-white/5 text-white/60 hover:border-primary/20 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.7rem] border border-white/8 bg-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.34)]"
            >
              <div className="relative overflow-hidden border-b border-white/8 bg-[#0a0d14]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[260px] w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,18,0)_0%,rgba(2,5,18,0.18)_58%,rgba(2,5,18,0.55)_100%)]" />

                <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                  {project.category}
                </div>

                <div className="absolute right-4 bottom-4 flex gap-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} demo`}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/45 text-white/80 backdrop-blur-sm transition duration-300 hover:border-primary/30 hover:text-primary"
                  >
                   <ExternalLink className="h-4 w-4" /> 
                  </a>
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${project.title} source code`}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/45 text-white/80 backdrop-blur-sm transition duration-300 hover:border-primary/30 hover:text-primary"
                  >
                    <Braces className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/48">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                  <div className="flex items-center gap-2 text-sm text-primary/90">
                    <Layers3 className="h-4 w-4" />
                    {project.stat}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50 transition duration-300 group-hover:text-white">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 text-center text-sm text-white/45">
            No projects found in this category yet.
          </div>
        ) : null}

        <div className="mt-10 flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:text-primary"
          >
            <Zap className="h-4 w-4" />
            View More Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
