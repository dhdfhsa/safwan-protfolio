import React from 'react'
import { Mail, MapPin, Phone, SendHorizontal, Sparkles } from 'lucide-react'
import Reveal from '../componets/Reveal'

const contactItems = [
  { label: 'Email', value: 'safwanwr111@gmail.com', Icon: Mail },
  { label: 'Phone', value: '++8801538033447', Icon: Phone },
  { label: 'Location', value: 'BARI,GAzipur,Dhaka and R/12 , Nurjahan road, Mohammadpur,Dhaka', Icon: MapPin },
]

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#020512] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(32,178,166,0.08),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(32,178,166,0.05),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.22em] text-primary/90" delay={80}>
            <Sparkles className="h-3.5 w-3.5" />
            Get In Touch
          </Reveal>
          <Reveal as="h2" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" delay={140}>
            Let&apos;s build <span className="font-serif italic font-normal text-white/95">something great.</span>
          </Reveal>
          <Reveal as="p" className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/42 sm:text-base" delay={220}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can work together.
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal as="form" className="rounded-[1.8rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)]" delay={120}>
            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Name</label>
                <input
                  type="text"
                  placeholder="MustaB"
                  className="w-full rounded-2xl border border-white/8 bg-[#0b1118] px-4 py-3 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-primary/40 focus:shadow-[0_0_0_1px_rgba(32,178,166,0.25)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Email</label>
                <input
                  type="email"
                  placeholder="jarif@shovon.com"
                  className="w-full rounded-2xl border border-white/8 bg-[#0b1118] px-4 py-3 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-primary/40 focus:shadow-[0_0_0_1px_rgba(32,178,166,0.25)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">Message</label>
                <textarea
                  rows="5"
                  placeholder="Hey, I really want to hire you!!"
                  className="w-full rounded-2xl border border-primary/30 bg-[#0b1118] px-4 py-3 text-white placeholder:text-white/30 outline-none transition duration-300 focus:border-primary/60 focus:shadow-[0_0_0_1px_rgba(32,178,166,0.32)]"
                />
              </div>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-[#04110f] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(32,178,166,0.28)]"
              >
                Send Message
                <SendHorizontal className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="rounded-[1.8rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)]" delay={200}>
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>

              <div className="mt-6 space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                      <item.Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-white/42">{item.label}</div>
                      <div className="text-base font-medium text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="rounded-[1.8rem] border border-white/8 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.24)]" delay={280}>
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(32,178,166,0.8)]" />
                Currently Available
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
                I&apos;m currently open to new opportunities and exciting projects. Whether you need a full-time engineer or a freelance consultant, let&apos;s talk.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
