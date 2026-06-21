export type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  description: string;
  coverImage: string;
  category: string;
  ratingsCount: number;
  createdAt: string;
};

// Simulated in-memory DB
let books: Book[] = [
  {
    id: "1",
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    description:
      "Tiny changes, remarkable results. An easy and proven way to build good habits and break bad ones.",
    coverImage: "/books/atomic-habits.jpg",
    category: "self-help",
    ratingsCount: 12000,
    createdAt: "2024-01-01",
  },
  {
    id: "2",
    slug: "hooked",
    title: "Hooked",
    author: "Nir Eyal",
    price: 16.99,
    description:
      "How to build habit-forming products. A guide for product managers and designers.",
    coverImage: "/books/hooked.jpg",
    category: "business",
    ratingsCount: 9000,
    createdAt: "2024-01-02",
  },
  {
    id: "3",
    slug: "start-with-why",
    title: "Start With Why",
    author: "Simon Sinek",
    price: 12.99,
    description:
      "Great leaders inspire action. Why do some people and organizations achieve things others cannot?",
    coverImage: "/books/start-with-why.jpg",
    category: "business",
    ratingsCount: 15000,
    createdAt: "2024-01-03",
  },
  {
    id: "4",
    slug: "promised-land",
    title: "A Promised Land",
    author: "Barack Obama",
    price: 25.99,
    description:
      "A riveting, deeply personal account of history in the making — from the president who inspired us to believe in the power of democracy.",
    coverImage: "/books/promised-land.jpg",
    category: "biography",
    ratingsCount: 11000,
    createdAt: "2024-01-04",
  },
];

// Simulate network latency (proves async data fetching)
const delay = (ms: number) =>
  new Promise<void>((res) => setTimeout(res, ms));

export async function getBooks(): Promise<Book[]> {
  await delay(500);
  return books;
}

export async function getBookBySlug(slug: string): Promise<Book | null> {
  await delay(500);
  return books.find((b) => b.slug === slug) ?? null;
}

export async function addBook(book: Book): Promise<Book> {
  await delay(300);
  books.push(book);
  return book;
}

export async function getFeaturedBooks(): Promise<Book[]> {
  await delay(400);
  return books.slice(0, 3);
}