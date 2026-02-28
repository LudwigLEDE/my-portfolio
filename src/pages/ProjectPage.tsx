import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, Code, Globe, Sun, Moon } from 'lucide-react';
import { projects } from '../data/content';
import SpotlightCard from '../components/ui/SpotlightCard';
import GlassSurface from '../components/ui/GlassSurface';
import Footer from '../components/layout/Footer';
import WarpBackground from '../components/visuals/WarpBackground';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 dark:text-white bg-white dark:bg-black">
        {language === 'en' ? 'Project not found' : 'Projekt nicht gefunden'}
      </div>
    );
  }

  const t = {
    back: language === 'en' ? 'Back to Base' : 'Zurück zur Basis',
    overview: language === 'en' ? 'Project Overview' : 'Projektübersicht',
    stack: language === 'en' ? 'Tech Stack' : 'Technologien',
    demo: language === 'en' ? 'Live Demo' : 'Live Demo',
    source: language === 'en' ? 'View Source' : 'Quellcode'
  };

  return (
    <div className="min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 bg-transparent text-slate-900 dark:text-white selection:bg-blue-500 selection:text-white">
      <WarpBackground />
      
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
            {/* Back Button */}
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-mono uppercase tracking-wider text-slate-900 dark:text-white shadow-sm"
            >
                <ArrowLeft className="w-4 h-4" /> {t.back}
            </button>

            {/* Right Controls */}
            <div className="flex gap-2">
                {/* Theme Toggle */}
                <div onClick={(e) => toggleTheme(e)} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <GlassSurface
                        width="40px"
                        height="40px"
                        borderRadius={20}
                        backgroundOpacity={0.1}
                        blur={8}
                        borderWidth={0.1}
                        className="shadow-lg shadow-blue-500/5 hover:bg-white/5 transition-colors"
                    >
                        {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
                    </GlassSurface>
                </div>

                {/* Language Toggle */}
                <div onClick={toggleLanguage} className="cursor-pointer transition-transform hover:scale-105 active:scale-95">
                    <GlassSurface
                        width="100px"
                        height="40px"
                        borderRadius={20}
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
                    {/* Mobile Language Icon */}
                    <GlassSurface
                        width="40px"
                        height="40px"
                        borderRadius={20}
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

      <main className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono uppercase tracking-widest">
                        {project.categories?.join(', ')}
                    </span>
                    <span className="h-px bg-slate-200 dark:bg-white/10 flex-grow"></span>
                    <span className="text-slate-500 font-mono text-xs">ID: {project.id}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-6">{project.title}</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed font-light">{project.description[language]}</p>
            </motion.div>


            {/* Main Content Grid */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                
                {/* Left: Images/Demo */}
                <div className="space-y-8">
                    <SpotlightCard className="rounded-3xl aspect-video bg-slate-50 dark:bg-black/50 overflow-hidden border-slate-200 dark:border-white/10">
                         {project.image ? (
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                            />
                         ) : (
                            <div className="w-full h-full flex items-center justify-center opacity-20">
                                <Layers className="w-12 h-12 text-slate-600 dark:text-slate-400" />
                            </div>
                         )}
                    </SpotlightCard>
                    
                    <div className="prose dark:prose-invert max-w-none">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.overview}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                            {project.description[language]}
                        </p>
                    </div>
                </div>

                {/* Right: Meta Info */}
                <div className="space-y-6">
                    <SpotlightCard className="rounded-2xl p-6 bg-white dark:bg-black/40 border-slate-200 dark:border-white/10" spotlightColor="rgba(59, 130, 246, 0.1)">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-600 dark:text-blue-500" /> {t.stack}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 text-xs text-slate-600 dark:text-slate-300 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>

                    <div className="grid gap-4">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-xl shadow-blue-500/10">
                                <ExternalLink className="w-4 h-4" /> {t.demo}
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors shadow-sm">
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
