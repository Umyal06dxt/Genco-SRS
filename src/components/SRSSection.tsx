import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { SRSSection as SRSSectionType } from '@/lib/srs-data';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import DiagramViewer from './DiagramViewer';

interface SRSSectionProps {
  section: SRSSectionType;
}

const SRSSection: React.FC<SRSSectionProps> = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, title, description, icon: Icon, subsections, diagrams } = section;

  // Check for hash in URL to auto-expand relevant sections
  useEffect(() => {
    // Function to check if this section should be expanded based on URL hash
    const checkUrlAndExpand = () => {
      const hash = window.location.hash;
      if (!hash) return;

      // If the hash matches this section's id, expand it
      if (hash === `#${id}`) {
        setIsExpanded(true);
        // Smooth scroll with a slight delay to ensure the section is expanded
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }

      // If the hash matches a diagram in this section, expand the section
      if (diagrams && diagrams.some(diagram => hash === `#diagram-${diagram.type}`)) {
        setIsExpanded(true);
        // Smooth scroll to the diagram with delay to ensure section is expanded
        setTimeout(() => {
          const diagramId = hash.substring(1); // Remove the # character
          document.getElementById(diagramId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Check on initial load
    checkUrlAndExpand();

    // Also listen for hashchange events (when user clicks on different links)
    window.addEventListener('hashchange', checkUrlAndExpand);

    // Clean up the event listener
    return () => {
      window.removeEventListener('hashchange', checkUrlAndExpand);
    };
  }, [id, diagrams]);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="mb-8 rounded-xl border overflow-hidden shadow-md transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${parseInt(id.split('-')[0] || '0') * 100}ms` }}
    >
      <div
        className="flex items-center justify-between p-5 cursor-pointer transition-colors hover:bg-secondary/10"
        onClick={toggleExpanded}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </div>

      {isExpanded && (
        <div className="p-6 pt-2 border-t border-border">
          <div className="srs-content">
            <Accordion type="single" collapsible className="w-full">
              {subsections.map((subsection) => (
                <AccordionItem
                  key={subsection.id}
                  value={subsection.id}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger
                    className="py-4 hover:text-primary text-left font-medium"
                  >
                    {subsection.title}
                  </AccordionTrigger>
                  <AccordionContent
                    className="whitespace-pre-line px-1"
                  >
                    {subsection.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {diagrams && diagrams.length > 0 && (
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-6">
                  Diagrams
                </h3>
                {diagrams.map((diagram) => (
                  <div id={`diagram-${diagram.type}`} key={diagram.id}>
                    <DiagramViewer
                      diagram={diagram}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SRSSection;
