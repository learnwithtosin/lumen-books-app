import { getBooks } from "@/lib/data";
import BookCard from "@/components/ui/BookCard";
import LiveBookCount from "@/components/ui/LiveBookCount";

export default async function BooksPage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    sort?: string;
  };
}) {
  const category = searchParams?.category;
  const sort = searchParams?.sort;

  // always clone to avoid mutating shared DB array
  let books = await getBooks();
  let result = [...books];

  // filter
  if (category && category !== "all") {
    result = result.filter((b) => b.category === category);
  }

  // sort (safe, non-mutating)
  if (sort === "price") {
    result = [...result].sort((a, b) => a.price - b.price);
  }

  if (sort === "newest") {
    result = [...result].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Books</h1>

      <LiveBookCount />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {result.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}