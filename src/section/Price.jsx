import React from 'react'
import { ArrowRight, BadgeCheck, Check, Crown, Sparkles } from 'lucide-react'
import Reveal from '../componets/Reveal'

const plans = [
{
  name: 'E-commerce Pro',
  price: '৳75,000',
  subtitle: 'A full-scale online store built for high performance and seamless sales.',
  badge: 'Top Choice',
  featured: true,
  accent: 'from-blue-500/35 via-white/10 to-transparent',
  buttonLabel: 'Start Selling',
  features: [
    'Complete MERN Stack Storefront',
    'Advanced Inventory Management System',
    'Multi-step Checkout with SSLCommerz/Nagad',
    'User Wishlists and Review System',
    'Dynamic Product Filtering and Search',
  ],
  extras: ['Admin Sales Analytics', 'Cloudinary Image Hosting', 'Order Tracking', 'SEO Optimized'],
},
{
  name: 'Restaurant Pro',
  price: '৳65,000', // Adjusted slightly for MERN/Database complexity
  subtitle: 'The complete solution for established restaurants looking to automate orders and grow.',
  badge: 'Most Popular',
  featured: true,
  accent: 'from-primary/35 via-white/10 to-transparent',
  buttonLabel: 'Launch Your Restaurant',
  features: [
    'Full MERN Stack Food Delivery System',
    'Dynamic Menu Management (Add/Edit/Delete)',
    'Advanced Admin Dashboard & Order Tracking',
    'Secure User Authentication (Login/Signup)',
    'Cloud-based Image Storage (Cloudinary Integration)',
    'Fully Responsive UI for Mobile Ordering',
  ],
  extras: [
    'Local Payment Gateway (bkash/Nagad/SSL)', 
    'Real-time Order Status Updates', 
    'Email Notifications', 
    '3 Months Tech Support'
  ],
},
{
  name: 'EdTech / LMS Solution',
  price: '৳95,000',
  subtitle: 'A robust Learning Management System for coaching centers or online creators.',
  badge: 'Enterprise Ready',
  featured: false,
  accent: 'from-green-500/35 via-white/10 to-transparent',
  buttonLabel: 'Build Your Academy',
  features: [
    'Course Creation & Video Content Hosting',
    'Student Dashboard with Progress Tracking',
    'Quiz & Certification Generation System',
    'Subscription-based Access Control',
    'Live Class Integration (Zoom/Google Meet)',
  ],
  extras: ['PDF Resource Uploads', 'Student Enrollment Analytics', 'Secure Payment Gateway', 'Student Forum'],
},
]

const Price = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,178,166,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(32,178,166,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90" delay={80}>
            <Sparkles className="h-3.5 w-3.5" />
            Flexible Pricing
          </Reveal>
          <Reveal as="h2" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" delay={140}>
            Choose the package that fits your{' '}
            <span className="font-serif italic font-normal text-white/95">next launch.</span>
          </Reveal>
          <Reveal as="p" className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/42 sm:text-base" delay={220}>
            These packages are shaped for the way I build websites: clear scope, clean UI, and strong delivery for modern businesses.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal
              key={plan.name}
              className={`relative overflow-hidden rounded-[1.9rem] border p-6 shadow-[0_22px_55px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.34)] ${
                plan.featured
                  ? 'border-primary/30 bg-[#0a0f16] lg:scale-[1.03]'
                  : 'border-white/8 bg-white/5'
              }`}
              delay={120 + index * 110}
            >
              <div className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${plan.accent}`} />
              {plan.featured ? (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.7rem] font-medium tracking-[0.18em] text-primary">
                  <Crown className="h-3.5 w-3.5" />
                  {plan.badge}
                </div>
              ) : (
                <div className="absolute right-5 top-5 inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[0.7rem] font-medium tracking-[0.18em] text-white/55 backdrop-blur-sm">
                  {plan.badge}
                </div>
              )}

              <div className="relative flex h-full flex-col">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/52">{plan.subtitle}</p>
                </div>

                <div className="mt-7">
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-semibold tracking-tight text-white">{plan.price}</span>
                    <span className="pb-1 text-sm text-white/45">/project</span>
                  </div>
                  <p className="mt-2 text-sm text-white/42">Estimated scope with room for custom requests if needed.</p>
                </div>

                <button
                  type="button"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-semibold transition duration-300 ${
                    plan.featured
                      ? 'bg-primary text-[#04110f] shadow-[0_18px_36px_rgba(32,178,166,0.26)] hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(32,178,166,0.3)]'
                      : 'border border-white/12 bg-white/5 text-white/88 hover:-translate-y-0.5 hover:border-primary/25 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {plan.buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="mt-8 rounded-[1.3rem] border border-white/8 bg-black/20 p-4 backdrop-blur-sm">
                  <div className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/35">
                    What's included
                  </div>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                        <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full ${plan.featured ? 'bg-primary/15 text-primary' : 'bg-white/10 text-primary'}`}>
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[1.2rem] border border-white/8 bg-white/5 p-4">
                  <div className="text-[0.7rem] font-medium uppercase tracking-[0.3em] text-white/35">
                    Built with
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {plan.extras.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full border px-3 py-1 text-xs font-medium ${
                          plan.featured
                            ? 'border-primary/15 bg-primary/10 text-primary/90'
                            : 'border-white/10 bg-black/20 text-white/60'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {plan.featured ? (
                  <div className="mt-6 rounded-[1.2rem] border border-white/8 bg-[linear-gradient(135deg,rgba(32,178,166,0.12),rgba(255,255,255,0.04))] p-4">
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <BadgeCheck className="h-4 w-4" />
                      Why this plan?
                    </div>
                    <p className="mt-2 text-sm leading-7 text-white/62">
                      Best for clients who want a polished, conversion-ready website with enough room to grow into a larger product later.
                    </p>
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-[1.6rem] border border-white/8 bg-white/5 px-6 py-5 text-center text-sm leading-7 text-white/52 shadow-[0_18px_45px_rgba(0,0,0,0.2)]" delay={420}>
          Every package includes responsive design, a smooth handoff, and post-launch support for small fixes after delivery.
          <span className="mx-2 inline-block text-primary">|</span>
          Need something custom? Let's tailor the scope to your product and timeline.
        </Reveal>
      </div>
    </section>
  )
}

export default Price
