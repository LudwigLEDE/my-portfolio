import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  
  // 1. Generate 6000 stars
  // We place them in a cylinder shape extending deep into the distance (Z-axis)
  const positions = useMemo(() => {
    const count = 6000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // X and Y coordinates (spread wide)
      const x = (Math.random() - 0.5) * 50; 
      const y = (Math.random() - 0.5) * 50; 
      // Z coordinate: Place stars from close (0) to very far (-100)
      const z = (Math.random() - 0.5) * 100 - 50; 
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    // 2. Rotate the tube of stars slightly for a "churning" effect
    ref.current.rotation.z += 0.0005;
    
    // 3. Scroll Logic (The Warp Effect)
    // We calculate a target Z position based on window.scrollY
    // We start at Z=5. As you scroll down (scrollY increases), 
    // we subtract from Z, moving the camera *forward* into the negative Z space.
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
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa" // Tailwind blue-400
        size={0.05}     // Size of stars
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function WarpBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Fog creates depth fading, so stars fade out in the distance */}
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#000000', 5, 40]} /> 
        <StarField />
      </Canvas>
    </div>
  );
}