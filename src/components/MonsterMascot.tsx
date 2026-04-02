import React from 'react';
import { motion } from 'motion/react';
import { MONSTERS } from '../constants';

interface MonsterMascotProps {
  type: keyof typeof MONSTERS;
  message?: string;
  className?: string;
}

export const MonsterMascot: React.FC<MonsterMascotProps> = ({ type, message, className = "" }) => {
  return (
    <div className={`flex items-end gap-2 ${className}`}>
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150" />
        <img 
          src={MONSTERS[type]} 
          alt="Monster Mascot" 
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      {message && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          className="glass-effect p-4 rounded-2xl rounded-bl-none shadow-sm border border-white/40 mb-6 max-w-[200px] relative z-20"
        >
          <p className="text-xs font-bold text-on-surface italic leading-relaxed">
            "{message}"
          </p>
        </motion.div>
      )}
    </div>
  );
};
