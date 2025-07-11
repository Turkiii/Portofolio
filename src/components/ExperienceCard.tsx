
import React from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  duration,
  location,
  description
}) => {
  return (
    <div className="border-l-2 border-primary pl-6 pb-8 relative">
      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full glow-effect" />
      
      <div className="bg-secondary/50 rounded-lg p-4 hover:bg-secondary/70 transition-colors duration-300">
        <h3 className="text-lg font-bold text-accent mb-2">{title}</h3>
        
        <div className="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Building2 className="w-4 h-4" />
            <span>{company}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
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
    </div>
  );
};

export default ExperienceCard;
