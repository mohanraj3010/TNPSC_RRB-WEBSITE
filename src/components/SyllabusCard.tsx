import { useState } from 'react';
import { BookOpen, Download, Eye, ChevronRight, FileText } from 'lucide-react';

interface SyllabusCardProps {
  title: string;
  category: 'tnpsc' | 'rrb';
  subjects: string[];
  pdfUrl?: string;
  totalTopics: number;
  index: number;
}

const SyllabusCard = ({ title, category, subjects, pdfUrl, totalTopics, index }: SyllabusCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColor = category === 'tnpsc' ? 'tnpsc' : 'rrb';
  const categoryLabel = category === 'tnpsc' ? 'TNPSC' : 'RRB';

  return (
    <div 
      className="glass-card-hover p-6 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <span 
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2"
            style={{ 
              backgroundColor: `hsl(var(--${categoryColor}-color) / 0.2)`,
              color: `hsl(var(--${categoryColor}-color))`
            }}
          >
            {categoryLabel}
          </span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {totalTopics} topics · {subjects.length} subjects
          </p>
        </div>
        <div 
          className="p-3 rounded-xl"
          style={{ backgroundColor: `hsl(var(--${categoryColor}-color) / 0.15)` }}
        >
          <BookOpen className="w-5 h-5" style={{ color: `hsl(var(--${categoryColor}-color))` }} />
        </div>
      </div>

      {/* Subjects Preview */}
      <div className="mb-4">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
        >
          <ChevronRight 
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
          />
          <span>View Subjects</span>
        </button>
        
        {isExpanded && (
          <div className="mt-3 pl-6 space-y-2 animate-fade-in">
            {subjects.map((subject, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <FileText className="w-3 h-3 text-muted-foreground" />
                <span>{subject}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-4 border-t border-border/50">
        <button 
          className="btn-glass flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Eye className="w-4 h-4" />
          <span>View Details</span>
        </button>
        <button 
          className="btn-gradient flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-primary-foreground"
          onClick={() => pdfUrl && window.open(pdfUrl, '_blank')}
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  );
};

export default SyllabusCard;
