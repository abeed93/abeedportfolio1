import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Market Analysis Experience",
      period: "2023 – 2025",
      type: "Self-Directed Learning",
      points: [
        "Analyzed market trends using technical indicators (RSI, EMA, MACD)",
        "Developed structured routines and analytical decision-making skills",
        "Built discipline and pattern recognition through consistent practice"
      ]
    },
    {
      title: "Java Practice Programs",
      period: "Nov 2025 – Present",
      type: "Academic Work",
      points: [
        "Practiced Java fundamentals including loops, arrays, methods, and OOP",
        "Solved logical and problem-solving programs for skill improvement"
      ]
    },
    {
      title: "Frontend Practice Projects",
      period: "Nov 2025 – Present",
      type: "Practice Work",
      points: [
        "Built responsive pages using HTML and CSS",
        "Implemented basic interactivity using JavaScript"
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
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
              // the journey
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Learning by Doing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Every project, every analysis, every line of code—building the foundation 
              for what's next.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 lg:left-1/2 top-0 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-primary neon-border" />
                  
                  {/* Content */}
                  <div className={`lg:w-1/2 pl-8 lg:pl-0 ${
                    index % 2 === 0 ? "lg:pr-16 lg:text-right" : "lg:pl-16"
                  }`}>
                    <div className="glass-panel p-8 hover:border-primary/30 transition-all duration-500 group">
                      <div className={`flex items-center gap-2 mb-4 text-muted-foreground ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span className="font-mono text-sm">{exp.period}</span>
                      </div>
                      
                      <span className="inline-block px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full mb-4">
                        {exp.type}
                      </span>
                      
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      
                      <ul className={`space-y-2 ${
                        index % 2 === 0 ? "lg:text-right" : ""
                      }`}>
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <ArrowUpRight className={`w-4 h-4 text-primary shrink-0 mt-0.5 ${
                              index % 2 === 0 ? "lg:order-last" : ""
                            }`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;