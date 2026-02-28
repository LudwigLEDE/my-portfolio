import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Code, Layers, Zap } from "lucide-react";
import type { Project } from "../../types";
import SpotlightCard from "./SpotlightCard";
import { useLanguage } from "../../hooks/useLanguage";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Determine accent color based on category
  let accentColor: 'blue' | 'purple' | 'emerald' | 'orange' = 'blue';
  const category = project.categories?.[0] || 'frontend';
  if (category === 'backend') accentColor = 'purple';
  if (category === 'fullstack') accentColor = 'emerald';
  if (category === 'mobile') accentColor = 'orange';

  const colors = {
    blue: { 
        text: 'text-blue-600 dark:text-blue-400', 
        glow: 'rgba(59, 130, 246, 0.15)',
        border: 'group-hover:border-blue-500/50',
        icon: <Code className="w-5 h-5" />
    },
    purple: { 
        text: 'text-purple-600 dark:text-purple-400', 
        glow: 'rgba(168, 85, 247, 0.15)',
        border: 'group-hover:border-purple-500/50',
        icon: <Layers className="w-5 h-5" />
    },
    emerald: { 
        text: 'text-emerald-600 dark:text-emerald-400', 
        glow: 'rgba(16, 185, 129, 0.15)',
        border: 'group-hover:border-emerald-500/50',
        icon: <Zap className="w-5 h-5" />
    },
    orange: { 
        text: 'text-orange-600 dark:text-orange-400', 
        glow: 'rgba(249, 115, 22, 0.15)',
        border: 'group-hover:border-orange-500/50',
        icon: <Code className="w-5 h-5" />
    }
  };

  const c = colors[accentColor];

  return (
    <div onClick={() => navigate(`/project/${project.id}`)} className="h-full cursor-pointer group/wrap">
      <SpotlightCard 
        className="h-full rounded-3xl flex flex-col group border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-500 group-hover/wrap:-translate-y-2 group-hover/wrap:shadow-2xl group-hover/wrap:shadow-blue-500/10" 
        spotlightColor={c.glow}
      >
          
        {/* Visual Header Area - Full Image focus */}
        <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/40">
            {project.image ? (
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center relative">
                    {/* Abstract technical background when no image */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]" 
                        style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 0)`, backgroundSize: '24px 24px' }}
                    />
                    <div className={`p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-xl ${c.text}`}>
                        {c.icon}
                    </div>
                </div>
            )}

            {/* Category Overlay */}
            <div className="absolute bottom-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${c.text} bg-white/90 dark:bg-black/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-lg`}>
                    {category}
                </span>
            </div>

            {/* Quick Link Icon */}
            <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <div className="p-2 rounded-full bg-black/80 text-white backdrop-blur-md">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-8 flex-grow flex flex-col">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-light italic">
                "{project.description[language]}"
            </p>

            {/* Tech Stack Footer */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono font-medium text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2 py-1 rounded-md border border-slate-100 dark:border-white/5">
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span className="text-[10px] font-mono text-slate-400 py-1">+{project.tags.length - 3}</span>
                    )}
                </div>
                
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-tighter text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {language === 'en' ? 'View Project' : 'Projekt ansehen'}
                </div>
            </div>
        </div>

      </SpotlightCard>
    </div>
  );
}
