import { motion } from "framer-motion";
import { Calendar, Clock, Trophy, Award, MapPin, Flag } from "lucide-react";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import GlassCard from "@/components/GlassCard";

const FlagQuest = () => {
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
              <Flag className="w-4 h-4" />
              JODC Cybersecurity Event
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg mb-4">
              FLAG <span className="text-secondary">QUEST</span>
            </h1>

            <p className="text-primary text-xl font-semibold mb-4">
              Capture The Flag (Solo Event)
            </p>

            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Solve cybersecurity challenges and capture hidden flags to climb
              the leaderboard. Test your skills in cryptography, web security,
              and digital forensics.
            </p>
          </motion.div>

          {/* Event Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <Calendar className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Date</h3>
                <p className="text-secondary font-semibold">
                  14 March 2026
                </p>
              </GlassCard>
            </motion.div>

            {/* Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <Clock className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Time</h3>
                <p className="text-secondary font-semibold">
                  11:00 AM – 2:00 PM
                </p>
              </GlassCard>
            </motion.div>

            {/* Venue */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="p-8 text-center h-full">
                <MapPin className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Venue</h3>
                <p className="text-secondary font-semibold">
                  CL4
                </p>
              </GlassCard>
            </motion.div>

          </div>

          {/* Event Format */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="font-heading text-2xl font-bold text-center mb-6">
                EVENT <span className="text-secondary">FORMAT</span>
              </h2>

              <ul className="space-y-4 max-w-xl mx-auto text-muted-foreground">
                <li>• Solo cybersecurity competition</li>
                <li>• Solve challenges across multiple categories</li>
                <li>• Capture hidden flags and submit them</li>
                <li>• Live leaderboard ranking participants</li>
                <li>• Highest score at the end wins</li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* Certificates & Prize */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h2 className="font-heading text-2xl font-bold text-center mb-6">
                CERTIFICATES & <span className="text-secondary">PRIZES</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Award className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">E-Certificates</h4>
                    <p className="text-sm text-muted-foreground">
                      Provided to all participants
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
                  <Trophy className="w-10 h-10 text-secondary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Prize Pool</h4>
                    <p className="text-sm text-muted-foreground">
                      Exciting prizes for top performers
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
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-10">
              <h2 className="font-heading text-3xl font-bold mb-4">
                CAPTURE THE FLAG. <span className="text-secondary">CLIMB THE LEADERBOARD.</span>
              </h2>

              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Put your cybersecurity skills to the test. Decode, exploit,
                investigate and capture hidden flags.
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

export default FlagQuest;