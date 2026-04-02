import React from 'react';
import { motion } from 'motion/react';
import { MathOperation } from '../types';

interface EquationViewProps {
  num1: number;
  num2: number;
  operation: MathOperation;
  userAnswer: string;
  isCorrect?: boolean;
}

export const EquationView: React.FC<EquationViewProps> = ({ 
  num1, 
  num2, 
  operation, 
  userAnswer,
  isCorrect 
}) => {
  const opSymbol = operation === 'addition' ? '+' : '-';
  
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  const maxLength = Math.max(num1Str.length, num2Str.length);
  
  const n1Padded = num1Str.padStart(maxLength, ' ');
  const n2Padded = num2Str.padStart(maxLength, ' ');

  return (
    <div className="w-full max-w-md bg-surface-container-low rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-inner">
      {/* Background Sketch Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png')" }} />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Carrying/Borrowing Row */}
        <div className="flex justify-end w-full pr-4 mb-2 gap-8">
          {operation === 'addition' ? (
            <>
              <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center border-2 border-primary/20 shadow-sm">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <div className="w-12 h-12 invisible" />
            </>
          ) : (
            <>
              <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center border-2 border-primary/20 shadow-sm">
                <span className="text-primary font-bold text-xl">{Math.floor(num1 / 10) - 1}</span>
              </div>
              <div className="w-12 h-12 bg-surface-container-highest rounded-lg flex items-center justify-center border-2 border-primary/20 shadow-sm">
                <span className="text-primary font-bold text-xl">{(num1 % 10) + 10}</span>
              </div>
            </>
          )}
        </div>

        {/* Vertical Equation */}
        <div className="flex flex-col items-end w-full pr-4 font-extrabold text-[5rem] leading-none text-on-surface tracking-tighter headline-text">
          <div className="relative flex gap-8">
            {n1Padded.split('').map((d, i) => (
              <span key={i} className="relative">
                {d}
                {operation === 'subtraction' && d !== ' ' && (
                  <div className="absolute inset-x-0 top-1/2 h-1.5 bg-outline-variant -rotate-45 rounded-full scale-125" />
                )}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-end gap-8 mt-4">
            <span className="text-4xl font-black text-primary">{opSymbol}</span>
            <div className="flex gap-8">
              {n2Padded.split('').map((d, i) => <span key={i}>{d}</span>)}
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-1.5 bg-surface-variant rounded-full my-8"></div>

        {/* Result Inputs */}
        <div className="flex justify-end w-full pr-4 gap-8">
          <div className={`w-24 h-32 rounded-2xl bg-surface-container-lowest border-4 ${
            isCorrect === true ? 'border-tertiary' : isCorrect === false ? 'border-error' : 'border-primary/30 border-dashed'
          } shadow-inner flex items-center justify-center transition-all duration-300`}>
            <span className={`text-[4rem] font-black ${
              isCorrect === true ? 'text-tertiary' : isCorrect === false ? 'text-error' : 'text-primary'
            }`}>
              {userAnswer || '?'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
