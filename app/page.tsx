import Image from "next/image";
import { getBooks } from "@/lib/data";
import {
  Bookmark,
  Brain,
  TrendingUp,
  HardDrive,
  Zap,
  ArrowRight,
} from "lucide-react";

import BookCard from "@/components/ui/BookCard";

export const revalidate = 3600;

export default async function HomePage() {

  const siteName =
    process.env.NEXT_PUBLIC_SITE_NAME;

  const books = await getBooks();

  const benefits = [
    { icon: Brain, label: "Mental Stimulation" },
    { icon: TrendingUp, label: "Improve Your Skill" },
    { icon: HardDrive, label: "Improve Your Memory" },
    { icon: Zap, label: "Exercise Your Brain" },
  ];

  const testimonials = [
    { name: "M. Johnson", text: "I have seen in a very good online bookstore. I can book many anywhere else before this quality facility. They are able to deliver the product on time so I am very use to book.com" },
    { name: "N. Patel", text: "I have bought a lot of books in online bookstores but nowhere else have I found a facility like Book.com. They are very capable about their customers." },
    { name: "Ryan Hoover", text: "book.com has given me a new experience they can handle their customers in a very beautiful way we get our deliver very fast only book.com" },
  ];


  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
              Welcome to {siteName}
            </h1>
            <p className="mt-4 text-gray-500 text-sm">The most searched book site on google.</p>
            <div className="mt-6 flex items-center gap-2">
              <input type="text" placeholder="find your book...." className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500" />
              <button className="rounded-lg bg-green-600 px-5 py-2.5 text-sm text-white font-medium hover:bg-green-700 transition">Search</button>
            </div>

          </div>

          <div className="flex justify-center">
            <div className="relative w-[340px] h-[420px] rounded-2xl bg-green-500 overflow-hidden shadow-xl flex items-center justify-center">
              <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white"><Bookmark size={18} /></div>
              <div className="absolute top-16 right-6 w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-white"><Zap size={18} /></div>
              <div className="absolute bottom-16 right-6 w-10 h-10 rounded-xl bg-orange-400 flex items-center justify-center text-white"><Brain size={18} /></div>
              <Image src="/books/atomic-habits.jpg" alt="Featured Book" width={200} height={300} className="rounded-xl object-cover shadow-2xl z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by thousands of companies around the world</p>
          <div className="flex flex-wrap items-center justify-center gap-10 grayscale opacity-60">
            {["Google", "Disney", "Amazon", "Microsoft", "Dribbble"].map((brand) => (
              <span key={brand} className="text-lg font-bold text-gray-500">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Our Best Selling Book</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="rounded-xl border border-gray-300 px-8 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">View All Books</button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Benefits Of Reading Book</h3>
            <div className="flex gap-3 mb-5">
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <Image src={books[0]?.coverImage ?? "/books/atomic-habits.jpg"} alt="book" width={80} height={112} className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-28 rounded-lg overflow-hidden shadow-md flex-shrink-0">
                <Image src={books[1]?.coverImage ?? "/books/atomic-habits.jpg"} alt="book" width={80} height={112} className="w-full h-full object-cover" />
              </div>
            </div>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b.label} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-600">
                    <b.icon size={18} />
                  </span>
                  {b.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-green-600 p-6 text-white shadow-sm">
            <h3 className="text-lg font-bold mb-3">Tom Byron</h3>
            <p className="text-white/80 text-sm leading-relaxed">Books really are your best friends as you can rely on them when you are bored, upset, depressed, lonely or annoyed. They will accompany you anytime you want them and enhance your mood.</p>
            <p className="mt-4 text-xs text-white/60">— Teacher</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Customer feedback.</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
              <span className="text-3xl text-green-500 font-serif leading-none">"</span>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{t.text}</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">{t.name[0]}</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-yellow-400 text-xs">★★★★★</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-400 opacity-90" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 p-12">
            <h2 className="text-3xl font-bold text-white">Make Your Life Beautiful With Us.</h2>
            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-green-700 hover:bg-gray-100 transition flex items-center gap-2">Shop Now <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

    </main>
  );
}