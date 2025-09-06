// src/components/ui/lenis-provider.tsx
"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from "gsap"; // GSAP import කරන්න
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ScrollTrigger import කරන්න

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    const newLenis = new Lenis();
    setLenis(newLenis);


    newLenis.on('scroll', ScrollTrigger.update);

    
    gsap.ticker.add((time) => {
      newLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.destroy();
 
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}