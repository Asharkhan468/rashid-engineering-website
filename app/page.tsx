import Navbar from "@/components/Navbar";
import Hero from "@/components/Herosection";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs/>
      <Contact />
    </>
  );
}
