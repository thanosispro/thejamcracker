"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([
    { role: 'bot', content: 'Hey there! Jamming today? How can I help you find the perfect guitar?' }
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setChat([...chat, { role: 'user', content: message }]);
    setMessage('');

    // Mock bot response
    setTimeout(() => {
      setChat(prev => [...prev, { role: 'bot', content: "That sounds awesome! Our Imadol shop has some new arrivals. Would you like to see the collection?" }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 h-96 bg-background rounded-2xl shadow-2xl border border-primary/10 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-background flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <User size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold">Jam Assist</p>
                  <p className="text-[10px] text-background/60">Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/5">
              {chat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-background rounded-tr-none' : 'bg-background text-primary border border-primary/10 rounded-tl-none'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-background border-t border-primary/10 flex gap-2">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..." 
                className="flex-1 bg-primary/5 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-accent border border-transparent transition-colors"
              />
              <button type="submit" className="p-2 bg-primary text-background rounded-lg hover:bg-accent transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-background rounded-full flex items-center justify-center shadow-2xl hover:bg-accent transition-colors"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
