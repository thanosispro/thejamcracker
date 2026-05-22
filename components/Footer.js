"use client";

import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaGuitar
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-primary text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tighter mb-6">
              <FaGuitar className="text-accent" />
              THE JAM <span className="text-accent">CORNER</span>
            </div>
            <p className="text-background/60 leading-relaxed max-w-xs">
              Your premium destination for guitars and gear in Imadol.
              We don&apos;t just sell instruments; we fuel dreams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Location'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-background/60 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Shop</h4>
            <ul className="space-y-4">
              {['Electric Guitars', 'Acoustic Guitars', 'Bass Guitars', 'Accessories'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-background/60 hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletters */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-accent">Join the Club</h4>
            <p className="text-sm text-background/60 mb-4 font-light">Get the latest gear drops and music news.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="email@address.com"
                className="bg-background/10 border border-background/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-accent transition-colors"
              />
              <button className="bg-accent text-primary p-2 rounded-lg hover:bg-white transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6 text-background/40 text-sm">
          <p>© 2026 The Jam CORNER. Imadol, Nepal. All Rights Reserved.</p>
          <div className="flex gap-6">
            <FaInstagram size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <FaFacebook size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <FaTwitter size={20} className="hover:text-accent cursor-pointer transition-colors" />
            <FaYoutube size={20} className="hover:text-accent cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
