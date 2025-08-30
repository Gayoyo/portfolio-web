"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import About1Img from "@/images/About1.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Teks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            I’m a <span className="text-indigo-400 font-medium">Web Developer</span> 
            with experience in building modern applications — from{" "}
            <span className="text-pink-400 font-medium">fullstack web apps</span> to{" "}
            <span className="text-indigo-400 font-medium">AI-driven systems</span>.  
            Passionate about learning, experimenting with new tech, and solving problems with code.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I enjoy <span className="text-pink-400 font-medium">collaborating</span> on projects, 
            optimizing performance, and creating <span className="text-indigo-400 font-medium">beautiful user experiences</span>. 
            Continuously growing my skills in <span className="text-indigo-400 font-medium">web, AI, and cloud technologies</span>.
          </p>
        </motion.div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end"
        >
        <div className="relative w-full h-72 overflow-hidden rounded-xl">
        <Image
          src={About1Img}
          alt="AI Illustration"
          fill
          className="object-cover"
        />
      </div>
        </motion.div>
      </div>
    </section>
  );
}
