import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../hooks/useTheme';
import Silk from './Silk';

const STAR_COUNT = 6000;
const STAR_POSITIONS = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT; i++) {
  STAR_POSITIONS[i * 3] = (Math.random() - 0.5) * 100; 
  STAR_POSITIONS[i * 3 + 1] = (Math.random() - 0.5) * 100; 
  STAR_POSITIONS[i * 3 + 2] = (Math.random() - 0.5) * 200 - 50; 
}

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (ref.current) {
        ref.current.rotation.z += 0.0005;
    }
    const scrollY = window.scrollY;
    const targetZ = 5 - (scrollY * 0.05); 
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouseX * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouseY * 2, 0.05);
  });

  return (
    <Points ref={ref} positions={STAR_POSITIONS} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? "#60a5fa" : "#3b82f6"} 
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.8 : 0.3}
      />
    </Points>
  );
}

export default function WarpBackground() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      
      {/* Light Mode Specific Enhancements */}
      {theme === 'light' && (
        <div className="absolute inset-0 z-0">
          {/* Silk Animated Texture - Explicit absolute container with full size */}
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none">
            <Silk 
              className="w-full h-full"
              color="#3b82f6"
              speed={0.3}
              scale={1.2}
              noiseIntensity={0.2}
            />
          </div>
          
          {/* Subtle Dot Grid - Placed above Silk */}
          <div className="absolute inset-0 opacity-[0.4] z-10" 
               style={{ 
                 backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0)`, 
                 backgroundSize: '30px 30px' 
               }} 
          />
          
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        </div>
      )}

      {/* Stars Canvas - Always on top of enhancements */}
      <div className="absolute inset-0 z-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <fog attach="fog" args={[theme === 'dark' ? '#000000' : '#f8fafc', 10, 100]} /> 
            <StarField />
        </Canvas>
      </div>
    </div>
  );
}
