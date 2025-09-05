// src/components/ui/ContactForm.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");
        // Here you would typically send the form data to a server
        // For demonstration, we'll just simulate a network request
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Randomly succeed or fail
        if (Math.random() > 0.2) {
            setStatus("success");
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto text-left grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Let&apos;s build a more secure future, together.
                </h2>
                <p className="mt-4 text-gray-400">
                    Whether you have a short-term resource requirement or a complex project, we&apos;re here to help. Reach out to us via phone, email, or the contact form.
                </p>
                <div className="mt-8 space-y-4 text-gray-300">
                    <div className="flex items-center gap-4">
                        <FaPhone className="text-cyan-400" />
                        <a href="tel:+94112727070" className="hover:text-cyan-400">+94 112 72 7070</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-cyan-400" />
                        <a href="mailto:info@networxx.lk" className="hover:text-cyan-400">info@networxx.lk</a>
                    </div>
                     <div className="flex items-start gap-4">
                        <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                        <span>NO 22/5, Sujatha Avenue, Kalubowila, Dehiwala, Sri Lanka.</span>
                    </div>
                </div>
            </motion.div>
            <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 bg-gray-900/50 p-8 rounded-lg border border-cyan-400/20"
            >
                <div className="relative">
                    <input type="text" id="name" required placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 appearance-none pt-2 text-white focus:outline-none focus:ring-0 focus:border-cyan-400" />
                    <label htmlFor="name" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                 <div className="relative">
                    <input type="email" id="email" required placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 appearance-none pt-2 text-white focus:outline-none focus:ring-0 focus:border-cyan-400" />
                    <label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                 <div className="relative">
                    <textarea id="message" required placeholder=" " rows={4} className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 appearance-none pt-2 text-white focus:outline-none focus:ring-0 focus:border-cyan-400"></textarea>
                    <label htmlFor="message" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                </div>
                <div>
                    <button type="submit" disabled={status === 'sending'} className="w-full mt-4 rounded-full bg-cyan-400 py-3 text-lg font-bold text-black transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-400 text-center">Message sent successfully! We&apos;ll be in touch soon.</motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400 text-center">Something went wrong. Please try again later.</motion.p>
                    )}
                </AnimatePresence>
            </motion.form>
        </div>
    )
}