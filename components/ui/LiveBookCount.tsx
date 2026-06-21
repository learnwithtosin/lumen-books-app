"use client";

import { useEffect, useState } from "react";

export default function LiveBookCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadBooks() {
      const response = await fetch("/api/books");

      const result = await response.json();

      setCount(result.data.length);
    }

    loadBooks();
  }, []);

  return (
    <p className="text-sm text-gray-500 mb-4">
      Live Catalog Count: {count} books
    </p>
  );
}