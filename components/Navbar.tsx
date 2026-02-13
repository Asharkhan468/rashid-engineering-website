"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faX,
  faCogs,
  faBuilding,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Services", icon: faCogs },
    { name: "Brands", icon: faBuilding },
    { name: "About", icon: faInfoCircle },
    { name: "Contact", icon: faPhone },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Image */}

        <Link href="/">
          <div className="flex items-center h-12 md:h-12 cursor-pointer">
            <Image
              src="/images/company-logo.png"
              alt="Rashid Engineering Logo"
              width={180}
              height={70}
              className="object-contain h-full"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.name}`}
              className="flex items-center gap-2 font-bold relative group capitalize hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Call Button */}
          <a
            href="tel:03112447774"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923112447774"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faX : faBars} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white shadow-xl border-t border-gray-200 flex flex-col items-center gap-6 py-8 text-lg font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.name}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-gray-500 hover:text-blue-600 transition"
            >
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </Link>
          ))}

          <a
            href="tel:03112447774"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-md transition flex items-center gap-2 hover:scale-105"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
          </a>

          <a
            href="https://wa.me/923112447774"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full shadow-md transition flex items-center gap-2 hover:scale-105"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
