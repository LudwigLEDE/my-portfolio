/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
// FIX 1: Split imports into value imports and type imports
import { useRef, useState, memo } from 'react';
import type { ReactNode } from 'react'; 

// FIX 2: Split imports here as well
import { Canvas, createPortal, useFrame } from '@react-three/fiber';
import type { ThreeElements } from '@react-three/fiber';

import {
  useFBO,
  Text,
  MeshTransmissionMaterial
} from '@react-three/drei';
import { easing } from 'maath';

// --- Types ---
type Mode = 'lens' | 'bar' | 'cube';
type ModeProps = Record<string, unknown>;

interface FluidGlassBoxProps {
  mode?: Mode;
  className?: string;
  children?: ReactNode;
  threeChildren?: ReactNode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
  scale?: number;
  text?: string;
  onClick?: () => void;
}

// --- Main Component ---
export default function FluidGlassBox({
  mode = 'lens',
  className = "w-full h-full relative",
  children,
  threeChildren,
  lensProps = {},
  barProps = {},
  cubeProps = {},
  text,
  onClick
}: FluidGlassBoxProps) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;
  const { ...modeProps } = rawOverrides;

  return (
    <div className={className} onClick={onClick}>
      <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }} style={{pointerEvents: 'none'}}>
        
        {/* The 3D Glass Wrapper */}
        <Wrapper modeProps={modeProps}>
           {/* If simple text is provided, render it inside the glass refraction */}
           {text && (
            <Text 
              fontSize={0.5} 
              color="white" 
              anchorX="center" 
              anchorY="middle"
              position={[0, 0, 0]}
            >
              {text}
            </Text>
           )}
           {threeChildren}
        </Wrapper>

        {/* Ambient light for general visibility */}
        <ambientLight intensity={1.5} />
      </Canvas>

      {/* HTML Overlay (Clickable) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
        {children}
      </div>
    </div>
  );
}

// --- Internal Logic ---
type MeshProps = ThreeElements['mesh'];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  geometryType: 'cylinder' | 'box';
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  geometryType,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const buffer = useFBO();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    // Movement Logic
    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    
    // Smooth movement
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    // Auto-scaling based on viewport
    if ((modeProps as { scale?: number }).scale == null) {
      ref.current.scale.setScalar(Math.min(0.5, v.width * 0.8));
    }

    // Render children to buffer (Refraction Source)
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps as any;

  return (
    <>
      {/* Portal the content into the off-screen scene */}
      {createPortal(
        <group>
            {/* Background plane to ensure color shows up */}
            <mesh position={[0,0,-10]}>
                <planeGeometry args={[50,50]} />
                <meshBasicMaterial color="#5227ff" />
            </mesh>
            {children}
        </group>, 
      scene)}

      {/* The Actual Glass Mesh */}
      <mesh
        ref={ref}
        scale={0.5} // Default scale
        {...props}
      >
        {/* Fallback Geometries if GLB is missing */}
        {geometryType === 'cylinder' ? (
            <cylinderGeometry args={[1, 1, 0.5, 32]} />
        ) : (
            <boxGeometry args={[1, 1, 1]} />
        )}

        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 1.5}
          anisotropy={anisotropy ?? 0.1}
          chromaticAberration={chromaticAberration ?? 0.06}
          roughness={0}
          transmission={1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

// --- Modes ---

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  // Rotate cylinder to look like a lens
  return <ModeWrapper geometryType="cylinder" rotation-x={Math.PI / 2} followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return <ModeWrapper geometryType="box" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    thickness: 2,
    ior: 1.2,
  };

  return (
    <ModeWrapper
      geometryType="box"
      lockToBottom={false} // Changed to false so we can place it anywhere via CSS
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      scale={[10, 1, 1]} // Wide bar shape
      {...p}
    />
  );
}