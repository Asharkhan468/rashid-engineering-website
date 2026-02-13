"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white min-h-screen flex items-center">
      {/* Animated Background Gradient Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/30 blur-[120px] rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/20 blur-[140px] rounded-full"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] rounded-full"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 text-center w-full">
        {/* Badge */}
        <motion.div
          className="inline-block mb-6 group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition"></div>
            <span className="relative inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 text-sm px-5 py-2.5 rounded-full tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted Generator Experts in Karachi
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          All Types of{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Generator Repairing
          </span>
          <br />& Maintenance Services
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Reliable, professional, and affordable generator solutions for
          residential and commercial clients. Fast response. Genuine parts.
          Guaranteed performance.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="tel:03112447774"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
            Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/923112447774"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
