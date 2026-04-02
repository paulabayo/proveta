import React from 'react';
import { motion } from 'motion/react';
import { Delete, Check } from 'lucide-react';

interface NumberPadProps {
  onNumberClick: (num: string) => void;
  onDelete: () => void;
  onCheck: () => void;
}

export const NumberPad: React.FC<NumberPadProps> = ({ onNumberClick, onDelete, onCheck }) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="w-full max-w-md grid grid-cols-3 gap-3">
      {numbers.slice(0, 9).map((num) => (
        <PadButton key={num} onClick={() => onNumberClick(num)} label={num} />
      ))}
      <PadButton onClick={onDelete} icon={<Delete />} variant="secondary" />
      <PadButton onClick={() => onNumberClick('0')} label="0" />
      <PadButton onClick={onCheck} icon={<Check />} variant="primary" />
    </div>
  );
};

interface PadButtonProps {
  label?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'primary' | 'secondary';
}

const PadButton: React.FC<PadButtonProps> = ({ label, icon, onClick, variant = 'default' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20';
      case 'secondary':
        return 'bg-surface-variant/30 text-on-surface-variant';
      default:
        return 'bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-high';
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`h-16 rounded-2xl font-extrabold text-2xl flex items-center justify-center transition-colors ${getStyles()}`}
    >
      {label || icon}
    </motion.button>
  );
};
