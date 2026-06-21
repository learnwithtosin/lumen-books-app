import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between px-8 py-4 border-b border-gray-100">
      <span className="text-green-600 font-bold text-xl flex items-center">
        Book <Brain size={18} />
      </span>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#" className="hover:text-gray-900 transition">
          About
        </a>

        <a href="#" className="hover:text-gray-900 transition">
          Book
        </a>

        <a href="#" className="hover:text-gray-900 transition">
          Popular
        </a>

        <a href="#" className="hover:text-gray-900 transition">
          Help
        </a>
      </div>

      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
          Login
        </button>

        <button className="rounded-lg bg-green-600 px-4 py-2 text-sm text-white font-medium hover:bg-green-700 transition">
          Free Trial
        </button>
      </div>
    </nav>
  );
}