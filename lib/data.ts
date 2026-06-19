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

export const books: Book[] = [
  {
    id: "1",
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    description: "Tiny changes, remarkable results.",
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
    description: "How to build habit-forming products.",
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
    description: "Great leaders inspire action.",
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
    description: "A presidential memoir.",
    coverImage: "/books/promised-land.jpg",
    category: "biography",
    ratingsCount: 11000,
    createdAt: "2024-01-04",
  },
];