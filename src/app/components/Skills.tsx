"use client";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaPhp, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiSqlite, SiPandas, SiNumpy, SiScikitlearn } from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: null },
      { name: "JavaScript (ES6+)", icon: null },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Flask", icon: null },
      { name: "PHP", icon: FaPhp },
      { name: "Node.js", icon: FaNodeJs },
      { name: "REST API", icon: null },
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      { name: "Python", icon: FaPython },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "TF-IDF", icon: null },
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt },
      { name: "Docker (basic)", icon: FaDocker },
      { name: "Postman", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 hover:border-indigo-500 transition-colors shadow-xl rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">{category.title}</h3>
              <ul className="space-y-3 text-gray-300">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-pink-400 transition">
                    {item.icon && <item.icon className="w-5 h-5 text-indigo-400" />}
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
