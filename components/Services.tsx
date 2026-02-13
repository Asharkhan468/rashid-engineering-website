import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faTools, faCogs } from "@fortawesome/free-solid-svg-icons";
import { faPeriscope, faPython } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Hero() {
  return (
   <section id="Services" className="relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
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
        Professional generator solutions designed for reliability, performance, and long-term efficiency.
      </p>
    </div>

<div className="mt-20 grid md:grid-cols-3 gap-10">

  {/* Card 1 */}
  <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center md:text-left">
    
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition duration-300 mx-auto md:mx-0">
      <FontAwesomeIcon
        icon={faWrench}
        className="text-blue-600 group-hover:text-white text-xl transition duration-300"
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
      Generator Repairing
    </h3>

    <ul className="text-gray-600 space-y-2">
      <li>Diesel & Petrol Generators</li>
      <li>Residential & Commercial Generators</li>
      <li>Emergency Breakdown Services</li>
    </ul>
  </div>


  {/* Card 2 */}
  <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center md:text-left">
    
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition duration-300 mx-auto md:mx-0">
      <FontAwesomeIcon
        icon={faTools}
        className="text-blue-600 group-hover:text-white text-xl transition duration-300"
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
      Generator Maintenance
    </h3>

    <ul className="text-gray-600 space-y-2">
      <li>Monthly & Annual Maintenance Contracts</li>
      <li>Engine Overhauling</li>
      <li>Load Testing</li>
    </ul>
  </div>


  {/* Card 3 */}
  <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 text-center md:text-left">
    
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600 transition duration-300 mx-auto md:mx-0">
      <FontAwesomeIcon
        icon={faCogs}
        className="text-blue-600 group-hover:text-white text-xl transition duration-300"
      />
    </div>

    <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-4">
      Generator Installation
    </h3>

    <ul className="text-gray-600 space-y-2">
      <li>New Generator Installation</li>
      <li>Wiring & ATS Installation</li>
      <li>Noise Reduction Solutions</li>
    </ul>
  </div>

</div>


    {/* Brands Section */}
    <div className="mt-28 text-center" id="Brands">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
        Brands We Deal In
      </h3>

      <div className="flex flex-wrap justify-center gap-8">
        {["perkins", "honda", "cummins", "CAT"].map((brand) => (
          <div
            key={brand}
            className="bg-white w-36 h-36 flex items-center justify-center rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
          >
            <Image
              src={`/images/${brand}.png`}
              alt={brand}
              width={110}
              height={110}
              className="object-contain transition duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>

  );
}
