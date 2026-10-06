"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faPaperPlane,
  faSpinner,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
            className="fixed bottom-[max(5.75rem,calc(env(safe-area-inset-bottom)+5.75rem))] right-[max(1rem,env(safe-area-inset-right))] z-[110] flex h-[30rem] w-[min(23rem,calc(100vw-2rem))] max-h-[75svh] flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[#eef1f5] shadow-[0_30px_80px_-30px_rgba(11,18,32,0.55)]"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 15% 0%, rgba(14,116,144,0.16), transparent 55%), radial-gradient(circle at 100% 20%, rgba(37,99,235,0.14), transparent 50%)",
              }}
              aria-hidden
            />

            <div className="relative flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[#2563eb] text-white shadow-lg">
                  <FontAwesomeIcon icon={faRobot} className="text-sm" />
                  <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--bg-elevated)] bg-emerald-400" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--ink)]">Ask about me</p>
                  <p className="mono text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    Groq · {Strings.availability}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted)] transition-colors hover:bg-black/5 hover:text-[var(--ink)]"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="relative flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--ink)] px-3.5 py-2.5 text-sm text-[#f3f6f9]"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm border border-[var(--line)] bg-white px-3.5 py-2.5 text-sm leading-relaxed text-[var(--ink-soft)]"
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-[var(--line)] bg-white px-3.5 py-2.5 text-sm text-[var(--muted)]">
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                    Thinking…
                  </div>
                </div>
              ) : null}

              {messages.length < 3 ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => ask(s)}
                      disabled={loading}
                      className="mono rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-[10px] text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {error ? (
              <p className="relative mx-4 mb-2 rounded-lg border border-[var(--signal)]/30 bg-[var(--signal)]/10 px-3 py-2 text-xs text-[var(--signal)]">
                {error}
              </p>
            ) : null}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(input);
              }}
              className="relative flex items-center gap-2 border-t border-[var(--line)] bg-white/60 px-3 py-2.5"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                maxLength={600}
                autoFocus
                className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--muted)]"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send question"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[#2563eb] text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
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
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[#2563eb] text-white shadow-[0_18px_40px_-12px_rgba(37,99,235,0.55)] transition-transform hover:scale-105"
        >
          {!open ? (
            <>
              <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-40 [animation-duration:2.2s]" />
              <span className="absolute inset-0 animate-ping rounded-full bg-[#2563eb] opacity-30 [animation-delay:0.7s] [animation-duration:2.2s]" />
            </>
          ) : null}
          <FontAwesomeIcon
            icon={open ? faXmark : faRobot}
            className="relative text-lg"
          />
        </motion.button>
      </div>
    </>
  );
}
