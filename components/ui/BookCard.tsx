"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Heart } from "lucide-react";
import { Book } from "@/lib/data";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
    >
      <div className="relative overflow-hidden rounded-xl bg-gray-50">
        {/* These buttons stop propagation so they don't trigger the Link */}
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-2 left-2 z-10 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-green-600 transition"
          aria-label="Bookmark"
        >
          <Bookmark size={13} />
        </button>

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-white shadow flex items-center justify-center text-gray-400 hover:text-red-500 transition"
          aria-label="Wishlist"
        >
          <Heart size={13} />
        </button>

        <Image
          src={book.coverImage}
          alt={book.title}
          width={200}
          height={300}
          className="h-[240px] w-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <h3 className="mt-3 font-semibold text-gray-900 text-sm line-clamp-1">
        {book.title}
      </h3>

      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-gray-500">{book.author}</p>
        <p className="font-bold text-green-600 text-sm">
          ${book.price.toFixed(2)}
        </p>
      </div>

      <div className="flex items-center gap-1 mt-1">
        <span className="text-yellow-400 text-xs">★★★★★</span>
        <span className="text-xs text-gray-400">
          ({book.ratingsCount.toLocaleString()})
        </span>
      </div>

      <p className="mt-2 text-xs text-gray-500 line-clamp-2">
        {book.description ?? "Discover insights that will transform how you think and act."}
      </p>
    </Link>
  );
}