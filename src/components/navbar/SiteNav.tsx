"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { INavItem } from "@/types";
import Strings from "@/constants/strings";
import { cn } from "@/utils/cn";

export default function SiteNav({ navItems }: { navItems: INavItem[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.link.replace("/#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          scrolled
            ? "border-b border-[var(--line)] bg-[rgba(230,235,240,0.92)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="site-shell flex h-16 items-center justify-between">
          <Link
            href="/#hero"
            className="display text-lg font-bold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            HS<span className="text-[var(--accent)]">.</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navItems.map((item) => {
              const id = item.link.replace("/#", "");
              const isActive = active === id;
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "mono text-xs uppercase tracking-[0.18em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
                    isActive
                      ? "text-[var(--ink)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <a
              href={Strings.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="mono border border-[var(--ink)] px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[var(--ink)] hover:text-[#f3f6f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[rgba(11,18,32,0.45)] backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="absolute inset-y-0 right-0 flex w-[min(80%,20rem)] flex-col gap-6 bg-[var(--bg-elevated)] p-8 pt-24"
              aria-label="Mobile"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, i) => (
                <motion.div
                  key={item.link}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="display text-3xl font-semibold"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <a
                href={Strings.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-fit border border-[var(--ink)] px-4 py-2 text-sm"
              >
                Download Resume
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
