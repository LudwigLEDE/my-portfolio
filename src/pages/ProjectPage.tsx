import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Layers, Code } from 'lucide-react';
import { projects } from '../data/content';
import SpotlightCard from '../components/ui/SpotlightCard';
import Footer from '../components/layout/Footer';
import WarpBackground from '../components/visuals/WarpBackground';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        {language === 'en' ? 'Project not found' : 'Projekt nicht gefunden'}
      </div>
    );
  }

  const t = {
    back: language === 'en' ? 'Back to Base' : 'Zurück zur Basis',
    overview: language === 'en' ? 'Project Overview' : 'Projektübersicht',
    offline: language === 'en' ? 'Visual Data Stream Offline' : 'Visueller Datenstrom Offline',
    stack: language === 'en' ? 'Tech Stack' : 'Technologien',
    demo: language === 'en' ? 'Live Demo' : 'Live Demo',
    source: language === 'en' ? 'View Source' : 'Quellcode'
  };

  return (
    <div className="min-h-screen text-white font-sans relative overflow-x-hidden bg-black selection:bg-blue-500 selection:text-white">
      <WarpBackground />
      
      {/* Navbar (Reusable or simplified) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-mono uppercase tracking-wider"
            >
                <ArrowLeft className="w-4 h-4" /> {t.back}
            </button>
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
                    <span className="px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest">
                        {project.categories?.join(', ')}
                    </span>
                    <span className="h-px bg-white/10 flex-grow"></span>
                    <span className="text-slate-500 font-mono text-xs">ID: {project.id}</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">{project.title}</h1>
                <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">{project.description[language]}</p>
            </motion.div>


            {/* Main Content Grid */}
            <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                
                {/* Left: Images/Demo (Placeholder for now) */}
                <div className="space-y-8">
                    <SpotlightCard className="rounded-3xl aspect-video bg-black/50 flex items-center justify-center border-white/10">
                         <div className="text-center">
                            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                            <p className="text-slate-500 font-mono text-sm">{t.offline}</p>
                         </div>
                    </SpotlightCard>
                    
                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-2xl font-bold text-white mb-4">{t.overview}</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {project.description[language]}
                        </p>
                    </div>
                </div>

                {/* Right: Meta Info */}
                <div className="space-y-6">
                    <SpotlightCard className="rounded-2xl p-6 border-white/10" spotlightColor="rgba(59, 130, 246, 0.1)">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Code className="w-4 h-4 text-blue-500" /> {t.stack}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded bg-white/5 border border-white/5 text-xs text-slate-300 font-mono">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </SpotlightCard>

                    <div className="grid gap-4">
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform">
                                <ExternalLink className="w-4 h-4" /> {t.demo}
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
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
