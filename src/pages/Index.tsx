import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import EventCard from '@/components/EventCard';
import GlassCard from '@/components/GlassCard';
import { Code, Users, Rocket, Terminal } from 'lucide-react';

const events = [
  {
    title: 'Competitive Programming Workshop',
    description: '2-Day intensive workshop covering CP platforms, LeetCode-style problems, and a skill-testing competition with certificates for all participants.',
    date: '5th - 6th February',
    featured: true,
    href: '/events/competitive-programming',
  },
  {
    title: 'Linux Setup Workshop',
    description: 'Learn Linux installation, command-line basics, and development environment setup for modern software development.',
    date: 'Coming Soon',
    href: '/events/linux-workshop',
  },
  {
    title: 'Bug Bounty Event',
    description: 'Dive into ethical hacking fundamentals, bug bounty ecosystem, and vulnerability discovery basics.',
    date: 'Coming Soon',
    href: '/events/bug-bounty',
  },
  {
    title: 'Hackathon',
    description: 'Team-based coding challenge with real-world problem statements focused on innovation-driven development.',
    date: 'Coming Soon',
    href: '/events/hackathon',
  },
];

const features = [
  { icon: Code, title: 'Open Source', description: 'Learn and contribute to open-source projects' },
  { icon: Users, title: 'Collaboration', description: 'Work with like-minded developers' },
  { icon: Rocket, title: 'Innovation', description: 'Build solutions for real-world problems' },
  { icon: Terminal, title: 'Technical Skills', description: 'Master modern development tools' },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-foreground">Welcome to</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent neon-text-cyan">
                JODC
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open Development Committee • Jaypee Institute of Information Technology, Sector 128
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href="/events" size="lg">
              Explore Events
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              ABOUT <span className="text-primary">JODC</span>
            </h2>
            <GlassCard className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                JODC (Open Development Committee) is a student-led technical club at Jaypee Institute of Information Technology, Sector 128, focused on promoting{' '}
                <span className="text-secondary font-semibold">open-source development</span>,{' '}
                <span className="text-primary font-semibold">collaborative learning</span>, and{' '}
                <span className="text-secondary font-semibold">real-world problem solving</span> through technology.
              </p>
            </GlassCard>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              UPCOMING <span className="text-secondary">EVENTS</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join us for exciting workshops, hackathons, and learning opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button href="/events" variant="outline" size="lg">
              View All Events
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-16 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                READY TO <span className="text-secondary">CODE</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
                Join our community of developers and start your journey in open-source development today.
              </p>
              <Button href="/events/competitive-programming" size="lg">
                Register Now
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
