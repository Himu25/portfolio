"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Strings from "@/constants/strings";
import MagneticButton from "@/components/common/MagneticButton";
import TiltCard from "@/components/common/TiltCard";
import CodeWindow from "@/components/home/ui/CodeWindow";

const CodeGlyphs = dynamic(() => import("@/components/three/CodeGlyphs"), { ssr: false });

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28">
      <div className="site-shell relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p {...fade(0)} className="mono inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-white px-3 py-1.5 text-xs text-[var(--ink-soft)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[var(--muted)]">status:</span> open_to_work
            <span className="text-[var(--muted)]">·</span> {Strings.availability.toLowerCase()}
          </motion.p>

          <motion.p {...fade(0.05)} className="mono mt-8 text-sm text-[var(--accent)]">
            Hi, my name is
          </motion.p>
          <motion.h1
            {...fade(0.1)}
            className="display mt-3 text-[clamp(2.75rem,8vw,5.5rem)] font-bold text-[var(--ink)]"
          >
            {Strings.fullName}.
          </motion.h1>
          <motion.h2
            {...fade(0.15)}
            className="display mt-3 text-[clamp(1.6rem,4.2vw,3rem)] font-semibold text-[var(--muted)]"
          >
            I build <span className="text-gradient">backends that scale.</span>
          </motion.h2>

          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
            {Strings.role} who turns ideas into fast, reliable products. I design clean APIs,
            scalable systems and AI-powered features, from the database all the way to production.
          </motion.p>

          <motion.div {...fade(0.25)} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="/#contact" className="!rounded-lg">
              Contact me <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </MagneticButton>
            <MagneticButton href={Strings.resumePath} variant="ghost" external className="!rounded-lg !bg-white">
              <FontAwesomeIcon icon={faFileArrowDown} /> Resume
            </MagneticButton>
            <div className="flex items-center">
              {[
                { href: Strings.githubLink, icon: faGithub, label: "GitHub" },
                { href: Strings.linkedInLink, icon: faLinkedin, label: "LinkedIn" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-xl text-[var(--muted)] transition-colors hover:bg-white hover:text-[var(--ink)]"
                >
                  <FontAwesomeIcon icon={l.icon} />
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div {...fade(0.2)} className="relative mx-auto w-full max-w-[34rem]">
          <div className="pointer-events-none absolute -inset-x-[22%] -inset-y-[30%] -z-0" aria-hidden>
            <CodeGlyphs />
          </div>
          <div className="relative z-10">
            <TiltCard max={8} className="rounded-xl">
              <CodeWindow />
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
