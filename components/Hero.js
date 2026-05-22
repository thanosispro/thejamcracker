"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Where every string tells a story...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Loop or stay? Let's stay for premium feel, or fade out and restart after 3s
      const reset = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center grayscale-20 scale-105"
        style={{ backgroundImage: "url('/image/1.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-warm-dark/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-background">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tighter leading-none"
          >
            THE JAM <br />
            <span className="text-accent underline decoration-primary/30">CRACKER</span>
          </motion.h1>

          <div className="h-8 mb-8">
            <p className="text-xl md:text-4xl font-light text-amber-600 italic">
              {text}<span className="inline-block w-1 h-6 bg-accent ml-1 animate-pulse" />
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="group px-8 py-4 bg-primary text-background rounded-full font-semibold flex items-center gap-2 hover:bg-accent transition-all duration-300"
            >
              Explore Collection
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#location"
              className="px-8 py-4 border border-background/20 backdrop-blur-sm rounded-full font-semibold flex bg-black items-center gap-2 hover:bg-orange-500 transition-all duration-300"
            >
              Visit Shop
              <MapPin size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/50"
      >
        <div className="w-1 h-12 rounded-full border border-background/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
