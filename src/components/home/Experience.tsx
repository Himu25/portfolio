"use client";

import { Fragment } from "react";
import Reveal from "@/components/common/Reveal";
import experiences from "@/data/experiences";

const METRIC_PATTERN =
  /(~?\d+(?:\.\d+)?(?:x\b|%|\+)|\d+(?:\.\d+)?s\b|~?\d+-(?:minute|step))/gi;

function Highlighted({ text }: { text: string }) {
  // The pattern has a single capturing group, so String.split alternates
  // [plain, match, plain, match, ...] — odd indices are always the metric matches.
  const parts = text.split(METRIC_PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-[var(--accent)]">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}

export default function Experience({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="section-pad relative w-full max-w-full overflow-x-hidden"
    >
      <div className="site-shell">
        <Reveal>
          <p className="mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Experience
          </p>
          <h2 className="display mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Where I&apos;ve built and shipped.
          </h2>
        </Reveal>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute bottom-0 left-[7px] top-3 w-px bg-[var(--line)] md:left-[11px]" />

          {experiences.map((exp, index) => (
            <Reveal key={`${exp.company}-${exp.startDate}`} delay={index * 0.05}>
              <article className="relative grid gap-4 border-b border-[var(--line)] py-8 pl-10 last:border-b-0 md:grid-cols-[220px_1fr] md:gap-10 md:py-10 md:pl-14">
                <span
                  className="absolute left-0 top-10 h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] md:top-12"
                  aria-hidden
                />

                <div>
                  <p className="mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                    {exp.startDate} — {exp.endDate ?? "Present"}
                  </p>
                  <h3 className="display mt-2 text-2xl font-bold">
                    {exp.company}
                  </h3>
                  <p className="mt-1 font-medium text-[var(--ink-soft)]">
                    {exp.designation}
                  </p>
                  <p className="mono mt-2 text-xs text-[var(--muted)]">
                    {exp.location}
                  </p>
                </div>

                <div>
                  {exp.shortDescription ? (
                    <p className="mb-3 text-sm font-medium leading-relaxed text-[var(--ink)] sm:text-base">
                      <Highlighted text={exp.shortDescription} />
                    </p>
                  ) : null}

                  <ul className="space-y-3">
                    {exp.description.map((line) => (
                      <li
                        key={line}
                        className="relative pl-4 text-sm leading-relaxed text-[var(--ink-soft)] before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)] sm:text-base"
                      >
                        <Highlighted text={line} />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
