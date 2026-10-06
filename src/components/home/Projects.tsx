"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
import ProjectCover from "@/components/home/ui/ProjectCover";
import projects from "@/data/projects";

export default function Projects({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="section-pad relative w-full max-w-full overflow-x-hidden"
    >
      <div className="site-shell">
        <Reveal>
          <p className="mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Selected work
          </p>
          <h2 className="display mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Projects that show how I think about systems.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-28px_rgba(11,18,32,0.5)] sm:p-6">
                <div
                  className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(14,116,144,0.5), rgba(37,99,235,0.5))",
                    padding: 1,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                  aria-hidden
                />

                <ProjectCover project={project} />

                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="mono text-xs text-[var(--muted)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="display mt-1 text-2xl font-bold md:text-[1.75rem]">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#f3f6f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      ) : null}
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#f3f6f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                        >
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                    {project.about ?? project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="mono rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
