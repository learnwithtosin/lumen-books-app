"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { addBook, Book } from "@/lib/data";

export default function NewBookPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
    coverImage: "",
    category: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newBook: Book = {
      id: Date.now().toString(),
      slug: form.title.toLowerCase().replace(/\s+/g, "-"),
      title: form.title,
      author: form.author,
      price: Number(form.price),
      description: form.description,
      coverImage: form.coverImage,
      category: form.category,
      ratingsCount: 0,
      createdAt: new Date().toISOString(),
    };

    await addBook(newBook);

    router.push("/books");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">
        Add New Book
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          className="w-full border p-2"
          placeholder="Author"
          value={form.author}
          onChange={(e) =>
            setForm({ ...form, author: e.target.value })
          }
        />

        <input
          className="w-full border p-2"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          className="w-full border p-2"
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          className="w-full border p-2"
          placeholder="Cover Image URL"
          value={form.coverImage}
          onChange={(e) =>
            setForm({ ...form, coverImage: e.target.value })
          }
        />

        <textarea
          className="w-full border p-2"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <button
          className="bg-black text-white px-4 py-2"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </main>
  );
}