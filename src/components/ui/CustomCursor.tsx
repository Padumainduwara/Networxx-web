// src/components/ui/CustomCursor.tsx

"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12, // Center the cursor
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "#06b6d4", // cyan-400
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-50 rounded-full"
      variants={variants}
      animate="default"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
}