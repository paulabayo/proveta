import React from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { MONSTERS } from '../constants';

interface HomeScreenProps {
  onPlayNow: () => void;
  onCategorySelect: (category: 'addition' | 'subtraction') => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onPlayNow, onCategorySelect }) => {
  return (
    <div className="flex flex-col items-center px-6 pt-10 max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12 space-y-4">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative w-48 h-48 mx-auto mb-6 group"
        >
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
          <img 
            src={MONSTERS.blue} 
            alt="Friendly Robot" 
            className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <h1 className="headline-text text-5xl md:text-6xl font-extrabold tracking-tight text-on-background">
          ¡Elige tu Aventura!
        </h1>
        <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-md mx-auto">
          ¿Listo para ser un maestro de las mates?
        </p>
      </div>

      {/* Categories / Quick Play */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
        <motion.div
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategorySelect('addition')}
          className="bg-surface-container-lowest p-8 rounded-xl shadow-lg border-b-8 border-primary cursor-pointer"
        >
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center">
              <Plus className="text-on-primary-container w-8 h-8 font-bold" />
            </div>
            <div>
              <h3 className="headline-text text-2xl font-black text-primary">Sumas Fun</h3>
              <p className="text-on-surface-variant font-bold mt-1">Perfecto para entrenar</p>
            </div>
            <button className="w-full mt-4 bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-full font-black text-lg shadow-lg">
              ¡JUGAR AHORA!
            </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onCategorySelect('subtraction')}
          className="bg-surface-container-highest p-8 rounded-xl shadow-lg border-b-8 border-outline-variant cursor-pointer"
        >
          <div className="flex flex-col gap-4">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center">
              <Minus className="text-on-secondary-container w-8 h-8 font-bold" />
            </div>
            <div>
              <h3 className="headline-text text-2xl font-black text-on-background">Restas Quest</h3>
              <p className="text-on-surface-variant font-bold mt-1">El reto definitivo</p>
            </div>
            <button className="w-full mt-4 bg-white text-primary py-4 rounded-full font-black text-lg border-4 border-primary hover:bg-primary hover:text-white transition-all">
              EMPEZAR RETO
            </button>
          </div>
        </motion.div>
      </div>

      {/* Master Advice Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary-container p-8 rounded-xl relative overflow-visible flex flex-col md:flex-row items-center gap-8 shadow-xl w-full"
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
      </motion.div>
    </div>
  );
};
