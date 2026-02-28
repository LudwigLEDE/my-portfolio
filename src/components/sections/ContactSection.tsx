import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import SpaceItem from "../ui/SpaceItem";
import SpotlightCard from "../ui/SpotlightCard";
import { useLanguage } from "../../hooks/useLanguage";
import { content } from "../../data/content";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-20 px-6 relative">
      
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <SpaceItem>
            
            {/* Main Terminal Card */}
            <SpotlightCard className="rounded-3xl p-8 md:p-12 border-white/10 text-center" spotlightColor="rgba(16, 185, 129, 0.15)">
                
                {/* Status Header */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-400 tracking-widest uppercase">{language === 'en' ? 'Status: Open to work' : 'Status: Offen für Arbeit'}</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 relative inline-block">
                        {t.title}
                    </h2>
                    
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        {t.subtitle}
                    </p>
                </div>

                {/* Primary CTA */}
                <div className="mb-16">
                    <a 
                        href="mailto:hello@example.com"
                        className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-white text-black rounded-xl overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        
                        <Mail className="w-5 h-5" />
                        <span className="text-lg font-bold tracking-wider uppercase">{t.cta}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Data Links / Socials */}
                <div className="border-t border-white/5 pt-10">
                    <p className="text-xs font-mono text-slate-600 uppercase tracking-[0.2em] mb-6">Connect</p>
                    
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all">
                            <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                            <span className="text-sm font-mono text-slate-400 group-hover:text-white">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/ludwig-engelhardt-498abb224/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all">
                            <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                            <span className="text-sm font-mono text-slate-400 group-hover:text-blue-400">LinkedIn</span>
                        </a>
                        <a href="mailto:hello@example.com" className="group flex items-center gap-3 px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all">
                            <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-sm font-mono text-slate-400 group-hover:text-emerald-400">Email</span>
                        </a>
                    </div>
                </div>

            </SpotlightCard>

        </SpaceItem>
      </div>
    </section>
  );
}