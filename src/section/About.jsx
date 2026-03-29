import React from "react";
import { Code2, Gauge, Layers3, Sparkles, TerminalSquare } from "lucide-react";
import Reveal from "../componets/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#020512] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,178,166,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(32,178,166,0.08),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <Reveal
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.28em] text-primary/90"
              delay={80}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Full-Stack Developer
            </Reveal>

            <Reveal
              as="h2"
              className="max-w-xl text-3xl font-semibold leading-[0.95] text-white sm:text-4xl lg:text-3xl"
              delay={140}
            >
              Crafting Scalable <span></span>
              <span className="block text-primary sm:text-4xl lg:text-4xl">
                Digital Solutions
              </span>
              <span className="text-foreground">
                <b>
                  Tailored to Your Business.
                  {/* <span className="sm:text-4xl lg:text-4xl text-primary"> (any type)</span> */}
                </b>
              </span>
            </Reveal>

            <Reveal
              className="mt-8 max-w-xl text-base leading-8 text-white/56 sm:text-lg"
              delay={220}
            >
              "Hi, I'm Safwan, a MERN Stack Developer with a passion for turning
              complex ideas into fast, user-friendly digital products. I
              specialize in building end-to-end solutions for Restaurants,
              Online Stores, and Educational Providers. With expertise in
              MongoDB, Express, React, and Node.js, I focus on writing clean,
              maintainable code and delivering high-performance applications.
              Whether it's a seamless food-ordering flow or a complex learning
              dashboard, I build with the user and the business goals in mind.
              Let’s collaborate to build something exceptional."
            </Reveal>

            <Reveal
              className="mt-5 max-w-xl text-base leading-8 text-white/44 sm:text-lg"
              delay={280}
            >
              Next.js when server-side rendering or SEO needs an extra push,
              plus REST APIs, Git/GitHub, responsive design, and practical
              testing. Restaurant projects taught me to build menus,
              table-booking flows, and payment pages that run smoothly on any
              screen. Education projects taught me to create dashboards where
              teachers track progress and students find resources without
              feeling lost.
            </Reveal>

            

            <Reveal
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6"
              delay={420}
            >
              <div>
                <div className="text-3xl font-semibold text-white">5+</div>
                <div className="mt-2 text-sm text-white/42">Happy Clients</div>
              </div>
              <div className="border-l border-primary/40 pl-6">
                <div className="text-3xl font-semibold text-white">2.5K+</div>
                <div className="mt-2 text-sm text-white/42">Code Commits</div>
              </div>
              <div className="border-l border-primary/40 pl-6">
                <div className="text-3xl font-semibold text-white">50+</div>
                <div className="mt-2 text-sm text-white/42">GitHub Stars</div>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mt-10 lg:mt-40" delay={180}>
            <div className="absolute -right-10 bottom-[-70px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="grid gap-4">
              <Reveal
                className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
                delay={80}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <TerminalSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Specialized Expertise
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/52">
                       Expert in developing high-conversion E-commerce platforms, Restaurant ordering systems, and EdTech dashboards tailored to your business needs.
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-4 md:grid-cols-2">
                <Reveal
                  className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
                  delay={160}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                   Clean & Scalable Code
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/52">
                    Writing structured, well-documented code and modern best practices to ensure your application can grow without limits.
                  </p>
                </Reveal>

                <Reveal
                  className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
                  delay={240}
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Optimized Performance
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/52">
                    Delivering lightning-fast load times and smooth user experiences through efficient API design and frontend optimization.
                  </p>
                </Reveal>
              </div>

              <Reveal
                className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]"
                delay={320}
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Layers3 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Modern Workflow
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/52">
                      I blend design awareness, component thinking, and
                      practical delivery so each build feels complete.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
