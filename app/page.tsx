import Navbar from "@/app/Components/layout/Navbar";
import Hero from "@/app/Components/sections/Hero";
import Trusted from "@/app/Components/sections/Trusted";
import Services from "@/app/Components/sections/Services";
import WhyUs from "@/app/Components/sections/WhyUs";
import Stats from "@/app/Components/sections/Stats";
import Testimonials from "@/app/Components/sections/Testimonials";
import Process from "@/app/Components/sections/Process";
import Appointment from "@/app/Components/sections/Appointment";
import Footer from "@/app/Components/layout/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Trusted />
            <Services />
            <WhyUs />
            <Stats />
            <Testimonials />
            <Process />
            <Appointment />
            <Footer />
        </>
    );
}