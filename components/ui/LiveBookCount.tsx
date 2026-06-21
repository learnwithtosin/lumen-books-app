"use client";

import { useEffect, useState } from "react";

export default function LiveBookCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function loadCount() {
      try {
        const res = await fetch("/api/books");
        const result = await res.json();
        setCount(result.data.length);
      } catch {
        setCount(null);
      }
    }

    loadCount();
  }, []);

  if (count === null) {
    return (
      <p className="text-sm text-gray-400 mb-4 animate-pulse">
        Loading catalog…
      </p>
    );
  }

  return (
    <p className="text-sm text-gray-500 mb-4">
      <span className="font-semibold text-green-600">{count}</span>{" "}
      {count === 1 ? "book" : "books"} in the catalog
    </p>
  );
}