import { GraduationCap, Heart, Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 md:px-8 mt-20">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xl font-bold gradient-text">StudyPlan</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted companion for government exam preparation. 
                Designed for TNPSC and RRB aspirants who dream big.
              </p>
              <div className="flex items-center gap-4">
                {[Github, Twitter, Mail].map((Icon, idx) => (
                  <button 
                    key={idx}
                    className="p-2 rounded-lg bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Exam Dates', 'Syllabus', 'Study Plan'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Exams</h4>
              <ul className="space-y-2">
                {['TNPSC Group 1', 'TNPSC Group 2', 'TNPSC Group 4', 'RRB NTPC', 'RRB Group D'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 StudyPlan. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for Indian Aspirants
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
