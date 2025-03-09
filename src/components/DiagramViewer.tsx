import { Diagram } from '@/lib/srs-data';
import { Maximize2, Minimize2 } from 'lucide-react';
import React, { useState } from 'react';

interface DiagramViewerProps {
  diagram: Diagram;
}

const DiagramViewer: React.FC<DiagramViewerProps> = ({ diagram }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-base font-medium text-foreground/90">{diagram.title}</h4>
        <button
          className="p-1.5 rounded-full transition-colors bg-secondary hover:bg-secondary/70 "
          onClick={toggleExpanded}
          aria-label={isExpanded ? "Minimize diagram" : "Maximize diagram"}
        >
          {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      <div className="text-sm  mb-4">{diagram.description}</div>

      <div
        className={`diagram-container transition-all duration-300 ease-in-out  border-border ${isExpanded ? 'scale-100 shadow-lg' : 'scale-95 shadow-md'
          }`}
      >
        <div
          className="diagram-content w-full h-full"
          dangerouslySetInnerHTML={{ __html: diagram.svgContent }}
        />
      </div>
    </div>
  );
};

export default DiagramViewer;
