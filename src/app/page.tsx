import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          {/* <h1 className="text-3xl text-center text-yellow-400">helloo</h1> */}
          <HeroSection />
          <FeaturedCourses/>
          <WhyChooseUs/>
          <TestimonialCards/>
          <UpcomingWebinars/>
          <Instructors/>
          <Footer/>
    </main>
  );
}
