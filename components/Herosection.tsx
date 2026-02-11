export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-36 pb-28">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600 opacity-20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Small Badge */}
        <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-sm px-4 py-2 rounded-full mb-6 tracking-wide">
          Trusted Generator Experts in Karachi
        </span>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          All Types of <span className="text-blue-400">Generator Repairing</span>  
          & Maintenance Services
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Reliable, professional, and affordable generator solutions for 
          residential and commercial clients. Fast response. Genuine parts. 
          Guaranteed performance.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <a
            href="tel:03112447774"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/40 transition duration-300"
          >
            📞 Call Now
          </a>

          <a
            href="https://wa.me/923112447774"
            target="_blank"
            className="border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            WhatsApp Chat
          </a>
        </div>

      </div>
    </section>
  );
}
