import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Programs from "./components/Programs";
import Stats from "./components/Stats";
import Destinations from "./components/Destinations";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-cloud">
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Programs />
        <Stats />
        <Destinations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}