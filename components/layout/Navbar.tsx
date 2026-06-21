"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 flex items-center justify-between px-8 py-4">
      {/* Logo */}
      <Link
        href="/"
        className="text-green-600 font-bold text-xl flex items-center gap-1 hover:opacity-80 transition"
      >
        Lumen <Brain size={18} />
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`transition ${
                isActive
                  ? "text-green-600 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {label}
              {isActive && (
                <span className="block h-0.5 mt-0.5 rounded-full bg-green-500" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Auth buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/login"
          className="text-sm font-medium text-gray-600 hover:text-gray-900 transition"
        >
          Login
        </Link>

        <Link
          href="/books"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white font-medium hover:bg-green-700 transition"
        >
          Browse Books
        </Link>
      </div>
    </nav>
  );
}