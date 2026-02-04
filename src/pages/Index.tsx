import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ExamCountdownCard from '@/components/ExamCountdownCard';
import SyllabusCard from '@/components/SyllabusCard';
import StudyPlannerTodo from '@/components/StudyPlannerTodo';
import Footer from '@/components/Footer';
import { Clock, BookOpen, CheckSquare } from 'lucide-react';

// Exam data
const exams = [
  {
    examName: 'TNPSC Group 1',
    examDate: new Date('2025-06-15'),
    category: 'tnpsc' as const,
    description: 'Tamil Nadu Civil Services Exam - Prelims',
  },
  {
    examName: 'TNPSC Group 2',
    examDate: new Date('2025-04-20'),
    category: 'tnpsc' as const,
    description: 'Combined Civil Services Exam II',
  },
  {
    examName: 'TNPSC Group 2A',
    examDate: new Date('2025-05-10'),
    category: 'tnpsc' as const,
    description: 'Non-Interview Posts Exam',
  },
  {
    examName: 'TNPSC Group 4',
    examDate: new Date('2025-03-25'),
    category: 'tnpsc' as const,
    description: 'VAO & Other Posts Exam',
  },
  {
    examName: 'RRB NTPC',
    examDate: new Date('2025-07-12'),
    category: 'rrb' as const,
    description: 'Non-Technical Popular Categories',
  },
  {
    examName: 'RRB Group D',
    examDate: new Date('2025-08-05'),
    category: 'rrb' as const,
    description: 'Level 1 Posts Recruitment',
  },
];

// Syllabus data
const syllabusData = [
  {
    title: 'Group 1 Complete Syllabus',
    category: 'tnpsc' as const,
    subjects: ['General Studies', 'Aptitude & Mental Ability', 'Indian Polity', 'Indian Economy', 'History & Culture', 'Geography'],
    totalTopics: 156,
    pdfUrl: '#',
  },
  {
    title: 'Group 2 & 2A Syllabus',
    category: 'tnpsc' as const,
    subjects: ['General Tamil/English', 'General Studies', 'Aptitude', 'Indian Constitution', 'Economics'],
    totalTopics: 98,
    pdfUrl: '#',
  },
  {
    title: 'Group 4 VAO Syllabus',
    category: 'tnpsc' as const,
    subjects: ['General Studies', 'Aptitude', 'Tamil Language', 'Current Affairs'],
    totalTopics: 72,
    pdfUrl: '#',
  },
  {
    title: 'RRB NTPC Syllabus',
    category: 'rrb' as const,
    subjects: ['Mathematics', 'General Intelligence', 'General Awareness', 'General Science'],
    totalTopics: 85,
    pdfUrl: '#',
  },
  {
    title: 'RRB Group D Syllabus',
    category: 'rrb' as const,
    subjects: ['Mathematics', 'General Science', 'General Awareness', 'Reasoning'],
    totalTopics: 64,
    pdfUrl: '#',
  },
  {
    title: 'Current Affairs Monthly',
    category: 'tnpsc' as const,
    subjects: ['National News', 'International Affairs', 'Sports', 'Awards', 'Science & Tech'],
    totalTopics: 200,
    pdfUrl: '#',
  },
];

const SectionHeader = ({ 
  icon: Icon, 
  title, 
  subtitle 
}: { 
  icon: React.ElementType; 
  title: string; 
  subtitle: string; 
}) => (
  <div className="text-center mb-12 animate-fade-in">
    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/20 mb-4">
      <Icon className="w-7 h-7 text-primary" />
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Exam Countdown Section */}
      <section id="exams" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            icon={Clock}
            title="Upcoming Exams"
            subtitle="Stay prepared with live countdown timers for all major government exams"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exams.map((exam, index) => (
              <ExamCountdownCard 
                key={exam.examName}
                {...exam}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            icon={BookOpen}
            title="Exam Syllabus"
            subtitle="Access comprehensive syllabus for TNPSC and RRB exams with downloadable PDFs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syllabusData.map((syllabus, index) => (
              <SyllabusCard 
                key={syllabus.title}
                {...syllabus}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Study Planner Section */}
      <section id="planner" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <SectionHeader 
            icon={CheckSquare}
            title="Daily Study Planner"
            subtitle="Organize your preparation with a simple yet powerful to-do list"
          />
          
          <div className="max-w-2xl mx-auto">
            <StudyPlannerTodo />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
