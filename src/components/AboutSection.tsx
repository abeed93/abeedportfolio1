import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, TrendingUp, Brain } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const traits = [
    {
      icon: Code2,
      title: "Systems Thinker",
      description: "Approaching problems with analytical frameworks, not quick fixes."
    },
    {
      icon: TrendingUp,
      title: "Market Analyst",
      description: "2+ years analyzing patterns, building discipline through data."
    },
    {
      icon: Brain,
      title: "Continuous Learner",
      description: "Java, frontend technologies, and everything in between."
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono text-sm text-primary tracking-wider">
              // who i am
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Growth Over Hype
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              I'm not here to follow trends. I'm here to understand systems—how code 
              connects to logic, how patterns reveal truth, and how discipline 
              compounds into expertise.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="glass-panel p-8 group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <trait.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{trait.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;