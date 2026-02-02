import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import cosmicHero from '@/assets/cosmic-hero.jpg';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
}

const StarryBackground = () => {
  const stars: Star[] = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    animationDelay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base cosmic image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cosmicHero})`,
          opacity: 0.4,
        }}
      />
      
      {/* Gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(230 100% 3% / 0.7) 50%, hsl(0 0% 0%) 100%)',
        }}
      />

      {/* Animated stars overlay */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nebula glow effects */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, hsl(244 94% 69% / 0.5) 0%, transparent 70%)',
          left: '5%',
          top: '10%',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, hsl(186 100% 50% / 0.4) 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default StarryBackground;
