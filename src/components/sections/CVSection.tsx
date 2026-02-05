import React from 'react';
import { Briefcase, GraduationCap, MapPin, Code, Download, Compass } from 'lucide-react';
import { FaJava, FaPython, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';
import SpaceItem from '../ui/SpaceItem';

// --- Data ---
// Unified History Data
// type: 'work' | 'education'
const history = [
  {
    type: 'work',
    role: "IT Specialist",
    company: "Bundeswehr (IT Battalion)",
    period: "Nov 2025 – Present",
    tags: ["Full-time", "System Support"],
    description: "Supporting daily IT operations and maintaining hardware connectivity for the unit."
  },
  {
    type: 'work',
    role: "Software Developer",
    company: "AssistMe",
    period: "July 2024 – Feb 2025",
    tags: ["Part-time", "Internship"],
    description: "Contributed to software development, gaining hands-on experience in a professional environment."
  },
  {
    type: 'education',
    role: "Media Informatics",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – July 2025",
    tags: ["Vocational Training", "State Certified"],
    description: "Intensive training in media informatics, covering Java, Adobe Creative Suite, and web technologies."
  },
  {
    type: 'education',
    role: "Schüler",
    company: "OSZ Informations- und Medizintechnik",
    period: "June 2020 – Jan 2022",
    tags: ["High School"],
    description: "Secondary education with a focus on information and medical technology."
  }
];

const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "React.js", icon: FaReact, color: "text-blue-400" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Python", icon: FaPython, color: "text-blue-300" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "React Native", icon: FaReact, color: "text-purple-400" },
  { name: "Adobe Photoshop", icon: SiAdobephotoshop, color: "text-blue-300" },
  { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "text-orange-400" },
];

// --- Components ---

const HistoryItem = ({ 
  item, 
  isLast 
}: { 
  item: typeof history[0], 
  isLast: boolean 
}) => {
  
  const isWork = item.type === 'work';
  const colorClass = isWork ? 'blue' : 'emerald';

  const colors = {
    blue: { 
        border: "border-blue-500/30", 
        bg: "bg-blue-500/10", 
        text: "text-blue-400", 
        icon: <Briefcase className="w-4 h-4 text-blue-400" />,
        gradient: "from-blue-500" 
    },
    emerald: { 
        border: "border-emerald-500/30", 
        bg: "bg-emerald-500/10", 
        text: "text-emerald-400", 
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        gradient: "from-emerald-500" 
    },
  };
  
  const c = colors[colorClass];

  return (
    <div className={`relative pl-8 md:pl-12 pb-12 ${!isLast ? 'border-l border-white/10' : ''}`}>
      
      {/* Timeline Icon Marker */}
      <div className={`absolute left-[-20px] top-0 w-10 h-10 rounded-full bg-black border ${c.border} shadow-[0_0_15px_rgba(0,0,0,0.8)] flex items-center justify-center z-10 group`}>
        <div className={`absolute inset-0 rounded-full ${c.bg} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        {c.icon}
      </div>
      
      {/* Content Card */}
      <div className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1">
         {/* Hover Gradient Effect */}
        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${c.gradient} to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
          <div>
             <h4 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors">{item.role}</h4>
             <p className={`text-lg ${c.text} font-medium`}>{item.company}</p>
          </div>
          <span className="text-xs font-mono text-slate-400 bg-black/50 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
            {item.period}
          </span>
        </div>
        
        <div className="flex gap-2 mb-4 flex-wrap">
            {item.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    {tag}
                </span>
            ))}
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const CVSection: React.FC = () => {
  return (
    <section id="cv" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header --- */}
        <SpaceItem className="mb-20 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-transform duration-500 group-hover:scale-105">
                 <img src="/img/profile.png" alt="Ludwig Engelhardt" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-black rounded-full p-2 border border-blue-500/30">
                <Code className="w-5 h-5 text-blue-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 mb-2">
                Ludwig Engelhardt
              </h2>
              <h3 className="text-sm sm:text-xl text-blue-400 font-mono tracking-widest mb-4">FULL STACK DEVELOPER</h3>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-slate-400 text-sm mb-6">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" /> Berlin, Germany
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-emerald-500" /> Open for Opportunities
                </span>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-2xl text-sm sm:text-base">
                As an emerging Full Stack Developer, I am deeply engaged in honing my skills in Python, Java, and web technologies. My goal is to blend front and back-end development expertise to innovate in the tech industry.
              </p>
            </div>
          </div>
        </SpaceItem>


        {/* --- Main Content Grid --- */}
        <div className="grid lg:grid-cols-[1fr_350px] gap-16">
          
          {/* Left Column: Unified Timeline */}
          <div className="pl-4"> {/* Added padding left for the timeline markers overlap */}
            
            <SpaceItem delay={0.1}>
              <div className="flex items-center gap-4 mb-12">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white tracking-tight">The Journey</h3>
              </div>

              <div>
                {history.map((item, index) => (
                  <HistoryItem 
                    key={index}
                    item={item}
                    isLast={index === history.length - 1}
                  />
                ))}
              </div>
            </SpaceItem>

          </div>


          {/* Right Column: Skills & Download */}
          <div className="space-y-10">
            
            {/* Tech Stack Panel */}
            <SpaceItem delay={0.3}>
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 sticky top-32 backdrop-blur-sm">
                
                <div className="flex items-center gap-3 mb-8">
                   <Code className="w-5 h-5 text-purple-400" />
                   <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <div 
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg transition-colors cursor-default"
                    >
                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                        <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                    </div>
                  ))}
                </div>

                <div className="my-8 h-px bg-white/10"></div>

                {/* Resume Download CTA */}
                <div className="text-center">
                    <p className="text-slate-500 text-sm mb-4">Want the full details?</p>
                    <button className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-bold rounded-xl overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    <span className="relative z-10">Download Resume</span>
                    <Download className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                    <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>
                </div>

              </div>
            </SpaceItem>

          </div>

        </div>
      </div>
    </section>
  );
};

export default CVSection;