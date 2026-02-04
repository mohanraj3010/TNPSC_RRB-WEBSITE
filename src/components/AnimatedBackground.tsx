const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Main gradient background */}
      <div className="absolute inset-0 gradient-bg" />
      
      {/* Animated floating shapes */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full float-shape pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(260 80% 65% / 0.3) 0%, transparent 70%)',
        }}
      />
      
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full float-shape-delayed pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(280 85% 65% / 0.25) 0%, transparent 70%)',
        }}
      />
      
      <div 
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full float-shape-slow pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(220 70% 50% / 0.3) 0%, transparent 70%)',
        }}
      />

      <div 
        className="absolute top-3/4 right-1/3 w-64 h-64 rounded-full float-shape pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(200 85% 55% / 0.2) 0%, transparent 70%)',
          animationDelay: '-8s',
        }}
      />

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Top gradient fade */}
      <div 
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, transparent 100%)',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
