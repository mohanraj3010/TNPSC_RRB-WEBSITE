import { useEffect, useState } from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';

interface ExamCountdownCardProps {
  examName: string;
  examDate: Date;
  category: 'tnpsc' | 'rrb';
  description: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ExamCountdownCard = ({ examName, examDate, category, description }: ExamCountdownCardProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = () => {
      const difference = examDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    
    return () => clearInterval(timer);
  }, [examDate]);

  const categoryColor = category === 'tnpsc' ? 'tnpsc' : 'rrb';
  const categoryLabel = category === 'tnpsc' ? 'TNPSC' : 'RRB';

  const totalDays = Math.floor((examDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  const urgencyLevel = totalDays < 30 ? 'urgent' : totalDays < 90 ? 'moderate' : 'relaxed';

  return (
    <div className={`glass-card-hover p-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span 
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2`}
            style={{ 
              backgroundColor: `hsl(var(--${categoryColor}-color) / 0.2)`,
              color: `hsl(var(--${categoryColor}-color))`
            }}
          >
            {categoryLabel}
          </span>
          <h3 className="text-xl font-bold text-foreground">{examName}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div 
          className={`p-3 rounded-xl`}
          style={{ backgroundColor: `hsl(var(--${categoryColor}-color) / 0.15)` }}
        >
          <Calendar className="w-5 h-5" style={{ color: `hsl(var(--${categoryColor}-color))` }} />
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds },
        ].map((item) => (
          <div 
            key={item.label}
            className="text-center p-3 rounded-xl bg-muted/30 backdrop-blur-sm"
          >
            <div className="countdown-number text-2xl md:text-3xl text-foreground">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Exam Date */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>
            {examDate.toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'short', 
              year: 'numeric' 
            })}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp 
            className={`w-4 h-4 ${
              urgencyLevel === 'urgent' ? 'text-destructive' : 
              urgencyLevel === 'moderate' ? 'text-warning' : 'text-success'
            }`} 
          />
          <span className={`text-xs font-medium ${
            urgencyLevel === 'urgent' ? 'text-destructive' : 
            urgencyLevel === 'moderate' ? 'text-warning' : 'text-success'
          }`}>
            {urgencyLevel === 'urgent' ? 'Prepare Now!' : 
             urgencyLevel === 'moderate' ? 'Stay Focused' : 'On Track'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExamCountdownCard;
