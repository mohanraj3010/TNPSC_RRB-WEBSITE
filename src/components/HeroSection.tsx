import { Target, Users, Trophy, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Trusted by 50,000+ Aspirants</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-foreground">Ace Your </span>
            <span className="gradient-text">Government Exams</span>
            <span className="text-foreground"> with Smart Planning</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Your ultimate study companion for TNPSC and RRB exams. Track countdowns, 
            manage syllabus, and stay on top of your preparation journey.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <button className="btn-gradient px-8 py-4 text-lg text-primary-foreground">
              Start Your Journey
            </button>
            <button className="btn-glass px-8 py-4 text-lg text-foreground">
              Explore Syllabus
            </button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {[
              { icon: Users, label: 'Active Learners', value: '50K+' },
              { icon: Trophy, label: 'Success Stories', value: '2,500+' },
              { icon: Target, label: 'Exams Covered', value: '15+' },
              { icon: TrendingUp, label: 'Pass Rate', value: '78%' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="glass-card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
