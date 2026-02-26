import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Download, Calendar, Cpu, ScanLine } from 'lucide-react';
import { FaJava, FaPython, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import { useLanguage } from "../../context/LanguageContext";
import { content, historyEn, historyDe } from "../../data/content";
import SpotlightCard from "../ui/SpotlightCard";

// --- Data ---
const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: FaPython, color: "text-blue-300" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "React Native", icon: FaReact, color: "text-purple-400" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-300" },
  { name: "Illustrator", icon: SiAdobeillustrator, color: "text-orange-400" },
];

// --- Utilities ---

// --- Components ---

const HistoryItem = ({ 
  item, 
  isLast 
}: { 
  item: typeof historyEn[0], 
  isLast: boolean 
}) => {
  const isWork = item.type === 'work';
  const [isHovered, setIsHovered] = useState(false);
  
  const theme = isWork ? {
    border: "border-blue-500/30",
    text: "text-blue-400",
    icon: <Briefcase className="w-4 h-4 text-blue-400" />,
    glow: "rgba(59, 130, 246, 0.2)"
  } : {
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
    glow: "rgba(16, 185, 129, 0.2)"
  };

  return (
    <div 
      className="relative pl-8 md:pl-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-[140px_auto] gap-8 relative group">
        
        {/* Date Column with Tech Styling */}
        <div className="text-right pt-6 relative">
             <div className="inline-block relative">
                <span className="relative z-10 text-xs font-mono text-blue-300/80 font-bold tracking-widest uppercase block border-r-2 border-blue-500/20 pr-4 mr-4 group-hover:border-blue-500/60 transition-colors">
                    {item.period.split('–')[0]}
                </span>
                <span className="relative z-10 text-[10px] font-mono text-slate-500 block mt-1 pr-8">
                    {item.period.split('–')[1] || 'NOW'}
                </span>
             </div>
        </div>

        {/* Timeline Beam */}
        <div className="absolute left-[140px] top-0 bottom-0 flex justify-center w-8">
            <div className={`h-full w-[2px] ${!isLast ? 'bg-gradient-to-b from-blue-500/50 via-blue-500/10 to-transparent' : 'bg-gradient-to-b from-blue-500/50 to-transparent flex-grow-0 h-12'}`}></div>
            <div className={`absolute top-6 w-4 h-4 rounded-full border border-black bg-slate-900 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)] group-hover:scale-110 transition-transform`}>
                <div className={`w-1.5 h-1.5 rounded-full ${isWork ? 'bg-blue-400' : 'bg-emerald-400'} animate-pulse`}></div>
            </div>
        </div>

        {/* Content Card */}
        <div className="pb-16">
            <SpotlightCard className="rounded-2xl p-6" spotlightColor={theme.glow}>
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors tracking-tight">{item.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                            <p className={`text-sm ${theme.text} font-mono tracking-wide`}>
                                {item.company}
                            </p>
                        </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                        {theme.icon}
                    </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 border-l-2 border-white/5 pl-4">
                    {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors">
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
                      <div className="pt-4 border-t border-white/10 mt-4 space-y-4">
                        {item.technologies && (
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, i) => (
                                <span key={i} className="text-xs text-blue-300 font-mono bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {item.achievements && (
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Key Achievements</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="text-xs text-slate-400 leading-relaxed">
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
      <div className="md:hidden relative pb-12 border-l border-white/10 ml-2 pl-6">
         <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full border border-black ${isWork ? 'bg-blue-500' : 'bg-emerald-500'} z-10`}></div>
         
         <span className="text-xs font-mono text-blue-400 mb-2 block tracking-widest">{item.period}</span>
         <SpotlightCard className="rounded-xl p-5" spotlightColor={theme.glow}>
            <h3 className="text-lg font-bold text-white">{item.role}</h3>
            <p className={`text-sm ${theme.text} mb-3`}>{item.company}</p>
            <p className="text-slate-400 text-sm mb-4">{item.description}</p>
             <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-slate-500 bg-white/5 px-2 py-0.5 rounded">
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
  const history = language === 'en' ? historyEn : historyDe;

  return (
    <section id="cv" className="min-h-screen py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-10 items-start">
            
            {/* --- Left Column: HUD Profile --- */}
            <div className="lg:sticky lg:top-32 space-y-6">
                
                {/* Profile Scanner Card */}
                <SpotlightCard className="rounded-3xl p-8 backdrop-blur-xl border-white/10" spotlightColor="rgba(59, 130, 246, 0.1)">
                    
                    {/* Header with Status */}
                    <div className="flex items-start justify-between mb-8 relative z-10">
                        <div className="relative group/profile cursor-pointer">
                             {/* Rotating Rings */}
                             <div className="absolute inset-0 rounded-full border border-blue-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>
                             <div className="absolute -inset-1 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                             
                             <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-black relative z-10">
                                <img src="/img/profile.png" alt="Profile" className="w-full h-full object-cover" />
                                {/* Scanning line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,1)] animate-[scan_3s_ease-in-out_infinite]"></div>
                             </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <div className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl font-black text-white mb-2 tracking-tight">{t.title}</h2>
                        <div className="flex items-center gap-2 mb-6">
                             <Cpu className="w-4 h-4 text-blue-500 animate-pulse" />
                             <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">{t.role}</p>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-400 text-sm group/loc">
                                <div className="p-2 rounded bg-white/5 group-hover/loc:bg-blue-500/20 transition-colors">
                                    <MapPin className="w-4 h-4 text-slate-400 group-hover/loc:text-blue-400" />
                                </div>
                                <span className="font-mono text-xs tracking-wide">{t.location}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 text-sm group/stat">
                                <div className="p-2 rounded bg-white/5 group-hover/stat:bg-emerald-500/20 transition-colors">
                                    <ScanLine className="w-4 h-4 text-slate-400 group-hover/stat:text-emerald-400" />
                                </div>
                                <span className="font-mono text-xs tracking-wide">{t.status}</span>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
                            {t.about}
                        </p>

                        <button className="w-full group relative overflow-hidden rounded-xl bg-white text-black font-bold py-3.5 transition-all hover:scale-[1.02] active:scale-[0.98]">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                                {t.downloadResume} <Download className="w-4 h-4" />
                            </span>
                        </button>
                    </div>
                </SpotlightCard>

                {/* Skills Matrix */}
                <SpotlightCard className="rounded-3xl p-6 border-white/10" spotlightColor="rgba(255, 255, 255, 0.05)">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-sm"></span>
                            {t.techStackTitle}
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                        {skills.map((skill, i) => (
                            <div key={i} className="group/skill flex items-center gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all cursor-default relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-700"></div>
                                <skill.icon className={`w-4 h-4 ${skill.color} relative z-10`} />
                                <span className="text-xs font-medium text-slate-400 group-hover/skill:text-white transition-colors relative z-10">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </SpotlightCard>

            </div>


            {/* --- Right Column: Timeline Stream --- */}
            <div className="pt-4">
                <div className="flex items-center gap-4 mb-16">
                     <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                        <Calendar className="w-6 h-6 text-blue-400" />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black text-white tracking-tight uppercase">{t.journeyTitle}</h3>
                        <p className="text-slate-500 font-mono text-xs tracking-widest mt-1">CHRONOLOGICAL_DATA_STREAM_V4</p>
                     </div>
                </div>

                <div className="space-y-0">
                    {history.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <HistoryItem item={item} isLast={index === history.length - 1} />
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