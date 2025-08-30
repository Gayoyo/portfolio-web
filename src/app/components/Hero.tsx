"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Ghibli1 from "@/images/Ghibli1.png";

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight lg:leading-snug"
              variants={itemVariants}
            >
              🚀 Building AI-Powered Solutions That Drive Real Impact
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl"
              variants={itemVariants}
            >
              Saya seorang developer full-stack sekaligus machine learning enthusiast di semester akhir kuliah. Fokus saya adalah membantu bisnis kecil hingga startup memanfaatkan teknologi AI untuk tumbuh lebih cepat dan lebih cerdas.
            </motion.p>

            <motion.div className="flex items-center gap-4" variants={itemVariants}>
              <Link href="#contact" className="group" aria-label="Let’s Work Together">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
                >
                  Let’s Work Together
                </motion.button>
              </Link>

              <Link
                href="#projects"
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                View projects →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
              <div className="h-56 md:h-64 rounded-lg overflow-hidden flex items-center justify-center bg-gray-800">
                {/* Replace src with your AI illustration or photo */}
                <Image
                  src={Ghibli1}
                  alt="AI Illustration"
                  width={398}
                  height={256}
                  className="object-contain"
                />
              </div>

              <div className="mt-5">
                <p className="text-sm text-gray-300">
                  Final-semester Full-Stack Developer & Machine Learning enthusiast — building practical AI products for SMEs and startups.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
