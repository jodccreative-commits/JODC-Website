import { motion } from 'framer-motion';
import { Clock, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';

const ComingSoon = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-[80vh] flex items-center justify-center">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-12 text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block mb-8"
              >
                <Clock className="w-20 h-20 text-secondary mx-auto" />
              </motion.div>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                COMING <span className="text-secondary">SOON</span>
              </h1>
              
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                This event is currently being planned. Stay tuned for updates and announcements!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/events" variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Button>
                <Button href="/contact">
                  Get Notified
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ComingSoon;
