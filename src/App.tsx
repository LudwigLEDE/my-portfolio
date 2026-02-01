import WarpBackground from "./components/visuals/WarpBackground";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CVSection from "./components/sections/CVSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-white font-sans relative overflow-x-hidden bg-black selection:bg-blue-500 selection:text-white">
      
      {/* 1. Global 3D Background */}
      <WarpBackground />

      {/* 2. Glass Navigation Bar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* 3. Hero Section */}
      <HeroSection scrollToSection={scrollToSection} />

      {/* 3.5. CV Section */}
      <CVSection />

      {/* 4. Projects Section */}
      <ProjectsSection />

      {/* 5. Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;