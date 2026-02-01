import { ExternalLink } from "lucide-react";
import SpaceItem from "../ui/SpaceItem";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        <SpaceItem className="mb-24 flex items-end gap-6">
          <h2 className="text-5xl md:text-6xl font-bold">Projects</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow mb-4"></div>
        </SpaceItem>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
          
          {/* Project 1 */}
          <SpaceItem>
            <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
              
              <div className="h-48 bg-gradient-to-b from-blue-900/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Nebula Dash</h3>
                  <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="p-8 pt-6">
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Real-time telemetry for orbital stations. Processes 10k+ data points utilizing WebWorkers and localized state management.
                 </p>
                 
                 <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      React 19
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      WebGL
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Tailwind
                    </span>
                 </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
            </div>
          </SpaceItem>

          {/* Project 2 */}
          <SpaceItem delay={0.2}>
            <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
              
              <div className="h-48 bg-gradient-to-b from-purple-900/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors">Dark Matter</h3>
                  <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="p-8 pt-6">
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    A headless design system for deep space comms. Fully accessible and optimized for high-latency inter-planetary connections.
                 </p>
                 
                 <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Java
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      Spring Boot
                    </span>
                 </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500"></div>
            </div>
          </SpaceItem>

          {/* Project 3 */}
          <SpaceItem>
            <div className="group relative bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors duration-500">
              
              <div className="h-48 bg-gradient-to-b from-emerald-900/20 to-transparent p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end">
                  <h3 className="text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors">Exo-Market</h3>
                  <ExternalLink className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              <div className="p-8 pt-6">
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Scalable marketplace infrastructure. Features secure transactions and automated inventory management.
                 </p>
                 
                 <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Python
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      React Native
                    </span>
                 </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32 rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
            </div>
          </SpaceItem>

        </div>
      </div>
    </section>
  );
}