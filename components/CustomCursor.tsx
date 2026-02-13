"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Gamepad2, Eye, ArrowUpRight } from 'lucide-react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<'default' | 'football' | 'terminal' | 'view'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check what element we are hovering over
      const target = e.target as HTMLElement;
      
      // Look for the closest parent with a 'data-cursor' attribute
      const cursorElement = target.closest('[data-cursor]');
      const type = cursorElement?.getAttribute('data-cursor') as any;
      
      setCursorType(type || 'default');
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-100 mix-blend-difference"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      <motion.div
        animate={{ 
          scale: cursorType === 'default' ? 1 : 1.5,
          opacity: 1
        }}
        className="relative flex items-center justify-center w-8 h-8"
      >
        {cursorType === 'default' && <div className="w-3 h-3 bg-white rounded-full" />}
        
        {cursorType === 'football' && (
          <div className="bg-white text-black p-2 rounded-full">
            <Gamepad2 size={20} />
          </div>
        )}
        
        {cursorType === 'terminal' && (
          <div className="bg-green-500 text-black p-2 rounded-sm">
            <Terminal size={20} />
          </div>
        )}

        {cursorType === 'view' && (
           <div className="bg-cyan-400 text-black p-2 rounded-full">
             <Eye size={20} />
           </div>
        )}
      </motion.div>
    </motion.div>
  );
};