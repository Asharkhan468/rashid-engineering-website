import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faCogs,
  faBolt,
  faDollarSign,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  const features = [
    { icon: faTools, title: "Experienced & Skilled Technicians", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
    { icon: faCogs, title: "Genuine Spare Parts", color: "bg-gradient-to-r from-green-500 to-green-600" },
    { icon: faBolt, title: "Fast Response Time", color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
    { icon: faDollarSign, title: "Affordable Prices", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
    { icon: faHandshake, title: "Trusted by Commercial Clients", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Why Choose Us
        </h3>
        <p className="text-gray-600 mb-16 text-lg md:text-xl">
          We provide professional generator services with quality, reliability, and fast response.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div
                className={`${feature.color} w-16 h-16 flex items-center justify-center rounded-full mb-5`}
              >
                <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              <p className="text-gray-800 font-semibold text-lg">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
