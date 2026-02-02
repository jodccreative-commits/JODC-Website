import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import EventCard from '@/components/EventCard';

const allEvents = [
  {
    title: 'Competitive Programming Workshop',
    description: '2-Day intensive workshop covering CP platforms, LeetCode-style problems, and a skill-testing competition. Day 1 focuses on overview and platforms, Day 2 features the contest with certificates for all participants and momentos for winners.',
    date: '5th - 6th February',
    featured: true,
    href: '/events/competitive-programming',
  },
  {
    title: 'Linux Setup Workshop',
    description: 'Comprehensive workshop on Linux installation & setup, command-line basics, and development environment introduction. Perfect for beginners looking to start with Linux.',
    date: 'Coming Soon',
    href: '/events/linux-workshop',
  },
  {
    title: 'Bug Bounty Event',
    description: 'Explore the bug bounty ecosystem, ethical hacking fundamentals, and vulnerability discovery basics. Learn how security researchers find and report bugs.',
    date: 'Coming Soon',
    href: '/events/bug-bounty',
  },
  {
    title: 'Hackathon',
    description: 'Team-based coding competition with real-world problem statements. Focus on innovation-driven development and building practical solutions.',
    date: 'Coming Soon',
    href: '/events/hackathon',
  },
];

const Events = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              OUR <span className="text-secondary">EVENTS</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover workshops, hackathons, and learning opportunities designed to help you grow as a developer
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
