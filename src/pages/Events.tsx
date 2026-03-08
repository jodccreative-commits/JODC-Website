import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import Layout from '@/components/Layout';
import EventCard from '@/components/EventCard';

const allEvents = [
  {
    title: 'Flag Quest',
    description: 'A Capture The Flag (CTF) cybersecurity competition organized by JODC where participants solve security challenges, uncover hidden flags, and compete on a live leaderboard to test their hacking and problem-solving skills.',
    date: '14th March 2026',
    featured: true,
    href: '/events/flag-quest',
  },
  {
    title: 'Tech Charades',
    description: 'A fast-paced dumb charades game with a tech twist where teams of two act out technology-related concepts and compete to guess them within the time limit.',
    date: '15th March 2026',
    featured: true,
    href: '/events/TechCharades',
  },
  {
    title: 'Linux Setup Workshop',
    description: 'Comprehensive workshop on Linux installation & setup, command-line basics, and development environment introduction. Perfect for beginners looking to start with Linux.',
    date: 'Coming Soon',
    featured: false,
    href: '/events/linux-workshop',
  },
  {
    title: 'Bug Bounty Event',
    description: 'Explore the bug bounty ecosystem, ethical hacking fundamentals, and vulnerability discovery basics. Learn how security researchers find and report bugs.',
    date: 'Coming Soon',
    featured: false,
    href: '/events/bug-bounty',
  },
  {
    title: 'Hackathon',
    description: 'A hackathon organized by JODC where students build innovative tech solutions and present their prototypes in a competitive final showcase.',
    date: 'Coming Soon',
    featured: false,
    href: '/events/hackathon',
  },
];

const Events = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const showFeaturedOnly = params.get("featured") === "true";

  const eventsToDisplay = showFeaturedOnly
    ? allEvents.filter(event => event.featured)
    : allEvents;

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

              {showFeaturedOnly
                ? <>CONVERGE <span className="text-secondary">FEATURED EVENTS</span></>
                : <>OUR <span className="text-secondary">EVENTS</span></>
              }

            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">

              {showFeaturedOnly
                ? "Register for the featured events of Converge organized by JODC."
                : "Discover workshops, hackathons, and learning opportunities designed to help you grow as a developer."
              }

            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsToDisplay.map((event, index) => (
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