// src/components/ui/Testimonials.tsx

"use client";
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Dummy testimonial data - ඔබට මෙතනට සැබෑ දත්ත යොදාගන්න පුළුවන්
const testimonials = [
  {
    quote: "NETWORXX provided us with a robust security solution that exceeded our expectations. Their team is knowledgeable, professional, and always available to help. We feel much more secure with their managed services.",
    name: "John Doe",
    title: "IT Manager, ABC Corporation",
  },
  {
    quote: "The cybersecurity training program was exceptional. Our team gained practical skills that they could immediately apply. The instructors were true experts in the field. Highly recommended!",
    name: "Jane Smith",
    title: "HR Director, Tech Solutions Inc.",
  },
  {
    quote: "Their proactive monitoring and network services have been a game-changer for our business. Downtime is a thing of the past, and our network has never been faster or more reliable. A truly five-star service.",
    name: "Samuel Lee",
    title: "CEO, Creative Minds Agency",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2, // Stagger the animation for each card
    }
  })
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full p-8 flex items-center min-h-screen py-20 md:py-24">
      <div id="testimonials-content" className="mx-auto h-full max-w-6xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400">
          We are proud to have partnered with a diverse range of clients. Here’s what some of them have to say about their experience with NETWORXX.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-900/50 p-8 rounded-lg border border-cyan-400/20 flex flex-col"
            >
              <FaQuoteLeft className="text-cyan-400 text-2xl mb-4" />
              <p className="text-gray-300 italic flex-grow">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-cyan-400">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}