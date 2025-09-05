// src/components/ui/Preloader.tsx
"use client";
import { motion } from "framer-motion";

export default function Preloader() {
  const variants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } },
  } as const;

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  const subTextVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delay: 1.2 } },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-center justify-center bg-black"
      variants={variants}
      initial="initial"
      exit="exit"
    >
      <div className="text-center overflow-hidden">
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-4xl font-bold tracking-widest text-white bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 to-blue-500"
        >
          NETWORXX
        </motion.h1>
        <motion.p
          variants={subTextVariants}
          initial="initial"
          animate="animate"
          className="mt-4 text-sm text-gray-400"
        >
          Initializing Secure Experience...
        </motion.p>
      </div>
    </motion.div>
  );
}