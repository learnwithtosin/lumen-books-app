import Link from "next/link";
import { Globe, Share2, Link2, AtSign } from "lucide-react";

const FOOTER_COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Browse Books", href: "/books" },
      { label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Add a Book", href: "/dashboard/new" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

const SOCIAL_ICONS = [Globe, Share2, Link2, AtSign];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-bold text-green-600 text-lg mb-2 block hover:opacity-80 transition"
          >
            Lumen Books.
          </Link>

          <p className="text-xs text-gray-500 mt-1">
            Your next favourite read is one click away.
          </p>

          <p className="text-xs text-gray-500 mt-3">Follow us</p>

          <div className="flex gap-2 mt-2">
            {SOCIAL_ICONS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-500 transition"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <p className="font-semibold text-gray-900 mb-3 text-sm">
              {col.title}
            </p>
            <ul className="space-y-2">
              {col.links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-xs text-gray-500 hover:text-green-600 transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 py-4 px-6 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Lumen Books. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">lumenbooks.vercel.app</p>
      </div>
    </footer>
  );
}