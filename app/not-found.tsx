import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-green-600">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Book Not Found
      </h2>

      <p className="mt-2 text-gray-500">
        The book you're looking for doesn't exist.
      </p>

      <Link
        href="/books"
        className="mt-6 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700 transition"
      >
        Browse Books
      </Link>
    </div>
  );
}