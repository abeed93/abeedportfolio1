import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = {
    "Languages": [
      { name: "Java", level: 60 },
      { name: "JavaScript", level: 55 },
      { name: "HTML/CSS", level: 70 },
    ],
    "Tools & Environment": [
      { name: "VS Code", level: 75 },
      { name: "Eclipse", level: 60 },
      { name: "MS Excel", level: 70 },
    ],
    "Concepts": [
      { name: "Object-Oriented Programming", level: 55 },
      { name: "Problem Solving", level: 65 },
      { name: "Technical Analysis", level: 70 },
    ],
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden bg-surface">
      <div className="absolute inset-0 subtle-grid opacity-40" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-mono text-sm text-primary tracking-wider">
              // tech stack
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Tools I'm Building With
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Every skill is a work in progress. What matters is the trajectory, 
              not the current position.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="glass-panel p-8"
              >
                <h3 className="text-lg font-semibold mb-6 text-primary">{category}</h3>
                <div className="space-y-6">
                  {items.map((skill, index) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.5 + categoryIndex * 0.2 + index * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-glow-muted"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;