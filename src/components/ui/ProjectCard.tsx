import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Code, Layers, Zap, Smartphone } from "lucide-react";
import type { Project } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
import SpotlightCard from "./SpotlightCard";

interface ProjectCardProps {
  project: Project;
}

const COLOR_MAP = {
  frontend: {
    text: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
    glow: 'rgba(59, 130, 246, 0.12)',
    gradient: 'from-blue-600/15 via-blue-500/5',
    dot: 'bg-blue-500',
    icon: <Code className="w-6 h-6" />,
  },
  backend: {
    text: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/25',
    glow: 'rgba(168, 85, 247, 0.12)',
    gradient: 'from-purple-600/15 via-purple-500/5',
    dot: 'bg-purple-500',
    icon: <Layers className="w-6 h-6" />,
  },
  fullstack: {
    text: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    glow: 'rgba(16, 185, 129, 0.12)',
    gradient: 'from-emerald-600/15 via-emerald-500/5',
    dot: 'bg-emerald-500',
    icon: <Zap className="w-6 h-6" />,
  },
  mobile: {
    text: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/25',
    glow: 'rgba(249, 115, 22, 0.12)',
    gradient: 'from-orange-600/15 via-orange-500/5',
    dot: 'bg-orange-500',
    icon: <Smartphone className="w-6 h-6" />,
  },
  systems: {
    text: 'text-red-500',
    bg: 'bg-red-500/10',
    border: 'border-red-500/25',
    glow: 'rgba(239, 68, 68, 0.12)',
    gradient: 'from-red-600/15 via-red-500/5',
    dot: 'bg-red-500',
    icon: <Code className="w-6 h-6" />,
  },
} as const;

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [imgLoaded, setImgLoaded] = useState(false);

  const category = project.categories?.[0] || 'frontend';
  const c = COLOR_MAP[category as keyof typeof COLOR_MAP] ?? COLOR_MAP.frontend;

  return (
    <div
      onClick={() => navigate(`/project/${project.id}`)}
      className="h-full cursor-pointer group/card"
    >
      <SpotlightCard
        className="h-full rounded-2xl border-slate-200/80 dark:border-white/[0.08] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50"
        spotlightColor={c.glow}
      >
        {/* Inner flex column — needed because SpotlightCard wraps children in a plain h-full div */}
        <div className="flex flex-col h-full">

        {/* Visual Header */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-100 dark:bg-[#0c0c14] flex-shrink-0">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 group-hover/card:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </>
          ) : (
            <>
              {/* Grid lines */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(128,128,128,0.07) 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              {/* Accent gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} to-transparent`} />
              {/* Soft radial highlight */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.04),transparent)]" />
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-2xl ${c.bg} border ${c.border} flex items-center justify-center ${c.text} shadow-lg`}>
                  {c.icon}
                </div>
              </div>
            </>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${c.text} bg-white/90 dark:bg-black/75 backdrop-blur-md border ${c.border}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
              {category}
            </div>
          </div>

          {/* Explore pill on hover */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover/card:opacity-100 translate-y-1.5 group-hover/card:translate-y-0 transition-all duration-300">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black shadow-xl text-[10px] font-black uppercase tracking-widest">
              {language === 'en' ? 'Explore' : 'Entdecken'}
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow px-6 pt-5 pb-3 bg-white dark:bg-transparent">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2.5 tracking-tight leading-snug">
            {project.title}
          </h3>
          <div className="flex-grow">
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-3">
              {project.description[language]}
            </p>
          </div>
        </div>

        {/* Tech tags */}
        <div className="px-6 pb-5 pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-white/[0.05]">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-white/[0.04] px-2.5 py-1 rounded-md border border-slate-200/70 dark:border-white/[0.07]"
            >
              {tag}
            </span>
          ))}
        </div>

        </div>{/* end inner flex column */}
      </SpotlightCard>
    </div>
  );
}
