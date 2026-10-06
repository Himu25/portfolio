import Image from "next/image";
import { IProjectItem } from "@/types";

const THEME: Record<string, { from: string; to: string; glyph: string }> = {
  shipgoods: { from: "#0e7490", to: "#0b1220", glyph: "SG" },
  bidkaro: { from: "#1d4ed8", to: "#0b1220", glyph: "BK" },
  "ticketing-app": { from: "#334155", to: "#0b1220", glyph: "TK" },
  "ai-blog": { from: "#0284c7", to: "#0b1220", glyph: "AB" },
};

export default function ProjectCover({ project }: { project: IProjectItem }) {
  const shot = project.screenshots?.[0];
  const theme = THEME[project.id] ?? { from: "#0e7490", to: "#0b1220", glyph: project.title.slice(0, 2).toUpperCase() };

  if (shot) {
    return (
      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl border border-[var(--line)] bg-white sm:aspect-[16/10]">
        <Image
          src={shot}
          alt={`${project.title} screenshot`}
          fill
          priority
          sizes="(min-width: 768px) 360px, 100vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>
    );
  }

  return (
    <div
      className="relative flex aspect-[16/11] w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--line)] sm:aspect-[16/10]"
      style={{ background: `linear-gradient(135deg, ${theme.from}, ${theme.to})` }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <span className="display select-none text-6xl font-extrabold tracking-tight text-white/15 sm:text-7xl">
        {theme.glyph}
      </span>

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5">
        {project.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="mono rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-white backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
