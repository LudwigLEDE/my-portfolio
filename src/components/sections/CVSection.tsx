import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  Calendar,
  Cpu,
  ScanLine,
  Info,
  ArrowRight,
} from "lucide-react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaLinux,
  FaMicrochip,
  FaCube,
} from "react-icons/fa";
import {
  SiJavascript,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiTypescript,
  SiPhp,
  SiTailwindcss,
  SiSqlite,
  SiFigma,
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import { useLanguage } from "../../hooks/useLanguage";
import { content, historyEn, historyDe } from "../../data/content";
import SpotlightCard from "../ui/SpotlightCard";

// --- Data ---
const skills = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400", level: 85 },
  { name: "React.js", icon: FaReact, color: "text-blue-300", level: 90 },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: 75 },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", level: 95 },
  { name: "Python", icon: FaPython, color: "text-blue-500", level: 70 },
  { name: "Java", icon: FaJava, color: "text-red-500", level: 80 },
  { name: "Linux", icon: FaLinux, color: "text-slate-300", level: 65 },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400", level: 85 },
  { name: "SQL", icon: SiSqlite, color: "text-blue-400", level: 75 },
  { name: "React Native", icon: FaReact, color: "text-purple-400", level: 60 },
  { name: "PHP", icon: SiPhp, color: "text-purple-400", level: 70 },
  { name: "Figma", icon: SiFigma, color: "text-pink-400", level: 80 },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-500", level: 95 },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "text-orange-500", level: 85 },
  { name: "Premiere Pro", icon: SiAdobepremierepro, color: "text-purple-600", level: 80 },
  { name: "After Effects", icon: SiAdobeaftereffects, color: "text-indigo-500", level: 70 },
  { name: "Cinema4D", icon: FaCube, color: "text-sky-400", level: 75 },
  { name: "Microcontrollers", icon: FaMicrochip, color: "text-green-400", level: 60 },
];

// --- Utilities ---

// --- Components ---

const HistoryItem = ({
  item,
  isLast,
  t,
}: {
  item: (typeof historyEn)[0];
  isLast: boolean;
  t: (typeof content)["en"]["cv"];
}) => {
  const isWork = item.type === "work";
  const [isHovered, setIsHovered] = useState(false);

  const themeColors = isWork
    ? {
        border: "border-blue-500/30",
        text: "text-blue-600 dark:text-blue-400",
        icon: <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
        glow: "rgba(59, 130, 246, 0.2)",
      }
    : {
        border: "border-emerald-500/30",
        text: "text-emerald-600 dark:text-emerald-400",
        icon: <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
        glow: "rgba(16, 185, 129, 0.2)",
      };

  return (
    <div
      className="relative pl-8 md:pl-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[140px_auto] gap-8 relative group text-left">
        {/* Date Column with Tech Styling */}
        <div className="text-right pt-6 relative">
          <div className="inline-block relative">
            <span className="relative z-10 text-xs font-mono text-blue-600 dark:text-blue-300/80 font-bold tracking-widest uppercase block border-r-2 border-blue-500/20 pr-4 mr-4 group-hover:border-blue-500/60 transition-colors">
              {item.period.split("–")[0]}
            </span>
            <span className="relative z-10 text-[10px] font-mono text-slate-400 dark:text-slate-500 block mt-1 pr-8">
              {item.period.split("–")[1] || "NOW"}
            </span>
          </div>
        </div>

        {/* Timeline Beam */}
        <div className="absolute left-[140px] top-0 bottom-0 flex justify-center w-8">
          <div
            className={`h-full w-[2px] ${
              !isLast
                ? "bg-gradient-to-b from-blue-500/50 via-blue-500/20 dark:via-blue-500/10 to-transparent"
                : "bg-gradient-to-b from-blue-500/50 to-transparent flex-grow-0 h-12"
            }`}
          ></div>
          <div
            className={`absolute top-6 w-4 h-4 rounded-full border border-slate-200 dark:border-black bg-white dark:bg-slate-900 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform`}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isWork ? "bg-blue-500 dark:bg-blue-400" : "bg-emerald-500 dark:bg-emerald-400"
              } animate-pulse`}
            ></div>
          </div>
        </div>

        {/* Content Card */}
        <div className="pb-8">
          <SpotlightCard
            className="rounded-lg p-6 border-slate-200 dark:border-white/5"
            spotlightColor={themeColors.glow}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-500"></span>
                  <p
                    className={`text-sm ${themeColors.text} font-mono tracking-wide`}
                  >
                    {item.company}
                  </p>
                </div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 group-hover:border-blue-200 dark:group-hover:border-white/20 transition-colors">
                {themeColors.icon}
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-slate-100 dark:border-white/5 pl-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-white/5 px-2 py-1 rounded border border-slate-100 dark:border-white/5 group-hover:border-blue-100 dark:group-hover:border-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-slate-100 dark:border-white/10 mt-4 space-y-4">
                    {item.technologies && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                          {t.technologiesTitle}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs text-blue-600 dark:text-blue-300 font-mono bg-blue-50 dark:bg-blue-500/10 px-2 py-1 rounded border border-blue-100 dark:border-blue-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.achievements && (
                      <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                          {t.achievementsTitle}
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed"
                            >
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </SpotlightCard>
        </div>
      </div>

      {/* Mobile Layout (simplified but keeps spotlight) */}
      <div className="md:hidden relative pb-6 border-l border-slate-200 dark:border-white/10 ml-2 pl-6 text-left">
        <div
          className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border border-white dark:border-black ${
            isWork ? "bg-blue-500" : "bg-emerald-500"
          } z-10`}
        ></div>

        <span className="text-xs font-mono text-blue-600 dark:text-blue-400 mb-2 block tracking-widest">
          {item.period}
        </span>
        <SpotlightCard className="rounded-lg p-5 border-slate-200 dark:border-white/5" spotlightColor={themeColors.glow}>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
          <p className={`text-sm ${themeColors.text} mb-3`}>{item.company}</p>
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] text-slate-500 dark:text-slate-500 bg-slate-50 dark:bg-white/5 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

const CVSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].cv;
  const history = language === "en" ? historyEn : historyDe;

  return (
    <section id="cv" className="min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* --- Left Column: HUD Profile --- */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <SpotlightCard
              className="rounded-lg p-8 backdrop-blur-xl border-slate-200 dark:border-white/10"
              spotlightColor="rgba(59, 130, 246, 0.1)"
            >
              {/* Header with Status */}
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className="relative group/profile cursor-pointer">
                    {/* Rotating Rings */}
                    <div className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute -inset-1 rounded-full border border-slate-200 dark:border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>

                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-100 dark:border-black relative z-10">
                        <img
                        src="/img/profile.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <div className="px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-500/30 bg-white/80 dark:bg-emerald-500/10 backdrop-blur-md flex items-center gap-2 shadow-xl shadow-emerald-500/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      {language === 'en' ? 'Active' : 'Aktiv'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 text-left">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                  {t.title}
                </h2>
                <div className="flex items-center gap-2 mb-6">
                  <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-500 animate-pulse" />
                  <p className="text-blue-600 dark:text-blue-400 font-mono text-sm tracking-widest uppercase">
                    {t.role}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm group/loc">
                    <div className="p-2 rounded bg-slate-50 dark:bg-white/5 group-hover/loc:bg-blue-100 dark:group-hover/loc:bg-blue-500/20 transition-colors border border-slate-100 dark:border-white/5">
                      <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover/loc:text-blue-600 dark:group-hover/loc:text-blue-400" />
                    </div>
                    <span className="font-mono text-xs tracking-wide text-slate-600 dark:text-slate-400">
                      {t.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm group/stat">
                    <div className="p-2 rounded bg-slate-50 dark:bg-white/5 group-hover/stat:bg-emerald-100 dark:group-hover/stat:bg-emerald-500/20 transition-colors border border-slate-100 dark:border-white/5">
                      <ScanLine className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover/stat:text-emerald-600 dark:group-hover/stat:text-emerald-400" />
                    </div>
                    <span className="font-mono text-xs tracking-wide text-slate-600 dark:text-slate-400">
                      {t.status}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light italic">
                  "{t.about}"
                </p>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full group relative overflow-hidden rounded-lg bg-slate-900 dark:bg-white/10 dark:border dark:border-white/10 text-white font-bold py-3.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_24px_rgba(59,130,246,0.35)]"
                >
                  {/* Gradient fill that sweeps in on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Shimmer sweep */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                    <Mail className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-px" />
                    {t.downloadResume}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </SpotlightCard>

            {/* Skills Matrix */}
            <SpotlightCard
              className="rounded-lg p-6 border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/40 dark:shadow-none"
              spotlightColor="rgba(59, 130, 246, 0.05)"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="space-y-1 text-left">
                  <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-sm"></span>
                    {t.techStackTitle}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <Info className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400/70" />
                    {t.hoverDetails}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group/skill p-2.5 rounded-md bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden flex items-center gap-3 min-h-[52px] cursor-default shadow-sm"
                  >
                    {/* Default View: Icon + Name */}
                    <div className="flex items-center gap-2.5 group-hover/skill:opacity-0 transition-all duration-300">
                        <skill.icon className={`w-5 h-5 ${skill.color} shrink-0`} />
                        <span className={`font-black text-slate-900 dark:text-white uppercase leading-none ${skill.name.length > 12 ? 'text-[8px] tracking-tight' : 'text-[10px] tracking-widest'}`}>{skill.name}</span>
                    </div>
                    
                    {/* Hover Reveal */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-900/40 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 backdrop-blur-[2px] rounded-[inherit]">
                        <div className="flex flex-col items-center gap-0.5 px-2 w-full">
                            <span className="text-[10px] font-black font-mono text-blue-600 dark:text-white tracking-tighter drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
                                {t.skillDurations[skill.name] || "..."}
                            </span>
                            <div className="flex gap-0.5 mt-0.5">
                                {[...Array(6)].map((_, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`h-0.5 w-1.5 rounded-[1px] ${idx < Math.ceil(skill.level / 17) ? 'bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.8)]' : 'bg-slate-200 dark:bg-white/10'}`} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Scanline */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover/skill:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>

          {/* --- Right Column: Timeline Stream --- */}
          <div className="pt-4">
            <div className="flex items-center gap-4 mb-16 text-left">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-slate-200 dark:border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-none">
                  {t.journeyTitle}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-sm tracking-widest mt-2 flex items-center gap-2">
                   <Info className="w-4 h-4 text-blue-600 dark:text-blue-400/80" />
                   {t.hoverDetails}
                </p>
              </div>
            </div>

            <div className="space-y-0">
              {history.map((item, index) => (
                <motion.div
                  key={`${language}-${index}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HistoryItem
                    item={item}
                    isLast={index === history.length - 1}
                    t={t}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Grids (CSS only for performance) */}
      <style>{`
        @keyframes scan {
            0%, 100% { top: 0%; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default CVSection;
