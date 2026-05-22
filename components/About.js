"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Music className="text-accent" />,
      title: "Curation",
      desc: "Each guitar is hand-picked for its tone and craftsmanship."
    },
    {
      icon: <Heart className="text-accent" />,
      title: "Passion",
      desc: "Born in Imadol, we live for the vibration of the strings."
    },
    {
      icon: <Zap className="text-accent" />,
      title: "Service",
      desc: "Expert setups and repairs to keep your music alive."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image/Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/image/2.jpg" 
                alt="Guitar Shop Interior" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary rounded-2xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-accent font-semibold uppercase tracking-widest mb-2">Our Story</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Born from a <span className="text-accent">Beat</span> in Imadol.</h2>
              <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                The Jam Cracker started as a small dream in the heart of Imadol, Nepal. 
                We believe that a guitar isn&apos;t just an instrument; it&apos;s an extension of the soul. 
                Whether you&apos;re a seasoned pro or just starting your journey, we&apos;re here to provide 
                the finest gear and a community that shares your passion for music.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {highlights.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-primary/60">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
