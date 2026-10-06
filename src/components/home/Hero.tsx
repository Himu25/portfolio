"use client";

import { motion } from "framer-motion";
import Strings from "@/constants/strings";
import MagneticButton from "@/components/common/MagneticButton";

const BADGES = ["Backend Engineer", "Agentic AI", "Immediate Joiner"];

const STACK_LINE = "Node.js · TypeScript · PostgreSQL · Redis · Kafka · Groq";

export default function Hero({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden pb-16 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute -right-24 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.24),transparent_68%)] float-soft" />
        <div className="absolute bottom-10 left-[-10%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_70%)]" />
        <div className="display absolute right-[-4%] top-[18%] hidden select-none text-[clamp(8rem,22vw,16rem)] font-extrabold leading-none text-[rgba(11,18,32,0.045)] md:block">
          SE
        </div>
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full opacity-40"
          viewBox="0 0 1200 160"
          fill="none"
        >
          <motion.path
            d="M0 120 C 200 40, 400 160, 600 80 S 1000 20, 1200 100"
            stroke="currentColor"
            strokeWidth="1.25"
            className="text-[var(--accent)]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="site-shell relative z-10 grid w-full animate-fade-up items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
        <div>
          <p className="mono mb-4 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            {Strings.availability} · {Strings.seeking}
          </p>

          <h1 className="display max-w-5xl text-[clamp(2.75rem,10vw,7.5rem)] font-bold text-[var(--ink)]">
            {Strings.fullName.split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] via-[#0ea5e9] to-[#2563eb] bg-clip-text text-transparent">
              {Strings.fullName.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-[var(--ink-soft)] sm:text-lg md:text-xl">
            {Strings.role}. {Strings.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="mono rounded-full border border-[var(--line)] bg-white/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[var(--ink-soft)] backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mono mt-5 max-w-2xl text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
            {Strings.openLocationsLabel}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <MagneticButton
              href="/#contact"
              className="!bg-gradient-to-r !from-[var(--accent)] !to-[#2563eb] hover:!opacity-90"
            >
              Let&apos;s talk
            </MagneticButton>
            <MagneticButton href={Strings.resumePath} variant="ghost" external>
              View resume
            </MagneticButton>
            <MagneticButton href="/#projects" variant="ghost">
              See work
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[24rem] lg:block">
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(14,116,144,0.45), rgba(37,99,235,0.45))",
            }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-[#0b1220] text-[#e6ebf0] shadow-[0_30px_80px_-30px_rgba(11,18,32,0.55)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="mono ml-3 text-[11px] text-white/40">whoami.sh</span>
            </div>

            <div className="mono space-y-3 px-5 py-6 text-[13px] leading-relaxed sm:text-sm">
              <p>
                <span className="text-[#27c93f]">➜</span>{" "}
                <span className="text-white/50">~</span> whoami
              </p>
              <p className="text-white">
                {Strings.fullName} <span className="text-white/40">— {Strings.role}</span>
              </p>

              <p className="pt-2">
                <span className="text-[#27c93f]">➜</span>{" "}
                <span className="text-white/50">~</span> status --check
              </p>
              <p className="text-[#7ee787]">✓ Immediate joiner</p>
              <p className="text-[#7ee787]">✓ Open to {Strings.openLocations.length} cities</p>

              <p className="pt-2">
                <span className="text-[#27c93f]">➜</span>{" "}
                <span className="text-white/50">~</span> stack --top
              </p>
              <p className="text-[#38bdf8]">{STACK_LINE}</p>

              <p className="pt-2 text-white/60">
                <span className="text-[#27c93f]">➜</span>{" "}
                <span className="text-white/50">~</span>{" "}
                <span className="border-r-2 border-white/60 pr-0.5 animate-pulse">
                  ask me anything
                </span>
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div>
              <p className="text-xs font-semibold text-[var(--ink)]">Open to work</p>
              <p className="mono text-[10px] uppercase tracking-[0.1em] text-[var(--muted)]">
                Immediate joiner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
