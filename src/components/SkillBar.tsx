
import React, { useState, useEffect } from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level, delay = 0 }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedLevel(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-foreground">{skill}</span>
        <span className="text-sm text-primary font-mono">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out glow-effect"
          style={{ width: `${animatedLevel}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
