"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBolt, faRobot, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import Reveal from "@/components/common/Reveal";
import education from "@/data/education";
import Strings from "@/constants/strings";

const FOCUS = [
  {
    icon: faBolt,
    title: "Performance",
    body: "Fast queries, smart caching and APIs that stay quick as traffic grows.",
  },
  {
    icon: faShieldHalved,
    title: "Reliability & security",
    body: "Authentication, access control and rate limiting built in from day one.",
  },
  {
    icon: faRobot,
    title: "AI-powered features",
    body: "LLM agents and function calling wired into real products.",
  },
];

export default function About({ id }: { id: string }) {
  const edu = education[0];

  const details = [
    { label: "Experience", value: "1 yr full-time · 1+ yr internships" },
    { label: "Education", value: `B.Tech CSE, IIIT Una · ${edu.period}` },
    { label: "Location", value: `${Strings.location} · open to relocate` },
  ];

  return (
    <section id={id} className="section-pad relative">
      <div className="site-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">about</p>
          <h2 className="display mt-4 text-4xl font-bold md:text-5xl">
            I make backends <span className="text-gradient">fast, safe,</span> and ready for AI.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            I&apos;m a backend-focused software engineer who enjoys turning messy problems into simple,
            dependable systems. I&apos;ve shipped work across enterprise SaaS, hotel tech and analytics
            products, from APIs and databases to the screens people use.
          </p>

          <dl className="mt-8 max-w-xl divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
                <dt className="mono w-28 shrink-0 text-xs uppercase tracking-[0.12em] text-[var(--muted)] sm:pt-0.5">
                  {d.label}
                </dt>
                <dd className="text-sm text-[var(--ink)] sm:text-[15px]">{d.value}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 py-3.5 sm:flex-row sm:gap-6">
              <dt className="mono w-28 shrink-0 text-xs uppercase tracking-[0.12em] text-[var(--muted)] sm:pt-0.5">
                Status
              </dt>
              <dd className="flex items-center gap-2 text-sm font-medium text-[var(--ink)] sm:text-[15px]">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {Strings.availability}
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08} className="lg:pt-10">
          <p className="mono text-xs uppercase tracking-[0.14em] text-[var(--muted)]">What I focus on</p>
          <ul className="mt-5 space-y-3">
            {FOCUS.map((f) => (
              <li key={f.title} className="card flex gap-4 rounded-xl p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <FontAwesomeIcon icon={f.icon} />
                </span>
                <div>
                  <h3 className="font-semibold text-[var(--ink)]">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <a
            href={Strings.dsaProfileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mono mt-6 inline-flex items-center gap-2 text-xs text-[var(--accent)] hover:underline"
          >
            300+ DSA problems solved <FontAwesomeIcon icon={faArrowRight} className="text-[10px]" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
