import { ChevronDown } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { content } from "../../data/content";
import TextType from "../visuals/TextType";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative z-10">
      <div className="max-w-6xl mx-auto w-full text-center md:text-left">
        
        <div>
          {/* Status Badge */}
          <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 border border-emerald-100 dark:border-emerald-500/30 rounded-full bg-emerald-50 dark:bg-emerald-500/10 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)] dark:shadow-[0_0_15px_rgba(16,185,129,0.2)] p-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse ml-2"></span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[10px] tracking-[0.2em] uppercase mr-2">
                {t.status}
              </span>
            </div>
          </div>

          {/* LEDE Text Type Animation */}
          <div className="flex items-center justify-center md:justify-start py-4">
            <TextType
                text={[t.title, content[language].cv.title]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorCharacter="_"
                cursorClassName="text-slate-500 animate-pulse"
                className="pb-4 text-[6vw] md:text-[4rem] lg:text-[6rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500 dark:from-white dark:via-white dark:to-slate-500 leading-none drop-shadow-2xl selection:bg-blue-500/30"
            />
          </div>
        </div>
        
        <div className="mt-4">
          <h2 className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed">
            {t.subtitle(t.highlight).split(t.highlight)[0]}
            <span className="text-slate-900 dark:text-white font-semibold relative inline-block">
              {t.highlight}
              <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-500/10 dark:bg-blue-500/20 -z-10 -rotate-1"></span>
            </span>
            {t.subtitle(t.highlight).split(t.highlight)[1]}
          </h2>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500/50 animate-bounce cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection('cv')}>
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
