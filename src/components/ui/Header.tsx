// src/components/ui/Header.tsx

"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLenis } from "@/components/ui/lenis-provider"; 

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenis = useLenis(); // Use the shared lenis instance

  const handleScrollTo = (target: string | number) => {
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }
    setMobileMenuOpen(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 z-30 w-full bg-black/30 backdrop-blur-lg border-b border-cyan-400/10"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4 text-white">
          <button onClick={() => handleScrollTo(0)} className="relative h-8 w-40">
            <Image src="/company-logo.png" alt="NETWORXX Logo" layout="fill" objectFit="contain" />
          </button>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <button onClick={() => handleScrollTo('#about')} className="transition-colors hover:text-cyan-400">About</button>
            <button onClick={() => handleScrollTo('#services')} className="transition-colors hover:text-cyan-400">Services</button>
            <button onClick={() => handleScrollTo('#alliances')} className="transition-colors hover:text-cyan-400">Alliances</button>
            <button onClick={() => handleScrollTo('#testimonials')} className="transition-colors hover:text-cyan-400">Testimonials</button> 
          </nav>

          <button onClick={() => handleScrollTo('#contact')} className="hidden md:block rounded-full border border-cyan-400 px-5 py-2 text-sm transition-colors hover:bg-cyan-400 hover:text-black">
            Contact Us
          </button>
          
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="z-50 relative">
              <div className="space-y-1.5">
                <motion.span animate={{rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6: 0}} className="block h-0.5 w-6 bg-white"></motion.span>
                <motion.span animate={{opacity: isMobileMenuOpen ? 0 : 1}} className="block h-0.5 w-6 bg-white"></motion.span>
                <motion.span animate={{rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6: 0}} className="block h-0.5 w-6 bg-white"></motion.span>
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 z-20 w-full h-screen bg-black/80 backdrop-blur-xl"
          >
            <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="hidden" className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
              <motion.button variants={menuItemVariants} onClick={() => handleScrollTo('#services')}>Services</motion.button>
              <motion.button variants={menuItemVariants} onClick={() => handleScrollTo('#about')}>About</motion.button>
              <motion.button variants={menuItemVariants} onClick={() => handleScrollTo('#alliances')}>Alliances</motion.button>
              <motion.button variants={menuItemVariants} onClick={() => handleScrollTo('#testimonials')}>Testimonials</motion.button>
              <motion.button variants={menuItemVariants} onClick={() => handleScrollTo('#contact')} className="mt-8 rounded-full border border-cyan-400 px-8 py-3">Contact Us</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}