// src/components/ui/ServiceCard.tsx
"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

const ServiceCard = ({ children, delay = 0 }: { children: ReactNode, delay?: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 150, damping: 20 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // 3D Tilt effect සඳහා transform values හදනවා
    const rotateX = useTransform(springY, [-150, 150], [10, -10]);
    const rotateY = useTransform(springX, [-150, 150], [-10, 10]);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }
    
    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: delay }}
            className="group service-card relative bg-gray-900/50 p-6 rounded-lg border border-cyan-400/20"
            // 3D effect එක සඳහා style එක එකතු කරනවා
            style={{ 
                perspective: "1000px",
                rotateX,
                rotateY,
                transformStyle: "preserve-3d" 
            }}
        >
            <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                    maskImage: `radial-gradient(300px at ${mouseX.get() + 150}px ${mouseY.get() + 150}px, white, transparent)`,
                    WebkitMaskImage: `radial-gradient(300px at ${mouseX.get() + 150}px ${mouseY.get() + 150}px, white, transparent)`
                }}
            />
            <div className="relative z-20" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};

export default ServiceCard;