"use client";

import Image from "next/image";
import skills from "@/data/skills";
import { SkillLevel } from "@/types";

const levelLabel: Record<SkillLevel, string> = {
  [SkillLevel.Expert]: "Expert",
  [SkillLevel.Intermediate]: "Intermediate",
  [SkillLevel.Beginner]: "Familiar",
};

export default function Skills({ id }: { id: string }) {
  const marqueeSkills = [
    ...skills.flatMap((group) => group.items),
    ...skills.flatMap((group) => group.items),
  ];

  return (
    <section id={id} className="section-pad relative w-full max-w-full overflow-x-hidden">
      <div className="site-shell">
        <div>
          <p className="mono text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
            Skills
          </p>
          <h2 className="display mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
            Tools I use to move systems from idea to production.
          </h2>
        </div>

        <div className="mt-10 space-y-10 md:mt-14 md:space-y-12">
          {skills.map((group) => (
            <div key={group.title}>
              <h3 className="mono mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {group.items.map((skill) => (
                  <div
                    key={skill.title}
                    className="group flex flex-col items-center gap-3 border border-[var(--line)] bg-[var(--bg-elevated)] px-3 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-white sm:px-4 sm:py-6"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-[0_1px_0_rgba(11,18,32,0.06)] transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={36}
                          height={36}
                          className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                        />
                      ) : (
                        <span className="display text-lg font-bold text-[var(--accent)]">
                          {skill.title.slice(0, 1)}
                        </span>
                      )}
                    </span>

                    <div>
                      <p className="text-sm font-semibold leading-snug text-[var(--ink)] sm:text-base">
                        {skill.title}
                      </p>
                      {typeof skill.level === "number" ? (
                        <p className="mono mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
                          {levelLabel[skill.level]}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14 w-full max-w-full overflow-hidden border-y border-[var(--line)] bg-[var(--ink)] py-3 text-[#f3f6f9] md:mt-16 md:py-4">
        <div className="marquee-track gap-8 px-4 md:gap-10">
          {marqueeSkills.map((skill, idx) => (
            <span
              key={`${skill.title}-${idx}`}
              className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap"
            >
              {skill.icon ? (
                <Image
                  src={skill.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 rounded-sm bg-white object-contain p-0.5"
                />
              ) : null}
              <span className="display text-lg font-semibold tracking-tight md:text-2xl">
                {skill.title}
              </span>
              <span className="text-[var(--accent)]">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
