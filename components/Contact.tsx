export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Contact Us
        </h3>
        <p className="text-gray-600 mb-12 text-lg md:text-xl">
          Have any questions or need our services? Send us a message and we'll get back to you promptly.
        </p>

        {/* Form Container */}
        <div className="bg-white p-10 md:p-12 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition"
            />
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 shadow-lg hover:shadow-xl transition duration-300">
              Send Request
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-gray-700 space-y-3 text-sm md:text-base">
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-500 text-lg">📍</span> DHA Phase 2 Ext, Karachi
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-500 text-lg">📞</span> 0311-2447774 | 0344-2553442
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-500 text-lg">📧</span> hitcgeneratorservice@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
}
