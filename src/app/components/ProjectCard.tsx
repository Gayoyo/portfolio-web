"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export type ProjectCardProps = {
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
};

export default function ProjectCard({
  title,
  tagline,
  description,
  technologies,
  demoLink,
  codeLink,
}: ProjectCardProps) {
  return (
    <motion.article
      className="bg-white/5 border border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.02 }}
    >
      <header className="mb-3">
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400">{tagline}</p>
      </header>

      <div className="text-gray-300 text-sm mb-4">{description}</div>

      <ul className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="text-xs px-2 py-1 rounded-md border border-gray-700 text-gray-200 bg-white/2"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-3">
        {demoLink ? (
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-medium">
              Live Demo
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 rounded-md bg-gray-700 text-gray-300 cursor-not-allowed" disabled>
            Live Demo
          </button>
        )}

        {codeLink ? (
          <Link href={codeLink} target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 rounded-md border border-gray-700 text-gray-200 hover:bg-white/3">
              View Code
            </button>
          </Link>
        ) : (
          <button className="px-4 py-2 rounded-md border border-gray-700 text-gray-400 cursor-not-allowed" disabled>
            View Code
          </button>
        )}
      </div>
    </motion.article>
  );
}
