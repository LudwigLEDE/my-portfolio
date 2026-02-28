import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

const STAR_COUNT = 6000;
const STAR_POSITIONS = new Float32Array(STAR_COUNT * 3);

// Generate stars once at module level
for (let i = 0; i < STAR_COUNT; i++) {
  STAR_POSITIONS[i * 3] = (Math.random() - 0.5) * 50; 
  STAR_POSITIONS[i * 3 + 1] = (Math.random() - 0.5) * 50; 
  STAR_POSITIONS[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50; 
}

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const { theme } = useTheme();
  
  useFrame((state) => {
    // 2. Rotate the tube of stars slightly for a "churning" effect
    ref.current.rotation.z += 0.0005;
    
    // 3. Scroll Logic (The Warp Effect)
    const scrollY = window.scrollY;
    
    // 0.02 controls the speed of the "warp" relative to scroll
    const targetZ = 5 - (scrollY * 0.02); 

    // Smoothly move the camera to the target position (Lerp)
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.1);
    
    // 4. Mouse Parallax (Optional: adds slight tilt)
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
        size={0.05}     // Size of stars
        sizeAttenuation={true}
        depthWrite={false}
        opacity={theme === 'dark' ? 0.8 : 0.1}
      />
    </Points>
  );
}

export default function WarpBackground() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      {/* Fog creates depth fading, so stars fade out in the distance */}
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={[theme === 'dark' ? '#000000' : '#f8fafc', 5, 40]} /> 
        <StarField />
      </Canvas>
    </div>
  );
}
