import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../hooks/useTheme';
import Silk from './Silk';

// --- STARS ---
const STAR_COUNT = 6000;
const STAR_POSITIONS = new Float32Array(STAR_COUNT * 3);

for (let i = 0; i < STAR_COUNT; i++) {
  STAR_POSITIONS[i * 3] = (Math.random() - 0.5) * 100; 
  STAR_POSITIONS[i * 3 + 1] = (Math.random() - 0.5) * 100; 
  STAR_POSITIONS[i * 3 + 2] = (Math.random() - 0.5) * 250 - 50;
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

// --- PROCEDURAL PLANET COMPONENTS (No external assets) ---

function EarthProcedural({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => { if (meshRef.current) meshRef.current.rotation.y += 0.002; });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[6, 64, 64]} />
        <meshStandardMaterial color="#1e40af" roughness={0.6} metalness={0.2} />
        {/* Continent Layer */}
        <mesh scale={[1.01, 1.01, 1.01]}>
            <sphereGeometry args={[6, 32, 32]} />
            <MeshDistortMaterial color="#15803d" distort={0.3} speed={0.5} roughness={1} />
        </mesh>
      </mesh>
    </Float>
  );
}

function JupiterProcedural({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(() => { if (meshRef.current) meshRef.current.rotation.y += 0.004; });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3} position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshStandardMaterial color="#d4a373" roughness={0.8} />
        {/* Banding effect through scaled distorted layer */}
        <mesh scale={[1.005, 1.005, 1.005]} rotation={[Math.PI / 2, 0, 0]}>
            <sphereGeometry args={[10, 32, 32]} />
            <MeshDistortMaterial color="#a68a64" distort={0.1} speed={1} transparent opacity={0.5} />
        </mesh>
      </mesh>
    </Float>
  );
}

function SaturnProcedural({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);
  useFrame(() => { if (groupRef.current) groupRef.current.rotation.y += 0.001; });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4} position={position}>
      <group ref={groupRef} rotation={[0.4, 0, 0.4]}>
        {/* Planet Body - Solid */}
        <mesh>
          <sphereGeometry args={[8, 64, 64]} />
          <meshStandardMaterial color="#fde68a" roughness={0.9} metalness={0.1} />
        </mesh>
        {/* Main Rings - Higher Opacity */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[10, 18, 128]} />
          <meshStandardMaterial color="#94a3b8" transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
        {/* Inner Ring Shadow Detail */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[10.5, 11, 128]} />
          <meshBasicMaterial color="#475569" transparent opacity={0.4} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  );
}

function Planets() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[50, 20, 50]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-20, -20, -20]} intensity={1} color="#4f46e5" />
      
      <EarthProcedural position={[12, 5, -20]} />
      <JupiterProcedural position={[-18, -8, -100]} />
      <SaturnProcedural position={[18, 10, -180]} />
    </>
  );
}

export default function WarpBackground() {
  const { theme } = useTheme();

  return (
    <div className={`fixed inset-0 -z-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-slate-50'}`}>
      {theme === 'light' && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-multiply pointer-events-none">
            <Silk className="w-full h-full" color="#3b82f6" speed={0.3} scale={1.2} noiseIntensity={0.2} />
          </div>
          <div className="absolute inset-0 opacity-[0.4] z-10" style={{ backgroundImage: `radial-gradient(#3b82f6 0.5px, transparent 0)`, backgroundSize: '30px 30px' }} />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-200/30 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none z-20" />
        </div>
      )}

      <div className="absolute inset-0 z-30">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <fog attach="fog" args={[theme === 'dark' ? '#000000' : '#f8fafc', 10, 150]} /> 
            <StarField />
            {theme === 'dark' && <Planets />}
        </Canvas>
      </div>
    </div>
  );
}
