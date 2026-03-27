import React from 'react'
import Button from '../componets/Button'
import Reveal from '../componets/Reveal'
import { ArrowRight, Atom, Cpu, Database, Download, Server, Wind } from 'lucide-react'

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Next.js",
  "Git",
  "Tailwind",
  "HTML",
  "CSS",
  "JavaScript"
]

const techIcons = [
  { label: 'React', Icon: Atom, tint: '#61DAFB' },
  { label: 'Express', Icon: Server, tint: '#ffffff' },
  { label: 'MongoDB', Icon: Database, tint: '#47A248' },
  { label: 'Node', Icon: Cpu, tint: '#339933' },
  { label: 'Next.js', badge: 'N', tint: '#ffffff' },
  { label: 'Tailwind CSS', Icon: Wind, tint: '#38BDF8' },
]

const Hero = () => {
  return (
    <section id="home" className='relative min-h-screen flex items-center overflow-hidden bg-[#020512] text-white'>
      <div className='absolute inset-0'>
        <img src='/hero-bg.jpg' alt='Hero background' className='w-full h-full object-cover opacity-40' />
      </div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(58,13,128,.45),_rgba(10,12,23,0.65)_60%,_rgba(5,6,10,.9)_100%)] animate-bg-flow' />
      <div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.5),rgba(5,8,18,0.9))]' />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-6 pb-40 pt-32 sm:pt-36 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-2xl">
          <Reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.25em] text-primary/90" delay={80}>
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(32,178,166,0.8)]" />
            Full Stack Developer-MERN Specialist
          </Reveal>

          <Reveal as="h1" className="max-w-xl text-5xl font-semibold leading-[0.95] text-white sm:text-6xl lg:text-7xl" delay={160}>
            Making <span className="text-primary">Web</span> that you never {' '}
            <span className="font-serif italic font-normal text-white/95">seen.</span>
          </Reveal>

          <Reveal as="p" className="mt-6 max-w-xl text-base leading-8 text-white/55 sm:text-lg" delay={240}>
            Hi, I&apos;m Md. Safwan, a software engineer specializing in React,Node.js,Express.js Next.js,
            and Tailwind. I build scalable, performant web applications that users love.Specially I build <span className='text-primary '> <b> Restaurants and EdTeach Websites</b></span>
          </Reveal>

          <Reveal className="mt-9 flex flex-wrap items-center gap-4" delay={320}>
            <Button
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[154px] px-6 py-3.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_rgba(32,178,166,0.32)]"
            >
              Contact Me
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </Button>
            <a
              href="#projects"
              className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/85 backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Reveal>

          <Reveal className="mt-10 flex items-center gap-4 text-sm text-white/40" delay={400}>
            <span className="mr-1">Follow me</span>
            <a
              href="https://github.com/dhdfhsa" target='_blank'
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.4 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1.1 1.5 1.1.9 1.6 2.3 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5.1 0-1.1.4-2 1-2.8-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1.8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7.6.7 1 1.7 1 2.8 0 4-2.4 4.8-4.6 5.1.4.4.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069315034225"   target='_blank'
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.2-1.5 1.5-1.5h1.7V4.2c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2h-2.8v3.2h2.8V22H13.5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/safwan-mern/" target='_blank'
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.8h3.1V21H3.5V8.8Zm5.3 0h2.9v1.7h.1c.4-.8 1.4-1.6 3-1.6 3.1 0 3.7 2.1 3.7 4.8V21h-3.1v-5.5c0-1.3 0-3-1.8-3-1.9 0-2.1 1.4-2.1 2.9V21H8.8V8.8Z" />
              </svg>
            </a>
            <a
              href="#twitter"
              aria-label="Twitter"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M18.9 3H22l-6.8 7.7L23 21h-7l-5.4-6.9L4.6 21H1.5l7.3-8.3L1 3h7.1l5 6.3L18.9 3Zm-1.2 16.2h1.7L7.2 4.8H5.3L17.7 19.2Z" />
              </svg>
            </a>
          </Reveal>
        </div>

        <Reveal className="relative z-30 mx-auto w-full max-w-2xl" delay={220}>
          <div className="absolute -left-2 top-4 z-60 rounded-2xl border border-white/10 bg-[#0f1418]/80 px-4 py-3 backdrop-blur">
            <div className="text-lg font-semibold text-primary">1+</div>
            <div className="text-xs uppercase tracking-[0.28em] text-white/55">Years Exp</div>
          </div>

          <div className="relative">
            <div className="flow-border relative overflow-hidden rounded-[2rem] bg-[#080c11]/80 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.18),transparent_35%),radial-gradient(circle_at_bottom,rgba(32,178,166,0.08),transparent_28%)] blur-2xl opacity-80" />
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-[linear-gradient(to_bottom,transparent,rgba(32,178,166,0.75),rgba(32,178,166,0.2),transparent)]" />
              <div className="relative overflow-hidden rounded-[1.4rem] bg-[#05080d]">
                <img
                  src="/hero-portrait-new.png"
                  alt="Md. Safwan working at a desk"
                  className="portrait-image animate-portrait-breathe h-[420px] w-full object-cover lg:h-[500px]"
                  style={{
                    objectPosition: '67% center',
                    filter: 'contrast(1.03) saturate(1.03) brightness(1.02) drop-shadow(0 18px 40px rgba(0,0,0,0.25))',
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(8,12,17,0)_0%,rgba(8,12,17,0.12)_38%,rgba(8,12,17,0.42)_100%)]" />
                <div className="portrait-sheen pointer-events-none absolute inset-0 opacity-60 mix-blend-screen" />
              </div>

              <div className="absolute bottom-3 w-65 ml-5 mb-3 left-3 right-3 rounded-[1.15rem] border border-white/10 bg-[#081016]/72 px-4 py-3 backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4">
                <div className="flex items-center justify-start gap-2 overflow-x-auto pb-1">
                  {techIcons.map((item, index) => (
                    <div
                      key={item.label}
                      className="hero-dock-icon grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_0_18px_rgba(32,178,166,0.18)]"
                      title={item.label}
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      {item.Icon ? (
                        <item.Icon className="h-[15px] w-[15px]" style={{ color: item.tint }} strokeWidth={2} />
                      ) : (
                        <span className="text-sm font-semibold text-white" style={{ color: item.tint }}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="absolute bottom-0 left-0 right-0 z-20" delay={600}>
        <div className="relative pb-14">
          <p className="pt-3 text-center text-[0.62rem] font-medium uppercase tracking-[0.42em] text-white/35">
            Technologies I work with
          </p>
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
            }}
          >
            <div className="flex w-max items-center gap-14 px-6 py-4 animated-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <span
                  key={`${skill}-${idx}`}
                  className="marquee-hover shrink-0 cursor-pointer text-sm font-medium tracking-[0.24em]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Hero
