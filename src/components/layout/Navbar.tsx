import { Globe } from "lucide-react";
import GlassSurface from "../ui/GlassSurface";
import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].nav;

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none px-4">
      {/* Centered Navigation */}
      <div className="pointer-events-auto transition-transform hover:scale-[1.02] duration-300 relative z-20">
        <GlassSurface 
          width="min(500px, 95vw)" 
          height="60px"
          borderRadius={30}
          backgroundOpacity={0.1}
          blur={8}
          borderWidth={0.1}
          className="shadow-lg shadow-blue-500/10"
        >
          <div className="flex gap-3 sm:gap-8 items-center text-[10px] sm:text-xs font-bold tracking-widest text-white/90 px-2 h-full justify-center">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors uppercase">{t.about}</button>
            <button onClick={() => scrollToSection('cv')} className="hover:text-blue-400 transition-colors uppercase">{t.cv}</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors uppercase">{t.projects}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors uppercase">{t.contact}</button>
          </div>
        </GlassSurface>
      </div>

      {/* Language Switcher - Absolute Right */}
      <div className="absolute right-6 top-2 pointer-events-auto z-20 hidden md:block">
        <div onClick={toggleLanguage} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
            <GlassSurface
                width="100px"
                height="40px"
                borderRadius={20}
                backgroundOpacity={0.1}
                blur={8}
                borderWidth={0.1}
                className="shadow-lg shadow-blue-500/5 hover:bg-white/5 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                    <div className="flex items-center text-[10px] font-mono font-bold">
                        <span className={`transition-colors ${language === 'en' ? 'text-white' : 'text-slate-500'}`}>EN</span>
                        <span className="text-slate-600 mx-1">/</span>
                        <span className={`transition-colors ${language === 'de' ? 'text-white' : 'text-slate-500'}`}>DE</span>
                    </div>
                </div>
            </GlassSurface>
        </div>
      </div>
      
      {/* Mobile Language Switcher */}
      <div className="absolute right-4 top-2 pointer-events-auto z-20 md:hidden">
        <div onClick={toggleLanguage} className="cursor-pointer transition-transform active:scale-95">
             <GlassSurface
                width="40px"
                height="40px"
                borderRadius={20}
                backgroundOpacity={0.1}
                blur={8}
                borderWidth={0.1}
                className="shadow-lg shadow-blue-500/5"
            >
                 <span className="text-[10px] font-bold text-white">{language.toUpperCase()}</span>
            </GlassSurface>
        </div>
      </div>

    </nav>
  );
}