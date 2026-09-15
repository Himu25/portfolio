"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
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

        <div className="mt-10 space-y-4 md:mt-14">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.04}>
              <article className="group grid gap-5 border border-[var(--line)] bg-[var(--bg-elevated)] p-5 transition-colors duration-300 hover:border-[var(--ink)] sm:p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:p-8">
                <span className="mono text-sm text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="display text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
                    {project.about ?? project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex h-11 w-11 items-center justify-center border border-[var(--line)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#f3f6f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
                      className="flex h-11 w-11 items-center justify-center border border-[var(--line)] transition-colors hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[#f3f6f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
