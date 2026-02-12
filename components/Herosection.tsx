import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32">
      
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/20 blur-[140px] rounded-full animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full"></div>

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">

        {/* Premium Badge with Gradient Border */}
        <div className="inline-block mb-8 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition"></div>
            <span className="relative inline-flex items-center gap-2 bg-slate-900/90 backdrop-blur-xl border border-white/10 text-sm px-5 py-2.5 rounded-full tracking-wide">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Trusted Generator Experts in Karachi
            </span>
          </div>
        </div>

        {/* Main Heading with Gradient Text */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
          All Types of{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
            Generator Repairing
          </span>
          <br />
          & Maintenance Services
        </h1>

        {/* Description */}
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Reliable, professional, and affordable generator solutions for 
          residential and commercial clients. Fast response. Genuine parts. 
          Guaranteed performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 md:mt-12 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:03112447774"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            Call Now
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="https://wa.me/923112447774"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 hover:border-white hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            WhatsApp
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
