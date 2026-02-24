import { ChevronDown } from "lucide-react";
import SpaceItem from "../ui/SpaceItem";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import TextType from "../visuals/TextType";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();
  const t = content[language].hero;

  const StatusBadge = () => (
    <div className="flex justify-center md:justify-start">
      <div className="inline-flex items-center gap-2 border border-emerald-500/30 rounded-full bg-emerald-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)] p-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-2"></span>
        <span className="text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mr-2">
          {t.status}
        </span>
      </div>
    </div>
  );

  const Description = () => (
    <h2 className="text-base sm:text-lg md:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
      {language === 'en' ? (
        <>
          I'm a 22-year-old <span className="text-white font-semibold relative inline-block">
            Full Stack Developer
            <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-500/20 -z-10 -rotate-1"></span>
          </span> based in Berlin. I build fast, interactive things for the web and love turning complex problems into simple code.
        </>
      ) : (
        <>
          Ich bin ein 22-jähriger <span className="text-white font-semibold relative inline-block">
            Full Stack Entwickler
            <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-500/20 -z-10 -rotate-1"></span>
          </span> aus Berlin. Ich baue schnelle, interaktive Webseiten und liebe es, komplexe Probleme in einfachen Code zu verwandeln.
        </>
      )}
    </h2>
  );

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full text-center md:text-left">
        
        <div>
          <StatusBadge />

          {/* LEDE Text Type Animation */}
          <div className="flex items-center justify-center md:justify-start py-4">
            <TextType
                text={["LEDE", "Ludwig E.D. Engelhardt"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="_"
                cursorClassName="text-slate-500 animate-pulse"
                className="pb-4 text-[6vw] md:text-[4rem] lg:text-[6rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-slate-500 leading-none drop-shadow-2xl selection:bg-blue-500/30"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <Description />
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500/50 animate-bounce cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('cv')}>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
