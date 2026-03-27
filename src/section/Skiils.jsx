import React from 'react'
import { Braces, Code2, Database, Layers3, MonitorSmartphone, Rocket, Server, Settings2, Sparkles } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend Development',
    description: 'React-focused interfaces with modern UI patterns and responsive layouts.',
    items: [
      { name: 'React.js', years: '1+ years', level: 'Expert', percent: 92, Icon: Code2 },
      { name: 'JavaScript', years: '3+ years', level: 'Expert', percent: 96, Icon: Braces },
      { name: 'Next.js', years: '0.5+ years', level: 'Intermediate', percent: 52, Icon: Layers3 },
      { name: 'Tailwind CSS', years: '2+ years', level: 'Expert', percent: 91, Icon: MonitorSmartphone },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Server-side logic, APIs, and database work that keeps apps reliable.',
    items: [
      { name: 'Node.js', years: '1+ years', level: 'Advanced', percent: 90, Icon: Server },
      { name: 'MongoDB', years: '1.5+ years', level: 'Advanced', percent: 92, Icon: Database },
      { name: 'REST APIs', years: '3+ years', level: 'Advanced', percent: 86, Icon: Layers3 },
      { name: 'Express.js', years: '2+ years', level: 'Advanced', percent: 80, Icon: Rocket },
    ],
  },
  {
    title: 'Tools & Others',
    description: 'Design workflow, collaboration tools, and delivery-focused utilities.',
    items: [
      { name: 'Git & GitHub', years: '4+ years', level: 'Advanced', percent: 88, Icon: Code2 },
      { name: 'Responsive Design', years: '5+ years', level: 'Expert', percent: 98, Icon: MonitorSmartphone },
      { name: 'Vite', years: '1+ years', level: 'Advanced', percent: 84, Icon: Rocket },
    ],
  },
]

const levelStyles = {
  Expert: 'bg-primary/12 text-primary border-primary/20',
  Advanced: 'bg-cyan-500/12 text-cyan-300 border-cyan-400/20',
  Intermediate: 'bg-emerald-500/12 text-emerald-300 border-emerald-400/20',
}

const Skiils = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(32,178,166,0.06),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90">
            <Sparkles className="h-3.5 w-3.5" />
            My Expertise
          </div>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-sm text-white/42 sm:text-base">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className={`rounded-[1.6rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_26px_60px_rgba(0,0,0,0.28)] ${
                groupIndex === 1 ? 'lg:mt-0' : ''
              }`}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-8 w-1 rounded-full bg-primary/70" />
                <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              </div>

              <p className="mb-6 text-sm leading-7 text-white/46">{group.description}</p>

              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/12 text-primary">
                          <item.Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{item.name}</div>
                          <div className="text-xs text-white/38">{item.years}</div>
                        </div>
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.2em] ${
                          levelStyles[item.level]
                        }`}
                      >
                        {item.level}
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,rgba(32,178,166,0.75),rgba(32,178,166,1))]"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skiils
