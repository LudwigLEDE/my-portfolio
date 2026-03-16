import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Github, Globe, ArrowUpRight, Code, Layers, Zap, Smartphone } from "lucide-react";
import { useMotionValue } from "framer-motion";
import type { Project } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import SpotlightCard from "./SpotlightCard";

interface ProjectCardProps {
  project: Project;
}

const categoryConfig: Record<string, {
  gradient: string;
  lightGradient: string;
  orb1: string;
  orb2: string;
  spotColorDark: string;
  spotColorLight: string;
  badge: string;
  tagStyle: string;
  lightBadge: string;
  lightTagStyle: string;
  accentBorder: string;
  lightAccentBorder: string;
  accentRgb: string;
  icon: React.ReactNode;
}> = {
  frontend: {
    gradient: 'from-blue-500/[0.10] via-blue-400/[0.04] to-transparent',
    lightGradient: 'from-blue-50/70 via-slate-50/20 to-transparent',
    orb1: 'bg-blue-500',
    orb2: 'bg-blue-400',
    spotColorDark: 'rgba(59,130,246,0.15)',
    spotColorLight: 'rgba(59,130,246,0.07)',
    badge: 'text-blue-400 bg-blue-500/[0.08] border-blue-500/20',
    tagStyle: 'text-blue-400/80 bg-blue-500/[0.06] border-blue-500/[0.15]',
    lightBadge: 'text-blue-600 bg-blue-50 border-blue-100',
    lightTagStyle: 'text-slate-600 bg-slate-50 border-slate-200',
    accentBorder: 'group-hover/card:border-blue-500/20 group-hover/card:shadow-blue-500/10',
    lightAccentBorder: 'group-hover/card:border-slate-300/80 group-hover/card:shadow-slate-200/60',
    accentRgb: '59,130,246',
    icon: <Code className="w-6 h-6" />,
  },
  backend: {
    gradient: 'from-slate-600/[0.12] via-slate-500/[0.05] to-transparent',
    lightGradient: 'from-slate-100/60 via-slate-50/20 to-transparent',
    orb1: 'bg-blue-700',
    orb2: 'bg-slate-500',
    spotColorDark: 'rgba(100,116,139,0.18)',
    spotColorLight: 'rgba(100,116,139,0.07)',
    badge: 'text-slate-300 bg-slate-500/[0.08] border-slate-500/20',
    tagStyle: 'text-slate-400/80 bg-slate-500/[0.06] border-slate-500/[0.15]',
    lightBadge: 'text-slate-600 bg-slate-100 border-slate-200',
    lightTagStyle: 'text-slate-600 bg-slate-50 border-slate-200',
    accentBorder: 'group-hover/card:border-slate-500/20 group-hover/card:shadow-slate-500/10',
    lightAccentBorder: 'group-hover/card:border-slate-300/80 group-hover/card:shadow-slate-200/60',
    accentRgb: '100,116,139',
    icon: <Layers className="w-6 h-6" />,
  },
  fullstack: {
    gradient: 'from-emerald-500/[0.10] via-emerald-400/[0.04] to-transparent',
    lightGradient: 'from-emerald-50/60 via-slate-50/20 to-transparent',
    orb1: 'bg-emerald-500',
    orb2: 'bg-emerald-400',
    spotColorDark: 'rgba(16,185,129,0.15)',
    spotColorLight: 'rgba(16,185,129,0.07)',
    badge: 'text-emerald-400 bg-emerald-500/[0.08] border-emerald-500/20',
    tagStyle: 'text-emerald-400/80 bg-emerald-500/[0.06] border-emerald-500/[0.15]',
    lightBadge: 'text-emerald-700 bg-emerald-50 border-emerald-100',
    lightTagStyle: 'text-slate-600 bg-slate-50 border-slate-200',
    accentBorder: 'group-hover/card:border-emerald-500/20 group-hover/card:shadow-emerald-500/10',
    lightAccentBorder: 'group-hover/card:border-slate-300/80 group-hover/card:shadow-slate-200/60',
    accentRgb: '16,185,129',
    icon: <Zap className="w-6 h-6" />,
  },
  mobile: {
    gradient: 'from-blue-500/[0.08] via-emerald-400/[0.04] to-transparent',
    lightGradient: 'from-blue-50/50 via-slate-50/20 to-transparent',
    orb1: 'bg-blue-500',
    orb2: 'bg-emerald-400',
    spotColorDark: 'rgba(59,130,246,0.12)',
    spotColorLight: 'rgba(59,130,246,0.06)',
    badge: 'text-blue-400 bg-blue-500/[0.08] border-blue-500/20',
    tagStyle: 'text-blue-400/80 bg-blue-500/[0.06] border-blue-500/[0.15]',
    lightBadge: 'text-blue-600 bg-blue-50 border-blue-100',
    lightTagStyle: 'text-slate-600 bg-slate-50 border-slate-200',
    accentBorder: 'group-hover/card:border-blue-500/15 group-hover/card:shadow-blue-500/8',
    lightAccentBorder: 'group-hover/card:border-slate-300/80 group-hover/card:shadow-slate-200/60',
    accentRgb: '59,130,246',
    icon: <Smartphone className="w-6 h-6" />,
  },
  systems: {
    gradient: 'from-emerald-600/[0.08] via-slate-600/[0.05] to-transparent',
    lightGradient: 'from-slate-100/60 via-slate-50/20 to-transparent',
    orb1: 'bg-emerald-600',
    orb2: 'bg-slate-500',
    spotColorDark: 'rgba(16,185,129,0.12)',
    spotColorLight: 'rgba(16,185,129,0.06)',
    badge: 'text-emerald-400/80 bg-emerald-500/[0.07] border-emerald-500/[0.18]',
    tagStyle: 'text-slate-400/80 bg-slate-500/[0.06] border-slate-500/[0.15]',
    lightBadge: 'text-emerald-700 bg-slate-100 border-slate-200',
    lightTagStyle: 'text-slate-600 bg-slate-50 border-slate-200',
    accentBorder: 'group-hover/card:border-emerald-500/15 group-hover/card:shadow-emerald-500/8',
    lightAccentBorder: 'group-hover/card:border-slate-300/80 group-hover/card:shadow-slate-200/60',
    accentRgb: '16,185,129',
    icon: <Code className="w-6 h-6" />,
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [imgLoaded, setImgLoaded] = useState(false);
  const isLight = theme === 'light';

  const category = project.categories?.[0] ?? 'frontend';
  const cfg = categoryConfig[category] ?? categoryConfig.frontend;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotColor = isLight ? cfg.spotColorLight : cfg.spotColorDark;
  const badge = isLight ? cfg.lightBadge : cfg.badge;
  const tagStyle = isLight ? cfg.lightTagStyle : cfg.tagStyle;
  const accentBorder = isLight ? cfg.lightAccentBorder : cfg.accentBorder;
  const gradient = isLight ? cfg.lightGradient : cfg.gradient;
  const headerFade = isLight ? 'from-white/80' : 'from-[#050508]';

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`group/card relative h-full flex flex-col cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${accentBorder}`}
    >
      <SpotlightCard
        className="h-full rounded-2xl border-none overflow-hidden"
        spotlightColor={spotColor}
      >
        <div className="flex flex-col h-full">
          {/* ── Visual Header ──────────────────────────────────── */}
          <div className="relative h-52 overflow-hidden flex-shrink-0">
            {/* Very subtle accent gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

            {/* Noise texture */}
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
            />

            {/* Orb decorations */}
            <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${cfg.orb1} ${isLight ? 'opacity-[0.12]' : 'opacity-[0.14]'} blur-3xl group-hover/card:opacity-[0.28] transition-opacity duration-700`} />
            <div className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full ${cfg.orb2} ${isLight ? 'opacity-[0.10]' : 'opacity-[0.12]'} blur-3xl group-hover/card:opacity-[0.24] transition-opacity duration-700`} />

            {/* Project image or Icon fallback */}
            {project.image ? (
              <>
                <img
                  src={project.image}
                  alt={project.title}
                  onLoad={() => setImgLoaded(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover/card:scale-105 mix-blend-luminosity ${imgLoaded ? 'opacity-20 group-hover/card:opacity-30' : 'opacity-0'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                  {cfg.icon}
                </div>
              </div>
            )}

            {/* Tech stack code snippet */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
              <div className={`w-full font-mono text-[11px] leading-relaxed select-none ${isLight ? 'opacity-30' : 'opacity-20'} group-hover/card:opacity-60 transition-opacity duration-500`}>
                <div className={`mb-1 ${isLight ? 'text-slate-400' : 'text-white/50'}`}>
                  <span className={isLight ? 'text-slate-300' : 'text-white/25'}>{'// '}</span>
                  {project.title}
                </div>
                {project.tags.slice(0, 4).map((tag, i) => (
                  <div key={i} className="flex gap-1">
                    <span style={{ color: `rgba(${cfg.accentRgb},0.9)` }}>import</span>
                    <span className={isLight ? 'text-slate-600' : 'text-white/80'}>{`{ ${tag} }`}</span>
                    <span style={{ color: `rgba(${cfg.accentRgb},0.6)` }}>from</span>
                    <span className={isLight ? 'text-slate-400' : 'text-white/40'}>'{tag.toLowerCase()}'</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-5 left-5 z-10">
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.18em] border backdrop-blur-md ${badge}`}>
                {category}
              </span>
            </div>

            {/* Hover action links */}
            <div className="absolute top-5 right-5 z-10 flex gap-2 opacity-0 group-hover/card:opacity-100 translate-y-1 group-hover/card:translate-y-0 transition-all duration-300">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full backdrop-blur-md border transition-all duration-200 ${
                    isLight
                      ? 'bg-white/80 border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                      : 'bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/25'
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  onClick={e => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full backdrop-blur-md border transition-all duration-200 ${
                    isLight
                      ? 'bg-white/80 border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                      : 'bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/25'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Bottom fade */}
            <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${headerFade} to-transparent`} />
          </div>

          {/* ── Content Body ──────────────────────────────────── */}
          <div className={`relative z-20 px-6 pt-2 pb-5 flex flex-col gap-3 flex-grow ${
            isLight ? 'bg-white/60' : 'bg-transparent'
          }`}>
            <h3 className={`text-xl font-black tracking-tight leading-tight ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              {project.title}
            </h3>

            <div className="flex-grow">
              <p className={`text-sm leading-relaxed line-clamp-3 transition-colors duration-300 ${
                isLight
                  ? 'text-slate-500 group-hover/card:text-slate-700'
                  : 'text-white/40 group-hover/card:text-white/60'
              }`}>
                {project.description[language]}
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.slice(0, 6).map((tag, i) => (
                <span
                  key={i}
                  className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border transition-colors duration-300 ${tagStyle}`}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 6 && (
                <span className={`text-[10px] font-mono px-2 py-0.5 ${isLight ? 'text-slate-400' : 'text-white/25'}`}>
                  +{project.tags.length - 6}
                </span>
              )}
            </div>

            {/* Footer CTA */}
            <div className={`flex items-center justify-between pt-4 border-t ${
              isLight ? 'border-slate-100' : 'border-white/[0.06]'
            }`}>
              <span className={`text-[10px] font-mono uppercase tracking-widest ${
                isLight ? 'text-slate-400' : 'text-white/20'
              }`}>
                {language === 'en' ? 'View Project' : 'Projekt ansehen'}
              </span>
              <div className={`flex items-center gap-1 transition-all duration-300 group-hover/card:gap-2 ${
                isLight
                  ? 'text-slate-400 group-hover/card:text-slate-900'
                  : 'text-white/35 group-hover/card:text-white'
              }`}>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  {language === 'en' ? 'Open' : 'Öffnen'}
                </span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
}
