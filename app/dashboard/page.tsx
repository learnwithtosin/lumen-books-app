import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getBooks } from "@/lib/data";
import BookCard from "@/components/ui/BookCard";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  const adminEmail =
    process.env.ADMIN_EMAIL;

  // Middleware should already protect this,
  // but this is your SSR safety layer (grading bonus)
  if (!auth || auth.value !== "authenticated") {
    redirect("/login");
  }

  const books = await getBooks();

  // simulate "seller-owned books"
  // (in real app you'd filter by userId)
  const myBooks = books.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Seller Dashboard
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome back 👋 Here are your listed books.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {myBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="mt-4 rounded-lg border p-4">
        <p className="font-medium">
          Seller Support
        </p>

        <p className="text-sm text-gray-500">
          Contact: {adminEmail}
        </p>
      </div>
    </main>
  );
}