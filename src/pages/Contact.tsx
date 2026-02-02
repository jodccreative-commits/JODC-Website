import { motion } from 'framer-motion';
import { Linkedin, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import GlassCard from '@/components/GlassCard';

const socialLinks = [
  { 
    name: 'LinkedIn', 
    icon: Linkedin, 
    href: 'https://linkedin.com/company/jodc',
    color: 'hover:text-[#0A66C2]',
    description: 'Follow us for updates'
  },
  { 
    name: 'Instagram', 
    icon: Instagram, 
    href: 'https://instagram.com/jodc_jiit',
    color: 'hover:text-[#E4405F]',
    description: '@jodc_jiit'
  },
  { 
    name: 'WhatsApp Group', 
    icon: MessageCircle, 
    href: 'https://chat.whatsapp.com/jodc',
    color: 'hover:text-[#25D366]',
    description: 'Join our community'
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              CONTACT <span className="text-secondary">US</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Get in touch with us for any queries or collaboration opportunities
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
              CONNECT WITH <span className="text-primary">US</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GlassCard className="p-8 text-center h-full">
                    <link.icon className={`w-12 h-12 mx-auto mb-4 text-muted-foreground transition-colors duration-300 ${link.color}`} />
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {link.description}
                    </p>
                  </GlassCard>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Coordinator Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Coordinator Details */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    JODC <span className="text-secondary">COORDINATOR</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg font-semibold text-foreground">
                      JODC Coordinator
                    </p>
                    <motion.a 
                      href="tel:+919876543210" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span>+91 98765 43210</span>
                    </motion.a>
                    <motion.a 
                      href="mailto:jodc@jiit.ac.in" 
                      className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span>jodc@jiit.ac.in</span>
                    </motion.a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    OUR <span className="text-primary">LOCATION</span>
                  </h2>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Jaypee Institute of Information Technology</p>
                      <p>Sector 128, Noida</p>
                      <p>Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
