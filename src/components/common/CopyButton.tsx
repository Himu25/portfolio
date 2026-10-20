"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/utils/cn";

export default function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Copy:", value);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label ?? value}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-xs text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]",
        className
      )}
    >
      <FontAwesomeIcon icon={copied ? faCheck : faCopy} className={copied ? "text-emerald-400" : ""} />
      <span className="mono hidden sm:inline">{copied ? "Copied!" : label ?? "Copy"}</span>
    </button>
  );
}
