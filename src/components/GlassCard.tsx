import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className = '', hover = true, onClick }: GlassCardProps) => {
  const Component = onClick ? motion.button : motion.div;
  
  return (
    <Component
      className={`${hover ? 'glass-card-hover' : 'glass-card'} ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      {children}
    </Component>
  );
};

export default GlassCard;
