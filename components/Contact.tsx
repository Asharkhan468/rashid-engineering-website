"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faUser,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR rendering
  return (
    <section
      id="Contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Let’s Talk
          </h3>
          <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">
            Need generator services? Send us a message today.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            className="bg-gradient-to-br from-blue-600 to-blue-500 text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Contact Information
            </h4>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg">
              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-xl sm:text-2xl"
                />
                <p>DHA Phase 2 Ext, Karachi</p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-xl sm:text-2xl"
                />
                <p>0311-2447774 | 0344-2553442</p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-xl sm:text-2xl"
                />
                <p>hitcgeneratorservice@gmail.com</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full blur-2xl"></div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="bg-white p-6 sm:p-10 rounded-3xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4 sm:space-y-6">
              {/* Name */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute top-4 sm:top-5 left-3 sm:left-4 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl placeholder:text-gray-400 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="absolute top-4 sm:top-5 left-3 sm:left-4 text-gray-400"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl placeholder:text-gray-400 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="absolute top-4 sm:top-5 left-3 sm:left-4 text-gray-400"
                  />
                  <textarea
                    rows={5}
                    placeholder="Your Message"
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 placeholder:text-gray-400 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none transition"
                  />
                </div>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
