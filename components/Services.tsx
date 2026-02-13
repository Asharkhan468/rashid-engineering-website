"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faTools, faCogs } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
    }),
  };

  const brandVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  const services = [
    {
      icon: faWrench,
      title: "Generator Repairing",
      items: [
        "Diesel & Petrol Generators",
        "Residential & Commercial Generators",
        "Emergency Breakdown Services",
      ],
    },
    {
      icon: faTools,
      title: "Generator Maintenance",
      items: [
        "Monthly & Annual Maintenance Contracts",
        "Engine Overhauling",
        "Load Testing",
      ],
    },
    {
      icon: faCogs,
      title: "Generator Installation",
      items: [
        "New Generator Installation",
        "Wiring & ATS Installation",
        "Noise Reduction Solutions",
      ],
    },
  ];

  const brands = ["perkins", "honda", "Cummins", "CAT"];

  return (
    <section
      id="Services"
      className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Professional generator solutions designed for reliability,
            performance, and long-term efficiency.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center md:text-left"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition duration-300 mx-auto md:mx-0">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-blue-600 group-hover:text-white text-xl transition duration-300"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
                {service.title}
              </h3>

              <ul className="text-gray-600 space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Brands Section */}
        <div className="mt-28 text-center" id="Brands">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            Brands We Deal In
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                custom={index}
                variants={brandVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-white w-36 h-36 flex items-center justify-center rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <Image
                  src={`/images/${brand}.png`}
                  alt={brand}
                  width={110}
                  height={110}
                  className="object-contain transition duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
