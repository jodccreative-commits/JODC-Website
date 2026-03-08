import Layout from "@/components/Layout";
import GlassCard from "@/components/GlassCard";
import Button from "@/components/Button";

const Converge = () => {
  return (
    <Layout>
      <section className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-5xl text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
            CONVERGE <span className="text-secondary">FEATURED EVENTS</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10">

            {/* FlagQuest */}
            <GlassCard className="p-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-4">
                FlagQuest
              </h2>

              <p className="text-white/80 mb-6">
                A cybersecurity CTF challenge where participants solve puzzles,
                decode hidden clues, and capture flags through logical thinking
                and technical skills.
              </p>

              <Button href="/register">
                Register for FlagQuest
              </Button>
            </GlassCard>

            {/* Tech Charades */}
            <GlassCard className="p-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-4">
                Tech Charades
              </h2>

              <p className="text-white/80 mb-6">
                A fun tech-themed dumb charades where participants act out
                famous tech companies, programming concepts, and innovations
                while their teammate guesses the answer.
              </p>

              <Button href="/register">
                Register for Tech Charades
              </Button>
            </GlassCard>

          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Converge;