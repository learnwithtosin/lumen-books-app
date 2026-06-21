"use client";

import { useEffect } from "react";

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
    <div className="mx-auto max-w-xl px-6 py-10">
      <h2 className="text-xl font-bold mb-4">
        Something went wrong
      </h2>

      <p className="text-gray-600 mb-6">
        Please try again.
      </p>

      <button
        onClick={() => reset()}
        className="bg-black text-white px-4 py-2"
      >
        Retry
      </button>
    </div>
  );
}