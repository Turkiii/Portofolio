
import React from 'react';

interface SkillBarProps {
  skill: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-mono text-foreground">{skill}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full glow-effect"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
