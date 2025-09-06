// src/components/ui/Layout.tsx
import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import ServiceCard from "./ServiceCard";
import Testimonials from "./Testimonials";
import { FaShieldAlt, FaNetworkWired, FaUserCog, FaChalkboardTeacher } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import AllianceLogos from "./AllianceLogos";
import AnimatedNumber from "./AnimatedNumber";
import Image from "next/image";
import { MouseEvent, useEffect, useRef } from "react";


export default function Layout({ isLoaded }: { isLoaded: boolean }) {

  const scope = useRef<HTMLHeadingElement>(null);
  const baseText = "NETWORXX";
  const scrambleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  useEffect(() => {
    const scrambleAnimation = () => {
      const element = scope.current;
      if (!element) return;

      let displayText = Array(baseText.length).fill(' ').join('');
      element.textContent = displayText;

      let iterations = 0;
      const interval = setInterval(() => {
        displayText = baseText.split('').map((char, index) => {
            if (iterations >= index * 2) {
              return baseText[index];
            }
            return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }).join('');
        
        element.textContent = displayText;
        
        if (iterations >= baseText.length * 2) {
          clearInterval(interval);
          element.textContent = baseText;
        }
        iterations += 1;
      }, 50);
    };
    
    if (isLoaded) {
      const timer = setTimeout(() => {
        scrambleAnimation();
      }, 500);
      return () => clearTimeout(timer);
    }

  }, [isLoaded, scope]);


  // --- Tilt Effect ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(springY, [-250, 250], [15, -15]);
  const rotateY = useTransform(springX, [-250, 250], [-15, 15]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left - width / 2;
    const y = event.clientY - top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <>
      <Header />
      <div id="layout-container" className="relative z-10 w-full text-white">
        {/* --- Hero Section --- */}
        <section className="content-section items-center !py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto px-4">
            <div className="text-center md:text-left order-2 md:order-1">
              <motion.h1
                ref={scope}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
              >
                
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 text-base md:text-xl lg:text-2xl text-gray-300 max-w-2xl"
              >
                Professionals in Managed Services & Cyber Security Solutions, since 2012.
              </motion.p>
            </div>

            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative flex items-center justify-center order-1 md:order-2 w-full h-[500px]"
              style={{ perspective: "1500px" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: ["0%", "-4%", "0%"],
                }}
                transition={{
                  opacity: { duration: 0.8, delay: 0.6 },
                  scale: { duration: 0.8, delay: 0.6 },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatType: "mirror",
                  },
                }}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
              >
                <Image
                  src="/Hacker Using Laptop.gif"
                  alt="Cybersecurity professional at work"
                  className="rounded-lg w-full h-auto"
                  width={500}
                  height={500}
                  priority
                />
                <motion.div
                  className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-[50px] rounded-full bg-cyan-400/30 blur-xl"
                  animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "mirror",
                  }}
                  style={{
                    transform: "translateZ(-10px) translateX(-50%)",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section id="about" className="content-section">
          <div id="about-content" className="mx-auto flex flex-col md:flex-row h-full max-w-6xl items-center justify-center gap-10">
            <div className="md:w-1/2">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold leading-tight"
                >
                    Who We Are
                </motion.h2>
                <p className="mt-6 text-white">
                    Welcome to NETWORXX. We are a channel-focused organization assisting customers in all areas of information technology, communications, and cybersecurity. Since our inception in 2012, we&apos;ve grown to serve a multitude of global and local clients from 3 key centers in Sri Lanka, India and Qatar.
                </p>
                 <p className="mt-4 text-white">
                    Our mission is to deliver a quality and reputable service to all our customers in areas of Secure Information Technology and Communications, by being their preferred partner of choice.
                </p>
            </div>
             <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="text-cyan-400 text-3xl font-bold">
                        <AnimatedNumber value={96} />%
                    </h3>
                    <p className="text-sm text-gray-300">High Exam Pass Ratio</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-400/20">
                    <h3 className="text-cyan-400 text-3xl font-bold">24/7/350</h3>
                    <p className="text-sm text-gray-300">Proactive Monitoring</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-gray-900/50 p-6 rounded-lg border border-cyan-400/20 col-span-2">
                    <h3 className="text-cyan-400 text-3xl font-bold">Expert Team</h3>
                    <p className="text-sm text-gray-300">Certified instructors with extensive industry experience.</p>
                </motion.div>
             </div>
          </div>
        </section>

        <section id="services" className="content-section">
          <div id="services-content" className="mx-auto h-full max-w-6xl text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold"
            >
                Our Services
            </motion.h2>
            <p className="mt-4 max-w-3xl mx-auto text-white">From building global networks, internet data centers to systems integration, NETWORXX has the required skill and industry knowledge to deliver your demands.</p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                <ServiceCard delay={0}>
                    <FaShieldAlt className="text-cyan-400 text-3xl mb-4" />
                    <h3 className="font-bold text-lg">IT & Cyber Security</h3>
                    <p className="text-sm text-gray-400 mt-2">High-quality advisory and consultancy services to address daily threats, featuring our Security Operation Centre (SOC) for IT & OT.</p>
                </ServiceCard>
                <ServiceCard delay={0.1}>
                    <FaUserCog className="text-cyan-400 text-3xl mb-4" />
                    <h3 className="font-bold text-lg">Managed Services</h3>
                     <p className="text-sm text-gray-400 mt-2">Flexible support with 24/7/365 Proactive Monitoring from our innovative Network Operations Centre (NOC) to keep your systems optimized.</p>
                </ServiceCard>
                <ServiceCard delay={0.2}>
                    <FaNetworkWired className="text-cyan-400 text-3xl mb-4" />
                    <h3 className="font-bold text-lg">Network Services</h3>
                    <p className="text-sm text-gray-400 mt-2">Custom solutions including data center capabilities, load balancing, and tailor-made network discovery to ensure seamless performance.</p>
                </ServiceCard>
                <ServiceCard delay={0.3}>
                    <FaChalkboardTeacher className="text-cyan-400 text-3xl mb-4" />
                    <h3 className="font-bold text-lg">Training Services</h3>
                    <p className="text-sm text-gray-400 mt-2">World-class Cisco CCIE preparation with hands-on training, unlimited lab access, and expert instructors.</p>
                </ServiceCard>
            </div>
          </div>
        </section>

        <section id="alliances" className="content-section">
            <div id="alliances-content" className="mx-auto max-w-6xl text-center">
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold"
                >
                    Our Global Alliances
                </motion.h2>
                 <p className="mt-4 max-w-3xl mx-auto text-gray-400">
                    We possess a strong security eco-system that enables us to complement our technical and sector expertise with insights and solutions offered by our partners.
                 </p>
                 <AllianceLogos />
            </div>
         </section>
         
         <Testimonials />
         
        <section id="contact" className="content-section">
          <ContactForm />
        </section>
      </div>

      <Footer />
    </>
  );
}