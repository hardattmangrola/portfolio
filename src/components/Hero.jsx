import React from 'react';
import { motion } from 'framer-motion';
import Resume from '../assets/Hardattsinh_Resume.pdf';

const Hero = () => {
  const text = "Hello, I'm Hardatt";
  const letters = text.split("");

  return (
    <section id="hero" className="relative h-screen w-full flex items-center px-6 md:px-20 overflow-hidden">
      <div className="z-10 max-w-4xl">
        <motion.div
          className="text-sm md:text-base text-gray-400 mb-4 font-mono"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          &lt;developer /&gt;
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 font-mono">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.05,
                delay: index * 0.05 + 0.5,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="text-blue-500"
          >
            _
          </motion.span>
        </h1>

        <motion.p
          className="text-gray-400 max-w-lg text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Building intelligent systems with code. From full-stack web apps to deep learning models.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-8"
        >
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              View Work
            </a>
            <a href={Resume} download="Hardattsinh_Resume.pdf" className="px-6 py-3 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all duration-300">
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] hidden lg:block z-0 mix-blend-screen opacity-50 pointer-events-none">
        <video
          src="/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover mask-image-gradient"
        />
      </div>

      {/* Mobile background fallback */}
      <div className="lg:hidden absolute bottom-0 right-0 w-full h-[400px] opacity-30 mix-blend-screen">
        <video
          src="/vid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
