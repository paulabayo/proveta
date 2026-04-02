import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EquationView } from './EquationView';
import { NumberPad } from './NumberPad';
import { MonsterMascot } from './MonsterMascot';
import { Level, Problem } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

interface PracticeScreenProps {
  level: Level;
  onFinish: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({ level, onFinish }) => {
  const [problem, setProblem] = useState<Problem | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const totalToSolve = 10;

  const generateProblem = () => {
    const max = Math.pow(10, level.digits) - 1;
    const min = Math.pow(10, level.digits - 1);
    
    let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (level.operation === 'subtraction' && n1 < n2) {
      [n1, n2] = [n2, n1];
    }
    
    const ans = level.operation === 'addition' ? n1 + n2 : n1 - n2;
    
    setProblem({
      num1: n1,
      num2: n2,
      operation: level.operation,
      answer: ans
    });
    setUserAnswer('');
    setIsCorrect(null);
  };

  useEffect(() => {
    generateProblem();
  }, [level]);

  const handleNumberClick = (num: string) => {
    if (isCorrect !== null) return;
    setUserAnswer(prev => prev + num);
  };

  const handleDelete = () => {
    if (isCorrect !== null) return;
    setUserAnswer(prev => prev.slice(0, -1));
  };

  const handleCheck = () => {
    if (!problem || userAnswer === '' || isCorrect !== null) return;
    
    const correct = parseInt(userAnswer) === problem.answer;
    setIsCorrect(correct);
    
    if (correct) {
      setSolvedCount(prev => prev + 1);
      setTimeout(() => {
        if (solvedCount + 1 >= totalToSolve) {
          onFinish();
        } else {
          generateProblem();
        }
      }, 1500);
    } else {
      setTimeout(() => {
        setIsCorrect(null);
        setUserAnswer('');
      }, 1500);
    }
  };

  if (!problem) return null;

  const progress = (solvedCount / totalToSolve) * 100;

  return (
    <div className="flex flex-col items-center px-6 pt-4">
      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase">Progress</span>
          <span className="text-xs font-bold text-on-surface">{solvedCount} of {totalToSolve} solved</span>
        </div>
        <div className="h-4 w-full bg-surface-container-high rounded-full overflow-hidden p-1">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary to-primary-container rounded-full transition-all duration-700 ease-out" 
          />
        </div>
      </div>

      {/* Monster Feedback */}
      <div className="w-full max-w-lg mb-8">
        <MonsterMascot 
          type={level.operation === 'addition' ? 'green' : 'purple'} 
          message={level.operation === 'addition' 
            ? "Let's tackle this one! Remember to carry the ten if your ones add up to 10 or more!"
            : "Don't forget to borrow if the top number is too small!"
          }
        />
      </div>

      {/* Equation */}
      <div className="relative mb-8">
        <EquationView 
          num1={problem.num1} 
          num2={problem.num2} 
          operation={problem.operation} 
          userAnswer={userAnswer}
          isCorrect={isCorrect === null ? undefined : isCorrect}
        />
        
        <AnimatePresence>
          {isCorrect === true && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="bg-secondary text-white p-6 rounded-full shadow-2xl">
                <CheckCircle2 className="w-24 h-24" />
              </div>
            </motion.div>
          )}
          {isCorrect === false && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
            >
              <div className="bg-error text-white p-6 rounded-full shadow-2xl">
                <XCircle className="w-24 h-24" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Number Pad */}
      <NumberPad 
        onNumberClick={handleNumberClick} 
        onDelete={handleDelete} 
        onCheck={handleCheck} 
      />
    </div>
  );
};
