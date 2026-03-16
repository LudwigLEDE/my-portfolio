import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, Globe, Sun, Moon, Database, Shield, Zap } from 'lucide-react';
import { projects } from '../data/content';
import SpotlightCard from '../components/ui/SpotlightCard';
import ProjectCard from '../components/ui/ProjectCard';
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

  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.categories.some(c => project.categories.includes(c)))
    .slice(0, 3);

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
                    {project.image && (
                        <SpotlightCard className="rounded-lg aspect-video overflow-hidden border-slate-200 dark:border-white/10 shadow-2xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                onLoad={() => setImgLoaded(true)}
                                className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />
                        </SpotlightCard>
                    )}
                    
                    <div className="space-y-6">
                        <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                <Database className="w-4 h-4 text-blue-500" />
                            </div>
                            {t.overview}
                        </h3>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                            <p>{project.description[language]}</p>
                        </div>
                    </div>
                </div>

                {/* Right: Technical Sidebar */}
                <div className="space-y-8 lg:sticky lg:top-32">
                    {/* Tech Stack Card */}
                    <SpotlightCard className="rounded-lg p-8 border-slate-200 dark:border-white/10" spotlightColor="rgba(59, 130, 246, 0.1)">
                        <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-slate-100 dark:border-white/5 pb-4">
                            <Shield className="w-4 h-4 text-blue-500" /> {t.stack}
                        </h3>
                        <div className="font-mono text-sm leading-relaxed">
                            <div className="text-slate-400 dark:text-slate-500 mb-3 text-xs">
                                <span className="text-slate-300 dark:text-slate-600">{'// '}</span>
                                {project.title}
                            </div>
                            {project.tags.map((tag, i) => (
                                <div key={i} className="flex flex-wrap gap-1 mb-1">
                                    <span className="text-blue-500 dark:text-blue-400">import</span>
                                    <span className="text-slate-700 dark:text-slate-200">{`{ ${tag} }`}</span>
                                    <span className="text-blue-400 dark:text-blue-500">from</span>
                                    <span className="text-slate-400 dark:text-slate-500">'{tag.toLowerCase()}'</span>
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

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-24"
                >
                    <div className="flex items-center gap-4 mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            {language === 'en' ? '// Related Projects' : '// Ähnliche Projekte'}
                        </span>
                        <span className="h-px bg-slate-200 dark:bg-white/10 flex-grow" />
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {relatedProjects.map((p, i) => (
                            <ProjectCard key={p.id} project={p} index={i} />
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Prev / Next navigation */}
            <div className="mt-16 flex items-center justify-between gap-4">
                {prevProject ? (
                    <button
                        onClick={() => navigate(`/project/${prevProject.id}`)}
                        className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all text-left"
                    >
                        <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                                {language === 'en' ? 'Previous' : 'Vorheriges'}
                            </div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{prevProject.title}</div>
                        </div>
                    </button>
                ) : <div />}
                {nextProject && (
                    <button
                        onClick={() => navigate(`/project/${nextProject.id}`)}
                        className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all text-right ml-auto"
                    >
                        <div>
                            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
                                {language === 'en' ? 'Next' : 'Nächstes'}
                            </div>
                            <div className="text-sm font-bold text-slate-900 dark:text-white">{nextProject.title}</div>
                        </div>
                        <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors flex-shrink-0 rotate-180" />
                    </button>
                )}
            </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
