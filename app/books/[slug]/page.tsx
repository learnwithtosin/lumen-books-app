import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getBooks, getBookBySlug } from "@/lib/data";
import BookCard from "@/components/ui/BookCard";

// ISR: revalidate every hour
export const revalidate = 3600;

// SSG: pre-render all known slugs at build time
export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ slug: book.slug }));
}

// Dynamic metadata per book (OG tags included)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    return { title: "Book Not Found | Lumen Books" };
  }

  return {
    title: `${book.title} by ${book.author} | Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: book.coverImage,
          width: 400,
          height: 600,
          alt: book.title,
        },
      ],
    },
  };
}

// ─── Streamed section (wrapped in Suspense on main page) ──────────────────────
// This component intentionally has its own delay to demonstrate streaming.
async function RecommendedBooks({ category, excludeSlug }: { category: string; excludeSlug: string }) {
  const books = await getBooks();

  const recommended = books
    .filter((b) => b.category === category && b.slug !== excludeSlug)
    .slice(0, 3);

  if (recommended.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Recommended for you
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recommended.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

// Skeleton shown while RecommendedBooks is streaming
function RecommendedSkeleton() {
  return (
    <div className="mt-12 animate-pulse">
      <div className="h-5 w-48 bg-gray-200 rounded mb-6" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl bg-gray-200 h-64" />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Must await params in Next.js 15+
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      {/* Book detail */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="relative w-full md:w-72 h-96 flex-shrink-0">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover rounded-2xl shadow-lg"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <span className="inline-block mb-3 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 capitalize w-fit">
            {book.category}
          </span>

          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">
            {book.title}
          </h1>

          <p className="mt-1 text-gray-500 text-sm">by {book.author}</p>

          <p className="mt-5 text-2xl font-bold text-green-600">
            ${book.price.toFixed(2)}
          </p>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            {book.description}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
            <span>⭐ {book.ratingsCount.toLocaleString()} ratings</span>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition">
              Buy Now
            </button>
            <button className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Streamed recommended section */}
      <Suspense fallback={<RecommendedSkeleton />}>
        <RecommendedBooks category={book.category} excludeSlug={slug} />
      </Suspense>
    </div>
  );
}