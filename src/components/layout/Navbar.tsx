import GlassSurface from "../ui/GlassSurface";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto transition-transform hover:scale-[1.02] duration-300">
        <GlassSurface 
          width="400px" 
          height="60px"
          borderRadius={30}
          backgroundOpacity={0.1}
          blur={8}
          borderWidth={0.1}
          className="shadow-lg shadow-blue-500/10"
        >
          <div className="flex gap-8 items-center text-xs font-bold tracking-widest text-white/90">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors uppercase">About</button>
            <button onClick={() => scrollToSection('cv')} className="hover:text-blue-400 transition-colors uppercase">CV</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-400 transition-colors uppercase">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors uppercase">Contact</button>
          </div>
        </GlassSurface>
      </div>
    </nav>
  );
}