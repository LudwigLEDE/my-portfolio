import { Github, Linkedin, Mail } from "lucide-react";
import SpaceItem from "../ui/SpaceItem";
import GlassSurface from "../ui/GlassSurface";

export default function ContactSection() {
  return (
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
            <a href="https://www.linkedin.com/in/ludwig-engelhardt-498abb224/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1"><Linkedin className="w-8 h-8" /></a>
            <a href="mailto:hello@example.com" className="text-slate-500 hover:text-emerald-400 transition-colors transform hover:-translate-y-1"><Mail className="w-8 h-8" /></a>
          </div>
        </div>
      </SpaceItem>
    </section>
  );
}