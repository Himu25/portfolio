"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCircleCheck,
  faDesktop,
  faPlay,
  faGavel,
  faPenNib,
  faServer,
  faTicket,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
import projects from "@/data/projects";
import Strings from "@/constants/strings";
import { cn } from "@/utils/cn";

const PROJECT_ICON: Record<string, typeof faServer> = {
  shipgoods: faTruckFast,
  bidkaro: faGavel,
  "ticketing-app": faTicket,
  "ai-blog": faPenNib,
};

function HighlightList({ title, icon, items }: { title: string; icon: typeof faServer; items: string[] }) {
  return (
    <div className="min-w-0">
      <h4 className="mono flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-[var(--ink)]">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--accent-soft)] text-[var(--accent)]">
          <FontAwesomeIcon icon={icon} className="text-[11px]" />
        </span>
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((line) => (
          <li key={line} className="flex gap-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            <FontAwesomeIcon icon={faCircleCheck} className="mt-1 shrink-0 text-[var(--accent-2)]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects({ id }: { id: string }) {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const isVideo = project.url?.includes("drive.google");

  return (
    <section id={id} className="section-pad relative overflow-hidden border-y border-[var(--line)] bg-[#eef7f8]">
      {/* Same blueprint treatment as Experience, in a teal tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,145,178,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.16),transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.12),transparent_70%)]" aria-hidden />

      <div className="site-shell relative">
        <Reveal>
          <p className="eyebrow">projects</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display max-w-3xl text-4xl font-bold md:text-5xl">
              Projects that show how I think about <span className="text-gradient">systems.</span>
            </h2>
            <a
              href={Strings.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mono inline-flex items-center gap-2 text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              <FontAwesomeIcon icon={faGithub} /> $ ls github.com/{Strings.githubUsername}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-5 lg:grid-cols-[300px_1fr]">
            {/* Project tabs */}
            <div
              role="tablist"
              aria-label="Projects"
              className="flex gap-2 self-start overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:sticky lg:top-24 lg:flex-col lg:overflow-visible lg:pb-0"
            >
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative min-w-[15rem] shrink-0 rounded-xl border p-4 text-left transition-all duration-300 lg:min-w-0",
                    i === active
                      ? "border-[rgba(8,145,178,0.35)] bg-white shadow-[0_18px_40px_-24px_rgba(8,145,178,0.6)]"
                      : "border-transparent bg-white/50 hover:border-[var(--line)] hover:bg-white"
                  )}
                >
                  {i === active ? (
                    <motion.span
                      layoutId="project-active-bar"
                      className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--accent-2)] to-[var(--accent)]"
                    />
                  ) : null}
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors",
                        i === active
                          ? "bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] text-white"
                          : "bg-[var(--accent-soft)] text-[var(--accent)]"
                      )}
                    >
                      <FontAwesomeIcon icon={PROJECT_ICON[p.id] ?? faServer} />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-[var(--ink)]">{p.title}</p>
                      <p className="mono truncate text-[11px] text-[var(--muted)]">
                        {p.tags?.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </div>
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
                <span className="mono ml-2 truncate text-xs text-[var(--muted)]">~/projects/{project.id}/README.md</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] text-xl text-white shadow-[0_12px_24px_-12px_rgba(37,99,235,0.7)]">
                        <FontAwesomeIcon icon={PROJECT_ICON[project.id] ?? faServer} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="display text-2xl font-bold sm:text-3xl">{project.title}</h3>
                        <p className="mt-2 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)]">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-[var(--line)] bg-white px-3 py-2 text-xs font-medium text-[var(--ink-soft)] transition-colors hover:border-[var(--ink)] hover:text-[var(--ink)]"
                        >
                          <FontAwesomeIcon icon={faGithub} className="text-sm" /> Code
                        </a>
                      ) : null}
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-[var(--ink)] px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-[var(--accent)]"
                        >
                          <FontAwesomeIcon icon={isVideo ? faPlay : faArrowUpRightFromSquare} className="text-[11px]" />
                          {isVideo ? "Demo video" : "Live site"}
                        </a>
                      ) : null}
                    </div>
                  </div>

                  {project.highlights ? (
                    <div className="mt-8 grid gap-8 border-t border-[var(--line)] pt-7 xl:grid-cols-2">
                      <HighlightList title="Backend" icon={faServer} items={project.highlights.backend} />
                      <HighlightList title="Frontend" icon={faDesktop} items={project.highlights.frontend} />
                    </div>
                  ) : null}

                  <div className="mt-7 flex flex-wrap gap-1.5 border-t border-[var(--line)] pt-5">
                    {project.tags?.map((t) => (
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
