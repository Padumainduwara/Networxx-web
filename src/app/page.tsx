// src/app/page.tsx
"use client";
import { useState, useEffect } from "react";
import Layout from "@/components/ui/Layout";
import Preloader from "@/components/ui/Preloader";
import Scene from "@/components/canvas/Scene";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const isLoaded = !isLoading; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      window.scrollTo(0, 0);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
     <main className="relative h-auto w-full overflow-x-hidden bg-black">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      <div className={`fixed top-0 left-0 h-screen w-full transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Scene onLoaded={() => {}} isLoaded={isLoaded} />
      </div>

      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="relative z-10"
          >
            <Layout isLoaded={isLoaded} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}