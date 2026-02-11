import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faTools, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faPeriscope, faPython } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Hero Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          All Types of Generator Repairing & Maintenance
        </h2>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Reliable, professional, and affordable generator services in Karachi.
          We specialize in repair, maintenance, and installation of all major
          generator brands.
        </p>

        {/* Services Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">
          {/* Generator Repairing */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faWrench}
                className="text-blue-700 text-2xl"
              />
              <h3 className="text-xl font-semibold">Generator Repairing</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Diesel & Petrol Generators</li>
              <li>Residential & Commercial Generators</li>
              <li>Emergency Breakdown Services</li>
            </ul>
          </div>

          {/* Generator Maintenance */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faTools}
                className="text-blue-700 text-2xl"
              />
              <h3 className="text-xl font-semibold">Generator Maintenance</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Monthly & Annual Maintenance Contracts</li>
              <li>Engine Overhauling</li>
              <li>Load Testing</li>
            </ul>
          </div>

          {/* Generator Installation */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faCogs}
                className="text-blue-700 text-2xl"
              />
              <h3 className="text-xl font-semibold">Generator Installation</h3>
            </div>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>New Generator Installation</li>
              <li>Wiring & ATS Installation</li>
              <li>Noise Reduction Solutions</li>
            </ul>
          </div>
        </div>

        {/* Brands Section */}

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Brands We Deal In
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Card */}
            <div className="bg-white w-32 h-32 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <Image
                src="/images/perkins.png"
                alt="Perkins"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="bg-white w-32 h-32 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <Image
                src="/images/honda.png"
                alt="Honda"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="bg-white w-32 h-32 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <Image
                src="/images/cummins.png"
                alt="Cummins"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            <div className="bg-white w-32 h-32 flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <Image
                src="/images/CAT.png"
                alt="Caterpillar (CAT)"
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
