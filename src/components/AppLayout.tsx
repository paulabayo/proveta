import React from 'react';
import { motion } from 'motion/react';
import { Home, BarChart2, Trophy, UserCircle, Settings } from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
  title?: string;
  onBack?: () => void;
}

export const AppLayout: React.FC<LayoutProps> = ({ 
  children, 
  currentScreen, 
  onScreenChange,
  title = "Matemática",
  onBack
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden pb-32">
      {/* Top App Bar */}
      <header className="flex justify-between items-center px-6 py-4 w-full bg-surface rounded-b-[3rem] shadow-[0_32px_64px_-12px_rgba(75,37,0,0.08)] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border-2 border-primary">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXClQSAjUnLLFzlqNFrkv9LFWOmNwQ2gD0MOaCr8Oe9vMCgl2u_3ZgWLut78g0TNKr6_sSwwS_x0IHhnLMn81BvKGF5XAQSbaGVT4YtpcGBu9IAoUlUKEvLsbtQqBL9rxPupHGmUtLRi2mDhS-gI_xc7L52VgUztBhERstHxEuFYiRHGip6zUchsZjvY_kvOrLXSmChAW0x937ZzX-m51FLOfOs2fS4mnUbrZ01c7izc0QgvIBSmavRgWNUZ9oMtZxG4P9dkELDu8R" 
              alt="Avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-black bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent headline-text tracking-tight">
            {title}
          </span>
        </div>
        
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:scale-105 transition-transform active:scale-95">
          <Settings className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 backdrop-blur-xl shadow-[0_-8px_32px_rgba(75,37,0,0.05)] rounded-t-[3rem]">
        <NavItem 
          icon={<Home />} 
          label="Inicio" 
          active={currentScreen === 'home'} 
          onClick={() => onScreenChange('home')} 
        />
        <NavItem 
          icon={<BarChart2 />} 
          label="Niveles" 
          active={currentScreen === 'levels' || currentScreen === 'practice'} 
          onClick={() => onScreenChange('levels')} 
          isCenter
        />
        <NavItem 
          icon={<Trophy />} 
          label="Premios" 
          active={currentScreen === 'awards'} 
          onClick={() => onScreenChange('awards')} 
        />
        <NavItem 
          icon={<UserCircle />} 
          label="Perfil" 
          active={currentScreen === 'profile'} 
          onClick={() => onScreenChange('profile')} 
        />
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isCenter?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick, isCenter }) => {
  if (isCenter) {
    return (
      <button 
        onClick={onClick}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary-container text-white rounded-full px-6 py-2 scale-110 -translate-y-2 shadow-lg transition-transform ${active ? 'ring-4 ring-primary/20' : ''}`}
      >
        {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 fill-current" })}
        <span className="font-bold text-xs mt-0.5">{label}</span>
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 rounded-full transition-colors ${
        active 
          ? 'text-primary bg-primary/10' 
          : 'text-on-surface/60 hover:bg-surface-container'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { 
        className: `w-6 h-6 ${active ? 'fill-current' : ''}` 
      })}
      <span className="font-bold text-xs mt-0.5">{label}</span>
    </button>
  );
};
