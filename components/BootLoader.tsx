"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const BootLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    const bootSequence = [
      "Initializing Kernel...",
      "Loading Modules [React, Next.js, Tailwind]...",
      "Mounting Virtual DOM...",
      "Checking System Integrity... OK",
      "Establishing Connection to User...",
      "System Ready. Welcome, User."
    ];

    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += Math.random() * 300 + 400; 
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        // If it's the last line, trigger exit
        if (index === bootSequence.length - 1) {
          setTimeout(() => setIsExit(true), 800);
          setTimeout(onComplete, 1600); 
        }
      }, delay);
    });
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-100 bg-black flex items-center justify-center font-mono p-10"
        >
          <div className="w-full max-w-lg">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-green-500 text-sm md:text-base mb-2"
              >
                <span className="text-green-800 mr-2">root@yonas-v3:~#</span>
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-3 h-5 bg-green-500 mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};