"use client";

import { motion } from "framer-motion";
import Strings from "@/constants/strings";
import MagneticButton from "@/components/common/MagneticButton";

export default function Hero({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative flex min-h-[100svh] scroll-mt-20 items-center overflow-hidden pb-16 pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
        <div className="absolute -right-24 top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.22),transparent_68%)] float-soft" />
        <div className="absolute bottom-10 left-[-10%] h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(11,18,32,0.08),transparent_70%)]" />
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

      <div className="site-shell relative z-10 w-full animate-fade-up">
        <p className="mono mb-4 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
          {Strings.availability} · {Strings.seeking}
        </p>

        <h1 className="display max-w-5xl text-[clamp(2.75rem,11vw,8.5rem)] font-bold text-[var(--ink)]">
          {Strings.fullName}
        </h1>

        <p className="mt-6 max-w-2xl text-base text-[var(--ink-soft)] sm:text-lg md:text-xl">
          {Strings.role}. {Strings.tagline}
        </p>

        <p className="mono mt-4 max-w-2xl text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          {Strings.openLocationsLabel}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
          <MagneticButton href="/#contact">Let&apos;s talk</MagneticButton>
          <MagneticButton href={Strings.resumePath} variant="ghost" external>
            View resume
          </MagneticButton>
          <MagneticButton href="/#projects" variant="ghost">
            See work
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
