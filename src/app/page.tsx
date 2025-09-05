// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/ui/Layout";
import Preloader from "@/components/ui/Preloader";
import Scene from "@/components/canvas/Scene"; // Scene එක import කරනවා
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      window.scrollTo(0, 0);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative h-auto w-screen bg-black">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {/* 3D Scene එක මෙතන තියෙන්න ඕනේ */}
      <div className={`fixed top-0 left-0 h-screen w-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Scene onLoaded={() => {}} />
      </div>

      <div className="relative z-10">
        <Layout />
      </div>
    </main>
  );
}