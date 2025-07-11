
import React from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  subtitle?: string;
  technologies: string[];
  description: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  technologies,
  description
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-primary group-hover:glow-text transition-all duration-300">
            {title}
          </h3>
          {subtitle && (
            <p className="text-accent font-mono text-sm mt-1">{subtitle}</p>
          )}
        </div>
        <Code2 className="w-6 h-6 text-primary" />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-2 py-1 text-xs bg-primary/20 text-accent rounded-md font-mono border border-primary/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <ul className="space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-foreground flex items-start">
            <span className="text-primary mr-2">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
