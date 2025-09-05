// src/components/canvas/AnimationController.tsx
"use client";
import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

export default function AnimationController({ fortressRef }: { fortressRef: React.RefObject<THREE.Group | null> }) {
  const { camera, mouse } = useThree();
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const scrollPercent = useRef(0);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      gsap.set("#about-content, #services-content, #alliances-content, #contact", { opacity: 1, y: 0 });
    } else {
      gsap.set("#about-content, #services-content, #alliances-content, #contact", { opacity: 0, y: 50 });
    }

    timeline.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#layout-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        onUpdate: (self) => {
          scrollPercent.current = self.progress;
        },
      },
    });
    
    // Animate the fortressRef based on scroll
    if (fortressRef.current) {
        timeline.current
            .to(fortressRef.current.rotation, { y: Math.PI * 2, duration: 1 }, 0)
            .to(fortressRef.current.scale, { x: 1.5, y: 1.5, z: 1.5, duration: 0.5 }, 0.4)
            .to(fortressRef.current.scale, { x: 1, y: 1, z: 1, duration: 0.5 }, 0.7);
    }


    if (!isMobile) {
      timeline.current
        .to("#about-content", { opacity: 1, y: 0, duration: 0.5 }, 0.1)
        .to("#about-content", { opacity: 0, y: -50, duration: 0.5 }, 0.35)
        .to("#services-content", { opacity: 1, y: 0, duration: 0.5 }, 0.4)
        .to("#services-content", { opacity: 0, y: -50, duration: 0.5 }, 0.65)
        .to("#alliances-content", { opacity: 1, y: 0, duration: 0.5 }, 0.7)
        .to("#alliances-content", { opacity: 0, y: -50, duration: 0.5 }, 0.9)
        .to("#contact", { opacity: 1, y: 0, duration: 0.5 }, 0.95);
    }
    
  }, [camera, fortressRef]);

  useFrame(() => {
    // Camera movement based on scroll and mouse position
    const targetZ = 5 - scrollPercent.current * 10;
    const mouseXEffect = mouse.x * 0.5;
    const mouseYEffect = mouse.y * 0.5;

    camera.position.lerp(new THREE.Vector3(mouseXEffect, mouseYEffect, targetZ), 0.1);
    
    // Look at the center of the scene
    const targetLookAt = new THREE.Vector3(0, 0, 0);
    camera.lookAt(targetLookAt);
  });

  return null;
}