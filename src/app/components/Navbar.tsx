"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          June.dev
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">
          {["home", "about", "projects", "skills", "contact"].map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a
                href={`#${item}`}
                className="hover:text-indigo-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu btn (optional) */}
        <button className="md:hidden text-gray-300">☰</button>
      </nav>
    </header>
  );
}
