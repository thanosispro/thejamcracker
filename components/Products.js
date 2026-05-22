"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const Products = () => {
  const items = [
    { id: 1, name: "Midnight Strat", price: "Rs.1,200", desc: "Sleek finish with vintage pickups.", img: "/image/1.jpg" },
    { id: 2, name: "Golden Acoustic", price: "Rs.850", desc: "Rich mahogany body, warm tone.", img: "/image/2.jpg" },
    { id: 3, name: "Bass Master Pro", price: "Rs.1,050", desc: "The ultimate punch for your low end.", img: "/image/3.jpg" },
    { id: 4, name: "Sunset Hollow", price: "Rs.1,400", desc: "Jazz-inspired resonance.", img: "/image/1.jpg" },
    { id: 5, name: "Classic Hollow", price: "Rs.900", desc: "Timeless design, modern feel.", img: "/image/2.jpg" },
    { id: 6, name: "Riff Ripper", price: "Rs.1,100", desc: "Designed for high-gain speed.", img: "/image/3.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="products" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-widest uppercase mb-2"
          >
            Our Gallery
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            Signature <span className="text-accent">Collection</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/5 group"
            >
              <div className="aspect-square bg-primary/5 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute bottom-4 right-4 p-3 bg-primary text-background rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <ShoppingCart size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                  <span className="text-accent font-bold">{item.price}</span>
                </div>
                <p className="text-primary/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6 pt-6 border-t border-primary/5">
                  <button className="w-full py-2 rounded-lg border border-primary/20 text-primary font-medium hover:bg-primary hover:text-background transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
