"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-lg transition duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 tracking-wide">
          Rashid Engineering
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#brands" className="hover:text-blue-600 transition">
            Brands
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>

          {/* Call Button */}
          <a
            href="tel:03112447774"
            className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-800 shadow-lg flex items-center gap-2 transition"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/923112447774"
            target="_blank"
            className="bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 shadow-lg flex items-center gap-2 transition"
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
          {isOpen ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg w-full text-center py-6 flex flex-col gap-6">
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition text-lg font-medium"
          >
            Services
          </Link>
          <Link
            href="#brands"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition text-lg font-medium"
          >
            Brands
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition text-lg font-medium"
          >
            About
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-blue-600 transition text-lg font-medium"
          >
            Contact
          </Link>

          <a
            href="tel:03112447774"
            className="bg-blue-700 text-white px-6 py-2 rounded-xl hover:bg-blue-800 shadow-lg transition flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <FontAwesomeIcon icon={faPhone} />
            Call Now
          </a>

          <a
            href="https://wa.me/923112447774"
            className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 shadow-lg transition flex items-center justify-center gap-2 text-lg font-semibold"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
