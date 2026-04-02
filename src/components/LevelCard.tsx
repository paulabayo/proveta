import React from 'react';
import { motion } from 'motion/react';
import { Star, Lock, X, Calculator, Rocket } from 'lucide-react';
import { Level } from '../types';

interface LevelCardProps {
  level: Level;
  onClick: (level: Level) => void;
}

export const LevelCard: React.FC<LevelCardProps> = ({ level, onClick }) => {
  const isLocked = level.status === 'locked';
  
  if (isLocked) {
    return (
      <div className="md:col-span-2 group bg-surface-container-low/40 backdrop-blur-sm p-10 rounded-xl border-4 border-dashed border-outline-variant/30 relative overflow-hidden grayscale">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center relative">
              <X className="text-on-surface text-4xl" />
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-error-container rounded-full flex items-center justify-center shadow-md">
                <Lock className="text-white text-xl" />
              </div>
            </div>
            <div>
              <h3 className="headline-text text-3xl font-black text-on-surface">{level.title}</h3>
              <p className="text-on-surface-variant font-bold text-lg">{level.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/50 px-6 py-3 rounded-full">
            <Star className="text-secondary-container text-3xl fill-current" />
            <span className="text-2xl font-black text-on-background">15 / 50</span>
          </div>
        </div>
      </div>
    );
  }

  const isNivel2 = level.tag === 'NIVEL 2';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(level)}
      className={`group p-8 rounded-xl shadow-lg border-b-8 transition-all duration-300 relative overflow-hidden cursor-pointer ${
        isNivel2 
          ? 'bg-surface-container-highest border-outline-variant' 
          : 'bg-surface-container-lowest border-primary'
      }`}
    >
      <div className="absolute top-0 right-0 p-4">
        {isNivel2 ? (
          <Rocket className="text-outline-variant text-4xl opacity-20" />
        ) : (
          <Calculator className="text-primary text-4xl opacity-20" />
        )}
      </div>
      
      <div className="flex flex-col gap-4">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
          isNivel2 ? 'bg-secondary-container' : 'bg-primary-container'
        }`}>
          {level.digits === 2 ? (
            <span className="text-on-primary-container text-3xl font-black">2</span>
          ) : (
            <span className="text-on-secondary-container text-3xl font-black">3</span>
          )}
        </div>
        
        <div>
          <h3 className={`headline-text text-2xl font-black ${isNivel2 ? 'text-on-background' : 'text-primary'}`}>
            {level.title}
          </h3>
          <p className="text-on-surface-variant font-bold mt-1">{level.description}</p>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <span className={`${
            isNivel2 ? 'bg-primary-container text-on-primary-container' : 'bg-tertiary-container text-on-tertiary-container'
          } px-3 py-1 rounded-full text-xs font-black`}>
            {level.tag}
          </span>
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < level.stars 
                    ? (isNivel2 ? 'text-outline-variant fill-current' : 'text-secondary-container fill-current') 
                    : 'text-outline-variant'
                }`} 
              />
            ))}
          </div>
        </div>
        
        <button className={`w-full mt-4 py-4 rounded-full font-black text-lg shadow-lg transition-all ${
          isNivel2 
            ? 'bg-white text-primary border-4 border-primary hover:bg-primary hover:text-white' 
            : 'bg-gradient-to-br from-primary to-primary-container text-white hover:scale-[1.02]'
        }`}>
          {isNivel2 ? 'EMPEZAR RETO' : '¡JUGAR AHORA!'}
        </button>
      </div>
    </motion.div>
  );
};
