import React from 'react';

const ParticleEffect = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    className: `particle bg-primary/20 rounded-full animate-twinkle-${i % 5}`
  }));

  return (
    <div className="absolute inset-0 particle-container">
      {particles.map(particle => (
        <div key={particle.id} className={particle.className} />
      ))}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background/50">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-slow-reverse" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Moving particles */}
      <ParticleEffect />
    </div>
  );
};

export default AnimatedBackground;
