"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTerminal, faXmark } from "@fortawesome/free-solid-svg-icons";
import Strings from "@/constants/strings";

export const OPEN_ASK_WIDGET_EVENT = "open-ask-widget";

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

const SUGGESTIONS = [
  "What has he been working on at MAQ Software?",
  "Tell me about the ShipGoods voice agent.",
  "What's his tech stack?",
  "Is he open to relocate / which cities?",
];

function stripMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`+/g, "")
    .replace(/^\s*[-*]\s+/gm, "");
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Hi, I'm Himanshu's portfolio assistant. Ask me about his experience, projects, or skills — I'll answer straight from his resume.",
};

export default function AskAboutMeWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener(OPEN_ASK_WIDGET_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_ASK_WIDGET_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function ask(question: string) {
    const q = question.trim();
    if (!q || loading) return;

    setError(null);
    const nextMessages: Message[] = [...messages, { role: "user", content: q }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: q,
          history: nextMessages.slice(-7, -1),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        setMessages((prev) => prev.slice(0, -1));
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: stripMarkdown(data.answer) },
      ]);
    } catch {
      setError("Couldn't reach the assistant — check your connection and try again.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Ask about Himanshu"
            className="fixed bottom-[max(5rem,calc(env(safe-area-inset-bottom)+5rem))] right-[max(1rem,env(safe-area-inset-right))] z-[110] flex h-[34rem] w-[min(24rem,calc(100vw-2rem))] max-h-[78svh] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white shadow-[0_40px_90px_-30px_rgba(15,23,42,0.45)]"
          >
            {/* Editor-style title bar */}
            <div className="flex items-center gap-2 border-b border-[var(--line)] bg-[var(--bg)] px-4 py-2.5">
              <span className="flex gap-1">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              </span>
              <span className="mono ml-2 truncate text-xs text-[var(--muted)]">ask-himanshu.ai</span>
              <span className="mono ml-auto rounded-md bg-[var(--accent-soft)] px-2 py-0.5 text-[10px] text-[var(--accent)]">
                groq
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:bg-black/5 hover:text-[var(--ink)]"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Identity row */}
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-3">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)] text-white shadow-[0_10px_20px_-10px_rgba(37,99,235,0.8)]">
                <FontAwesomeIcon icon={faTerminal} className="text-sm" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </span>
              <div className="min-w-0">
                <p className="display text-[15px] font-semibold text-[var(--ink)]">Ask about {Strings.shortName}</p>
                <p className="mono truncate text-[11px] text-[var(--muted)]">
                  answers from his resume · {Strings.availability.toLowerCase()}
                </p>
              </div>
            </div>

            <div ref={scrollRef} className="flex flex-1 flex-col gap-3 overflow-y-auto bg-[var(--bg)]/40 px-4 py-4">
              {messages.map((m, i) =>
                m.role === "user" ? (
                  <div key={i} className="flex justify-end">
                    <div className="max-w-[85%] rounded-xl rounded-br-sm bg-[var(--accent)] px-3.5 py-2.5 text-sm leading-relaxed text-white shadow-[0_8px_20px_-12px_rgba(37,99,235,0.8)]">
                      {m.content}
                    </div>
                  </div>
                ) : (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[10px] font-bold text-white">
                      HS
                    </span>
                    <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-[var(--line)] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {m.content}
                    </div>
                  </div>
                )
              )}

              {loading ? (
                <div className="flex items-start gap-2">
                  <span className="mono mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--ink)] text-[10px] font-bold text-white">
                    HS
                  </span>
                  <div className="flex items-center gap-1 rounded-xl rounded-tl-sm border border-[var(--line)] bg-white px-3.5 py-3" aria-label="Thinking">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-[var(--accent)]"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {messages.length === 1 && !loading ? (
                <div className="pt-1">
                  <p className="mono mb-2 text-[11px] text-[var(--muted)]">// try asking</p>
                  <div className="flex flex-col gap-1.5">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => ask(s)}
                        disabled={loading}
                        className="group flex items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-3 py-2 text-left text-xs text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <span className="mono text-[var(--accent)] transition-transform group-hover:translate-x-0.5">→</span>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {error ? (
              <p className="mx-4 mb-2 mt-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800">
                {error}
              </p>
            ) : null}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="flex items-center gap-2 border-t border-[var(--line)] bg-white px-3 py-2.5"
            >
              <span className="mono pl-1 text-sm font-bold text-[var(--accent)]">❯</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ask about experience, projects…"
                maxLength={600}
                autoFocus
                className="mono min-w-0 flex-1 bg-transparent py-1.5 text-[13px] text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send question"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] text-white transition-colors hover:bg-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-30"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[110]">
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close ask-about-me chat" : "Ask Himanshu's AI assistant"}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 22 }}
          className="group flex h-12 items-center gap-2.5 rounded-xl border border-white/10 bg-[var(--ink)] pl-3 pr-4 text-white shadow-[0_18px_40px_-14px_rgba(15,23,42,0.6)] transition-colors hover:bg-[#111a2e]"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent-2)] to-[var(--accent)]">
            <FontAwesomeIcon icon={open ? faXmark : faTerminal} className="text-xs" />
            {!open ? (
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-[var(--ink)] bg-emerald-400" />
              </span>
            ) : null}
          </span>
          <span className="mono text-xs">{open ? "close" : "ask_ai()"}</span>
        </motion.button>
      </div>
    </>
  );
}
