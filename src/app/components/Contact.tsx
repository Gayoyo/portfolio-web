"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        {/* Form */}
        <form className="space-y-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg font-medium text-white hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="mailto:rizkyjuni.aa@gmail.com" className="hover:text-indigo-400 transition">
            <Mail size={28} />
          </a>
          <a href="https://github.com/Gayoyo" target="_blank" className="hover:text-indigo-400 transition">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/rizky-juni-arigayo-9b9164286" target="_blank" className="hover:text-indigo-400 transition">
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
