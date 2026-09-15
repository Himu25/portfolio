"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
};

function isNativeAnchor(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("/")
  );
}

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  external,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-6",
    variant === "primary"
      ? "bg-[var(--ink)] text-[#f3f6f9] hover:bg-[var(--accent)]"
      : "border border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--ink)] hover:bg-[var(--bg-elevated)]",
    className
  );

  const useAnchor =
    external ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http") ||
    href.endsWith(".pdf");

  if (useAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(external || href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  if (!isNativeAnchor(href) && href.startsWith("/#")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
