"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Reveal from "@/components/common/Reveal";
import MagneticButton from "@/components/common/MagneticButton";
import socialLinks from "@/data/socialLinks";
import Strings from "@/constants/strings";

export default function Contact({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="section-pad relative w-full max-w-full overflow-x-hidden"
    >
      <div className="site-shell">
        <Reveal>
          <div className="border border-[var(--line)] bg-[var(--ink)] px-5 py-12 text-[#f3f6f9] sm:px-6 md:px-12 md:py-20">
            <p className="mono text-xs uppercase tracking-[0.24em] text-[rgba(243,246,249,0.55)]">
              Contact · {Strings.availability}
            </p>
            <h2 className="display mt-4 max-w-3xl text-3xl font-bold sm:text-4xl md:text-6xl">
              Hiring for Backend or Agentic AI?
            </h2>
            <p className="mt-5 max-w-xl text-base text-[rgba(243,246,249,0.72)] sm:text-lg">
              I&apos;m an immediate joiner looking for Backend / Agentic AI roles.
              Open to {Strings.openLocations.join(", ")}.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <MagneticButton
                href={Strings.emailLink}
                className="!bg-[var(--accent)] !text-white hover:!bg-[#0891b2]"
              >
                Email me
              </MagneticButton>
              <MagneticButton
                href={Strings.linkedInLink}
                variant="ghost"
                external
                className="!border-[rgba(243,246,249,0.25)] !text-[#f3f6f9] hover:!border-[#f3f6f9] hover:!bg-transparent"
              >
                LinkedIn
              </MagneticButton>
              <MagneticButton
                href={Strings.resumePath}
                variant="ghost"
                external
                className="!border-[rgba(243,246,249,0.25)] !text-[#f3f6f9] hover:!border-[#f3f6f9] hover:!bg-transparent"
              >
                Resume
              </MagneticButton>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 border-t border-[rgba(243,246,249,0.12)] pt-8 sm:mt-12">
              {socialLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mono inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[rgba(243,246,249,0.7)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {typeof link.icon !== "string" ? (
                    <FontAwesomeIcon icon={link.icon} />
                  ) : null}
                  {link.name}
                </a>
              ))}
              <a
                href={Strings.phoneLink}
                className="mono text-xs uppercase tracking-[0.16em] text-[rgba(243,246,249,0.7)] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {Strings.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
