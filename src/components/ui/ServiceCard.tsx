// src/components/ui/ServiceCard.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const ServiceCard = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }} // උඩට එසවෙන effect එක
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: delay }}
            className="group relative bg-gray-900/50 p-6 rounded-lg border border-cyan-400/20 overflow-hidden"
        >
            {/* --- Glint Effect එක --- */}
            <div className="absolute top-0 left-[-100%] h-full w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-all duration-700 group-hover:left-full" />
            
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default ServiceCard;