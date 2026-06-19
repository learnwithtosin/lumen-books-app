import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold">
          Lumen Books
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}