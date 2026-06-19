import Image from "next/image";
import { books } from "@/lib/data";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50/40 to-white text-gray-900">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* TEXT */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              New Collection 2026
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              A book can change <br /> your life.
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover bestselling books from around the world, curated to
              inspire, educate, and transform your thinking.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="rounded-xl bg-green-600 px-6 py-3 text-white font-medium shadow-md hover:bg-green-700 transition">
                Browse Books
              </button>

              <button className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-100">
              <Image
                src="/books/atomic-habits.jpg"
                alt="Atomic Habits"
                width={360}
                height={520}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Best Selling Books
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="h-[260px] w-full object-cover group-hover:scale-105 transition"
                />
              </div>

              <h3 className="mt-4 font-semibold text-gray-900 line-clamp-1">
                {book.title}
              </h3>

              <p className="text-sm text-gray-500">{book.author}</p>

              <p className="mt-2 font-bold text-green-600">
                ${book.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-4xl font-bold text-center">
          Customer Feedback
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <p className="text-gray-600 leading-relaxed">
                “Lumen Books helped me discover amazing books that actually
                changed how I think about productivity and habits.”
              </p>

              <p className="mt-4 font-semibold text-gray-900">
                Customer {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-12 text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            Make Your Life Better With Books
          </h2>

          <p className="mt-4 text-white/90 max-w-xl">
            Join thousands of readers discovering life-changing books every day.
          </p>

          <button className="mt-6 rounded-xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>
      </section>

    </main>
  );
}