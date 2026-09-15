import Strings from "@/constants/strings";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="site-shell flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="display text-lg font-semibold">
          {Strings.fullName}
          <span className="text-[var(--accent)]">.</span>
        </p>
        <p className="mono text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
