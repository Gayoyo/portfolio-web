"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Tanyain (Chatbot SaaS)",
    description:
      "anyain adalah sistem Chatbot FAQ berbasis AI yang dirancang untuk membantu UMKM, sekolah, dan klinik kecil menjawab pertanyaan pelanggan secara otomatis.Platform ini mendukung multi-klien dengan dashboard admin modern, analitik chatbot, serta sistem approval dari superadmin.",
    link: "https://github.com/Gayoyo/Tanyain-Customer-Service",
  },
  {
    title: "Noken Terbang Map",
    description:
      "Noken Terbang Map adalah proyek visualisasi peta interaktif yang menampilkan jalur dan area operasi drone di wilayah pedalaman Papua. Aplikasi ini dirancang untuk membantu pemetaan, perencanaan rute pengiriman udara, dan eksplorasi wilayah menggunakan antarmuka berbasis peta yang intuitif dan futuristik.",
    link: "https://gayoyo.github.io/Noken-Terbang/",
  },
  {
    title: "Anime List Web App",
    description:
      "Fullstack web app for managing anime lists with authentication and API integration.",
    link: "https://github.com/Gayoyo/Gayoanimelist",
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
