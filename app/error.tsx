"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
        <span className="text-2xl">⚠️</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Something went wrong
      </h2>

      <p className="text-gray-500 text-sm max-w-sm mb-8">
        An unexpected error occurred. You can try again or go back to
        browsing.
        {error?.digest && (
          <span className="block mt-1 text-xs text-gray-400">
            Error ID: {error.digest}
          </span>
        )}
      </p>

      <div className="flex gap-3">
        <button
          onClick={reset}
          className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          Try again
        </button>

        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}