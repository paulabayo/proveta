import React, { useState } from 'react';
import { AppLayout } from './components/AppLayout';
import { HomeScreen } from './components/HomeScreen';
import { LevelSelectionScreen } from './components/LevelSelectionScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { Screen, Level, MathOperation } from './types';
import { LEVELS } from './constants';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);

  const handlePlayNow = () => {
    setCurrentScreen('levels');
  };

  const handleCategorySelect = (operation: MathOperation) => {
    // Find the first active level for this operation
    const level = LEVELS.find(l => l.operation === operation && l.status === 'active');
    if (level) {
      setSelectedLevel(level);
      setCurrentScreen('practice');
    } else {
      setCurrentScreen('levels');
    }
  };

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setCurrentScreen('practice');
  };

  const handlePracticeFinish = () => {
    setCurrentScreen('levels');
    setSelectedLevel(null);
  };

  const handleBack = () => {
    if (currentScreen === 'practice') {
      setCurrentScreen('levels');
    } else if (currentScreen === 'levels') {
      setCurrentScreen('home');
    } else {
      setCurrentScreen('home');
    }
  };

  const getTitle = () => {
    switch (currentScreen) {
      case 'levels': return "Choose Level";
      case 'practice': return selectedLevel?.title || "Practice";
      case 'awards': return "My Awards";
      case 'profile': return "My Profile";
      default: return "Math Playground";
    }
  };

  return (
    <AppLayout 
      currentScreen={currentScreen} 
      onScreenChange={setCurrentScreen}
      title={getTitle()}
      onBack={currentScreen !== 'home' ? handleBack : undefined}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen + (selectedLevel?.id || '')}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {currentScreen === 'home' && (
            <HomeScreen 
              onPlayNow={handlePlayNow} 
              onCategorySelect={handleCategorySelect} 
            />
          )}
          
          {currentScreen === 'levels' && (
            <LevelSelectionScreen onLevelSelect={handleLevelSelect} />
          )}
          
          {currentScreen === 'practice' && selectedLevel && (
            <PracticeScreen 
              level={selectedLevel} 
              onFinish={handlePracticeFinish} 
            />
          )}

          {(currentScreen === 'awards' || currentScreen === 'profile') && (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="w-32 h-32 bg-surface-container rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">🚧</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
              <p className="text-on-surface-variant">We're working hard to bring you more fun features!</p>
              <button 
                onClick={() => setCurrentScreen('home')}
                className="mt-8 px-8 py-3 bg-primary text-white font-bold rounded-full"
              >
                Go Back Home
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  );
}
