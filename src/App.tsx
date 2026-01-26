import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react";
import WarpBackground from "./components/WarpBackground";
import SpaceItem from "./components/SpaceItem";
import GlassSurface from "./components/GlassSurface";

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

      {/* 2. Glass Navigation Bar - KEEPING THIS because it floats nicely */}
      <nav className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div className="pointer-events-auto transition-transform hover:scale-[1.02] duration-300">
          <GlassSurface 
            width="320px" 
            height="60px"
            borderRadius={30}
            backgroundOpacity={0.1}
            blur={8}
            borderWidth={0.1}
            className="shadow-lg shadow-blue-500/10"
          >
            <div className="flex gap-8 items-center text-xs font-bold tracking-widest text-white/90">
              <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors uppercase">About</button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors uppercase">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors uppercase">Contact</button>
            </div>
          </GlassSurface>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section id="about" className="h-screen flex flex-col justify-center px-6 relative z-10">
        <div className="max-w-5xl mx-auto w-full text-center md:text-left">
          
          <SpaceItem>
            <div className="inline-block mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
              <span className="text-blue-400 font-mono text-xs tracking-[0.2em] animate-pulse">
                SYSTEM ONLINE
              </span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-slate-500 mb-6 drop-shadow-2xl">
              ALEX DEV.
            </h1>
          </SpaceItem>
          
          <SpaceItem delay={0.2}>
            <h2 className="text-2xl md:text-4xl text-slate-400 max-w-3xl font-light leading-snug mb-12">
              Frontend Engineer crafting <span className="text-white font-semibold">immersive</span> WebGL experiences in the void.
            </h2>
          </SpaceItem>

          {/* Buttons: Keep Glass for the "Call to Action" buttons */}
          <SpaceItem delay={0.4}>
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
              
              <div 
                className="cursor-pointer group"
                onClick={() => scrollToSection('projects')}
              >
                <GlassSurface 
                  width={180}
                  height={60}
                  borderRadius={100}
                  opacity={0.5}
                  mixBlendMode="screen"
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <span className="font-bold tracking-wider text-blue-200 group-hover:text-white">PROJECTS</span>
                </GlassSurface>
              </div>

              <div 
                className="cursor-pointer group"
                onClick={() => scrollToSection('contact')}
              >
                <GlassSurface 
                  width={180}
                  height={60}
                  borderRadius={100}
                  displace={1} 
                  redOffset={10} 
                  blueOffset={-10}
                  opacity={0.3}
                  className="transition-transform duration-300 group-hover:scale-105"
                >
                  <span className="font-bold tracking-wider text-slate-200 group-hover:text-white">CONTACT</span>
                </GlassSurface>
              </div>

            </div>
          </SpaceItem>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-500/50 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* 4. Projects Section - NEW "TECH CARD" STYLE */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          
          <SpaceItem className="mb-24 flex items-end gap-6">
            <h2 className="text-5xl md:text-6xl font-bold">Mission Logs</h2>
            <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow mb-4"></div>
          </SpaceItem>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
            
            {/* Project 1 - Standard Tech Card (No Glass Component) */}
            <SpaceItem>
              {/* New Style: Dark background, thin border, glow on hover.
                  Much faster rendering than the glass effect. 
              */}
              <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
                
                {/* Image / Header Area */}
                <div className="h-48 bg-gradient-to-b from-blue-900/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Nebula Dash</h3>
                    <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 pt-6">
                   <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      Real-time telemetry for orbital stations. Processes 10k+ data points utilizing WebWorkers and localized state management.
                   </p>
                   
                   {/* Tech Stack Pills */}
                   <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        React 19
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        WebGL
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Tailwind
                      </span>
                   </div>
                </div>

                {/* Decorative Glow on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
              </div>
            </SpaceItem>

            {/* Project 2 */}
            <SpaceItem delay={0.2}>
              <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
                
                <div className="h-48 bg-gradient-to-b from-purple-900/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">Dark Matter</h3>
                    <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-8 pt-6">
                   <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      A headless design system for deep space comms. Fully accessible and optimized for high-latency inter-planetary connections.
                   </p>
                   
                   <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        Zustand
                      </span>
                   </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>
              </div>
            </SpaceItem>

            {/* Project 3 */}
            <SpaceItem>
              <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-500">
                
                <div className="h-48 bg-gradient-to-b from-emerald-900/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <h3 className="text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">Exo-Market</h3>
                    <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="p-8 pt-6">
                   <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      Crypto-ready marketplace for trading rare assets. Features 3D product previews and instant wallet connectivity.
                   </p>
                   
                   <div className="flex gap-3 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Solidity
                      </span>
                   </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
              </div>
            </SpaceItem>

          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-40 px-6 text-center">
        <SpaceItem>
          <div className="max-w-4xl mx-auto relative">
            
            <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              READY TO <br /> <span className="text-blue-500">LAUNCH?</span>
            </h2>
            <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              My sensors are scanning for new collaborations. Whether you need a pilot for your next project or just want to discuss the cosmos.
            </p>
            
            {/* Keeping the Glass Button here because it's a major interaction point */}
            <div 
              className="mx-auto cursor-pointer group inline-block"
              onClick={() => window.location.href = 'mailto:hello@example.com'}
            >
               <GlassSurface 
                  width={280}
                  height={80}
                  borderRadius={100}
                  backgroundOpacity={0.2}
                  className="transition-transform duration-500 group-hover:scale-105"
                >
                  <span className="text-xl font-bold tracking-widest text-white">SEND SIGNAL</span>
                </GlassSurface>
            </div>

            <div className="mt-16 flex justify-center gap-10">
              <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:-translate-y-1"><Github className="w-8 h-8" /></a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1"><Linkedin className="w-8 h-8" /></a>
              <a href="#" className="text-slate-500 hover:text-emerald-400 transition-colors transform hover:-translate-y-1"><Mail className="w-8 h-8" /></a>
            </div>
          </div>
        </SpaceItem>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-xs border-t border-white/5 bg-black/80 backdrop-blur-md">
        <p>SYSTEM VERSION 4.0 // DESIGNED IN ZERO-G</p>
      </footer>

    </div>
  );
}

export default App;