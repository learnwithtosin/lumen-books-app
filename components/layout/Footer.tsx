import { Globe, Share2, Link2, AtSign } from "lucide-react";

export default function Footer() {
  const socialIcons = [Globe, Share2, Link2, AtSign];

  const footerCols = [
    {
      title: "About Us",
      links: ["Home", "Contact", "Authors"],
    },
    {
      title: "Services",
      links: ["Populars", "Offers", "Book"],
    },
    {
      title: "Help",
      links: ["Returns", "FAQ", "Guide"],
    },
  ];

  return (
    <footer className="border-t border-gray-100 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <p className="font-bold text-green-600 text-lg mb-2">
            Book.
          </p>

          <p className="text-xs text-gray-500">
            2972 Westheimer Rd.
          </p>

          <p className="text-xs text-gray-500">
            Santa Ana, IL 85486
          </p>

          <p className="text-xs text-gray-500 mt-3">
            Follow us -
          </p>

          <div className="flex gap-2 mt-2">
            {socialIcons.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-green-600 hover:border-green-500 transition"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="font-semibold text-gray-900 mb-3 text-sm">
              {col.title}
            </p>

            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-gray-500 hover:text-green-600 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 py-4 px-6 flex items-center justify-between">
        <p className="text-xs text-gray-400">
          © 2024 Book. All rights reserved.
        </p>

        <p className="text-xs text-gray-400">
          www.book.com
        </p>
      </div>
    </footer>
  );
}