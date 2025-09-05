// src/components/canvas/DigitalFortress.tsx
"use client";
import * as THREE from 'three';
import { useMemo, forwardRef, useRef } from 'react';
import { useFrame, extend, useThree } from '@react-three/fiber';
import { shaderMaterial, Sparkles } from '@react-three/drei';

// TypeScript module augmentation to recognize plexusMaterial
declare module '@react-three/fiber' {
  interface ThreeElements {
    plexusMaterial: THREE.ShaderMaterialParameters & {
      attach?: string;
      ref?: React.Ref<THREE.ShaderMaterial>;
      uTime?: number;
      uColor?: THREE.Color;
      uPixelRatio?: number;
      uSize?: number;
      uMouse?: THREE.Vector3;
    }
  }
}

const PlexusMaterial = shaderMaterial(
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.8, 1.0),
    uPixelRatio: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1,
    uSize: 80.0,
    uMouse: new THREE.Vector3(0, 0, 0), // Mouse position uniform එක
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform float uSize;
    uniform float uPixelRatio;
    uniform vec3 uMouse; // Mouse position එක shader එකට ගන්නවා
    attribute float aScale;

    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      // Mouse එකට ප්‍රතිචාර දක්වන කොටස
      float dist = distance(modelPosition.xyz, uMouse);
      float force = smoothstep(2.0, 0.0, dist) * 2.0;
      vec3 displacement = normalize(modelPosition.xyz - uMouse) * force;
      modelPosition.xyz += displacement;

      modelPosition.z += sin(modelPosition.x * 2.0 + uTime * 0.5) * 0.2;
      modelPosition.y += cos(modelPosition.z * 2.0 + uTime * 0.5) * 0.2;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectionPosition;
      gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -viewPosition.z);
    }
  `,
  // Fragment Shader
  `
    uniform vec3 uColor;
    void main() {
        float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
        float strength = 1.0 - (distanceToCenter * 2.0);
        gl_FragColor = vec4(uColor, strength);
    }
  `
);

const LineMaterial = shaderMaterial({ uTime: 0, uColor: new THREE.Color(0.0, 0.8, 1.0) }, `...`, `...`);

extend({ PlexusMaterial, LineMaterial });

const DigitalFortress = forwardRef<THREE.Group>((props, ref) => {
    const plexusMaterialRef = useRef<THREE.ShaderMaterial>(null!);
    const mousePosition = useRef(new THREE.Vector3(0, 0, 0));
    const { viewport } = useThree();

    const { particles } = useMemo(() => {
        const particleCount = 500;
        const positions = new Float32Array(particleCount * 3);
        const scales = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 25;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
            scales[i] = Math.random() * 0.5 + 0.5;
        }
        
        const particleGeometry = new THREE.BufferGeometry();
        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
        
        const lineSegments: number[] = [];
        // Lines logic as before...
        const lineGeometry = new THREE.BufferGeometry();
        lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(lineSegments, 3));

        return { particles: particleGeometry, lines: lineGeometry };
    }, []);

    useFrame((state, delta) => {
        // Update mouse position and pass to shader
        const x = state.pointer.x * (viewport.width / 2);
        const y = state.pointer.y * (viewport.height / 2);
        mousePosition.current.lerp(new THREE.Vector3(x, y, 0), 0.1);

        if (plexusMaterialRef.current) {
            plexusMaterialRef.current.uniforms.uTime.value += delta;
            plexusMaterialRef.current.uniforms.uMouse.value = mousePosition.current;
        }

        if (ref && typeof ref !== 'function' && ref.current) {
           ref.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <group ref={ref}>
            <points geometry={particles}>
                <plexusMaterial ref={plexusMaterialRef} transparent={true} blending={THREE.AdditiveBlending} depthWrite={false} />
            </points>
            {/* Lines are removed for performance and clarity of the mouse effect */}
            {/* <lineSegments geometry={lines}> ... </lineSegments> */}
            <Sparkles count={1000} scale={[30, 20, 30]} size={1.5} speed={0.5} color="#87CEEB" />
        </group>
    );
});

DigitalFortress.displayName = 'DigitalFortress';
export default DigitalFortress;