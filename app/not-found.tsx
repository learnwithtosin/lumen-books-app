import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-extrabold text-green-600 leading-none">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
        Book Not Found
      </h2>

      <p className="mt-2 text-gray-500 text-sm max-w-sm">
        The page or book you're looking for doesn't exist or may have been
        removed.
      </p>

      <div className="mt-8 flex gap-3">
        <Link
          href="/books"
          className="rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
        >
          Browse Books
        </Link>

        <Link
          href="/"
          className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}