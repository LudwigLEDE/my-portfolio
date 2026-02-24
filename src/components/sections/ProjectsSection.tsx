import { useState } from 'react';
import { motion } from 'framer-motion';
import SpaceItem from "../ui/SpaceItem";
import { useLanguage } from "../../context/LanguageContext";
import { content, projects } from "../../data/content";
import type { Project } from "../../types";
import ProjectCard from "../ui/ProjectCard";
import { Grid, Terminal } from 'lucide-react';

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = content[language].projects;
  const [filter, setFilter] = useState<'all' | Project['category']>('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category === filter);

  const categories = [
    { id: 'all', label: t.filterAll },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  return (
    <section id="projects" className="min-h-screen py-12 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header with HUD styling */}
        <SpaceItem className="mb-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/10 pb-1">
            <div>
                 <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded bg-blue-500/10 border border-blue-500/20">
                        <Terminal className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">/Modules/Deployed</span>
                 </div>
                 <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">{t.title}</h2>
            </div>
            
            {/* HUD Filter Switch */}
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl overflow-x-auto max-w-full no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id as any)}
                        className={`relative px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                            filter === cat.id 
                            ? 'text-black shadow-lg' 
                            : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'
                        }`}
                    >
                        {filter === cat.id && (
                            <motion.div 
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-white rounded-lg"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                ))}
            </div>
          </div>
        </SpaceItem>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <SpaceItem key={project.id} delay={index * 0.1} className="h-full">
                <ProjectCard project={project} />
            </SpaceItem>
          ))}
        </div>
      </div>
    </section>
  );
}