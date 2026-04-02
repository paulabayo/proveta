import React from 'react';
import { motion } from 'motion/react';
import { LevelCard } from './LevelCard';
import { MonsterMascot } from './MonsterMascot';
import { LEVELS, MONSTERS } from '../constants';
import { Level } from '../types';
import { Zap, Trophy } from 'lucide-react';

interface LevelSelectionScreenProps {
  onLevelSelect: (level: Level) => void;
}

export const LevelSelectionScreen: React.FC<LevelSelectionScreenProps> = ({ onLevelSelect }) => {
  return (
    <div className="container mx-auto px-6 pt-10 max-w-4xl">
      {/* Hero Title Section */}
      <div className="text-center mb-12 space-y-4">
        <h1 className="headline-text text-5xl md:text-6xl font-extrabold tracking-tight text-on-background">
          ¡Elige tu Aventura!
        </h1>
        <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-md mx-auto">
          ¿Listo para ser un maestro de las mates?
        </p>
      </div>

      {/* Levels Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {LEVELS.map((level) => (
          <LevelCard key={level.id} level={level} onClick={onLevelSelect} />
        ))}
      </div>

      {/* Master Advice Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary-container p-8 rounded-xl relative overflow-visible flex flex-col md:flex-row items-center gap-8 shadow-xl"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 -mt-16 md:-mt-20 md:-ml-12 drop-shadow-2xl">
          <img 
            src={MONSTERS.owl} 
            alt="Maestro" 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <div className="inline-block bg-white px-4 py-1 rounded-full text-primary font-black text-sm mb-2 shadow-sm">
            CONSEJO DEL MAESTRO
          </div>
          <h4 className="headline-text text-2xl font-black text-on-secondary-container mb-2">
            ¡Practica mucho para ganar estrellas!
          </h4>
          <p className="text-on-secondary-container font-medium opacity-90">
            Cada estrella que ganas te acerca a nuevos mundos matemáticos secretos.
          </p>
        </div>
        <div className="hidden lg:block shrink-0">
          <div className="flex gap-2">
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 1 }}
              className="w-3 h-3 rounded-full bg-primary" 
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0.1 }}
              className="w-3 h-3 rounded-full bg-primary-container" 
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
              className="w-3 h-3 rounded-full bg-tertiary" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
