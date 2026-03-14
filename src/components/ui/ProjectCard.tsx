import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import type { Project } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import CardPattern from "./CardPattern";
import { ArrowUpRight, Code, Layers, Zap, Smartphone } from "lucide-react";
import type { Project } from "../../types";
import { useLanguage } from "../../hooks/useLanguage";
import SpotlightCard from "./SpotlightCard";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

// Colors strictly from the site palette:
//   Primary  → blue-500  (#3b82f6)
//   Secondary → emerald-500 (#10b981)
//   Neutral  → slate family
//   Dark bg  → #000000 / bg-white/[0.02]
//   Light bg → #f8fafc / bg-white/40 backdrop-blur-xl
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
  /** RGB triple for the CardPattern — matches the site accent colours */
  accentRgb: string;
}> = {
  // Blue — primary site accent
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
  },
  // Slate/blue — backend
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
  },
  // Emerald — secondary site accent
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
  },
  // Blue+emerald — mobile
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
  },
  // Emerald+slate — systems
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
  },
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { theme } = useTheme();
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
  // Fade matches the card body colour so the header bleeds into content seamlessly
  const headerFade = isLight ? 'from-white/80' : 'from-[#050508]';

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`
        group/card relative h-full flex flex-col cursor-pointer rounded-2xl overflow-hidden
        transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl
        ${isLight
          // Light: frosted glass — matches SpotlightCard used across the site
          ? `bg-white/60 backdrop-blur-xl border border-slate-200/70 shadow-sm ${accentBorder}`
          // Dark: translucent dark — matches SpotlightCard dark mode
          : `bg-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-white/[0.15] ${accentBorder}`
        }
      `}
    >
      {/* Interactive Spotlight — same rgba values as SpotlightCard */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, ${spotColor}, transparent 70%)`
        }}
      />

      {/* ── Visual Header ──────────────────────────────────── */}
      <div className="relative h-52 overflow-hidden">
        {/* Very subtle accent gradient — tint only, background shows through */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />

        {/* Noise texture for a bit of depth */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        />

        {/* Orb 1 — reduced opacity to stay in line with subtle site aesthetic */}
        <div className={`absolute -top-8 -right-8 w-40 h-40 rounded-full ${cfg.orb1} ${isLight ? 'opacity-[0.12]' : 'opacity-[0.14]'} blur-3xl group-hover/card:opacity-[0.28] transition-opacity duration-700`} />
        {/* Orb 2 */}
        <div className={`absolute -bottom-10 -left-10 w-48 h-48 rounded-full ${cfg.orb2} ${isLight ? 'opacity-[0.10]' : 'opacity-[0.12]'} blur-3xl group-hover/card:opacity-[0.24] transition-opacity duration-700`} />

        {/* Project image if available */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/card:opacity-30 transition-opacity duration-700 mix-blend-luminosity"
          />
        )}

        {/* Generative constellation pattern — unique per card, brightens on hover */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-60 group-hover/card:opacity-100 pointer-events-none">
          <CardPattern seed={index} accentRgb={cfg.accentRgb} isLight={isLight} />
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

        {/* Bottom fade — blends header into card body */}
        <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${headerFade} to-transparent`} />
      </div>

      {/* ── Content Body ──────────────────────────────────── */}
      <div className={`relative z-20 px-6 pt-2 pb-5 flex flex-col gap-3 flex-1 ${
        isLight ? 'bg-white/60' : 'bg-transparent'
      }`}>
        <h3 className={`text-xl font-black tracking-tight leading-tight ${
          isLight ? 'text-slate-900' : 'text-white'
        }`}>
          {project.title}
        </h3>

        <p className={`text-sm leading-relaxed line-clamp-3 flex-1 transition-colors duration-300 ${
          isLight
            ? 'text-slate-500 group-hover/card:text-slate-700'
            : 'text-white/40 group-hover/card:text-white/60'
        }`}>
          {project.description[language]}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 6).map((tag, i) => (
            <span
              key={i}
              className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border transition-colors duration-300 ${tagStyle}`}
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
          {project.tags.length > 6 && (
            <span className={`text-[10px] font-mono px-2 py-0.5 ${isLight ? 'text-slate-400' : 'text-white/25'}`}>
              +{project.tags.length - 6}
            </span>
          )}
        </div>

        {/* Footer CTA */}
        <div className={`flex items-center justify-between pt-2 border-t ${
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

        </div>{/* end inner flex column */}
      </SpotlightCard>
    </div>
  );
}
