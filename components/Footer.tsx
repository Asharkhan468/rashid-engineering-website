"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="h-14 mb-4">
              <Image
                src="/images/company-logo.png"
                alt="Company Logo"
                width={170}
                height={60}
                className="object-contain h-full w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              We provide professional engineering solutions with quality,
              reliability, and modern technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["services", "brands", "about", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="capitalize hover:text-blue-400 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm">

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500" />
                <a href="tel:03112447774" className="hover:text-white">
                  0311 2447774
                </a>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />
                <a
                  href="https://wa.me/923112447774"
                  target="_blank"
                  className="hover:text-white"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-red-400" />
                <span>hitcgeneratorservice@gmail.com</span>
              </div>

              <div className="flex justify-center md:justify-start items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="text-yellow-400" />
                <span>Karachi, Pakistan</span>
              </div>

            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Follow Us
            </h4>

            <div className="flex justify-center md:justify-start gap-4">
              <a className="bg-blue-600 p-3 rounded-full hover:scale-110 transition">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a className="bg-blue-700 p-3 rounded-full hover:scale-110 transition">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://wa.me/923112447774"
                target="_blank"
                className="bg-green-600 p-3 rounded-full hover:scale-110 transition"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-gray-400 text-center md:text-left">

          <p>
            © {new Date().getFullYear()} Rashid Engineering. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            Developed by
            <a
              href="https://ashar.innovatesoftwaresolution.com/"
              target="_blank"
              className="text-blue-400 font-semibold hover:text-white transition"
            >
              Ashar Ullah Khan
            </a>
          </p>

        </div>

      </div>
    </footer>
  );
}
