import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from './GlassCard';

interface EventCardProps {
  title: string;
  description: string;
  date?: string;
  featured?: boolean;
  href: string;
  image?: string;
}

const EventCard = ({ title, description, date, featured = false, href, image }: EventCardProps) => {
  return (
    <Link to={href} className="block">
      <GlassCard className="p-6 h-full">
        {featured && (
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Featured Event</span>
          </div>
        )}
        
        {image && (
          <div className="mb-4 rounded-lg overflow-hidden">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
          </div>
        )}
        
        <h3 className="font-heading text-lg lg:text-xl font-bold text-foreground mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        {date && (
          <div className="flex items-center gap-2 text-secondary">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{date}</span>
          </div>
        )}
        
        <motion.div 
          className="mt-4 text-primary text-sm font-semibold uppercase tracking-wide"
          whileHover={{ x: 5 }}
        >
          Learn More →
        </motion.div>
      </GlassCard>
    </Link>
  );
};

export default EventCard;
