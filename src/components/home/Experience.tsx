"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import experiences from "@/data/experiences";
import { cn } from "@/utils/cn";

const METRIC_PATTERN =
  /(~?\d+(?:\.\d+)?(?:x\b|%|\+)|\d+(?:\.\d+)?s\b|~?\d+-(?:minute|step))/gi;

// Tools named in each role's bullets, shown as a quick-scan stack line.
const STACK: Record<string, string[]> = {
  "MAQ Software": ["Node.js", "TypeScript", "PostgreSQL", "Redis", "JWT", "RBAC", "REST APIs"],
  MobiGuest: ["React", "Redux", "Next.js", "Node.js", "Firebase", "OpenAI API", "REST APIs"],
  "Nixon Bit": ["React", "Redux", "Formik", "Yup", "REST APIs"],
};

// Headline numbers per role, pulled from the bullets.
const HIGHLIGHTS: Record<string, { value: string; label: string }[]> = {
  "MAQ Software": [
    { value: "75%", label: "lower query latency" },
    { value: "10+", label: "REST APIs built" },
    { value: "RBAC", label: "multi-tenant isolation" },
  ],
  MobiGuest: [
    { value: "60%", label: "less front-desk work" },
    { value: "30+", label: "REST APIs integrated" },
    { value: "5-step", label: "digital check-in" },
  ],
  "Nixon Bit": [
    { value: "CDR/IPDR", label: "file-scanning pipeline" },
    { value: "5", label: "forms validated (Formik + Yup)" },
    { value: "Geo", label: "mapped case analysis" },
  ],
};

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
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id={id} className="section-pad relative overflow-hidden border-y border-[var(--line)] bg-[#eef3fb]">
      {/* Blueprint grid + soft glows */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.14),transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)]" aria-hidden />

      <div className="site-shell relative">
        <Reveal>
          <p className="eyebrow">experience</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-3xl text-4xl font-bold md:text-5xl">
              Where I&apos;ve built and <span className="text-gradient">shipped.</span>
            </h2>
            <p className="mono text-xs text-[var(--muted)]">
              $ git log --author=&quot;himanshu&quot; --oneline
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-5 lg:grid-cols-[300px_1fr]">
            {/* Company tabs */}
            <div role="tablist" aria-label="Companies" className="flex gap-2 self-start overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0">
              {experiences.map((e, i) => (
                <button
                  key={e.company}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative min-w-[15rem] shrink-0 rounded-xl border p-4 text-left transition-all duration-300 lg:min-w-0",
                    i === active
                      ? "border-[rgba(37,99,235,0.35)] bg-white shadow-[0_18px_40px_-24px_rgba(37,99,235,0.6)]"
                      : "border-transparent bg-white/50 hover:border-[var(--line)] hover:bg-white"
                  )}
                >
                  {i === active ? (
                    <motion.span
                      layoutId="exp-active-bar"
                      className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--accent-2)] to-[var(--accent)]"
                    />
                  ) : null}
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1 transition-colors",
                        i === active ? "border-[rgba(37,99,235,0.35)]" : "border-[var(--line)]"
                      )}
                    >
                      {e.logo ? (
                        <Image src={e.logo} alt={`${e.company} logo`} width={40} height={40} className="h-full w-full object-contain" />
                      ) : (
                        <span className="display text-sm font-bold text-[var(--accent)]">{e.company.slice(0, 2)}</span>
                      )}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-[var(--ink)]">{e.company}</p>
                      <p className="truncate text-xs text-[var(--muted)]">{e.designation}</p>
                    </div>
                  </div>
                  <p className="mono mt-3 text-[11px] text-[var(--muted)]">
                    {e.startDate} → {e.endDate ?? "Present"}
                  </p>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <div className="card relative min-w-0 overflow-hidden rounded-2xl">
              <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-5 py-2.5">
                <span className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </span>
                <span className="mono ml-2 truncate text-xs text-[var(--muted)]">
                  ~/experience/{exp.company.toLowerCase().replace(/\s+/g, "-")}.md
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      {exp.logo ? (
                        <a
                          href={exp.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${exp.company} on LinkedIn`}
                          className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] bg-white p-1.5 transition-shadow hover:shadow-md"
                        >
                          <Image src={exp.logo} alt={`${exp.company} logo`} width={56} height={56} className="h-full w-full object-contain" />
                        </a>
                      ) : null}
                      <div className="min-w-0">
                      <h3 className="display text-2xl font-bold sm:text-3xl">
                        {exp.designation}{" "}
                        <a
                          href={exp.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent)] underline-offset-4 hover:underline"
                        >
                          @ {exp.company}
                        </a>
                      </h3>
                      <p className="mono mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--muted)]">
                        <span>
                          {exp.startDate} — {exp.endDate ?? "Present"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FontAwesomeIcon icon={faLocationDot} /> {exp.location}
                        </span>
                      </p>
                      </div>
                    </div>
                    {exp.linkedInUrl ? (
                      <a
                        href={exp.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-xs font-medium text-[var(--ink-soft)] transition-colors hover:border-[#0a66c2] hover:text-[#0a66c2]"
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="text-sm text-[#0a66c2]" /> LinkedIn
                      </a>
                    ) : null}
                  </div>

                  {exp.shortDescription ? (
                    <p className="mt-5 text-base leading-relaxed text-[var(--ink-soft)]">
                      <Highlighted text={exp.shortDescription} />
                    </p>
                  ) : null}

                  <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                    {(HIGHLIGHTS[exp.company] ?? []).map((h) => (
                      <div key={h.label} className="rounded-xl border border-[var(--line)] bg-gradient-to-br from-white to-[#f1f5ff] p-3 sm:p-4">
                        <p className="display text-lg font-bold text-[var(--ink)] sm:text-2xl">{h.value}</p>
                        <p className="mt-1 text-[11px] leading-snug text-[var(--muted)] sm:text-xs">{h.label}</p>
                      </div>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.description.map((line) => (
                      <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[15px]">
                        <FontAwesomeIcon icon={faCircleCheck} className="mt-1 shrink-0 text-[var(--accent-2)]" />
                        <span>
                          <Highlighted text={line} />
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-5">
                    {(STACK[exp.company] ?? []).map((t) => (
                      <span key={t} className="mono rounded-md bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] text-[var(--accent)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
