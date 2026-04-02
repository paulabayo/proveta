export type Screen = 'home' | 'levels' | 'practice' | 'awards' | 'profile';
export type MathOperation = 'addition' | 'subtraction' | 'multiplication';

export interface Level {
  id: string;
  title: string;
  description: string;
  operation: MathOperation;
  digits: number;
  stars: number;
  maxStars: number;
  status: 'active' | 'locked' | 'completed';
  tag?: string;
}

export interface Problem {
  num1: number;
  num2: number;
  operation: MathOperation;
  answer: number;
}
