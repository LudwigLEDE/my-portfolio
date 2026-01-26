import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 1. Generate random particles
// We create 5000 particles at random positions
const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10; // Spread them out
}

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  // Rotate the stars slightly every frame for a dynamic feel
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6" // Tailwind Blue-500 hex
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// 2. The Camera Rig
// This component controls the camera movement based on the mouse
function CameraRig() {
  useFrame((state) => {
    // Read mouse position (ranges from -1 to 1)
    // Lerp (Linear Interpolate) creates the smooth delay effect
    // We move the camera slightly opposite to the mouse for a parallax effect
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.pointer.y * 2, 0.05);
    
    // Force camera to always look at the center
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-slate-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#020617']} /> {/* Tailwind Slate-950 */}
        <StarField />
        <CameraRig />
      </Canvas>
    </div>
  );
}