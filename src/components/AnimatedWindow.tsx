
import React, { useState, useEffect } from 'react';
import { Minimize2, Maximize2, X, Terminal } from 'lucide-react';

interface AnimatedWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedWindow: React.FC<AnimatedWindowProps> = ({ 
  title, 
  children, 
  className = "", 
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
        ${className}
      `}
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden glow-effect hover:shadow-2xl transition-shadow duration-300">
        {/* Window Header */}
        <div className="bg-secondary border-b border-border px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-foreground">{title}</span>
          </div>
          <div className="flex items-center space-x-1">
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
            />
            <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors" />
            <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors" />
          </div>
        </div>
        
        {/* Window Content */}
        <div 
          className={`
            transition-all duration-300 overflow-hidden
            ${isMinimized ? 'max-h-0' : 'max-h-[1000px]'}
          `}
        >
          <div className="p-6 scan-line">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedWindow;
