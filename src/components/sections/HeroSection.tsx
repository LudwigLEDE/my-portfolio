import { ChevronDown } from "lucide-react";
import SpaceItem from "../ui/SpaceItem";
import GlassSurface from "../ui/GlassSurface";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="about" className="h-screen flex flex-col justify-center px-6 relative z-10">
      <div className="max-w-5xl mx-auto w-full text-center md:text-left">
        
        <SpaceItem>
          <div className="inline-block mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-400 font-mono text-xs tracking-[0.2em] animate-pulse">
              SYSTEM ONLINE
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-slate-500 mb-6 drop-shadow-2xl">
            LUDWIG.
          </h1>
        </SpaceItem>
        
        <SpaceItem delay={0.2}>
          <h2 className="text-2xl md:text-4xl text-slate-400 max-w-3xl font-light leading-snug mb-12">
            Driven <span className="text-white font-semibold">Full Stack Developer</span> shaping the future of web technologies. Innovator at heart.
          </h2>
        </SpaceItem>

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
  );
}