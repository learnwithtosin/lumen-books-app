import { getBooks } from "@/lib/data";
import BookCard from "@/components/ui/BookCard";
import LiveBookCount from "@/components/ui/LiveBookCount";

// No revalidate export here — this page must be fully dynamic (SSR)
// because it reads searchParams at request time.
// Next.js will automatically mark it as dynamic (ƒ) in the build output.

type SearchParams = Promise<{
  category?: string;
  sort?: string;
}>;

export const metadata = {
  title: "Browse Books | Lumen Books",
  description: "Search and filter our full catalog of books.",
};

const CATEGORIES = ["all", "self-help", "business", "biography", "fiction", "technology"];

export default async function BooksPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Must await searchParams in Next.js 15+
  const { category, sort } = await searchParams;

  let books = await getBooks();
  let result = [...books];

  // Filter by category
  if (category && category !== "all") {
    result = result.filter((b) => b.category === category);
  }

  // Sort
  if (sort === "price") {
    result = [...result].sort((a, b) => a.price - b.price);
  } else if (sort === "newest") {
    result = [...result].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-gray-900">Browse Books</h1>
        <p className="text-sm text-gray-500">
          {result.length} book{result.length !== 1 ? "s" : ""} found
          {category && category !== "all" ? ` in "${category}"` : ""}
          {sort ? ` · sorted by ${sort}` : ""}
        </p>
      </div>

      {/* Live count — Client Component consuming the Route Handler */}
      <LiveBookCount />

      {/* Filter + Sort bar */}
      <div className="mb-8 flex flex-wrap gap-3 items-center">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <a
              key={cat}
              href={`/books?category=${cat}${sort ? `&sort=${sort}` : ""}`}
              className={`rounded-full px-4 py-1.5 text-xs font-medium border transition ${
                (category ?? "all") === cat
                  ? "bg-green-600 text-white border-green-600"
                  : "border-gray-300 text-gray-600 hover:border-green-500 hover:text-green-600"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </a>
          ))}
        </div>

        <div className="ml-auto flex gap-2">
          <a
            href={`/books${category ? `?category=${category}&` : "?"}sort=price`}
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition ${
              sort === "price"
                ? "bg-gray-900 text-white border-gray-900"
                : "border-gray-300 text-gray-600 hover:border-gray-500"
            }`}
          >
            Price ↑
          </a>
          <a
            href={`/books${category ? `?category=${category}&` : "?"}sort=newest`}
            className={`rounded-full px-4 py-1.5 text-xs font-medium border transition ${
              sort === "newest"
                ? "bg-gray-900 text-white border-gray-900"
                : "border-gray-300 text-gray-600 hover:border-gray-500"
            }`}
          >
            Newest
          </a>
        </div>
      </div>

      {result.length === 0 ? (
        <div className="py-20 text-center text-gray-400">
          No books found. Try a different filter.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {result.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </main>
  );
}