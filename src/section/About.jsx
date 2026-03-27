import React from "react";
import { Code2, Gauge, Layers3, Sparkles, TerminalSquare } from "lucide-react";

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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium tracking-[0.28em] text-primary/90">
              <Sparkles className="h-3.5 w-3.5" />
              Full-Stack Developer
            </div>

            <h2 className="max-w-xl text-3xl font-semibold leading-[0.95] text-white sm:text-4xl lg:text-3xl">
              Crafting Scalable
              <span className="block text-primary sm:text-4xl lg:text-4xl">
                {" "}
                Restaurant & EdTech Websites
              </span>{" "}
              <span className="text-foreground ">
                {" "}
                <b>
                  and Which you want{" "}
                  <span className="sm:text-4xl lg:text-4xl text-primary">
                    (Anytype
                  </span>{" "}
                  )
                </b>{" "}
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/56 sm:text-lg">
              Hi, I’m Safwan, a MERN stack web developer with a year of hands-on
              experience turning ideas into fast, friendly sites for restaurants
              and education providers. 🛠️ What I work with MongoDB, Express,
              React, Node — full-stack JavaScript from database to browser
              Tailwind CSS for clean, consistent styling in half the time
              <p className="mt-5 max-w-xl text-base leading-8 text-white/44 sm:text-lg">
                Next.js (beginner–intermediate) when server-side rendering or
                SEO needs an extra push REST APIs, Git/GitHub, responsive design
                & basic testing
              </p>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/38 sm:text-sm">
                🍽️ Restaurant projectsBuilt menus, table-booking flows and
                payment pages that run smoothly on any screen, even during the
                dinner rush. 🎓 Education projectsCreated dashboards where
                teachers track progress and students find resources without
                feeling lost. 🤝 How I workClear talk, steady commits, and a
                focus on small wins that add up. I enjoy pairing with designers,
                listening to real user feedback, and keeping code readable for
                the next dev who opens it. 📈 What’s nextDeepening my Next.js
                skills, exploring TypeScript, and joining a team that values
                clean code and honest feedback. 👉 If you’re looking for someone
                who cares about both the JavaScript and the people using it,
                let’s connect. Check my featured section for a live demo of my
                latest food-ordering app!
              </p>
            </p>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6">
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
            </div>
          </div>

          <div className="relative mt-10 lg:mt-40">
            <div className="absolute -right-10 bottom-[-70px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <TerminalSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Expertise
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/52">
                      Specialized in building scalable web applications with
                      modern technologies and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Clean Code
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/52">
                    Writing maintainable, well-structured code that scales with
                    products and teams.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Performance
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-white/52">
                    Optimizing speed, responsiveness, and rendering for a
                    smoother experience.
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white/7 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
