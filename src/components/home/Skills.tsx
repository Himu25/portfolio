"use client";

import Image from "next/image";
import skills from "@/data/skills";
import Reveal from "@/components/common/Reveal";
import TiltCard from "@/components/common/TiltCard";

const fileName = (title: string) =>
  title.toLowerCase().replace(/&/g, "").replace(/\s+/g, "-").replace(/-+/g, "-") + ".ts";

export default function Skills({ id }: { id: string }) {
  return (
    <section id={id} className="section-pad relative">
      <div className="site-shell">
        <Reveal>
          <p className="eyebrow">skills</p>
          <h2 className="display mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            The stack I ship <span className="text-gradient">production code</span> with.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.04} className="h-full">
              <TiltCard max={6} className="card h-full overflow-hidden rounded-xl">
                <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-4 py-2.5">
                  <span className="flex gap-1">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </span>
                  <span className="mono ml-2 text-xs text-[var(--muted)]">{fileName(group.title)}</span>
                </div>
                <div className="tilt-pop px-4 pb-5 pt-4">
                  <p className="mono text-[13px]">
                    <span className="text-[#cf222e]">export const</span>{" "}
                    <span className="text-[#0550ae]">{group.title.split(" ")[0].toLowerCase()}</span>{" "}
                    <span className="text-[var(--muted)]">= [</span>
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2 pl-3">
                    {group.items.map((skill) => (
                      <li
                        key={skill.title}
                        className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-white px-2.5 py-1.5 text-sm text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
                      >
                        {skill.icon ? (
                          <Image src={skill.icon} alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                        ) : null}
                        {skill.title}
                      </li>
                    ))}
                  </ul>
                  <p className="mono mt-3 text-[13px] text-[var(--muted)]">];</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
