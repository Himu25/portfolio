"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Reveal from "@/components/common/Reveal";
import MagneticButton from "@/components/common/MagneticButton";
import CopyButton from "@/components/common/CopyButton";
import TiltCard from "@/components/common/TiltCard";
import Strings from "@/constants/strings";

const email = Strings.emailLink.replace("mailto:", "");

const CHANNELS = [
  { icon: faEnvelope, key: "email", value: email, href: Strings.emailLink, copy: email },
  { icon: faPhone, key: "phone", value: Strings.phone, href: Strings.phoneLink, copy: Strings.phone },
  { icon: faLinkedin, key: "linkedin", value: Strings.linkedInUsername, href: Strings.linkedInLink },
  { icon: faGithub, key: "github", value: Strings.githubUsername, href: Strings.githubLink },
];

export default function Contact({ id }: { id: string }) {
  const subject = encodeURIComponent(`Opportunity for ${Strings.fullName}: Backend Engineer`);
  const body = encodeURIComponent(
    `Hi ${Strings.shortName},\n\nI came across your portfolio and would like to discuss a role:\n\nRole:\nCompany:\nLocation:\n\nBest,\n`
  );

  return (
    <section id={id} className="section-pad relative">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <Reveal className="min-w-0">
          <p className="eyebrow">contact</p>
          <h2 className="display mt-4 text-4xl font-bold md:text-5xl">
            Have a role in mind? <span className="text-gradient">Let&apos;s talk.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-[var(--ink-soft)] sm:text-lg">
            I&apos;m an {Strings.availability.toLowerCase()} looking for Backend and Agentic AI roles,
            open to {Strings.openLocations.join(", ")}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href={`${Strings.emailLink}?subject=${subject}&body=${body}`} className="!rounded-lg">
              <FontAwesomeIcon icon={faEnvelope} /> Send an email
            </MagneticButton>
            <MagneticButton href={Strings.resumePath} variant="ghost" external className="!rounded-lg !bg-white">
              <FontAwesomeIcon icon={faFileArrowDown} /> Resume (PDF)
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <TiltCard max={5} className="overflow-hidden rounded-xl border border-black/10 bg-[var(--code-bg)] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.55)]">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="mono ml-3 text-[11px] text-[#8b949e]">zsh: ~/contact</span>
            </div>
            <div className="mono px-4 py-5 text-[13px] sm:px-5">
              <p className="text-[#e6edf3]">
                <span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span> contact --list
              </p>
              <ul className="mt-4 space-y-1">
                {CHANNELS.map((c) => (
                  <li key={c.key} className="flex min-w-0 items-center gap-3 rounded-md px-2 py-2 transition-colors hover:bg-white/[0.05]">
                    <FontAwesomeIcon icon={c.icon} className="w-4 shrink-0 text-[#8b949e]" />
                    <span className="hidden w-16 shrink-0 text-[#d2a8ff] sm:inline">{c.key}</span>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="min-w-0 flex-1 truncate text-[#a5d6ff] hover:underline"
                    >
                      {c.value}
                    </a>
                    {c.copy ? (
                      <CopyButton
                        value={c.copy}
                        className="shrink-0 !border-white/15 !px-2.5 !py-1 !text-[#8b949e] hover:!border-[#58a6ff] hover:!text-[#58a6ff]"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[#e6edf3]">
                <span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span>{" "}
                <span className="caret" />
              </p>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
