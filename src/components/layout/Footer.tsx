import { useLanguage } from "../../context/LanguageContext";
import { content } from "../../data/content";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="py-12 text-center text-slate-500 text-sm border-t border-white/5 bg-black/80 backdrop-blur-md relative z-20">
        <div className="flex flex-col gap-6 items-center">
            
            <p className="tracking-widest opacity-70 hover:opacity-100 transition-opacity duration-300">
                {t.text}
            </p>

            <div className="flex gap-6 text-xs font-mono uppercase tracking-wider">
                <Link 
                    to="/imprint"
                    className="hover:text-blue-400 transition-colors"
                >
                    {t.impressum}
                </Link>
                <Link 
                    to="/privacy"
                    className="hover:text-blue-400 transition-colors"
                >
                    {t.privacy}
                </Link>
            </div>

            {/* Language Toggle (Optional in Footer since it's now in Navbar) */}
            <div className="opacity-50 hover:opacity-100 transition-opacity">
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[10px] font-bold"
                >
                    <Globe className="w-3 h-3" />
                    <span className={language === 'en' ? 'text-white' : 'text-slate-500'}>EN</span>
                    <span className="text-slate-600">/</span>
                    <span className={language === 'de' ? 'text-white' : 'text-slate-500'}>DE</span>
                </button>
            </div>

        </div>
    </footer>
  );
}