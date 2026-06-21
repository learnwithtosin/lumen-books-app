import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getBooks, getBookBySlug, Book } from "@/lib/data";

/**
 * ISR fallback
 */
export const revalidate = 3600;

/**
 * SSG: prebuild known slugs
 */
export async function generateStaticParams() {
  const books = await getBooks();

  return books.map((book) => ({
    slug: book.slug,
  }));
}

/**
 * Dynamic metadata per book
 */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const book = await getBookBySlug(params.slug);

  if (!book) {
    return {
      title: "Book Not Found | Lumen Books",
    };
  }

  return {
    title: `${book.title} | Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.coverImage],
    },
  };
}

/**
 * STREAMED SERVER COMPONENT (Suspense boundary target)
 */
async function RecommendedBooks({
  category,
}: {
  category: string;
}) {
  const books = await getBooks();

  const recommended = books
    .filter((b) => b.category === category)
    .slice(0, 3);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">
        Recommended for you
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommended.map((book) => (
          <div key={book.id} className="border rounded-lg p-3">
            <div className="relative w-full h-40 mb-2">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover rounded"
              />
            </div>

            <p className="font-medium">{book.title}</p>
            <p className="text-sm text-gray-500">
              {book.author}
            </p>

            <p className="text-sm mt-1 font-semibold">
              ${book.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * SKELETON (required for streaming UX)
 */
function RecommendedSkeleton() {
  return (
    <div className="mt-10 animate-pulse">
      <div className="h-5 w-48 bg-gray-200 rounded mb-4" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 rounded" />
        ))}
      </div>
    </div>
  );
}

/**
 * MAIN PAGE
 */
export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const book = await getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* BOOK LAYOUT */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-1/3 h-80">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            {book.title}
          </h1>

          <p className="text-gray-600 mt-1">
            by {book.author}
          </p>

          <p className="mt-4 text-lg font-semibold">
            ${book.price}
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            {book.description}
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Category: {book.category}
          </div>

          <div className="text-sm text-gray-500">
            Ratings: {book.ratingsCount.toLocaleString()}
          </div>
        </div>
      </div>

      {/* STREAMED SECTION (NO TS IGNORE) */}
      <Suspense fallback={<RecommendedSkeleton />}>
        <RecommendedBooks category={book.category} />
      </Suspense>
    </div>
  );
}