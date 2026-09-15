"use client";

import Reveal from "@/components/common/Reveal";
import education from "@/data/education";
import Strings from "@/constants/strings";

export default function About({ id }: { id: string }) {
  const edu = education[0];

  return (
    <section
      id={id}
      className="section-pad relative w-full max-w-full overflow-x-hidden"
    >
      <div className="site-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <p className="mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            About
          </p>
          <h2 className="display mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Backend engineer focused on scalable systems and Agentic AI.
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.08}>
            <p className="text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
              Immediate joiner looking for Backend and Agentic AI roles. Software
              Engineer with 1 year of industry experience and 1.5+ years of
              internship and freelance work building scalable backends,
              distributed systems, REST APIs, and production applications.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-[var(--line)] bg-[var(--bg-elevated)] p-4 sm:p-5">
              <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Open locations
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {Strings.openLocations.map((city) => (
                  <span
                    key={city}
                    className="border border-[var(--line)] bg-white px-3 py-1.5 text-sm text-[var(--ink-soft)]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="border-l-2 border-[var(--accent)] pl-5">
              <p className="mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Education
              </p>
              <p className="mt-2 text-lg font-semibold">{edu.school}</p>
              <p className="text-[var(--ink-soft)]">{edu.degree}</p>
              <p className="mono mt-1 text-sm text-[var(--muted)]">
                {edu.period} · {edu.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { label: "Availability", value: "Immediate" },
                { label: "Industry exp", value: "1 yr" },
                { label: "Intern + freelance", value: "1.5+ yrs" },
                { label: "DSA solved", value: "300+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="min-w-0 bg-[var(--bg-elevated)] p-3 sm:p-4"
                >
                  <p className="display break-words text-xl font-bold leading-tight text-[var(--accent)] sm:text-2xl md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mono mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href={Strings.dsaProfileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-xs uppercase tracking-[0.18em] text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              DSA profile →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
