import Navbar from "@/app/Components/layout/Navbar";
import Hero from "@/app/Components/sections/Hero";
import VideoShowcase from "@/app/Components/sections/VideoShowcase";
import Trusted from "@/app/Components/sections/Trusted";
import Services from "@/app/Components/sections/Services";
import OutsourcingCalculator from "@/app/Components/sections/OutsourcingCalculator";
import ComparisonSection from "@/app/Components/sections/ComparisonSection";
import WhyUs from "@/app/Components/sections/WhyUs";
import Testimonials from "@/app/Components/sections/Testimonials";
import Process from "@/app/Components/sections/Process";
import FAQ from "@/app/Components/sections/FAQ";
import Appointment from "@/app/Components/sections/Appointment";
import Footer from "@/app/Components/layout/Footer";
import FloatingActionBar from "@/app/Components/ui/FloatingActionBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Trusted />
        <Services />
        <OutsourcingCalculator />
        <ComparisonSection />
        <WhyUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Appointment />
      </main>
      <Footer />
      <FloatingActionBar />
    </>
  );
}