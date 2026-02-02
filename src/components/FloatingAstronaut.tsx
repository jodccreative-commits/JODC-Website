import { motion } from 'framer-motion';

const FloatingAstronaut = () => {
  return (
    <motion.div
      className="fixed right-10 top-1/4 z-10 hidden lg:block pointer-events-none"
      animate={{
        y: [0, -30, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="120"
        height="150"
        viewBox="0 0 120 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]"
      >
        {/* Helmet */}
        <ellipse cx="60" cy="35" rx="30" ry="32" fill="hsl(220 20% 92%)" />
        <ellipse cx="60" cy="35" rx="24" ry="26" fill="hsl(230 80% 12%)" />
        <ellipse cx="60" cy="32" rx="18" ry="20" fill="hsl(186 100% 50% / 0.2)" />
        
        {/* Visor reflection */}
        <ellipse cx="52" cy="28" rx="6" ry="8" fill="hsl(186 100% 50% / 0.4)" />
        
        {/* Body */}
        <rect x="35" y="62" width="50" height="55" rx="12" fill="hsl(220 20% 92%)" />
        
        {/* Chest details */}
        <rect x="45" y="72" width="30" height="8" rx="2" fill="hsl(244 94% 69%)" />
        <circle cx="60" cy="95" r="8" fill="hsl(186 100% 50%)" />
        
        {/* Arms */}
        <rect x="15" y="70" width="22" height="12" rx="6" fill="hsl(220 20% 92%)" />
        <rect x="83" y="70" width="22" height="12" rx="6" fill="hsl(220 20% 92%)" />
        
        {/* Gloves */}
        <circle cx="12" cy="76" r="8" fill="hsl(220 20% 85%)" />
        <circle cx="108" cy="76" r="8" fill="hsl(220 20% 85%)" />
        
        {/* Legs */}
        <rect x="38" y="115" width="16" height="30" rx="6" fill="hsl(220 20% 92%)" />
        <rect x="66" y="115" width="16" height="30" rx="6" fill="hsl(220 20% 92%)" />
        
        {/* Boots */}
        <ellipse cx="46" cy="142" rx="10" ry="6" fill="hsl(220 20% 75%)" />
        <ellipse cx="74" cy="142" rx="10" ry="6" fill="hsl(220 20% 75%)" />
        
        {/* Backpack */}
        <rect x="38" y="65" width="44" height="35" rx="4" fill="hsl(220 15% 80%)" opacity="0.3" />
      </svg>
    </motion.div>
  );
};

export default FloatingAstronaut;
