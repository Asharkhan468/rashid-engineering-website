"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faClock,
  faShieldAlt,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutOne() {
  const featureVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section
      id="About"
      className="relative bg-gradient-to-b from-white to-gray-50 pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            WHO WE ARE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            About Us
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Delivering trusted generator repair, maintenance, and installation
            services across Karachi with professional excellence.
          </p>
        </div>

        {/* Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with animation */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/engineering works.jpg"
                alt="About Company"
                width={600}
                height={500}
                className="object-cover w-full h-[450px] group-hover:scale-105 transition duration-700"
              />
            </div>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: faUsers,
                title: "Experienced Team",
                desc: "Certified and skilled generator technicians.",
              },
              {
                icon: faClock,
                title: "Quick Response",
                desc: "Fast emergency breakdown services.",
              },
              {
                icon: faShieldAlt,
                title: "Quality Work",
                desc: "High-standard repair & maintenance.",
              },
              {
                icon: faTools,
                title: "Modern Equipment",
                desc: "Advanced tools for accurate solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center sm:text-left"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition duration-300 mx-auto sm:mx-0">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-blue-600 group-hover:text-white text-xl transition duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
