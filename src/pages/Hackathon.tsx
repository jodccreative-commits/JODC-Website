import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Award, Users, Code } from 'lucide-react';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import GlassCard from '@/components/GlassCard';

const Hackathon = () => {
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
              JODC Featured Event
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              JODC <span className="text-secondary">HACKATHON</span>
              <br />
              <span className="text-primary">2026</span>
            </h1>

            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              A hybrid hackathon where students collaborate to build innovative tech solutions,
              develop working prototypes, and present them to a panel of judges.
            </p>
          </motion.div>

          {/* Event Days */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">

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
                    <p className="text-secondary font-semibold">12 March (Online)</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Hackathon kickoff & rules briefing</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Team planning & idea refinement</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Initial development sprint (6:00 PM – 9:30 PM)</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Day 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Code className="w-6 h-6 text-secondary" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">DAY 2</h3>
                    <p className="text-secondary font-semibold">13 March (Online)</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Main development phase</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Mentor checkpoints & debugging</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Evening development sprint (5:30 PM – 10:30 PM)</span>
                  </li>
                </ul>
              </GlassCard>
            </motion.div>

            {/* Day 3 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-secondary" />
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">DAY 3</h3>
                    <p className="text-secondary font-semibold">14 March (Offline)</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Final development sprint</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Project demo & presentations</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <Trophy className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Judging & winner announcement</span>
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
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <GlassCard className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                CERTIFICATES & <span className="text-secondary">PRIZES</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">E-Certificates</h4>
                    <p className="text-muted-foreground text-sm">
                      Provided to all hackathon participants
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Trophy className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Prize Pool</h4>
                    <p className="text-muted-foreground text-sm">
                      Exciting prizes for Winner, Runner-up & 2nd Runner-up
                    </p>
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
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GlassCard className="p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                BUILD. INNOVATE. <span className="text-secondary">COMPETE.</span>
              </h2>

              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Registrations open. Submit your idea, build your
                prototype, and compete with the best developers across both campuses.
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

export default Hackathon;