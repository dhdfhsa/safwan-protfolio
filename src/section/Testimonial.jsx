import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react'
import Reveal from '../componets/Reveal'

const testimonials = [
  {
    image: '/profile-photo-custom.jpg',
    quote:
      'Outstanding work on our React application. The solution was fast, scalable, and delivered with exceptional attention to detail and code quality.',
    name: 'Sarah Mitchell',
    role: 'CTO, TechStart Inc.',
    metric: '3x Faster Delivery',
  },
  {
    image: '/profile-photo.jpg',
    quote:
      'A thoughtful engineer who turns complex requirements into polished interfaces. Communication was clear, and the final product exceeded expectations.',
    name: 'Daniel Carter',
    role: 'Product Lead, Northstar',
    metric: '98% Satisfaction',
  },
  {
    image: '/hero-portrait-new.png',
    quote:
      'Reliable, detail-oriented, and very strong on frontend architecture. The project felt easy from kickoff to launch.',
    name: 'Maya Thompson',
    role: 'Founder, Studio Bloom',
    metric: '5-Star Delivery',
  },
]

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = testimonials[activeIndex]

  const goPrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="testimonial" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_34%),radial-gradient(circle_at_bottom,rgba(32,178,166,0.05),transparent_28%)]" />
      <div className="pointer-events-none absolute left-1/2 top-[56%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(32,178,166,0.24)_0%,rgba(32,178,166,0.14)_16%,rgba(32,178,166,0.08)_30%,rgba(32,178,166,0.04)_46%,transparent_72%)] blur-[1px]" />
      <div className="pointer-events-none absolute left-1/2 top-[56%] h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(32,178,166,0.06)_0%,transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90" delay={80}>
            <Sparkles className="h-3.5 w-3.5" />
            99 Testimonials
          </Reveal>
          <Reveal as="h2" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" delay={140}>
            Trusted by forward-thinking teams
          </Reveal>
          <Reveal as="p" className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/42 sm:text-base" delay={220}>
            Empowering clients with design-driven, high-quality solutions built for success.
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-1/2 hover:border-primary/25 hover:text-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition duration-300 hover:-translate-y-1/2 hover:border-primary/25 hover:text-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Reveal className="relative mx-auto w-full max-w-[300px]" delay={120}>
            <div className="overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.26)]">
              <img
                src={active.image}
                alt={active.name}
                className="h-[380px] w-full object-cover object-top grayscale"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,5,18,0)_0%,rgba(2,5,18,0.18)_58%,rgba(2,5,18,0.64)_100%)]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[1.15rem] border border-white/10 bg-black/45 px-4 py-4 backdrop-blur-sm">
                <div className="text-2xl font-semibold text-primary">{active.metric}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.22em] text-white/55">Faster Delivery</div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mx-auto max-w-2xl lg:pl-6" delay={200}>
            <div className="mb-5 text-primary">
              <Sparkles className="h-7 w-7" />
            </div>
            <blockquote className="text-2xl leading-[1.5] text-white sm:text-3xl">
              &quot;{active.quote}&quot;
            </blockquote>

            <div className="mt-8">
              <div className="text-lg font-semibold text-white">{active.name}</div>
              <div className="mt-1 text-sm text-white/45">{active.role}</div>
            </div>

            <div className="mt-8 flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-8 bg-primary' : 'w-2.5 bg-white/20 hover:bg-white/35'
                  }`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
