"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inventory Management VUI",
    description:
      "A fullstack inventory system with QR code, voice control (VUI), and AI features. Built using PHP + MySQL + Tailwind.",
    link: "#",
  },
  {
    title: "Tanyain (Chatbot SaaS)",
    description:
      "A chatbot SaaS platform with TF-IDF NLP engine, dashboard, training system via CSV/manual, and analytics.",
    link: "#",
  },
  {
    title: "Job Finder SMK",
    description:
      "Platform web untuk membantu siswa SMK yang baru lulus dalam mencari lowongan kerja, lengkap dengan filter berdasarkan jurusan dan lokasi.",
    link: "#",
  },
  {
    title: "Anime List Web App",
    description:
      "Fullstack web app for managing anime lists with authentication and API integration.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border border-gray-700 rounded-2xl shadow-lg hover:shadow-pink-500/20 transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center text-pink-400 hover:text-pink-300 transition"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
