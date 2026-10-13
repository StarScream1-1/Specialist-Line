import Navbar from "@/app/Components/layout/Navbar";
import Hero from "@/app/Components/sections/Hero";
import VideoShowcase from "@/app/Components/sections/VideoShowcase";
import Trusted from "@/app/Components/sections/Trusted";
import Services from "@/app/Components/sections/Services";
import WhyUs from "@/app/Components/sections/WhyUs";
import Testimonials from "@/app/Components/sections/Testimonials";
import Process from "@/app/Components/sections/Process";
import FAQ from "@/app/Components/sections/FAQ";
import Appointment from "@/app/Components/sections/Appointment";
import Footer from "@/app/Components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoShowcase />
      <Trusted />
      <Services />
      <WhyUs />
      <Testimonials />
      <Process />
      <FAQ />
      <Appointment />
      <Footer />
    </>
  );
}