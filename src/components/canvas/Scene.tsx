// src/components/canvas/Scene.tsx
"use client";
import { Canvas, CanvasProps } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { useRef, Suspense } from "react";
import DigitalFortress from "./DigitalFortress"; 
import AnimationController from "./AnimationController";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from 'three';

export default function Scene({ onLoaded, ...props }: { onLoaded: () => void } & CanvasProps) {
  const fortressRef = useRef<THREE.Group>(null);

  return (
    <Canvas
      onCreated={() => {
        if (onLoaded) {
          onLoaded();
        }
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
      {...props}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 0]} color="#00ffff" intensity={2} />
      
      <Suspense fallback={null}>
        <DigitalFortress ref={fortressRef} />
        <AnimationController fortressRef={fortressRef} />
        
        <EffectComposer>
          <Bloom 
            intensity={0.8}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={1000}
          />
        </EffectComposer>
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
}