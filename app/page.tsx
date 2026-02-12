import Navbar from "@/components/Navbar";
import Hero from "@/components/Herosection";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs/>
      <WhyChooseUs/>
      <Contact />
    </>
  );
}
