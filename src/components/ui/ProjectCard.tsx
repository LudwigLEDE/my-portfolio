import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Code, Layers, Zap } from "lucide-react";
import type { Project } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import SpotlightCard from "./SpotlightCard";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme } = useTheme();
  
  // Determine accent color based on category
  let accentColor: 'blue' | 'purple' | 'emerald' | 'orange' = 'blue';
  const category = project.categories?.[0] || 'frontend';
  if (category === 'backend') accentColor = 'purple';
  if (category === 'fullstack') accentColor = 'emerald';
  if (category === 'mobile') accentColor = 'orange';

  const colors = {
    blue: { text: 'text-blue-600 dark:text-blue-400', glow: 'rgba(59, 130, 246, 0.15)', icon: <Code className="w-5 h-5" /> },
    purple: { text: 'text-purple-600 dark:text-purple-400', glow: 'rgba(168, 85, 247, 0.15)', icon: <Layers className="w-5 h-5" /> },
    emerald: { text: 'text-emerald-600 dark:text-emerald-400', glow: 'rgba(16, 185, 129, 0.15)', icon: <Zap className="w-5 h-5" /> },
    orange: { text: 'text-orange-600 dark:text-orange-400', glow: 'rgba(249, 115, 22, 0.15)', icon: <Code className="w-5 h-5" /> }
  };

  const c = colors[accentColor];

  return (
    <div 
      onClick={() => navigate(`/project/${project.id}`)} 
      className="h-full cursor-pointer group/card transition-all duration-500 hover:-translate-y-2"
    >
      <SpotlightCard 
        className="h-full rounded-lg flex flex-col border-slate-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-shadow duration-500" 
        spotlightColor={c.glow}
      >
          
        {/* visual Header Area */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-50 dark:bg-black/40 border-b border-slate-100 dark:border-white/5">
            {project.image ? (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                        style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 0)`, backgroundSize: '24px 24px' }}
                    />
                    <div className={`p-6 rounded-3xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-2xl ${c.text}`}>
                        {c.icon}
                    </div>
                </div>
            )}

            {/* Category Tag */}
            <div className="absolute top-6 left-6 z-10">
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${c.text} bg-white/90 dark:bg-black/60 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-xl`}>
                    {category}
                </span>
            </div>

            {/* Floating Interaction Button */}
            <div className="absolute bottom-6 right-6 z-10 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black shadow-2xl">
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        {language === 'en' ? 'Explore' : 'Entdecken'}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-8 flex-grow flex flex-col bg-white dark:bg-transparent min-h-0">
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter leading-none">
                {project.title}
            </h3>
            
            <div className="flex-grow">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 font-light">
                    {project.description[language]}
                </p>
            </div>
        </div>

        {/* Tech Stack Base Bar - Anchored to absolute bottom */}
        <div className="mt-auto px-6 py-4 bg-slate-50/50 dark:bg-white/[0.03] border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2 group-hover:bg-slate-100/50 dark:group-hover:bg-white/[0.05] transition-colors duration-500">
            {project.tags.map((tag, i) => (
                <span key={i} className="text-[9px] font-mono font-bold text-slate-500 dark:text-slate-500 bg-white dark:bg-white/5 px-2 py-0.5 rounded border border-slate-200 dark:border-white/10 shadow-sm">
                    {tag}
                </span>
            ))}
        </div>

      </SpotlightCard>
    </div>
  );
}
