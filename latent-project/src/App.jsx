import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProcessSection from "./components/ProcessSection";
import GlossaryDeck from "./components/GlossaryDeck";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProcessSection />
        <GlossaryDeck />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
