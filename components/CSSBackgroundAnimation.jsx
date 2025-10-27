'use client'

const CSSBackgroundAnimation = () => {
  // Generate random positions for particles
  const particles = Array.from({ length: 12 }, (_, i) => ({ // Reduced count slightly for larger particles
    id: i,
    size: Math.random() * 6 + 4, // Increased from 4+2 to 6+4 (4-10px)
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * -20,
    duration: Math.random() * 10 + 15,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-accent ${
            particle.id % 3 === 0 
              ? 'animate-float' 
              : particle.id % 3 === 1 
              ? 'animate-float-reverse' 
              : 'animate-pulse-slow'
          }`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-float opacity-30" />
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-float-reverse opacity-20" />
      <div className="absolute top-1/2 left-3/4 w-2.5 h-2.5 bg-accent rounded-full animate-pulse-slow opacity-25" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-35" />
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-accent rounded-full animate-float-reverse opacity-15" />
    </div>
  );
};

export default CSSBackgroundAnimation;