"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to Sentry
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen w-screen max-w-full flex-col items-center justify-center overflow-hidden p-4">
      <p className="text-2xl font-semibold text-[#b42318] md:text-3xl">
        Something went wrong
      </p>

      <div className="mt-4 max-w-lg border border-[#b42318]/40 p-4">
        <p className="text-sm text-[#b42318] md:text-base">{error.message}</p>
      </div>

      <button
        className="mt-6 border border-[var(--ink)] px-4 py-2 text-sm transition-colors hover:bg-[var(--ink)] hover:text-white"
        onClick={() => reset()}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
