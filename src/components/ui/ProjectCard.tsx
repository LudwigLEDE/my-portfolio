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

  const colors: Record<typeof accentColor, { 
    text: string; 
    glow: string; 
    border: string; 
    bg: string; 
    icon: React.ReactNode 
  }> = {
    blue: { 
        text: 'text-blue-600 dark:text-blue-400', 
        glow: 'rgba(59, 130, 246, 0.25)',
        border: 'group-hover:border-blue-500/50',
        bg: 'bg-blue-500/10',
        icon: <Code className="w-4 h-4 text-blue-600 dark:text-blue-400" />
    },
    purple: { 
        text: 'text-purple-600 dark:text-purple-400', 
        glow: 'rgba(168, 85, 247, 0.25)',
        border: 'group-hover:border-purple-500/50',
        bg: 'bg-purple-500/10',
        icon: <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
    },
    emerald: { 
        text: 'text-emerald-600 dark:text-emerald-400', 
        glow: 'rgba(16, 185, 129, 0.25)',
        border: 'group-hover:border-emerald-500/50',
        bg: 'bg-emerald-500/10',
        icon: <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
    },
    orange: { 
        text: 'text-orange-600 dark:text-orange-400', 
        glow: 'rgba(249, 115, 22, 0.25)',
        border: 'group-hover:border-orange-500/50',
        bg: 'bg-orange-500/10',
        icon: <Code className="w-4 h-4 text-orange-600 dark:text-orange-400" />
    }
  };

  const c = colors[accentColor];

  return (
    <div onClick={() => navigate(`/project/${project.id}`)} className="h-full cursor-pointer">
      <SpotlightCard className="h-full rounded-2xl flex flex-col group bg-white dark:bg-black/40 border-slate-200 dark:border-white/5" spotlightColor={c.glow}>
          
          {/* Header Image Area Placeholder */}
        <div className="relative h-48 w-full overflow-hidden border-b border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-black/40 group-hover:bg-slate-100 dark:group-hover:bg-black/20 transition-colors">
            
            {/* Grid Pattern */}
            <div 
                className="absolute inset-0 opacity-20" 
                style={{ 
                    backgroundImage: `radial-gradient(${c.text.replace('text-', '').includes('blue') ? '#60a5fa' : '#34d399'} 1px, transparent 0)`, 
                    backgroundSize: '20px 20px' 
                }}
            ></div>
            
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[200%] w-full animate-[scan_4s_linear_infinite] opacity-30"></div>

            <div className="absolute top-4 right-4 z-10">
                <div className={`p-2 rounded-lg bg-white/80 dark:bg-black/50 backdrop-blur border border-slate-200 dark:border-white/10 ${c.border} transition-colors shadow-sm`}>
                    {c.icon}
                </div>
            </div>

            <div className="absolute bottom-4 left-4 z-10">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${c.text} bg-white/90 dark:bg-black/60 px-2 py-1 rounded border border-slate-200 dark:border-white/10 shadow-sm`}>
                    {category}
                </span>
            </div>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors tracking-tight">{project.title}</h3>
                {(project.link || project.liveUrl || project.githubUrl) && (
                    <a 
                        href={project.link || project.liveUrl || project.githubUrl} 
                        className="text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                )}
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.description[language]}
            </p>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2 py-1 rounded border border-slate-100 dark:border-white/5 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>

      </SpotlightCard>
    </div>
  );
}
