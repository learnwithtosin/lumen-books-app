import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getBooks } from "@/lib/data";
import BookCard from "@/components/ui/BookCard";

export const metadata = {
  title: "Seller Dashboard | Lumen Books",
};

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get("auth");

  if (!auth || auth.value !== "authenticated") {
    redirect("/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@lumen.com";
  const books = await getBooks();

  // Show ALL books as this seller's listings
  // In a real app you'd filter by userId from the session
  const myBooks = books;

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">
            Logged in as{" "}
            <span className="font-medium text-gray-700">{adminEmail}</span>
          </p>
        </div>

        <Link
          href="/dashboard/new"
          className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          + Add Book
        </Link>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Your Listings{" "}
          <span className="text-sm font-normal text-gray-400">
            ({myBooks.length} books)
          </span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {myBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6">
        <p className="font-semibold text-gray-800 mb-1">Seller Support</p>
        <p className="text-sm text-gray-500">
          Need help? Reach us at{" "}
          <a href={`mailto:${adminEmail}`} className="text-green-600 underline">
            {adminEmail}
          </a>
        </p>
      </section>
    </main>
  );
}