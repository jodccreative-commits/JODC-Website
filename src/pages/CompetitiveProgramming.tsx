import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Award, Users, Code } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';

const CompetitiveProgramming = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold uppercase tracking-wider mb-6">
              <Trophy className="w-4 h-4" />
              Featured Event
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              COMPETITIVE <span className="text-secondary">PROGRAMMING</span>
              <br />
              <span className="text-primary">WORKSHOP</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A 2-day intensive workshop to master competitive programming concepts and compete for exciting prizes!
            </p>
          </motion.div>

          {/* Event Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Day 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">DAY 1</h3>
                    <p className="text-secondary font-semibold">5th February</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Competitive Programming overview & introduction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Deep dive into CP platforms (Codeforces, LeetCode, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">LeetCode-style questions commonly used in contests</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">DAY 2</h3>
                    <p className="text-secondary font-semibold">6th February</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Live Competitive Programming Contest</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Real-time skill testing competition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="text-foreground/90">Compete with fellow programmers</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </div>

          {/* Certificates & Prizes */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <GlassCard className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                CERTIFICATES & <span className="text-secondary">PRIZES</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Participation Certificates</h4>
                    <p className="text-muted-foreground text-sm">For all attendees who complete the workshop</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Trophy className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Winner Momentos</h4>
                    <p className="text-muted-foreground text-sm">Special awards for 1st, 2nd, and 3rd place winners</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                DON'T MISS <span className="text-secondary">OUT!</span>
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Limited seats available. Register now to secure your spot in this exciting workshop!
              </p>
              <Button href="/register" size="lg">
                Register Now
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CompetitiveProgramming;
