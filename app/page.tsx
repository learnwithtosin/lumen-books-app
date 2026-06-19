import Image from "next/image";
import { books } from "@/lib/data";

export const revalidate = 3600;

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              A book can change your life.
            </h1>

            <p className="mt-6 text-gray-500">
              Discover bestselling books from around the world.
            </p>

            <button className="mt-8 rounded-lg bg-green-600 px-6 py-3 text-white">
              Browse Books
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src="/books/atomic-habits.jpg"
              alt="Atomic Habits"
              width={350}
              height={500}
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Best Selling Books
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="rounded-xl border p-4"
            >
              <Image
                src={book.coverImage}
                alt={book.title}
                width={200}
                height={300}
                className="mx-auto h-[250px] object-cover"
              />

              <h3 className="mt-4 font-semibold">
                {book.title}
              </h3>

              <p className="text-sm text-gray-500">
                {book.author}
              </p>

              <p className="mt-2 text-green-600 font-bold">
                ${book.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-4xl font-bold">
          Customer Feedback
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border p-6"
            >
              <p>
                Lumen Books helped me discover amazing books.
              </p>

              <p className="mt-4 font-semibold">
                Customer {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-r from-green-500 to-teal-500 p-12 text-white">
          <h2 className="text-4xl font-bold">
            Make Your Life Better With Books
          </h2>

          <button className="mt-6 rounded-lg bg-white px-6 py-3 text-black">
            Shop Now.
          </button>
        </div>
      </section>
    </main>
  );
}