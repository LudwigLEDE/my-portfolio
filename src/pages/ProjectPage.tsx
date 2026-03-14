import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, Globe, Sun, Moon, Database, Shield, Zap } from 'lucide-react';
import { projects } from '../data/content';
import SpotlightCard from '../components/ui/SpotlightCard';
import GlassSurface from '../components/ui/GlassSurface';
import Footer from '../components/layout/Footer';
import WarpBackground from '../components/visuals/WarpBackground';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const project = projects.find(p => p.id === id);
  const [imgLoaded, setImgLoaded] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white bg-white dark:bg-black font-mono">
        {language === 'en' ? '> ERROR: PROJECT_NOT_FOUND' : '> FEHLER: PROJEKT_NICHT_GEFUNDEN'}
      </div>
    );
  }

  const t = {
    back: language === 'en' ? 'Back to Base' : 'Zurück zur Basis',
    overview: language === 'en' ? 'Technical Specifications' : 'Technische Spezifikationen',
    stack: language === 'en' ? 'Integrated Technologies' : 'Integrierte Technologien',
    demo: language === 'en' ? 'Initialize Live Demo' : 'Live Demo starten',
    source: language === 'en' ? 'Access Repository' : 'Quellcode öffnen',
    details: language === 'en' ? 'System Details' : 'Systemdetails',
    status: language === 'en' ? 'Project Status: Deployed' : 'Projektstatus: Veröffentlicht'
  };

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 bg-transparent text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      <ErrorBoundary>
        <WarpBackground />
      </ErrorBoundary>

      {/* Enhanced Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
            {/* Back Button with Glass Effect */}
            <div 
                onClick={() => navigate(-1)}
                className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
                <GlassSurface
                    width="auto"
                    height="44px"
                    borderRadius={22}
                    backgroundOpacity={0.1}
                    blur={8}
                    borderWidth={0.1}
                    className="px-6 shadow-lg shadow-blue-500/5 hover:bg-white/5 transition-colors"
                >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-600 dark:text-white">
                        <ArrowLeft className="w-4 h-4" /> {t.back}
                    </div>
                </GlassSurface>
            </div>

            {/* Right Controls */}
            <div className="flex gap-3">
                <div onClick={(e) => toggleTheme(e)} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <GlassSurface
                        width="44px"
                        height="44px"
                        borderRadius={22}
                        backgroundOpacity={0.1}
                        blur={8}
                        borderWidth={0.1}
                        className="shadow-lg shadow-blue-500/5 hover:bg-white/5 transition-colors"
                    >
                        {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                    </GlassSurface>
                </div>

                <div onClick={toggleLanguage} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <GlassSurface
                        width="110px"
                        height="44px"
                        borderRadius={22}
                        backgroundOpacity={0.1}
                        blur={8}
                        borderWidth={0.1}
                        className="shadow-lg shadow-blue-500/5 hover:bg-white/5 transition-colors hidden sm:flex"
                    >
                        <div className="flex items-center gap-2">
                            <Globe className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                            <div className="flex items-center text-[10px] font-mono font-bold text-slate-600 dark:text-white/90">
                                <span className={language === 'en' ? 'text-blue-600 dark:text-white' : 'text-slate-400 dark:text-slate-500'}>EN</span>
                                <span className="text-slate-300 dark:text-slate-600 mx-1">/</span>
                                <span className={language === 'de' ? 'text-blue-600 dark:text-white' : 'text-slate-400 dark:text-slate-500'}>DE</span>
                            </div>
                        </div>
                    </GlassSurface>
                    <GlassSurface
                        width="44px"
                        height="44px"
                        borderRadius={22}
                        backgroundOpacity={0.1}
                        blur={8}
                        borderWidth={0.1}
                        className="shadow-lg shadow-blue-500/5 sm:hidden"
                    >
                        <span className="text-[10px] font-bold text-slate-600 dark:text-white">{language.toUpperCase()}</span>
                    </GlassSurface>
                </div>
            </div>
        </div>
      </nav>

      {/* Main Content with more vertical spacing to hide footer initially */}
      <main className="pt-48 pb-40 px-6 relative z-10 min-h-[120vh]">
        <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> {t.status}
                    </div>
                    <div className="flex items-center gap-4 flex-grow">
                        <span className="h-px bg-slate-200 dark:bg-white/10 flex-grow"></span>
                        <span className="text-slate-400 dark:text-slate-500 font-mono text-[10px] tracking-tighter uppercase">Source_ID: {project.id}</span>
                    </div>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-[0.9]">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl leading-relaxed font-light">
                    {project.description[language]}
                </p>
            </motion.div>


            {/* Content Architecture */}
            <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start">
                
                {/* Left: Media & Narrative */}
                <div className="space-y-12">
                    <SpotlightCard className="rounded-lg aspect-video overflow-hidden border-slate-200 dark:border-white/10 shadow-2xl">
                         {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                onLoad={() => setImgLoaded(true)}
                                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                         ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-black/20 gap-4">
                                <div className="w-20 h-20 rounded-3xl bg-blue-500/5 flex items-center justify-center border border-blue-500/10">
                                    <Layers className="w-10 h-10 text-blue-500/40" />
                                </div>
                                <p className="text-slate-400 dark:text-slate-600 font-mono text-xs uppercase tracking-widest">Visual data stream unavailable</p>
                            </div>
                         )}
                    </SpotlightCard>
                    
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <Database className="w-4 h-4 text-blue-500" />
                            </div>
                            {t.overview}
                        </h3>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            <p>{project.description[language]}</p>
                            <p>This project showcases a deep integration of {project.tags.join(', ')} to deliver a high-performance, scalable solution. The architecture focuses on modularity and user-centric design principles.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Sidebar */}
                <div className="space-y-8 lg:sticky lg:top-32">
                    {/* Tech Stack Card */}
                    <SpotlightCard className="rounded-lg p-8 border-slate-200 dark:border-white/10" spotlightColor="rgba(59, 130, 246, 0.1)">
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-8 flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-4">
                            <Shield className="w-4 h-4 text-blue-500" /> {t.stack}
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {project.tags.map(tag => (
                                <div key={tag} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group/tag transition-colors hover:border-blue-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                                    <span className="text-sm font-mono font-medium text-slate-600 dark:text-slate-300">{tag}</span>
                                </div>
                            ))}
                        </div>
                    </SpotlightCard>

                    {/* Actions */}
                    <div className="grid gap-4">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-blue-500/20">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                                <ExternalLink className="w-4 h-4" /> {t.demo}
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm">
                                <Github className="w-4 h-4" /> {t.source}
                            </a>
                        )}
                    </div>
                </div>

            </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
