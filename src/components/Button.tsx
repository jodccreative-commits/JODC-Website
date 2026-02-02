import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  type = 'button',
  disabled = false,
  className = '' 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-body font-semibold uppercase tracking-wide transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-secondary text-secondary-foreground hover:shadow-[0_0_30px_hsl(186_100%_50%/0.6)] animate-pulse-glow",
    secondary: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(244_94%_69%/0.6)]",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_hsl(186_100%_50%/0.4)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={href} className={combinedClassName}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
