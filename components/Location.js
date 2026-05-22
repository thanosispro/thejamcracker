"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Info Side */}
          <div className="w-full lg:w-1/3">
            <motion.h4 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold uppercase tracking-widest mb-2"
            >
              Reach Out
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold text-primary mb-8"
            >
              Visit Our <span className="text-accent">Studio</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-accent" />, label: "Address", text: "Imadol, Lalitpur, Nepal" },
                { icon: <Phone className="text-accent" />, label: "Phone", text: "+977 980-0000000" },
                { icon: <Mail className="text-accent" />, label: "Email", text: "hello@jamcracker.com" },
                { icon: <Clock className="text-accent" />, label: "Hours", text: "Sun - Fri: 10:00 AM - 7:00 PM" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-xs uppercase text-primary/40 font-bold mb-1">{item.label}</p>
                    <p className="text-primary font-medium">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/3 h-[450px] relative rounded-3xl overflow-hidden shadow-2xl bg-primary/5 border border-primary/10"
          >
            {/* Minimalist Map Placeholder UI */}
            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center animate-pulse mb-4">
                <MapPin size={40} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Imadol, Nepal</h3>
              <p className="text-primary/60 max-w-sm">
                Located in the heart of Lalitpur. Come in, grab a guitar, and jam with us.
              </p>
              
              {/* Decorative elements representing map features */}
              <div className="absolute top-1/4 right-1/3 w-32 h-1 bg-primary/10 -rotate-45" />
              <div className="absolute bottom-1/3 left-1/4 w-48 h-1 bg-primary/10 rotate-12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                <svg className="w-full h-full opacity-5" viewBox="0 0 100 100">
                  <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <path d="M50,0 Q75,25 50,50 T50,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
            
            <button className="absolute bottom-6 right-6 px-6 py-3 bg-primary text-background rounded-xl font-bold hover:bg-accent transition-colors shadow-lg">
              Open in Google Maps
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
