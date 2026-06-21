"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { addBook, Book } from "@/lib/data";

// ─── LOGIN ACTION ────────────────────────────────────────────────────────────

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const validEmail = process.env.ADMIN_EMAIL ?? "admin@lumen.com";
  const validPassword = process.env.ADMIN_PASSWORD ?? "password123";

  if (email !== validEmail || password !== validPassword) {
    return { error: "Invalid email or password." };
  }

  const cookieStore = await cookies();
  cookieStore.set("auth", "authenticated", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });

  redirect("/dashboard");
}

// ─── ADD BOOK ACTION ─────────────────────────────────────────────────────────

export async function addBookAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const title = formData.get("title")?.toString() ?? "";
  const author = formData.get("author")?.toString() ?? "";
  const price = formData.get("price")?.toString() ?? "0";
  const description = formData.get("description")?.toString() ?? "";
  const coverImage = formData.get("coverImage")?.toString() ?? "";
  const category = formData.get("category")?.toString() ?? "";

  if (!title || !author || !price || !category) {
    return { error: "Title, author, price, and category are required." };
  }

  const newBook: Book = {
    id: Date.now().toString(),
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    title,
    author,
    price: Number(price),
    description,
    coverImage: coverImage || "/books/atomic-habits.jpg",
    category,
    ratingsCount: 0,
    createdAt: new Date().toISOString(),
  };

  await addBook(newBook);

  // Revalidate catalog so the new book appears immediately
  revalidatePath("/books");
  revalidatePath("/");

  redirect("/books");
}

// ─── LOGOUT ACTION ───────────────────────────────────────────────────────────

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth");
  redirect("/login");
}