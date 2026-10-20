"use client";

import { useEffect, useState } from "react";

// GitHub-dark syntax colours
const C = {
  kw: "#ff7b72",
  str: "#a5d6ff",
  prop: "#79c0ff",
  fn: "#d2a8ff",
  cm: "#8b949e",
  tx: "#e6edf3",
  bool: "#79c0ff",
};

type Token = [string, string];

const LINES: Token[][] = [
  [["// himanshu.ts", C.cm]],
  [["const ", C.kw], ["engineer", C.prop], [" = {", C.tx]],
  [["  name", C.prop], [": ", C.tx], ['"Himanshu Singh"', C.str], [",", C.tx]],
  [["  role", C.prop], [": ", C.tx], ['"Backend Engineer"', C.str], [",", C.tx]],
  [["  stack", C.prop], [": [", C.tx], ['"Node.js"', C.str], [", ", C.tx], ['"TypeScript"', C.str], [",", C.tx]],
  [["          ", C.tx], ['"PostgreSQL"', C.str], [", ", C.tx], ['"Redis"', C.str], [", ", C.tx], ['"Kafka"', C.str], ["],", C.tx]],
  [["  focus", C.prop], [": ", C.tx], ['"Distributed Systems + Agentic AI"', C.str], [",", C.tx]],
  [["  available", C.prop], [": ", C.tx], ["true", C.bool], [", ", C.tx], ["// immediate joiner", C.cm]],
  [["};", C.tx]],
  [["", C.tx]],
  [["export async function ", C.kw], ["build", C.fn], ["(idea: ", C.tx], ["Idea", C.prop], [") {", C.tx]],
  [["  const ", C.kw], ["api", C.prop], [" = ", C.tx], ["await ", C.kw], ["design", C.fn], ["(idea);", C.tx]],
  [["  return ", C.kw], ["ship", C.fn], ["(api, { latency: ", C.tx], ['"-75%"', C.str], [" });", C.tx]],
  [["}", C.tx]],
];

const TOTAL = LINES.reduce((n, l) => n + l.reduce((m, [t]) => m + t.length, 0) + 1, 0);

export default function CodeWindow() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(TOTAL);
      return;
    }
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= TOTAL) {
          clearInterval(id);
          return n;
        }
        return n + 2;
      });
    }, 22);
    return () => clearInterval(id);
  }, []);

  let budget = shown;

  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-[var(--code-bg)] shadow-[0_40px_80px_-30px_rgba(15,23,42,0.55)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#161b22] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <div className="mono ml-3 rounded-t-md border-x border-t border-white/10 bg-[var(--code-bg)] px-3 py-1 text-[11px] text-[#e6edf3]">
          himanshu.ts
        </div>
      </div>
      <pre className="mono overflow-x-auto px-4 py-4 text-[11.5px] leading-[1.7] sm:text-[12.5px]">
        {LINES.map((line, i) => {
          const visible = budget > 0;
          const lineLen = line.reduce((m, [t]) => m + t.length, 0) + 1;
          const lineBudget = budget;
          budget -= lineLen;
          const typingHere = visible && budget <= 0;
          let rem = lineBudget;
          return (
            <div key={i} className="flex min-h-[1.7em]">
              <span className="mr-4 w-5 shrink-0 select-none text-right text-[#484f58]">{i + 1}</span>
              <span className="whitespace-pre">
                {visible
                  ? line.map(([t, color], j) => {
                      const part = t.slice(0, Math.max(0, rem));
                      rem -= t.length;
                      return (
                        <span key={j} style={{ color }}>
                          {part}
                        </span>
                      );
                    })
                  : null}
                {typingHere || (shown >= TOTAL && i === LINES.length - 1) ? <span className="caret" /> : null}
              </span>
            </div>
          );
        })}
      </pre>
    </div>
  );
}
